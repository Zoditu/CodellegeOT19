const mongoose = require ('mongoose');


const telNumber = {
    name : String,
    number:{
        ext:Number,
        num:Number,
    }

}

const agenda = mongoose.model('Agenda',telNumber);

model.export(agenda);