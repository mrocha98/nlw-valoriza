import express, { Express } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

export class App {
  readonly core: Express

  constructor() {
    this.core = express()

    this.intializeMiddlewares()
    // this.intializeRoutes()
  }

  private intializeMiddlewares(): void {
    this.core.use(helmet())
    this.core.use(cors())
    this.core.use(morgan('dev'))
  }

  // private initializeRoutes(): void {}
}
