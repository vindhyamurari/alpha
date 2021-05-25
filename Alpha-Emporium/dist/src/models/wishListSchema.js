"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var wishListSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
    },
    listOfBooks: {
        type: Array,
        required: true,
    },
}, { collection: "wishLists" });
module.exports = mongoose_1.default.model("wishList", wishListSchema);
