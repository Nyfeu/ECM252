// Carregando API KEY via .env
require('dotenv').config()
const PEXELS_KEY = process.env.PEXELS_KEY

// Configurando Express.js para roteamento
const express = require('express')
const app = express()
app.use(express.json())

// Configurando Axios para requisições
const axios = require('axios')

// Configurando CORS
const cors = require('cors')

// Permitir acesso ao front-end
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// pexelsClient
const pexelsClient = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: PEXELS_KEY
    }
})

// Porta do serviço em execução
const port = 3000

// Definindo end-point GET

/* Opções
    - Parâmetro de PATH: 'localhost:3000/search/hippo
    - Parâmetro de query: 'localhost:3000/search?query=hippo
*/

app.get('/search', async (req, res) => {
    
    console.log(`Buscando por: ${req.query.query}\n`);

    try {
        
        const result = await pexelsClient.get('/search', {
            params: {
                query: req.query.query,
                per_page: req.query.per_page
            }
        })

        res.status(200).json(result.data)

    } catch (e) {

        res.status(500).end();
        console.log(e)

    } 

})


// Inicializando execução do serviço
app.listen(port, () => {

    console.log(`Back-End (${port}): [OK]`)

})