import { Express } from 'express'
import { companyController } from './controllers/company-controller'
import { userController } from './controllers/user-controller'
import { virkopediaController } from './controllers/virkopedia-controller'

export const loadRoutes = (app: Express) => {
  // Companies
  app.get('/companies', companyController().getCompanies)
  app.get('/companies/:id', companyController().getCompany)
  app.post('/companies', companyController().createCompany)
  app.put('/companies/:id', companyController().updateCompany)
  app.delete('/companies/:id', companyController().deleteCompany)
  app.delete('/companies-delete-all', companyController().deleteAllCompanies)

  // Virkopedias
  app.get('/virkopedias', virkopediaController().getVirkopedias)
  app.post('/virkopedias', virkopediaController().createVirkopedias)
  app.delete(
    '/virkopedias-delete-all',
    virkopediaController().deleteAllVirkopedias
  )
  // Users
  app.get('/users', userController().getUsers)
  app.get('/users/:id', userController().getUser)
  app.post('/users', userController().createUser)
  app.put('/users/:id', userController().updateUser)
  app.delete('/users/:id', userController().deleteUser)
  app.delete('/users-delete-all', userController().deleteAllUsers)
}
