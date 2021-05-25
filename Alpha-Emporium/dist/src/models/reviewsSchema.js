"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var reviewsSchema = new mongoose_1.default.Schema({
    bookId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: false,
    },
    comments: {
        type: String,
        required: false,
    },
}, { collection: "reviews" });
module.exports = mongoose_1.default.model("review", reviewsSchema);
