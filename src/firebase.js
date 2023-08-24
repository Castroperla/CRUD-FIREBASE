//Para tener acceso al archivo .env 
require('dotenv').config()
const { initializeApp, applicationDefault } = require('firebase-admin/app')
const { gentFirestore, getFirestore } = require('firebase-admin/firestore')

//inicializar las variables
initializeApp({
    credential: applicationDefault()
})

const db = getFirestore()

module.exports = {
    db
}