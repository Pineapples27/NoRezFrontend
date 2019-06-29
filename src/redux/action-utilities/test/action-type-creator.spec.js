import buildActionType from '../action-type-creator';

describe('Build Action Name - Unit Test', () => {
    it('should return an action name', () => {
        const actual = buildActionType('someReducer', 'SOME_ACTION');
        const expected = 'Black/someReducer/SOME_ACTION';
        expect(actual).toEqual(expected);
    });

    it('should throw error when reducer name not given', () => {
        try {
            buildActionType();
        } catch (e) {
            expect(e.message).toEqual('Reducer name cannot be blank');
        }
    });

    it('should throw error when action name not given', () => {
        try {
            buildActionType('someReducer');
        } catch (e) {
            expect(e.message).toEqual('Action name cannot be blank');
        }
    });
});
