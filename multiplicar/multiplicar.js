const fs = require('fs');
const color = require('colors');

listarTabla = (base, limite = 10) => {
    console.log('===================');
    console.log(`==Tabla de ${base}==`.green);
    console.log('===================');

    
    for (let i = 0; i <= limite; i++) {    
        let rs = base * i;
         console.info(`${base} * ${i} = ${rs}`)      
    }
}

crearArchivo = (base, limite = 10)=>{
    return new Promise((resolve, rejec)=>{
        if(!Number(base)){
            rejec(`El valor introducido ${base} No es un número`)
            return;
        }
        if(!Number(limite)){
            rejec(`El valor introducido ${limite} No es un número`)
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {    
            let rs = base * i;
             data += `${base} * ${i} = ${rs}\n`;        
        }
        fs.writeFile( `tablas/table-${base}-hasta el ${limite}.txt`, data, (err) => {
            if (err) 
            rejec(err);
            resolve(`table-${base}-hasta el ${limite}.txt`);
          });                 
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
