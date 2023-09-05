import { Response, Request } from 'express'
import { Virkopedias } from '../models/virkopedia-model'

export const virkopediaController = () => ({
  getVirkopedias: async (req: Request, res: Response) => {
    try {
      const virkopedias = await Virkopedias.find({})
      res.status(200).json(virkopedias)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  createVirkopedias: async (req: Request, res: Response) => {
    try {
      const virkopedias = await Virkopedias.create(req.body)
      res.status(201).json(virkopedias)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },

  deleteAllVirkopedias: async (req: Request, res: Response) => {
    try {
      const users = await Virkopedias.deleteMany({})
      res.status(200).json(users)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },
})
