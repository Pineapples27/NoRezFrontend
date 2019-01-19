import PropTypes from "prop-types";
import React,{Component} from "react";

export default class SearchBarView extends Component {
  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  render(){
    const {value} = this.props;
    return(
      <div className="search-bar-container">
        <input className="search-bar" onChange={this.onSearchChange} value={value}/>
      </div>
    )
  }

  onSearchChange(event){
    const {onChange} = this.props;
    onChange(event.target.value);
  }
}

SearchBarView.propTypes = {
  value: PropTypes.string,
};