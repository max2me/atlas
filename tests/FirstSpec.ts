import Parser from '../src/Parser'

describe("Person FullName", () => {
    var parser: Parser;

    beforeEach(() => {
        parser = new Parser();
    });

    it("should recognize human", () => {
        expect(parser.name).toBe("Max");
    });
}); 