const express = require('express')

const app = express()
app.use(express.json())

//Port where we can find our app

const port = 3000

app.listen(port, () => {
    console.log('Exmample app listening on port ${port}')
    
})


//HTTP Methods
//Method for get all explorers
app.get('/v1/explorers', (req, res)=>{

    console.log(`Api explorers get all request ${new Date()}`)
    const explorer1 = {id: 1 , name: "Alan1"}
    const explorer2 = {id: 2, name: "Alan2"}
    const explorer3 = {id:3, name:"Alan3"}
    const explorer4 = {id:4, name:"Alan4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]

    res.status(200).json(explorers)

})

//Method for get a explorer by id
app.get('/v1/explorers/:id', (req, res)=>{

    console.log(`Api explorers get request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name:"Alan1"}
    res.status(200).json(explorer)
})


//Method post request
app.post('/v1/explorers', (req, res)=>{

    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body //Client´s params
    res.status(201).json({message: "Created"})
} )