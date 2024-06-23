const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.get('/usuarios/', async (req, res) => {
    const users= await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})

app.listen(3000, () => console.log('Server running on port 3000'))

// n2a21yk6hW1qOABH  giselle