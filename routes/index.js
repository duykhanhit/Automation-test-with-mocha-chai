const userRouter = require('./userRouters')

module.exports = (app) => {
  app.use('/api', userRouter)
}