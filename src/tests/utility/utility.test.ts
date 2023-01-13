import { getInputGroupType } from "../../utility/utility";

describe('utility#getInputGroupType', () => {
    // x = 35, n = 10
    test.skip('x = 35, n = 10', () => {
        const response = getInputGroupType(35, 10);
        expect(JSON.stringify(response)).toBe(JSON.stringify([
            { s: 0, e: 9 },
            { s: 10, e: 19 },
            { s: 20, e: 29 },
            { s: 30, e: 34 }
        ]));
    });
    // x = 35
    test.skip('[Default argument to n is 10] & x = 35', () => {
        const response = getInputGroupType(35, 10);
        expect(JSON.stringify(response)).toBe(JSON.stringify([
            { s: 0, e: 9 },
            { s: 10, e: 19 },
            { s: 20, e: 29 },
            { s: 30, e: 34 }
        ]));
    });
    test('x = 35 && n = 5', () => {
        const response = getInputGroupType(35, 5);
        console.log(response);
        // expect(JSON.stringify(response)).toBe(JSON.stringify([
        //     { s: 0, e: 9 },
        //     { s: 10, e: 19 },
        //     { s: 20, e: 29 },
        //     { s: 30, e: 34 }
        // ]));
    });
});
