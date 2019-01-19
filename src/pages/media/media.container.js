import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MediaView from './media.view';
import {
  loadVideosAsync, loadSearchChannelByUsername
} from "./media.reducer";

export function mapStateToProps({ mediaReducer }) {
  return { ...mediaReducer };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadVideosAsync,
      loadSearchChannelByUsername
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaView);
