import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeView from './home.view';
import {
    setSelectedItemAction,
    loadContentCatalogueAsyncAction,
} from './home.reducer';

export function mapStateToProps({ homeReducer }) {
    return { ...homeReducer };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setSelectedItemAction,
            loadContentCatalogueAsyncAction,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);
