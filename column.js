class ColumnHelper {
    static getRules(){
        return {
            "string" : {
                "limit" : 20,
                "type"  : "length"
            },
            "int": {
                "type" : "range",
                "min" : -1024,
                "max" : 1024
            }
        }
    }

    static getAllDataTypes(){
        let rules = this.getRules()
        return Object.keys(rules)
    }


    static checkTableConstraints(properties){
        let datatypes = Object.values(properties)
        if(!datatypes || !datatypes.length) throw new Error('Table should have atleast one column');
        let allDataTypes = this.getAllDataTypes()
        for(let i =0; i < datatypes.length; i++){
            if(!allDataTypes.includes(datatypes[i])) 
                return false
        }
        return true;
    }

    static validateDataType(datatype, value){
        switch (datatype){
            case 'int' :
                if(!isNaN(value) && value >= -1024 && value <=1024 )
                    return true
                return false;
            case 'string' :
                if(typeof value == "string" && value.length <=20)
                    return true
                return false
            default:
                return false;
        }
    }

}

module.exports = ColumnHelper