import React from 'react';
import { shallow, mount } from 'enzyme';

import CustomScrollBarWrapperView from '../custom-scroll-bar-wrapper.view';

describe('CustomScrollBarWrapperView - Unit Test', () => {
    global.customOnScrollEvent = jest.fn();

    it('should render without crashing', () => {
        shallow(<CustomScrollBarWrapperView />);
    });

    it('should render trackers without crashing', () => {
        const wrapper = mount(<CustomScrollBarWrapperView />)
            .find('.custom-scroll-bar-wrapper')
            .first()
            .instance();
        wrapper.props.renderTrackVertical({ style: null });
        wrapper.props.renderThumbVertical({ style: null });
    });

    it('should call the appropriate global methods', () => {
        const wrapper = mount(<CustomScrollBarWrapperView global />)
            .find('.custom-scroll-bar-wrapper')
            .first()
            .instance();
        wrapper.props.onScrollFrame({ left: 0 });
        expect(global.customOnScrollEvent).toHaveBeenCalledWith({ left: 0 });
    });

    it('should call the appropriate local methods', () => {
        const wrapper = mount(<CustomScrollBarWrapperView global />)
            .find('.custom-scroll-bar-wrapper')
            .first()
            .instance();
        wrapper.props.onScrollFrame({ left: 100 });
        expect(global.customOnScrollEvent).toHaveBeenCalledWith({ left: 100 });
    });
});
