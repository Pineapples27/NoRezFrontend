import PropTypes from "prop-types";
import React,{Component} from "react";

export default class SearchResultView extends Component {
  constructor(props) {
    super(props);

    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  render(){
    const {searchResult}=this.props;
    console.log("searchResult:", searchResult);
    return(
      <div className="search-result-container">
        <img src={searchResult.snippet.thumbnails.default.url}/>
        <div className="result-text">Username: {searchResult.snippet.customUrl}</div>
        <div className="result-text">Title: {searchResult.snippet.title}</div>
      </div>
    )
  }
}

SearchResultView.propTypes = {
  searchResult: PropTypes.object,
};