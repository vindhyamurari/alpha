"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var bookController_1 = require("../controllers/bookController");
exports.router = express_1.default.Router();
exports.router.get("/", bookController_1.getAllBooks);
exports.router.post("/", bookController_1.addNewBook);
exports.router.delete("/:id", bookController_1.deleteBook);
