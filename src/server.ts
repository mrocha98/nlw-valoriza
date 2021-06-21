import { App } from './app'

const app = new App()

const PORT = 5000

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

app.core.listen(PORT, initializationLog)