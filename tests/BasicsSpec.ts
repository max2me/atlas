import * as p from '../src/Parser'

describe('Basics', () => {
    var parser: p.Parser;

    beforeEach(() => {
        parser = new p.Parser();
    });

    it('STATEMENT when CONDITION', () => {
        var result = parser.parse('order video when we get to 2,000 visitors');

        expect(result).not.toBeNull();
        expect(result.statement).toBe('order video');
        expect(result.condition).toBe('when we get to 2,000 visitors');
    });

    it('once STATEMENT then CONDITION', () => {
        var result = parser.parse('once we get to 2,000 visitors, then order video');

        expect(result).not.toBeNull();
        expect(result.statement).toBe('order video');
        expect(result.condition).toBe('once we get to 2,000 visitors');
    });
}); 