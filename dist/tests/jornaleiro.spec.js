"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Jornaleiro_1 = __importDefault(require("../Jornaleiro"));
describe('Jornaleiro', () => {
    it('Deve criar um Jornaleiro', () => {
        const jornaleiro = new Jornaleiro_1.default('João', 30);
        expect(jornaleiro).toBeDefined();
    });
});
