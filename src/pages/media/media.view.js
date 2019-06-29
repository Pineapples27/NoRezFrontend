import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarView from "../../sub-components/search-bar/search-bar.view";
import SearchResultsView from "../../sub-components/search-results/search-results.view";

export default class MediaView extends Component {
  constructor(props) {
    super(props);

    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    this.props.loadVideosAsync();
  }

  render(){
    const {searchValue, loadSearchChannelByUsername, searchResponse} = this.props;
    return(
      <div>
        <h1>Media View</h1>
        <SearchBarView
          value={searchValue}
          onChange={loadSearchChannelByUsername}
        />
        <SearchResultsView
          searchResponse={searchResponse != null ? searchResponse.items : null}
        />
      </div>
    )
  }
}

MediaView.propTypes = {
  history: PropTypes.object,

  loadVideosAsync: PropTypes.func,
  loadSearchChannelByUsername: PropTypes.func
};