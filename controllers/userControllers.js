const { model, findById } = require('../models/User')
const User = require('../models/User')

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json({
        success: true,
        data: users
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        data: err.message
      })
    }
  },

  getUser: async (req, res) => {
    try {
      const user = findById(req.params.id);

      if (!user) {
        res.status(404).json({
          success: false,
          data: `Can not find user with id ${req.params.id}`
        })
      }

      res.status(200).json({
        success: true,
        data: user
      })

    } catch (err) {
      res.status(400).json({
        success: false,
        data: err.message
      })
    }
  },

  addUser: async (req, res) => {
    try {
      const user = await User.create(req.body)

      res.status(201).json({
        success: true,
        data: user
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        data: err.message
      })
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

      if (!user) {
        res.status(404).json({
          success: false,
          data: `Can not find user with id ${req.params.id}`
        })
      }

      res.status(200).json({
        success: true,
        data: user
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        data: err.message
      })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = findById(req.params.id);

      if (!user) {
        res.status(404).json({
          success: false,
          data: `Can not find user with id ${req.params.id}`
        })
      }

      user.remove();

      res.status(200).json({
        success: true,
        data: {}
      })

    } catch (err) {
      res.status(400).json({
        success: false,
        data: err.message
      })
    }
  }
}