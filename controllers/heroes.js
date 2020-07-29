const app = require("../app")
const Hero = require('../models/Hero')
const internalServerError = require('../handlers/internalServerError')
const notFoundException = require('../handlers/notFoundException')

module.exports.getAll = async (req, res) => {
  try {
    const heroes = await Hero.find()
    res.status(200).json(heroes)
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

  const { nickName, realName, originDescription, superPowers, catchPhrase, images } = req.body

  const hero = new Hero({
    nickName,
    realName,
    originDescription,
    superPowers,
    catchPhrase,
    images
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
    const { nickName, realName, originDescription, superPowers, catchPhrase, images } = req.body

    hero.nickName = nickName
    hero.realName = realName
    hero.originDescription = originDescription
    hero.superPowers = superPowers
    hero.catchPhrase = catchPhrase
    hero.images = images

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