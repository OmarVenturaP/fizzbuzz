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
    test("5. Validando numero recibido 15", () => {
        const number = 15;
        const validationNumber = FizzbuzzService.applyValidationInNumber(number);
        expect(validationNumber).toBe("FIZZBUZZ");
    });
    test("6. Validando numero recibido 5", () => {
        const number = 5;
        const validationNumber = FizzbuzzService.applyValidationInNumber(number);
        expect(validationNumber).toBe("BUZZ");
    });
    test("7. Validando numero recibido 3", () => {
        const number = 3;
        const validationNumber = FizzbuzzService.applyValidationInNumber(number);
        expect(validationNumber).toBe("FIZZ");
    });
    test("8. Validando numero recibido 1", () => {
        const number = 1;
        const validationNumber = FizzbuzzService.applyValidationInNumber(number);
        expect(validationNumber).toBe(1);
    });
});