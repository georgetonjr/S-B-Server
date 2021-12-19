import express, { Application, Router } from 'express';

export class App {
  public app: Application

  public port: any

  constructor (config: { port: any, router: Router }) {
    this.port = config.port
    this.app = express()
    this.app.use(express.json())
    this.app.use(config.router);
  }

  

  public initialize (): void {
    this.app.listen(this.port, () =>
      console.log(`App listening on the http://localhost:${this.port}`)
    )
  }
}
