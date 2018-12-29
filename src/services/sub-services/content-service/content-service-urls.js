import baseUrl from '../base-url';

const contentBaseUrl = `${baseUrl.apiBaseUrl()}/content`;

export default {
  fetchCarouselUrl: () => `${contentBaseUrl}/carousel`
};
