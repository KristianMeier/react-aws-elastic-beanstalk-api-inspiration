import { Request, Response } from 'express'
import { Users } from '../models/user-model'

export const userController = () => ({
  getUsers: async (req: Request, res: Response) => {
    try {
      const users = await Users.find({})
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const users = await Users.findById(id)
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const users = await Users.create(req.body)
      res.status(201).json(users)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const users = await Users.findByIdAndUpdate(id, req.body)
      if (!users) {
        return res
          .status(404)
          .json({ message: `cannot find any company with ID ${id}` })
      }
      const updatedProduct = await Users.findById(id)
      res.status(200).json(updatedProduct)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const users = await Users.findByIdAndDelete(id)
      if (!users) {
        return res
          .status(404)
          .json({ message: `cannot find any company with ID ${id}` })
      }
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  deleteAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await Users.deleteMany({})
      res.status(200).json(users)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },
})
