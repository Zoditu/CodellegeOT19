const mongoose = require ('mongoose');

const posts = {
    user : String,
    text: String,
    fecha:{
        dia: Number,
        mes: String,
        year: Number,
    },
    publicado:Boolean,
}

const blog = mongoose.model('Blog',posts);

model.export(blog);