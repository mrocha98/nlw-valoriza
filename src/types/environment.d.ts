declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /* node */
      NODE_ENV: 'development' | 'test' | 'production'
      PORT?: number
      /* database */
      DATABASE_NAME: string
      DATABASE_USER: string
      DATABASE_PASSWORD: string
      DATABASE_PORT: number
    }
  }
}

export {}
