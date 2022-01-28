const express = require('express')
const app = express()
const port = 3000

const Database = require('./database');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    Database.createTable("users" , {"id" : "int" , "name" : "string"})
    let users_table = Database.getTable("users")
    users_table.insert({"id":1, "name" : "Ram"})
    users_table.insert({"id":2, "name" : "Shyam"})
    users_table.insert({"id":3, "name" : "Mukesh"})

    users_table.printRows({"id" : 2})
    users_table.delete({"id" : 2})
    users_table.printRows({"id" : 2})

    


    users_table.insert({"id":1024, "name" : "Ram"})

    users_table.printAllRows()


    // Database.createTable("authors" , {"id" : "int" , "name" : "string"})
    // Database.createTable("books" , {"id" : "int" , "book_name" : "strings"})
    //Database.printTables()
    console.log(`Example app listening on port ${port}`)
})