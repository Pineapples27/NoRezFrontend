import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import NavigationBar from './navigationBar.view';

export default withRouter(connect()(NavigationBar));
