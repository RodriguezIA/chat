"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const account_1 = require("../models/account");
const account_2 = require("../db/account");
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAccount = account_1.CreateAccountSchema.parse(req.body);
        const query = yield (0, account_2.create)(newAccount);
        res.status(200).json({ message: 'Cuenta creada exitosamente', data: query });
    }
    catch (error) {
        console.error('Error de validación:', error.errors);
        res.status(400).json({ error: 'Los datos proporcionados no son válidos' });
    }
});
exports.createAccount = createAccount;
