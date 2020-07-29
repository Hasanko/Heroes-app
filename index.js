const mongoose = require('mongoose')

const app = require('./app')

const PORT = process.env.port || 5000

async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/HeroesDB', {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`server is running on ${PORT}`))
  }
  catch (ex) {
    console.log(ex)
  }
}

start()

