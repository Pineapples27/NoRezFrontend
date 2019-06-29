import baseUrl from '../base-url';

const accountBaseUrl = `${baseUrl.apiBaseUrl()}/account`;

export default {
    loginUrl: () => `${accountBaseUrl}/authentication/login`
};
