import _ from 'lodash';

import CreateAction from '../../redux/action-utilities/action-creator';
import { accountService, contentService } from '../../services/services';

const reducerName = 'home';

const setIsLoading = new CreateAction(
    reducerName,
    'SET_IS_LOADING'
);
export const setIsLoadingAction = setIsLoading.action;

const setIsLoadingContentCatalogue = new CreateAction(
    reducerName,
    'SET_IS_LOADING_CONTENT_CATALOGUE'
);
export const setIsLoadingContentCatalogueAction = setIsLoadingContentCatalogue.action;

const setCarouselContent = new CreateAction(
  reducerName,
  'SET_CAROUSEL_CONTENT'
);
export const setCarouselContentAction = setCarouselContent.action;

const setFeaturedContent = new CreateAction(reducerName, 'SET_FEATURED_CONTENT');
export const setFeaturedContentAction = setFeaturedContent.action;

const setContentCatalogue = new CreateAction(reducerName, 'SET_CONTENT_CATALOGUE');
export const setContentCatalogueAction = setContentCatalogue.action;

const setSelectedItem = new CreateAction(reducerName, 'SET_SELECTED_ITEM');
export const setSelectedItemAction = setSelectedItem.action;

// export function loadFeaturedContentAsyncAction() {
//     return (dispatch, getState) => {
//         const { featuredContent } = getState().homeReducer;
//         if (!_.isEmpty(featuredContent)) {
//             return;
//         }
//         dispatch(setIsLoadingFeaturedContentAction(true));
//         // const request = contentService.getFeaturedContentList();
//         // dispatch(setFeaturedContentAction(request));
//     };
// }

// export function loadCarouselContentAsyncAction() {
//     return (dispatch, getState) => {
//         const { carouselContent } = getState().homeReducer;
//         console.warn("carouselContent: ", carouselContent);
//         if (!_.isEmpty(carouselContent)) {
//             return;
//         }
//         dispatch(setIsLoadingFeaturedContentAction(true));
//         const request = contentService.fetchCarousel();
//         dispatch(setCarouselContentAction(request));
//     };
// }

export function loadContentCatalogueAsyncAction() {
    return (dispatch, getState) => {
        const { contentCatalogue } = getState().homeReducer;
        if (!_.isEmpty(contentCatalogue)) {
            return;
        }
        dispatch(setIsLoadingContentCatalogueAction(true));
        // const request = contentService.getContentLists();
        // dispatch(setContentCatalogueAction(request));
    };
}

const initialState = {
    isLoading: false,
    carouselContent: null,

    isLoadingContentCatalogue: false,
    featuredContent: null,
    contentCatalogue: null,
    selectedItem: null
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case setIsLoading.actionType:
            return { ...state, isLoading: action.payload };
        case setCarouselContent.actionType:
            return { ...state, carouselContent: action.payload };
        case setIsLoadingContentCatalogue.actionType:
            return { ...state, isLoadingContentCatalogue: action.payload };
        case setFeaturedContent.actionType:
            return { ...state, featuredContent: action.payload, isLoadingFeaturedContent: false };
        case setContentCatalogue.actionType:
            return { ...state, contentCatalogue: action.payload, isLoadingContentCatalogue: false };
        case setSelectedItem.actionType:
            return { ...state, selectedItem: action.payload };
        default:
            return state;
    }
}
