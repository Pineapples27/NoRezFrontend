import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselView from '../../components/carousel/carousel.view';
import SpinnerView from "../../components/spinner/spinner.view";

export default class HomeView extends Component {
    constructor(props) {
        super(props);

        this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        console.log("Component did mount!");
        // this.props.loadCarouselContentAsyncAction();
    }

    render() {
        return (
            <div className="home">
                {this.renderPage()}
                <SpinnerView/>
            </div>
        );
    }

    renderPage(){
        return(
          <div>
              <div className="mainHeading">Welcome to No Rez Gaming!</div>
              <CarouselView/>
          </div>
        )
    }

    navigateTo(route) {
        this.props.history.push(route);
    }
}

HomeView.propTypes = {
    history: PropTypes.object,

    carouselContent: PropTypes.object,
};
