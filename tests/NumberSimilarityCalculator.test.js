const NumberSimilarity = require('../src/classes/fieldTypeCalculator/NumberSimilarityCalculator');
const numberSimilarity = new NumberSimilarity();

describe('numberSimilarity - it returns a similarity value (0 to 1) between 2 numbers', () => {
    it('should compare 10 and 10 and return 1', async () => {
        let result = await numberSimilarity.getSimilarity('$10','$10');
        expect(result).toBeCloseTo(1);
    });
    it('should compare 10 and 10 and return 1', async () => {
        let result = await numberSimilarity.getSimilarity('96','100');
        expect(result).toBeCloseTo(1,1);//second digit indicates precision
    });
    it('should compare 10 and 10 and return 1', async () => {
        let result = await numberSimilarity.getSimilarity('96','100');
        expect(result).toBeGreaterThan(0.9);
    });
    it('should compare 10 and 100 and return 0', async () => {
        let result = await numberSimilarity.getSimilarity('10','100');
        expect(result).toBeCloseTo(0);
    });
    it('should compare 10 and 100 and return 0', async () => {
        let result = await numberSimilarity.getSimilarity('10','100');
        expect(result).toBeLessThan(0.1);
    });
    it('should return 0 if empty value is passed', async () => {
        let result = await numberSimilarity.getSimilarity('','');
        expect(result).toBeCloseTo(0);
    });
    it('should return 0 if null value is passed', async () => {
        let result = await numberSimilarity.getSimilarity(null,'');
        expect(result).toBeCloseTo(0);
    });
    it('should return 0 if undefined value is passed', async () => {
        let result = await numberSimilarity.getSimilarity(undefined,'');
        expect(result).toBeCloseTo(0);
    });
});