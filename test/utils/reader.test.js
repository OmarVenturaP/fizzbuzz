const Reader = require("../../lib/utils/reader");

describe("Test reader app", ()=> {
    test("should first", () => {
        const readers = Reader.readJsonFile("explorers.json");
        expect(readers).toBeDefined();
    });
});