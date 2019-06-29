import axios from 'axios';
import _ from 'lodash';

import accountService from '../account-service/account-service';

function makeGetRequest(url, config) {
    const defaultConfig = {
        // requestConfig: getAuthenticationConfig(),
        responseManipulator: response => response.data
    };
    const { requestConfig, responseManipulator } = _.assign(defaultConfig, config);

    return axios
        .get(url, requestConfig)
        .then(response => responseManipulator(response))
        .catch(error => {
            const errorMessage = _.get(error, 'response.data.message');
            console.warn(`GET REQUEST ERROR: ${errorMessage}\nURL: ${url}`);
            return null;
        });
}

function makePost(url, data, config) {
    const defaultConfig = {
        // requestConfig: getAuthenticationConfig(),
        responseManipulator: response => response.data
    };
    const { requestConfig, responseManipulator } = _.assign(defaultConfig, config);

    return axios
        .post(url, data, requestConfig)
        .then(response => responseManipulator(response))
        .catch(error => {
            const errorMessage = _.get(error, 'response.data.message');
            console.warn(`POST ERROR: ${errorMessage}\nURL: ${url}`);
            return null;
        });
}

function makeDelete(url, config) {
    const defaultConfig = {
        // requestConfig: getAuthenticationConfig(),
        responseManipulator: response => response.data
    };
    const { requestConfig, responseManipulator } = _.assign(defaultConfig, config);

    return axios
        .delete(url, requestConfig)
        .then(response => responseManipulator(response))
        .catch(error => {
            const errorMessage = _.get(error, 'response.data.message');
            console.warn(`DELETE ERROR: ${errorMessage}\nURL: ${url}`);
            return null;
        });
}

// function getAuthenticationConfig() {
//     // const userToken = accountService.getUserToken();
//     const userToken = "RANDOMTOKEN";
//     if (!userToken) {
//         return null;
//     }
//     return { headers: { Authorization: `Bearer ${userToken}` } };
// }

export default {
    makeGetRequest,
    makePost,
    makeDelete
};
