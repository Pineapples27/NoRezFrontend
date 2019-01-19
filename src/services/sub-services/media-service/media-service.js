import mediaUrls from './media-service-urls';
import networkService from "../network-service/network-service";
import _ from "lodash";

function fetchVideo() {
  const url = mediaUrls.fetchVideo();

  return networkService.makeGetRequest(url).then(response => {
    console.log(response);
    console.log("HI")
  });
}

function fetchChannelsByUsername(searchTerm) {
  const url = mediaUrls.findByUsernameUrl(searchTerm);

  return networkService.makeGetRequest(url).then(response => {
    console.log(response);
    return response;
  });
}

export default {
  fetchVideo,
  fetchChannelsByUsername
};