"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    discount: {
        type: String,
        required: false,
    },
}, { collection: "books" });
module.exports = mongoose_1.default.model("book", bookSchema);
