const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    dishName: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    imageSearchHint: {
        type: String
    },
    cuisine: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Veg", "Non-Veg"],
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true
    },
    calories: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    servings: {
        type: Number,
        required: true,
        min: 1
    },
    ingredients: [
        {
            type: String,
            required: true
        }
    ],
    instructions: [
        {
            type: String,
            required: true
        }
    ]
}, {
    timestamps: true
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;