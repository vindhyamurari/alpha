"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var cartSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
    },
    listOfBooks: {
        type: Array,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, { collection: "carts" });
module.exports = mongoose_1.default.model("cart", cartSchema);
