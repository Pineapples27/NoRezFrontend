import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

export default class CustomScrollBarWrapperView extends Component {
    constructor(props) {
        super(props);

        this.registerScrollbars = this.registerScrollbars.bind(this);
        this.onFrameScroll = this.onFrameScroll.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

        this.scrollHandlerRef = null;

        this.state = { windowMaxHeight: this.props.getMaxHeight() };
    }

    render() {
        const { autoHide, thumbWidth, children } = this.props;
        const { windowMaxHeight } = this.state;
        return (
            <Scrollbars
                ref={this.registerScrollbars}
                className="custom-scroll-bar-wrapper"
                onScrollFrame={this.onFrameScroll}
                autoHide={autoHide}
                autoHeight={true}
                autoHeightMax={windowMaxHeight}
                renderTrackHorizontal={() => <div />}
                renderThumbHorizontal={() => <div />}
                renderTrackVertical={renderVerticalScrollBar}
                renderThumbVertical={renderVerticalScrollIndicator}
                onUpdate={this.handleUpdate}
            >
                {children}
            </Scrollbars>
        );

        function renderVerticalScrollBar(props) {
            const style = {
                width: `${thumbWidth}vw`,
                right: `${thumbWidth}vw`,
                bottom: `${thumbWidth}vw`,
                top: `${thumbWidth}vw`,
                borderRadius: `${thumbWidth}vw`
            };

            return (
                <div
                    {...props}
                    style={{ ...props.style, ...style }}
                    className="scroll-bar-vertical"
                />
            );
        }

        function renderVerticalScrollIndicator(props) {
            return <div {...props} className="scroll-thumb-vertical" />;
        }
    }

    registerScrollbars(ref) {
        this.scrollHandlerRef = ref;
        if (this.props.global) {
            global.customScrollHandler = ref;
        }
    }

    onFrameScroll(props) {
        if (props.left !== 0) {
            this.scrollHandlerRef.scrollLeft();
        }
        if (this.props.global && global.customOnScrollEvent) {
            global.customOnScrollEvent(props);
        }
    }

    handleUpdate() {
        const { getMaxHeight } = this.props;
        const { windowMaxHeight } = this.state;
        if (windowMaxHeight !== getMaxHeight()) {
            this.setState({ windowMaxHeight: getMaxHeight() });
        }
    }
}

CustomScrollBarWrapperView.propTypes = {
    autoHide: PropTypes.bool,
    thumbWidth: PropTypes.number,
    children: PropTypes.any,
    global: PropTypes.bool,

    getMaxHeight: PropTypes.func
};

CustomScrollBarWrapperView.defaultProps = {
    autoHide: true,
    thumbWidth: 0.25,
    global: false,

    getMaxHeight: () => window.innerHeight
};
