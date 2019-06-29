import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../assets/routes/route';
import HomeContainer from '../pages/home/home.container';
import CalenderContainer from '../pages/calender/calender.container';
import MediaContainer from '../pages/media/media.container';
import './App.scss';
import _ from 'lodash';
import NavigationBar from '../components/navigationBar/navigationBar.container';
import CustomScrollBarWrapperView from '../sub-components/custom-scroll-bar-wrapper/custom-scroll-bar-wrapper.view';


const ROUTES = {};
_.forEach(routes.navigationItems, (item, key) => (ROUTES[key] = item.route));

export default class App extends Component {
  render() {
    return (
      <Router>
        <CustomScrollBarWrapperView global>
          <NavigationBar/>
          <Switch>
            <Route exact path={ROUTES.home} component={HomeContainer}/>
            <Route exact path={ROUTES.calender} component={CalenderContainer}/>
            <Route exact path={ROUTES.media} component={MediaContainer}/>
          </Switch>
        </CustomScrollBarWrapperView>
      </Router>
    )
  }
}