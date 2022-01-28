const ColumnHelper = require('./column')

class Table {
    constructor(table_name, properties){
        this.data = []
        this.table_name = table_name
        this.schema = properties
    }

    insert(data){
        if(!this.isValidInput(data)) throw new Error("Invalid input");
        this.data.push(data)
    }

    delete(param){
        let column = Object.keys(param)[0]
        let value = Object.values(param)[0]
        if(this.isValidColumn(column)){
            let temp =  this.data.filter(row => {
                if(row[column] != param[column]) 
                    return row
            })
            this.data = temp
            return true
        }
        return false
    }

    getRows(param){
        let column = Object.keys(param)[0]
        let value = Object.values(param)[0]
        if(this.isValidColumn(column))
        return this.data.filter(row => {
            if(row[column] == param[column]) 
                return row
        })
    }

    getAllRows(){
        return this.data
    }

    isValidColumn(column){
        return this.getTableColumns().includes(column)
        // let allColumns = this.getTableColumns()
        // return allColumns.includes[column] ? true : false
    }

    getTableColumns(){
        return Object.keys(this.schema)
    }

    isValidInput(data){
       let columns = Object.keys(data)
       let values = Object.values(data)
       for(let i = 0; i< columns.length; i++){
           let column = columns[i]
           if(!this.isValidColumn(column)) 
                return false
           if(!ColumnHelper.validateDataType(this.schema[column], values[i])) return false

       }

       return true
    }
    

    printAllRows(){
        console.log(this.getAllRows());
    }

    printRows(param){
        console.log(this.getRows(param))
    }


}

module.exports = Table;