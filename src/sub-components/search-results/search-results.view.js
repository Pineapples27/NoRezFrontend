import PropTypes from "prop-types";
import React,{Component} from "react";
import _ from 'lodash';
import SearchResultView from "./search-result/search-result.view";

export default class SearchResultsView extends Component {
  constructor(props) {
    super(props);

    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  render(){
    const {searchResponse}=this.props;
    return(
      <div className="search-results-container">
        {_.map(searchResponse, this.buildSearchResult)}
      </div>
    )
  }

  buildSearchResult(searchResult){
    return(
      <SearchResultView
        searchResult={searchResult}
      />
    )
  }
}

SearchResultsView.propTypes = {
  searchResponse: PropTypes.object,
};