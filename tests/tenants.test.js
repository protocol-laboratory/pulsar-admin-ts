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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
describe('Tenants', () => {
    const pulsarAdmin = new src_1.default({ host: 'localhost', port: 8080 });
    it('should return a non-empty list of tenants', () => __awaiter(void 0, void 0, void 0, function* () {
        const tenants = yield pulsarAdmin.tenants.list();
        expect(tenants).toBeInstanceOf(Array);
        expect(tenants.length).toBeGreaterThan(0);
    }));
});
