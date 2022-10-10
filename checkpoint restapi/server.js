const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User');

const app = express()
require('dotenv').config()

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');
}

app.use(express.json());

//routes

app.get('/', async (req, res) => {
    try {
        const data = await User.find()
        await res.send(data)
    }catch (err) {console.log(err.message)}
})

app.post('/add', async (req, res) => {
    try {
        const newUser =  new User ({
            name : req.body.name,
            age : req.body.age,
            email : req.body.email
        })
        await newUser.save((err, result) => {
            if (err) {console.log(err.message);}
            if (result) {console.log('user added successfully');}
        })
    }catch (err) {console.log(err.message)}
})

app.put('/edit/:id', async (req,res) => {
    try {
        User.findByIdAndUpdate({ _id : req.params.id}, { name : req.body.name}, (err,result) => {
            if (err) {console.log(err.message)}
            if (result) {console.log('updated successfully')}
        })
    }catch (err) {console.log(err.message);}
})

app.delete('/delete/:id', async (req, res) => {
    try {
        User.findByIdAndDelete({_id : req.params.id}, (err,result) => {
            if (err) {console.log(err.message);}
            if (result) {console.log('deleted successfully');}
        })
    }catch (err) {console.log(err.message)}
})
const port = 5000
app.listen(port, () => console.log(`server listening on port ${port}!`))