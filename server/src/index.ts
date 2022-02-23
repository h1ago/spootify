import express from 'express'
import routes from './routes'
import cors from "cors"

const app = express()
const PORT = 5000

//Configurações da Aplicação
app.use(express.json())
app.use(cors())
app.use(express.urlencoded( {extended: true} ) )

//Configuração de Rotas
app.use(routes)

//Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`)
})