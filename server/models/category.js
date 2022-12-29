import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    division: String,
    famousPlaces: Array,
    body: String,
});


export const Category = mongoose.model('Category', CategorySchema)

const saveCategory = (category) => {
    return Category.create(category)
}

const getAllCategory = () => {
    return Category.find({})
}

const getCategoryById = (_id) => {
    return Category.findById(_id)
}

export {saveCategory, getAllCategory, getCategoryById}