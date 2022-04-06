const fs = require('fs');

fs.writeFile('./texto.txt', 'línea uno', function(err){
    if(err){
        console.log(err)
    }
    console.log('Archivo creado')  
})