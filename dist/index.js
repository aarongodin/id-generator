"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const random_integer_1 = __importDefault(require("./random_integer"));
const ALPHA_NUM = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function get(prefix = "", separator = "_", len = 20) {
    const value = new Array(len);
    for (let i = 0; i < len; i++) {
        value[i] = ALPHA_NUM[(0, random_integer_1.default)(ALPHA_NUM.length)];
    }
    if (prefix === "") {
        return value.join("");
    }
    return `${prefix}${separator}${value.join("")}`;
}
exports.get = get;
