import _ from 'lodash';

import accountUrls from './account-service-urls';
import networkService from '../network-service/network-service';

export const USER_JWT_KEY = 'noRezUserJwt';

function login(username, password) {
    const url = accountUrls.loginUrl();

    return networkService.makePost(url, { username, password }).then(response => {
        const jwt = _.get(response, 'jwt', null);
        if (!jwt) {
            return null;
        }
        // setUserToken(jwt);
        // return getUserProfile();
    });
}


export default {
    login
};
