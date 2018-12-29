import _ from 'lodash';
import contentUrls from './content-service-urls';
import networkService from '../network-service/network-service';

function fetchCarousel() {
  const url = contentUrls.fetchCarouselUrl();

  return networkService.makeGetRequest(url).then(response => {
    const carouselContent = _.get(response, 'data', null);
    if (!carouselContent) {
      return null;
    }
  });
}


export default {
  fetchCarousel
};