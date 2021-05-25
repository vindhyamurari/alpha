"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var upiSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
    },
    upiId: {
        type: String,
        required: true,
    },
}, { collection: "upis" });
module.exports = mongoose_1.default.model("upi", upiSchema);
