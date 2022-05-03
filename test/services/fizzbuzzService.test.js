const FizzbuzzService = require('../../lib/services/fizzbuzzService');

describe('Validacion de explorers con diferentes scores', () => {
    test("1. Explorer 1, score 1", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const validationExplorer = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(validationExplorer.trick).toBe(1);
    })
})