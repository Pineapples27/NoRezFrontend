import React, { Component } from 'react';
import PropTypes from 'prop-types';
import route from '../../assets/routes/route';
import { Navbar, MenuItem, Nav, NavItem, NavDropdown} from "react-bootstrap";
import _ from 'lodash';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
  }

  componentDidMount() {
    this.loadSelectedNavigationBarItem();
  }

  componentDidUpdate(previousProps) {
    this.loadSelectedNavigationBarItem(previousProps.location);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">No Rez Gaming</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Podcasts
            </NavItem>
            <NavItem eventKey={2} href="#">
              News
            </NavItem>
            <NavItem eventKey={3} href="#">
              SA Games
            </NavItem>
            <NavItem eventKey={4} href="#">
              Cosplay
            </NavItem>
            <NavDropdown eventKey={5} title="Reviews" id="basic-nav-dropdown">
              <MenuItem eventKey={5.1}>PC Master Race</MenuItem>
              <MenuItem eventKey={5.2}>Sony PS4</MenuItem>
              <MenuItem eventKey={5.3}>XBox1</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.3}>Mobile Games</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={()=>this.navigateTo(route.navigationItems.calender)}>
              Calender
            </NavItem>
            <NavItem eventKey={2} href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        );
  }

  navigateTo(route) {
    this.props.history.push(route.route);
  }

  loadSelectedNavigationBarItem(previousLocation) {
    const { location, setSelectedNavigationBarItemAction } = this.props;
    const previousPath = getPathForLocation(previousLocation);
    // const previousTypePath = getPathForType(previousLocation);
    const currentPath = getPathForLocation(location);
    // const currentTypePath = getPathForType(location);
    if (previousPath !== currentPath) {
      // this.handleShowNavigationBar(true);
      if (_.some(route.navigationBarItems, ['route', currentPath])) {
        // return setSelectedNavigationBarItemAction(currentPath);
      }
      // setSelectedNavigationBarItemAction(currentTypePath);
    }

    function getPathForLocation(location) {
      const pathname = _.get(location, 'pathname');
      return `/${_.split(pathname, '/')[1]}`;
    }

    // function getPathForType(location) {
    //   const type = _.get(location, 'state.type');
    //   switch (type) {
    //     case contentService.CONTENT_TYPES.movie:
    //       return routes.navigationItems.movies.route;
    //     case contentService.CONTENT_TYPES.series:
    //       return routes.navigationItems.series.route;
    //     case contentService.CONTENT_TYPES.musicVideo:
    //       return routes.navigationItems.music.route;
    //     case contentService.CONTENT_TYPES.rentOrBuy:
    //       return routes.navigationItems.rentOrBuy.route;
    //     default:
    //       return null;
    //   }
    // }
  }
}

NavigationBar.propTypes = {
        history: PropTypes.object
};
