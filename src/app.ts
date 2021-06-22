import './loadEnv'
import 'reflect-metadata'
import express, { Express } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes'

export class App {
  readonly core: Express

  constructor() {
    this.core = express()

    this._initializeMiddlewares()
    this._initializeRouter()
  }

  private _initializeMiddlewares() {
    this.core.use(express.json())
    this.core.use(helmet())
    this.core.use(cors())
    this.core.use(morgan('dev'))
  }

  private _initializeRouter() {
    this.core.use(router)
  }
}
