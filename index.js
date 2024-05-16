import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import bookRouter from './routes/book.route.js'

export const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Configuración de las rutas
app.use('/api/v1/books', bookRouter)
app.use('*', (_, res) => {
    res.status(404).json({ ok: false, msg: 'ruta no configurada 😐' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})