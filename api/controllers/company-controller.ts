import { Request, Response } from 'express'
import { Companies } from '../models/company-model'

export const companyController = () => ({
  getCompanies: async (req: Request, res: Response) => {
    try {
      const companies = await Companies.find({})
      res.status(200).json(companies)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  getCompany: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const company = await Companies.findById(id)
      res.status(200).json(company)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  createCompany: async (req: Request, res: Response) => {
    try {
      const companies = await Companies.create(req.body)
      res.status(201).json(companies)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },

  updateCompany: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const companies = await Companies.findByIdAndUpdate(id, req.body)
      if (!companies) {
        return res
          .status(404)
          .json({ message: `cannot find any company with ID ${id}` })
      }
      const updatedProduct = await Companies.findById(id)
      res.status(200).json(updatedProduct)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  deleteCompany: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const company = await Companies.findByIdAndDelete(id)
      if (!company) {
        return res
          .status(404)
          .json({ message: `cannot find any company with ID ${id}` })
      }
      res.status(200).json(company)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  deleteAllCompanies: async (req: Request, res: Response) => {
    try {
      const companies = await Companies.deleteMany({})
      res.status(200).json(companies)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },
})
