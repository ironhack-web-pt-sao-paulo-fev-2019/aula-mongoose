const PersonModel = require('../../model/Person/PersonModel')

const createPerson = (request,response) =>{

    const personDoc = {

        name:'Wilkor',
        age:'12',
        genter:'M'
    }
    
    PersonModel.create(personDoc,(error) =>{
        if(error){
            console.log(`Erro ao criar documento ${error} `)
        }else{
            console.log(`Salvamos o documento: ${personDoc}`)
        }
    })
    
    response.send('Person created')
}



module.exports = createPerson;