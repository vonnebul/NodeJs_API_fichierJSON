const express = require('express') // la récupération d'express
const app = express() // variable utilisant la librairie express
const question = require('./question.json')

//MiddleWare
app.use(express.json())

// afficher toutes les questions
app.get('/question', (req,res) => {
     res.status(200).json(question)
})
// afficher une seule question
app.get('/question/:id', (req,res) => {
     const id = parseInt(req.params.id)
     const laQuestion = question.find(question => question.id === id)
     res.status(200).json(laQuestion)
 })

 app.get('/question/:id/q', (req,res) => {
	const id = parseInt(req.params.id)
	const laQuestion = question.find(question => question.id === id)
	res.status(200).json(laQuestion.question)
})
app.get('/question/:id/r', (req,res) => {
	const id = parseInt(req.params.id)
	const laQuestion = question.find(question => question.id === id)
	res.status(200).json(laQuestion.reponse)
})

 app.post('/question', (req,res) => {
	question.push(req.body) 
	res.status(200).json(question) 
})

app.put('/question/:id', (req,res) => {
	const id = parseInt(req.params.id)
	let laQuestion = question.find(question => question.id === id) 
	laQuestion.theme =req.body.theme, 
	laQuestion.question =req.body.question, 
	laQuestion.reponse =req.body.reponse,
	res.status(200).json(laQuestion) 
})

app.delete('/question/:id', (req,res) => {
	const id = parseInt(req.params.id) 
	let laQuestion = question.find(question => question.id === id) 
	question.splice(question.indexOf(laQuestion),1) 
	res.status(200).json(question) 
})


app.listen(3000, () => { // ouverture du serveur sur le port 3000
     console.log("Serveur à l'écoute") // afficher un message dans la console.
})
