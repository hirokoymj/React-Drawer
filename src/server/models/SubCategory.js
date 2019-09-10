const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  subCategory_name: String,
  categoryId: String
});

module.exports = mongoose.model('Subcategory', subCategorySchema);