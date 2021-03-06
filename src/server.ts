import { App } from '@/app'
import { getConnection } from '@/infra/database/connection'

const PORT = process.env.PORT || 5000

const initializationLog = () => {
  console.log(`
    ███╗   ██╗██╗     ██╗    ██╗              ██╗   ██╗ █████╗ ██╗      ██████╗ ██████╗ ██╗███████╗ █████╗
    ████╗  ██║██║     ██║    ██║              ██║   ██║██╔══██╗██║     ██╔═══██╗██╔══██╗██║╚══███╔╝██╔══██╗
    ██╔██╗ ██║██║     ██║ █╗ ██║    █████╗    ██║   ██║███████║██║     ██║   ██║██████╔╝██║  ███╔╝ ███████║
    ██║╚██╗██║██║     ██║███╗██║    ╚════╝    ╚██╗ ██╔╝██╔══██║██║     ██║   ██║██╔══██╗██║ ███╔╝  ██╔══██║
    ██║ ╚████║███████╗╚███╔███╔╝               ╚████╔╝ ██║  ██║███████╗╚██████╔╝██║  ██║██║███████╗██║  ██║
    ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝                 ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝
  `)

  console.log(
    '================================================================================================================\n'
  )

  console.log(`🚀 Server listening on ${PORT}...\n`)
}

async function bootstrap() {
  await getConnection()

  new App().core.listen(PORT, initializationLog)
}

;(async () => {
  await bootstrap()
})()
