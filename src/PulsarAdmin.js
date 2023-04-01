"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Tenants_1 = __importDefault(require("./Tenants"));
const Namespaces_1 = __importDefault(require("./Namespaces"));
class PulsarAdmin {
    constructor(config) {
        const baseUrl = `http://${config.host}:${config.port}`;
        this.http = axios_1.default.create({
            baseURL: baseUrl,
        });
        this.tenants = new Tenants_1.default(this.http);
        this.namespaces = new Namespaces_1.default(this.http);
    }
}
exports.default = PulsarAdmin;
