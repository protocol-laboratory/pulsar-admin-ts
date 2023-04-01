"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
describe('PulsarAdmin', () => {
    it('should instantiate with provided host and port', () => {
        const pulsarAdmin = new src_1.default({ host: 'localhost', port: 8080 });
        expect(pulsarAdmin).toBeInstanceOf(src_1.default);
    });
});
