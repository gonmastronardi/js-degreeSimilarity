const DiceSimilarity = require('../src/classes/fieldTypeCalculator/DiceStringSimilarityCalculator');
const diceSimilarity = new DiceSimilarity();

describe('diceSimilarity - it returns a similarity value (0 to 1) between 2 strings', () => {
    it('should compare Samsung/Samsung and return 1', async () => {
        let result = await diceSimilarity.getSimilarity('Samsung','Samsung');
        expect(result).toBeCloseTo(1);
    });
    it('should compare Motorola and Samsung and return 0', async () => {
        let result = await diceSimilarity.getSimilarity('Motorola','Samgung');
        expect(result).toBeCloseTo(0);
    });
    it('should compare Huawei and Samsung and return 0', async () => {
        let result = await diceSimilarity.getSimilarity('Huawei','Samsung');
        expect(result).toBeCloseTo(0);
    });
    it('should return 0 if empty value is passed', async () => {
        let result = await diceSimilarity.getSimilarity('','');
        expect(result).toBeCloseTo(0);
    });
    it('should return 0 if null value is passed', async () => {
        let result = await diceSimilarity.getSimilarity(null,'');
        expect(result).toBeCloseTo(0);
    });
    it('should return 0 if undefined value is passed', async () => {
        let result = await diceSimilarity.getSimilarity(undefined,'');
        expect(result).toBeCloseTo(0);
    });
});

