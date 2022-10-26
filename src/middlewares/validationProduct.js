const { body }= require('express-validator');
const path= require('path')


const validation = [
    body('cat_id').custom(function(value) {
        console.log(value);
        if(!value){
            throw new Error('Debes seleccionar una opcion')
        }
        else{
            return true
        }
    }).bail(),
    body('img').custom(function(value,{req}){
        let file = req.file;
        const acceptedFiles = ['.jpeg', '.jpg', '.png'];
        if(!file){
            throw new Error('Tienes que subir una imagen del producto')
        }
        else{
            const fileExtension = path.extname(file.originalname)
            if(!acceptedFiles.includes(fileExtension)){
                throw new Error('El formato de la imagen no esta permitido')
            }
        }
        return true
    }).bail()

]

module.exports = validation;