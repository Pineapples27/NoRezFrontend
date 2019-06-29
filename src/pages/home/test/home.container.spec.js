import { bindActionCreators } from 'redux';

import { mapStateToProps, mapDispatchToProps } from '../home.container';
import {
    setSelectedItemAction,
    loadFeaturedContentAsyncAction,
    loadContentCatalogueAsyncAction
} from '../home.reducer';

jest.mock('redux');

describe('homeContainer - Unit test', () => {
    function stateBefore() {
        return {
            homeReducer: {
                isLoadingFeaturedContent: false,
                isLoadingContentCatalogue: false,
                featuredContent: null,
                contentCatalogue: null,
                selectedItem: null
            }
        };
    }

    it('should map state to props', () => {
        const actual = mapStateToProps(stateBefore());

        const expected = {
            isLoadingFeaturedContent: false,
            isLoadingContentCatalogue: false,
            featuredContent: null,
            contentCatalogue: null,
            selectedItem: null
        };

        expect(actual).toEqual(expected);
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch);

        expect(bindActionCreators).toHaveBeenCalledWith(
            {
                setSelectedItemAction,
                loadFeaturedContentAsyncAction,
                loadContentCatalogueAsyncAction
            },
            dispatch
        );
    });
});
