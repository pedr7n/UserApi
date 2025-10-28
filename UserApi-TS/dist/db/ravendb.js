"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ravendb_1 = require("ravendb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const store = new ravendb_1.DocumentStore(process.env.RAVENDB_URL || "http://localhost:8080", process.env.RAVENDB_DATABASE || "UserDB");
store.initialize();
exports.default = store;
