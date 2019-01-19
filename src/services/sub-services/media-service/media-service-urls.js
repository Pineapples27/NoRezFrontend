import baseUrl from '../base-url';

const API_KEY = "AIzaSyBqwJFQYYR-SuXDQ01qenimUAuMvGoF93Q";
const channelID = "UCs3o4RhBiP2wcwqkZR2QVLw";
const maxResults = 10;
const url =
  "https://www.googleapis.com/youtube/v3/search?key=" +
  API_KEY +
  "&channelId=" +
  channelID +
  "&part=snippet,id&order=date&maxResults=" +
  maxResults;

const youtubeSearchBaseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`;
const youtubeChannelBaseUrl = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}`;

export default {
  fetchVideo: () => `${youtubeSearchBaseUrl}&channelId=${channelID}&part=snippet`,
  findByUsernameUrl: (searchTerm) => `${youtubeChannelBaseUrl}&forUsername=${searchTerm}&part=snippet, contentDetails`
};
