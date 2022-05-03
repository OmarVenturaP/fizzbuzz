const FizzbuzzService = require("../../lib/services/fizzbuzzService");

describe("Validacion de explorers con diferentes scores", () => {
    test("1. Explorer 1, score 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const validationExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(validationExplorer.trick).toBe(1);
    });
    test("2. Explorer 3, score 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const validationExplorer = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(validationExplorer.trick).toBe("FIZZ");
    });
    test("3. Explorer 5, score 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const validationExplorer = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(validationExplorer.trick).toBe("BUZZ");
    });
    test("4. Explorer 15, score 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const validationExplorer = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(validationExplorer.trick).toBe("FIZZBUZZ");
    });
});