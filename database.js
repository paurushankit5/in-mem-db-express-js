const Table = require('./table');
const ColumnHelper = require('./column');

class Database{


    static createTable(table_name, properties){
        if(ColumnHelper.checkTableConstraints(properties)){
            let table = new Table(table_name, properties);
            this.tables[table_name] = table;
        }
        return true
    }

    static getTable(table_name){
        return this.tables[table_name] || null
    }

    static getTables(){
        return this.tables
    }

    static printTables(){
        console.log(this.getTables());
    }
}


module.exports =  Database
Database.tables=[]