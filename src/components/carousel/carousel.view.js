import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import React, {Component} from "react";
import './slider-animations.css';
import './carousel.css';
import 'normalize.css/normalize.css';

export default class CarouselView extends Component {

  render() {
    const content = [
      {
        title: 'NEWS',
        description:
          'Play Station 5 To Be Announced 1 January 2019',
        button: 'Read More',
        image: 'https://images.wallpaperscraft.com/image/playstation_gamepad_crash_22102_1920x1080.jpg'
      },
      {
        title: 'REVIEWS: FarCry 3 Old But Gold!',
        description:
          'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://images.wallpaperscraft.com/image/far_cry_3_beach_game_graphics_hdr_95932_1920x1080.jpg'
      },
      {
        title: 'PODCASTS: Syndicate Review and Discussion',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        image: 'https://images.wallpaperscraft.com/image/assassins_creed_syndicate_jacob_frye_112077_1920x1080.jpg'
      }
    ];
    return (
      <div>
        <Slider
          className="slider-wrapper" autoplay={1000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
							Posted by <strong>{item.user}</strong>
						</span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

CarouselView.propTypes = {
};




