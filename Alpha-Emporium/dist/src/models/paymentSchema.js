"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var paymentSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: Number,
        required: true,
    },
    CVV: {
        type: Number,
        required: true,
    },
    expiryDate: {
        type: String,
        required: true,
    },
}, { collection: "payments" });
module.exports = mongoose_1.default.model("payment", paymentSchema);
