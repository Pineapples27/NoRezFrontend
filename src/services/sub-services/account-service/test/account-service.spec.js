import moxios from 'moxios';

import accountService, { USER_JWT_KEY } from '../account-service';

describe('accountService - Unit Test', () => {
    const jwtToken = 'someJwtToken';

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    function respondToRequest(response) {
        const request = moxios.requests.mostRecent();
        return request.respondWith(response);
    }

    function validateRequestResponse(request, expected, done) {
        request.then(actual => {
            expect(actual).toEqual(expected);
            done();
        });
    }

    describe('login', () => {
        it('should return the user JWT token and profile - Success Case', done => {
            const response1 = { status: 200, response: { jwt: jwtToken } };
            const response2 = { status: 200, response: { some: 'profile' } };

            const expected = { some: 'profile' };

            const serviceRequest = accountService.login();

            moxios.wait(() =>
                respondToRequest(response1).then(() =>
                    respondToRequest(response2).then(() =>
                        validateRequestResponse(serviceRequest, expected, validateLoginSuccess)
                    )
                )
            );

            function validateLoginSuccess() {
                expect(localStorage.getItem(USER_JWT_KEY)).toBe(jwtToken);
                done();
            }
        });

        it('should return null - Failure Case', done => {
            const response = {
                status: 400,
                response: {
                    message: 'some error'
                }
            };

            const expected = null;

            const serviceRequest = accountService.login();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request
                    .respondWith(response)
                    .then(() => validateRequestResponse(serviceRequest, expected, done));
            });
        });
    });

});
