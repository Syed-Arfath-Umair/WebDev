const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.shuubmf.mongodb.net/TodosApp");
const newSchemaTodo = mongoose.model('Todos', {
    title: String,
    description: String,
    completed: Boolean
});

module.exports = {
    newSchemaTodo
}