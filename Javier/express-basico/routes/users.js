const express = require('express')
const router = express.Router();
const Users = require('../models/usuarios');


//endpoint para listar usuarios
router.get('/', function (req, res) {
    Users.find({})
        .then(function (docs) {
            res.json(docs)
        })
        .catch(function (error) {
            res.send(error)
        })
});

// //ENDPOINT PRA LISTAR UN SOLO USUARIO
// router.get('/', function (req, res) {
//     Users.findOne({})
//         .then(function (docs) {
//             res.json(docs)
//         })
//         .catch(function (error) {
//             res.send(error)
//         })
// });



router.post('/', function (req, res) {
    console.log(req.body);
    const usuario = {
        name: req.body.name
    }

    Users.create(usuario)
         .then(function(usuarioDocumento){
            res.json(usuarioDocumento)
         })
         .catch(function (error){
             res.send(error)
         })
})

router.put('/:id', function (req, res) {
    const id = req.params.id
    const datos = {
        name: req.body.name
    }
    .findOneAndUpdate(id, datos) 
})  

router.delete('/', function (req, res) {

})


module.exports = router;