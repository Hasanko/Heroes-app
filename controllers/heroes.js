const app = require("../app")
const Hero = require('../models/Hero')
const internalServerError = require('../handlers/internalServerError')
const notFoundException = require('../handlers/notFoundException')

module.exports.getAll = async (req, res) => {
  try {
    const { offset=0, limit=5 } = req.query

    // const heroes = await Hero.find().skip(page * limit - limit).limit(parseInt(limit,10))
    // const count = await Hero.find().count()

    const [heroes, count] = await Promise.all([
      Hero.find().skip(parseInt(offset,10)).limit(parseInt(limit,10)),
      Hero.find().count()
    ])

    const response = {
      heroes,
      count
    }

    res.status(200).json(response)
  } catch (ex) {
    internalServerError(res, ex)
  }
}
module.exports.getById = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id)
    if (!hero) {
      console.log('error')
      return notFoundException(res, `Hero with id ${req.params.id} not found`)
    }
    res.status(200).json(hero)
  } catch (ex) {
    internalServerError(res, ex)
  }

}
module.exports.create = async (req, res) => {

  // const { nickName, realName, originDescription, superPowers, catchPhrase, image } = req.body
  // const hero = new Hero({
  //   nickName,
  //   realName,
  //   originDescription,
  //   superPowers,
  //   catchPhrase,
  //   image
  // })
  const hero = new Hero({
    ...req.body
  })

  try {
    await hero.save()
    res.status(201).json(hero)
  } catch (ex) {
    internalServerError(res, ex)
  }
}
module.exports.update = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id)
    if (!hero) {
      return notFoundException(res, `Hero with id ${req.params.id} not found`)
    }
    const { nickName, realName, originDescription, superPowers, catchPhrase, image } = req.body

    hero.nickName = nickName
    hero.realName = realName
    hero.originDescription = originDescription
    hero.superPowers = superPowers
    hero.catchPhrase = catchPhrase
    hero.image = image

    await hero.save()
    res.status(200).json(hero)
  } catch (ex) {
    internalServerError(res, ex)
  }
}
module.exports.remove = async (req, res) => {
  try {
  const hero = await Hero.findById(req.params.id)
  if(!hero){
    return notFoundException(res, `Hero with id ${req.params.id} not found`)
  }
  hero.deleteOne((ex, h) => {
    if(ex){
      throw ex
    }
    res.status(200).json(h)
  })  
  }catch(ex){
    internalServerError(res, ex)
  }
}