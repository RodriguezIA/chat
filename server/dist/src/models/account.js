"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountSchema = void 0;
const zod_1 = require("zod");
exports.CreateAccountSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d).+$/)
});
