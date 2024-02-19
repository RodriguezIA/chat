"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const dotenv_1 = require("dotenv");
const node_path_1 = __importDefault(require("node:path"));
(0, dotenv_1.config)({ path: node_path_1.default.resolve('./.env') });
const portScheme = zod_1.z.number().int().min(0).max(2 ** 16 - 1);
const envScheme = zod_1.z.object({
    PORT: zod_1.z.preprocess(arg => arg !== '' ? Number(arg) : undefined, portScheme)
});
const result = envScheme.safeParse(process.env);
if (!result.success) {
    console.error('❌ Invalid environment variables:', JSON.stringify(result.error.format(), null, 4));
    process.exit(1);
}
exports.env = result.data;
