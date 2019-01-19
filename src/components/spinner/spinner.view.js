import React, { Component } from 'react';
import { PacmanLoader } from 'react-spinners';
import styles from './_spinner.styles.scss';

export default class SpinnerView extends Component {

  render() {
    return (
        <div className="spinner-container">
          <div className="spinner">
            <PacmanLoader
              // css={styles.spinner}
              // sizeUnit={'%'}
              size={50}
              color={"#00bf60"}
            />
          </div>

      </div>
    );
  }

}