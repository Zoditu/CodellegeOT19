//archivo de ruta del usuario.
//localhost:3000/Users
//archivo de routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../models/Users')

//endpoint para listar usuarios
// debe regresar un array con los usuarios
router.get('/', function (req, res) {
    users.findOne({
            name: "Itzel"
        })
        .then(function (docs) {
            res.json(docs)
        })
        .catch(function (error) {
            res.send(error)
        })
});


router.post('/', function (req, res) {
    console.log(req.body)
    const user = {
        name: req.body.name
    }

    // User.create (user,function(error,documento){
    //     if(error)
    //     {
    //     res.send(error)
    // }

    //     else{
    //         res.json(documento)
    //     }
    // })
    users.create(user)
        .then(function (usuarioDocumento) {
            res.json(usuarioDocumento)
        })
        .catch(function (error) {
            res.send(error)
        })
});

router.put('/', function (req, res) {
    //.findByIdAndUpdate(id,datos)
    const id = req.params.id
    const datos ={
        name: req.params.name
    }
    users.findByIdAndUpdate (id,datos);
})

router.delete('/:id', function (req, res) {
    // res.send('hello delete');
    //.findOneAndDelete(query)
    const query = {
        _id: req.params.id
    }
    .findOneAndDelete(query);
})

module.exports = router;