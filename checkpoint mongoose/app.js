const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/person')
const arrayOfPeoples = require('./data')

const app = express();

const PORT = process.env.PORT || 5000;

//environment variables
require('dotenv').config();

//Installing and setting up Mongoose:
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('connected to database');
    app.listen(PORT);
    console.log('server listening')
})
.catch((err) => {console.log(err)});

//Create and Save a Record of a Model:
// createPerson ()
// async function createPerson () {
//     try {
//         const newPerson = await Person.create({
//             name : 'Nader',
//             age : 36,
//             favoriteFoods : ["Salad","Pizza"]
//         })
//         await newPerson.save(function (err,data){
//             if (err) {
//                 console.log(err.message)
//             }else if (data) {
//                 console.log(data)
//             }
//         })
//     }catch (err) {console.log(err.message)}
// }

//Create Many Records with model.create()
// createManyPerson()
// async function createManyPerson() {
//     try {
//         const newData = await Person.create(arrayOfPeoples,function (err, data) {
//             if (err) {
//                 console.log(err.message);
//             }else if (data) {
//                 console.log(data);
//             }
//         }).save();
//     }catch (err) {console.log(err.message)}
// }

//Use model.find() to Search Your Database
// findPeoples()
// async function findPeoples() {
//     try {
//         Person.find({},function(err,data){
//             if (err) {
//                 console.log(err.message)
//             }else if (data) {
//                 console.log(data);
//             }
//         });
//     }catch(err) {console.log(err.message)}
// }

//Use model.findOne() to Return a Single Matching Document from Your Database
// findByFood("Coffee")
// async function findByFood(food){
//     try {
//         Person.findOne({favoriteFoods : food},function(err, doc){
//             if (err) {
//                 console.log(err.message)
//             }else if (doc) {
//                 console.log(doc);
//             }
//         })
//     }catch (err) {console.log(err.message)}
// }

//Use model.findById() to Search Your Database By _id
// findByOnlyId('63416a892af81ed0a1b95f91')
// async function findByOnlyId(id){
//     try {
//         Person.findById({_id : id},function(err, person){
//             if (err) {
//                 console.log(err.message)
//             }else if (person) {
//                 console.log(person);
//             }
//         })
//     }catch(err){console.log(err.message)}
// }

//Perform Classic Updates by Running Find, Edit, then Save
// findEditSave('63416a892af81ed0a1b95f91','hamburger')
// async function findEditSave(id,food){
//     try {
//         const person = await Person.findById({_id : id});
//         await person.favoriteFoods.push(food)
//         await person.save();
//     }catch(err){console.log(err.message)}
// }

//Perform New Updates on a Document Using model.findOneAndUpdate()
// updateAge('63416a892af81ed0a1b95f91',20)
// async function updateAge(id,age) {
//     try {
//         const person = await Person.findById({_id : id});
//         person.age = age;
//         await person.save()
//     }catch (err){console.log(err.message)}
// }

//Delete One Document Using model.findByIdAndRemove
// deleteOnePerson('63416a892af81ed0a1b95f92')
// async function deleteOnePerson(id){
//     try {
//         Person.deleteOne({_id : id},function(err,data){
//             if (err) {
//                 console.log(err.message);
//             }else if (data) {
//                 console.log('deleted successfully')
//             }
//         })
//     }catch (err){console.log(err.message)}
// }

//MongoDB and Mongoose - Delete Many Documents with model.remove()
// deletePersons()
// async function deletePersons() {
//     try {
//         Person.deleteMany({},function(err,data){
//             if (err) {
//                 console.log(err.message);
//             }else if (data) {
//                 console.log('deleted all documents')
//             }
//         })
//     }catch (err) {console.log(err.message)}
// }

//Chain Search Query Helpers to Narrow Search Results
// searchByQuery('burritos')
// async function searchByQuery(query) {
//     try {
//             Person.find({favoriteFoods : query},function(err, results){
//             if (err) {console.log(err.message)}
//             else if (results) {console.log(results)}
//         }).sort({name : "desc"}).limit(2).select('-age').exec(function(err, results){
//             if (err) {console.log(err.message)}
//             if (results) {console.log(results)}
//         })
//     }catch (err) {console.log(err.message)}
// }