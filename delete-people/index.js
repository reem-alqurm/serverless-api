
const peopleSchema = require('./people-schema');


exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let persons; 
            persons = await peopleSchema.delete({id});

    
        return {
            statusCode: 200,
            body: JSON.stringify(persons)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}