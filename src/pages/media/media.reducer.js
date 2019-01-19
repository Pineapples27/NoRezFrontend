import {mediaService} from '../../services/services';
import CreateAction from "../../redux/action-utilities/action-creator";

const reducerName = 'media';

const setIsLoading = new CreateAction(reducerName,'SET_IS_LOADING');
export const setIsLoadingAction = setIsLoading.action;

const setMediaObject = new CreateAction(reducerName,'SET_MEDIA_OBJECT');
export const setMediaObjectAction = setMediaObject.action;

const setSearchValue = new CreateAction(reducerName,'SET_SEARCH_VALUE');
export const setSearchValueAction = setSearchValue.action;

const setSearchResponse = new CreateAction(reducerName,'SET_SEARCH_RESPONSE');
export const setSearchResponseAction = setSearchResponse.action;

export function loadVideosAsync() {
    return (dispatch) => {
        dispatch(setIsLoadingAction(true));
        const request = mediaService.fetchVideo();
        dispatch(setMediaObjectAction(request));
    };
}

export function loadSearchChannelByUsername(searchValue){
  return (dispatch)=> {
    dispatch(setSearchValueAction(searchValue));
    dispatch(setIsLoadingAction(true));
    const request = mediaService.fetchChannelsByUsername(searchValue);
    dispatch(setSearchResponseAction(request));
  }
}

const initialState = {
  isLoading: false,
  media: null,
  searchValue: null,
  searchResponse: null
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case setIsLoading.actionType:
      return { ...state, isLoading: action.payload };
    case setMediaObject.actionType:
      return { ...state, media: action.payload };
    case setSearchValue.actionType:
      return { ...state, searchValue: action.payload };
    case setSearchResponse.actionType:
      return { ...state, searchResponse: action.payload };
    default:
      return state;
  }
}
