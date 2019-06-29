import homeReducer, {
    setIsLoadingFeaturedContentAction,
    setIsLoadingContentCatalogueAction,
    setFeaturedContentAction,
    setContentCatalogueAction,
    setSelectedItemAction,
    loadFeaturedContentAsyncAction,
    loadContentCatalogueAsyncAction
} from '../home.reducer';
import { contentService } from '../../../services/black-services';

describe('homeReducer - Unit Test', () => {
    function stateBefore() {
        return {
            isLoadingFeaturedContent: false,
            isLoadingContentCatalogue: false,
            featuredContent: null,
            contentCatalogue: null,
            selectedItem: null
        };
    }

    it('should return initial state when action is undefined', () => {
        const action = {};

        const actual = homeReducer(undefined, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    it('should return current state when unknown action is dispatched', () => {
        const action = { type: 'SOME_UNKNOWN_ACTION' };

        const currentState = {
            ...stateBefore()
        };

        const actual = homeReducer(currentState, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    describe('setIsLoadingFeaturedContentAction', () => {
        it('should set the isLoadingFeaturedContent on setIsLoadingFeaturedContentAction', () => {
            const payload = true;

            const action = setIsLoadingFeaturedContentAction(payload);

            const actual = homeReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                isLoadingFeaturedContent: payload
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setIsLoadingContentCatalogueAction', () => {
        it('should set the isLoadingContentCatalogue on setIsLoadingContentCatalogueAction', () => {
            const payload = true;

            const action = setIsLoadingContentCatalogueAction(payload);

            const actual = homeReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                isLoadingContentCatalogue: payload
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setFeaturedContentAction', () => {
        it('should set the featuredContent and isLoadingFeaturedContent on setFeaturedContentAction', () => {
            const payload = ['memes'];

            const action = setFeaturedContentAction(payload);

            const actual = homeReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                featuredContent: payload,
                isLoadingFeaturedContent: false
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setContentCatalogueAction', () => {
        it('should set the contentCatalogue and isLoadingContentCatalogue on setContentCatalogueAction', () => {
            const payload = ['memes'];

            const action = setContentCatalogueAction(payload);

            const actual = homeReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                contentCatalogue: payload,
                isLoadingContentCatalogue: false
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('setSelectedItemAction', () => {
        it('should set the selectedItem on setSelectedItemAction', () => {
            const payload = { some: 'memes' };

            const action = setSelectedItemAction(payload);

            const actual = homeReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                selectedItem: payload
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('loadFeaturedContentAsyncAction', () => {
        const dispatch = jest.fn();
        const payload = {
            heading: 'Featured',
            contentResources: [
                {
                    uuid: 'd844cac6-3f94-4a0c-8486-270826986d05',
                    title: 'Paranormal Activity 4',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034258.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034258.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034258.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034258.jpg',
                                dominantColors: ['#293f60', '#deb7bd', '#87aecd', '#6d91bb']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034266.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034268.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034271.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180322034265.jpg',
                                dominantColors: ['#2f486d', '#e1c1c6', '#8cb1d0', '#7294ba']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/d844cac6-3f94-4a0c-8486-270826986d05'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/d844cac6-3f94-4a0c-8486-270826986d05'
                        }
                    }
                },
                {
                    uuid: '8393eb8b-f98d-4cb2-99b5-b973aa71af48',
                    title: 'Pulp Fiction',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034601.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034601.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034601.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034601.jpg',
                                dominantColors: [
                                    '#c5211d',
                                    '#302427',
                                    '#debf6d',
                                    '#70779f',
                                    '#549bc6'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034609.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034611.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034614.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180323034608.jpg',
                                dominantColors: [
                                    '#e06e3a',
                                    '#332324',
                                    '#93b0c0',
                                    '#89473b',
                                    '#5a6ea7'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/8393eb8b-f98d-4cb2-99b5-b973aa71af48'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/8393eb8b-f98d-4cb2-99b5-b973aa71af48'
                        }
                    }
                },
                {
                    uuid: '4e6e555b-e064-4597-ab79-7b32fd159676',
                    title: 'Baby Driver',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022602.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022602.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022602.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022602.jpg',
                                dominantColors: ['#d35564', '#edcda4', '#8a3224', '#938fc1']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022596.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022598.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022601.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171201022595.jpg',
                                dominantColors: ['#8c553d', '#f3d6a5', '#e55266', '#9e95b2']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/4e6e555b-e064-4597-ab79-7b32fd159676'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/4e6e555b-e064-4597-ab79-7b32fd159676'
                        }
                    }
                }
            ]
        };

        beforeEach(() => {
            dispatch.mockClear();
            contentService.getFeaturedContentList = jest.fn(() => payload);
        });

        it('should set isLoadingFeaturedContent and featuredContent when loadFeaturedContentAsyncAction is dispatched', () => {
            function getState() {
                return {
                    homeReducer: {
                        featuredContent: null,
                        contentCatalogue: null
                    }
                };
            }
            loadFeaturedContentAsyncAction()(dispatch, getState);

            expect(dispatch).toHaveBeenCalledWith(setIsLoadingFeaturedContentAction(true));
            expect(contentService.getFeaturedContentList).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith(setFeaturedContentAction(payload));
            expect(dispatch).toHaveBeenCalledTimes(2);
        });

        it('should do nothing when featuredContent already exists', () => {
            function getState() {
                return {
                    homeReducer: {
                        featuredContent: { some: 'content' },
                        contentCatalogue: null
                    }
                };
            }
            loadFeaturedContentAsyncAction()(dispatch, getState);

            expect(contentService.getFeaturedContentList).toHaveBeenCalledTimes(0);
            expect(dispatch).toHaveBeenCalledTimes(0);
        });
    });

    describe('loadContentCatalogueAsyncAction', () => {
        const dispatch = jest.fn();
        const payload = [
            {
                heading: 'New Releases',
                contentResources: [
                    {
                        uuid: '54ac533e-6c29-4a65-ad74-6a43df6de3ab',
                        title: 'Batman: Gotham By Gaslight',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030608.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030608.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030608.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030608.jpg',
                                    dominantColors: [
                                        '#151c19',
                                        '#c2bfa5',
                                        '#6b9a95',
                                        '#567065',
                                        '#56888f'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030602.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030604.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030607.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180214030601.jpg',
                                    dominantColors: [
                                        '#1d2928',
                                        '#cdc9b1',
                                        '#81a398',
                                        '#727760',
                                        '#5e9097'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/54ac533e-6c29-4a65-ad74-6a43df6de3ab'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/54ac533e-6c29-4a65-ad74-6a43df6de3ab'
                            }
                        }
                    },
                    {
                        uuid: 'b8d4eb68-0a9d-4fc3-ad5b-9b2300714229',
                        title: 'Welcome The Stranger',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033638.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033638.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033638.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033638.jpg',
                                    dominantColors: ['#c5a89a', '#689c5d', '#5f452f', '#5f6b95']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033632.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033634.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033637.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180315033631.jpg',
                                    dominantColors: ['#c9aba0', '#709f6d', '#694433', '#646e94']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/b8d4eb68-0a9d-4fc3-ad5b-9b2300714229'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/b8d4eb68-0a9d-4fc3-ad5b-9b2300714229'
                            }
                        }
                    },
                    {
                        uuid: '08aaf71e-8064-4cc5-8182-e4ab12f1b71b',
                        title: 'Suicide Squad: Hell to Pay',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042054.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042054.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042054.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042054.jpg',
                                    dominantColors: [
                                        '#c9d0d5',
                                        '#353035',
                                        '#823e32',
                                        '#7a858c',
                                        '#8b6b5c'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042048.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042050.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042053.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180416042047.jpg',
                                    dominantColors: [
                                        '#c5cdd2',
                                        '#2f2c31',
                                        '#7e3c31',
                                        '#748088',
                                        '#8a6b5d'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/08aaf71e-8064-4cc5-8182-e4ab12f1b71b'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/08aaf71e-8064-4cc5-8182-e4ab12f1b71b'
                            }
                        }
                    },
                    {
                        uuid: '11682e1a-d04b-4182-872b-2887876a5476',
                        title: 'Deep Blue Sea 2',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043468.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043468.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043468.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043468.jpg',
                                    dominantColors: ['#2e6ea2', '#e5dadd', '#1e252a', '#72c2d6']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043462.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043464.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043467.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043461.jpg',
                                    dominantColors: ['#326fa0', '#eedbdc', '#70c1d9']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/11682e1a-d04b-4182-872b-2887876a5476'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/11682e1a-d04b-4182-872b-2887876a5476'
                            }
                        }
                    },
                    {
                        uuid: '33bd6884-07cf-4012-aae8-6f2078e07621',
                        title: 'The Swan Princess: A Royal Myztery',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043454.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043454.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043454.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043454.jpg',
                                    dominantColors: [
                                        '#1852bb',
                                        '#cda163',
                                        '#412b25',
                                        '#68aee7',
                                        '#323467'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043448.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043450.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043453.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180423043447.jpg',
                                    dominantColors: [
                                        '#1e50bc',
                                        '#d8a765',
                                        '#583820',
                                        '#4991e8',
                                        '#76bee7'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/33bd6884-07cf-4012-aae8-6f2078e07621'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/33bd6884-07cf-4012-aae8-6f2078e07621'
                            }
                        }
                    }
                ],
                _links: {
                    self: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/catalogue/661bce56-42cb-4911-b34d-90308846d90b'
                    }
                }
            },
            {
                heading: 'Trending',
                contentResources: [
                    {
                        uuid: '42a3687c-debb-4f00-83ec-a1ee150ed38c',
                        title: 'Dreamgirls',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171101007607.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171101007607.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171101007607.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171101007607.jpg',
                                    dominantColors: [
                                        '#156fae',
                                        '#d3e7f4',
                                        '#77bee8',
                                        '#825049',
                                        '#bf8068'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007601.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007603.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007606.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171101007600.jpg',
                                    dominantColors: ['#d5e6f2', '#2aa9e0', '#844e45', '#c28167']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/42a3687c-debb-4f00-83ec-a1ee150ed38c'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/42a3687c-debb-4f00-83ec-a1ee150ed38c'
                            }
                        }
                    },
                    {
                        uuid: '8de9c7bf-646c-4fe9-8b07-37764514d2a6',
                        title: 'Harry Potter and the Chamber of Secrets',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007656.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007656.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007656.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007656.jpg',
                                    dominantColors: [
                                        '#c6bf90',
                                        '#121d15',
                                        '#6d9c82',
                                        '#5e6047',
                                        '#5e7693'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170916007658.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170916007660.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170916007663.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007657.jpg',
                                    dominantColors: [
                                        '#d6c990',
                                        '#122018',
                                        '#6bab7f',
                                        '#6d5e3e',
                                        '#788096'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/8de9c7bf-646c-4fe9-8b07-37764514d2a6'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/8de9c7bf-646c-4fe9-8b07-37764514d2a6'
                            }
                        }
                    },
                    {
                        uuid: 'cc387989-2b96-4f22-89a6-161f928dbf23',
                        title: 'Living On Soul',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022874.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022874.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022874.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022874.jpg',
                                    dominantColors: ['#e5e2dc', '#141314', '#ef2125', '#8f8885']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022868.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022870.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022873.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180306022867.jpg',
                                    dominantColors: ['#121112', '#f12622', '#e4e1da', '#918885']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/cc387989-2b96-4f22-89a6-161f928dbf23'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/cc387989-2b96-4f22-89a6-161f928dbf23'
                            }
                        }
                    },
                    {
                        uuid: '5bcef508-1694-4f2f-95ef-e96d7bf0b98f',
                        title: 'Harry Potter and the Goblet of Fire',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    dominantColors: ['#b7b6b8', '#2e6378', '#5ea1b3', '#4a879f']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007553.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007555.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007558.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007552.jpg',
                                    dominantColors: ['#bab7b2', '#386670', '#5fa0b0', '#4f849a']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/5bcef508-1694-4f2f-95ef-e96d7bf0b98f'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/5bcef508-1694-4f2f-95ef-e96d7bf0b98f'
                            }
                        }
                    },
                    {
                        uuid: '5bcef508-1694-4f2f-95ef-e96d7bf0b98f',
                        title: 'Harry Potter and the Goblet of Fire',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007559.jpg',
                                    dominantColors: ['#b7b6b8', '#2e6378', '#5ea1b3', '#4a879f']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007553.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007555.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170915007558.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180104007552.jpg',
                                    dominantColors: ['#bab7b2', '#386670', '#5fa0b0', '#4f849a']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/5bcef508-1694-4f2f-95ef-e96d7bf0b98f'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/5bcef508-1694-4f2f-95ef-e96d7bf0b98f'
                            }
                        }
                    },
                    {
                        uuid: '58e41638-33be-41e3-bded-901970a7ab35',
                        title: 'Evil Dead',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025514.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025514.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025514.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025514.jpg',
                                    dominantColors: ['#cf2f2b', '#edeaea', '#938e8e', '#957b84']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025508.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025510.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025513.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025507.jpg',
                                    dominantColors: ['#bf2d29', '#f7eeed', '#5b1e19', '#de8e98']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/58e41638-33be-41e3-bded-901970a7ab35'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/58e41638-33be-41e3-bded-901970a7ab35'
                            }
                        }
                    },
                    {
                        uuid: '1b5aa8f6-9ef0-4c03-ac52-9f67c757b96f',
                        title: 'Belle',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043573.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043573.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043573.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043573.jpg',
                                    dominantColors: [
                                        '#c5b480',
                                        '#372b1b',
                                        '#743c28',
                                        '#cde6e3',
                                        '#8b7f34'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043581.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043583.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043586.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180426043580.jpg',
                                    dominantColors: [
                                        '#d8d4bf',
                                        '#2d251b',
                                        '#723c29',
                                        '#917f38',
                                        '#b59a5e'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/1b5aa8f6-9ef0-4c03-ac52-9f67c757b96f'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/1b5aa8f6-9ef0-4c03-ac52-9f67c757b96f'
                            }
                        }
                    },
                    {
                        uuid: '17e17691-9bbe-4f15-a078-998c5655fe62',
                        title: 'Miss Taken',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012573.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012573.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012573.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012573.jpg',
                                    dominantColors: [
                                        '#ddc0c6',
                                        '#191c25',
                                        '#6f6763',
                                        '#8d9087',
                                        '#84489a'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012575.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012577.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012580.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171011012574.jpg',
                                    dominantColors: [
                                        '#ddb2c0',
                                        '#13161e',
                                        '#676161',
                                        '#858f91',
                                        '#77758d'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/17e17691-9bbe-4f15-a078-998c5655fe62'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/17e17691-9bbe-4f15-a078-998c5655fe62'
                            }
                        }
                    },
                    {
                        uuid: 'd551f903-02bb-4c6f-952a-e79ef0adced7',
                        title: 'Kong: Skull Island',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170918002864.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170918002864.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170918002864.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170918002864.jpg',
                                    dominantColors: [
                                        '#c25938',
                                        '#1c1216',
                                        '#f8d382',
                                        '#553033',
                                        '#ac9e9f'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170904002858.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170904002860.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170904002863.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170918002857.jpg',
                                    dominantColors: [
                                        '#ec8c4f',
                                        '#39242a',
                                        '#9a5042',
                                        '#aea185',
                                        '#4c799d'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/d551f903-02bb-4c6f-952a-e79ef0adced7'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/d551f903-02bb-4c6f-952a-e79ef0adced7'
                            }
                        }
                    },
                    {
                        uuid: 'cbd2d0a3-e50f-4ac3-a710-ef018092f7d0',
                        title: 'Agony Of Onuoma - Part 2',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017915.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017915.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017915.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017915.jpg',
                                    dominantColors: [
                                        '#42372a',
                                        '#df846c',
                                        '#9b5a3b',
                                        '#9eaf98',
                                        '#6480a0'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017909.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017911.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017914.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171031017908.jpg',
                                    dominantColors: [
                                        '#3c3623',
                                        '#d3835e',
                                        '#8d5137',
                                        '#87aab1',
                                        '#5079a3'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/cbd2d0a3-e50f-4ac3-a710-ef018092f7d0'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/cbd2d0a3-e50f-4ac3-a710-ef018092f7d0'
                            }
                        }
                    },
                    {
                        uuid: '9ac93f21-34e8-4812-8aed-fa19b6df5a8f',
                        title: "Bridget Jones's Baby",
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034215.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034215.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034215.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034215.jpg',
                                    dominantColors: [
                                        '#d27686',
                                        '#181426',
                                        '#f2d5c8',
                                        '#613375',
                                        '#793429'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034209.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034211.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034214.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20180321034208.jpg',
                                    dominantColors: [
                                        '#c77a83',
                                        '#1d172b',
                                        '#f4ded4',
                                        '#732080',
                                        '#703e2f'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/9ac93f21-34e8-4812-8aed-fa19b6df5a8f'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/9ac93f21-34e8-4812-8aed-fa19b6df5a8f'
                            }
                        }
                    },
                    {
                        uuid: '2b8553ec-c400-4990-8ff9-88bf11a148bb',
                        title: 'Inside Out',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024234.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024234.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024234.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024234.jpg',
                                    dominantColors: ['#c8a67e', '#3ca66d', '#235092', '#2d6ac2']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024228.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024230.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024233.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171211024227.jpg',
                                    dominantColors: [
                                        '#cfae7a',
                                        '#20246c',
                                        '#4bad63',
                                        '#2f7bd9',
                                        '#201514'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/2b8553ec-c400-4990-8ff9-88bf11a148bb'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/2b8553ec-c400-4990-8ff9-88bf11a148bb'
                            }
                        }
                    },
                    {
                        uuid: '3f746c20-d74a-4a11-af25-a9fdf8f6f0c0',
                        title: 'Ride Along 2',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020926.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020926.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020926.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020926.jpg',
                                    dominantColors: [
                                        '#2c2b2d',
                                        '#dcd2b0',
                                        '#81b3be',
                                        '#8c8174',
                                        '#7a97a8'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020920.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020922.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020925.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171121020919.jpg',
                                    dominantColors: [
                                        '#d6cdb0',
                                        '#292e33',
                                        '#43b5d1',
                                        '#89817a',
                                        '#2d88bb'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/3f746c20-d74a-4a11-af25-a9fdf8f6f0c0'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/3f746c20-d74a-4a11-af25-a9fdf8f6f0c0'
                            }
                        }
                    },
                    {
                        uuid: 'c91934dd-8909-42bc-9aba-6b3787f16812',
                        title: 'The Muppet Christmas Carol',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019132.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019132.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019132.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019132.jpg',
                                    dominantColors: [
                                        '#688344',
                                        '#e1c0af',
                                        '#491c1a',
                                        '#a8adaf',
                                        '#abca9d'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019126.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019128.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019131.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171108019125.jpg',
                                    dominantColors: [
                                        '#d5d0c8',
                                        '#262a21',
                                        '#8b2523',
                                        '#7e894e',
                                        '#808531'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/c91934dd-8909-42bc-9aba-6b3787f16812'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/c91934dd-8909-42bc-9aba-6b3787f16812'
                            }
                        }
                    },
                    {
                        uuid: '1e7d468a-4eee-43c9-9ed3-f064bb166af9',
                        title: 'Nights and Weekends',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009415.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009415.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009415.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009415.jpg',
                                    dominantColors: [
                                        '#182126',
                                        '#e9d0c1',
                                        '#784a34',
                                        '#a77250',
                                        '#897d77'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009417.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009419.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009422.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009416.jpg',
                                    dominantColors: [
                                        '#182228',
                                        '#f0e5da',
                                        '#8e5940',
                                        '#d9a084',
                                        '#b57f59'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/1e7d468a-4eee-43c9-9ed3-f064bb166af9'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/1e7d468a-4eee-43c9-9ed3-f064bb166af9'
                            }
                        }
                    },
                    {
                        uuid: '4b1a2ab5-4b5c-4d85-938f-f90069e1cbe9',
                        title: 'Hurricane',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022473.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022473.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022473.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022473.jpg',
                                    dominantColors: ['#c3e1f5', '#26678f', '#4b8cb8', '#6eaed8']
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022467.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022469.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022472.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171201022466.jpg',
                                    dominantColors: ['#c5e4f7', '#62b2da', '#3b91bd']
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/4b1a2ab5-4b5c-4d85-938f-f90069e1cbe9'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/4b1a2ab5-4b5c-4d85-938f-f90069e1cbe9'
                            }
                        }
                    },
                    {
                        uuid: '77640e2c-10cb-4ef6-9327-b6af06e48d64',
                        title: 'Lovers of Hate',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009375.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009375.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009375.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009375.jpg',
                                    dominantColors: [
                                        '#8d5862',
                                        '#e5adb8',
                                        '#ce98a1',
                                        '#be8a93',
                                        '#d49cac'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009377.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009379.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009382.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170922009376.jpg',
                                    dominantColors: [
                                        '#844f59',
                                        '#e6afba',
                                        '#cf99a3',
                                        '#d8a4ac',
                                        '#bd8993'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/77640e2c-10cb-4ef6-9327-b6af06e48d64'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/77640e2c-10cb-4ef6-9327-b6af06e48d64'
                            }
                        }
                    },
                    {
                        uuid: '885944ba-3db5-49dc-8e85-b8b15534c3b6',
                        title: 'American Daylight',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010231.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010231.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010231.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010231.jpg',
                                    dominantColors: [
                                        '#463c39',
                                        '#ccc6c9',
                                        '#a4bed7',
                                        '#9c433d',
                                        '#9194aa'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010225.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010227.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010230.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20170928010224.jpg',
                                    dominantColors: [
                                        '#c5c7cd',
                                        '#912c28',
                                        '#292020',
                                        '#946b53',
                                        '#737788'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/885944ba-3db5-49dc-8e85-b8b15534c3b6'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/885944ba-3db5-49dc-8e85-b8b15534c3b6'
                            }
                        }
                    },
                    {
                        uuid: '8e946559-eff8-4426-b8b6-7826ece5a5f6',
                        title: 'The Healer 3-4',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017821.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017821.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017821.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017821.jpg',
                                    dominantColors: [
                                        '#121215',
                                        '#b8b3b4',
                                        '#636165',
                                        '#838c8d',
                                        '#83838c'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017823.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017825.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017828.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171030017822.jpg',
                                    dominantColors: [
                                        '#151416',
                                        '#bbb0b2',
                                        '#696367',
                                        '#83838c',
                                        '#838c8c'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/8e946559-eff8-4426-b8b6-7826ece5a5f6'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/8e946559-eff8-4426-b8b6-7826ece5a5f6'
                            }
                        }
                    },
                    {
                        uuid: 'cbb5ec71-b8c6-4233-b63c-597a3124aa0e',
                        title: 'Daddy and Them',
                        images: {
                            landscapes: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025546.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025546.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025546.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025546.jpg',
                                    dominantColors: [
                                        '#c6c4ce',
                                        '#25433f',
                                        '#8c754d',
                                        '#723f35',
                                        '#688c9a'
                                    ]
                                }
                            ],
                            portraits: [
                                {
                                    XS:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025540.jpg',
                                    SM:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025542.jpg',
                                    MD:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025545.jpg',
                                    LG:
                                        'https://itv005100.black.co.za/iptvepg/images/poster/20171221025539.jpg',
                                    dominantColors: [
                                        '#162e34',
                                        '#9bbbdc',
                                        '#6c4038',
                                        '#8e7453',
                                        '#ead5ce'
                                    ]
                                }
                            ]
                        },
                        type: 'Movie',
                        _links: {
                            self: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/cbb5ec71-b8c6-4233-b63c-597a3124aa0e'
                            },
                            content: {
                                href:
                                    'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/cbb5ec71-b8c6-4233-b63c-597a3124aa0e'
                            }
                        }
                    }
                ],
                _links: {
                    self: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/catalogue/be581c5c-b118-4f5e-ad11-9075bc1d19f3'
                    }
                }
            }
        ];

        beforeEach(() => {
            dispatch.mockClear();
            contentService.getContentLists = jest.fn(() => payload);
        });

        it('should set isLoadingContentCatalogue and contentCatalogue when loadContentCatalogueAsyncAction is dispatched', () => {
            function getState() {
                return {
                    homeReducer: {
                        featuredContent: null,
                        contentCatalogue: null
                    }
                };
            }
            loadContentCatalogueAsyncAction()(dispatch, getState);

            expect(dispatch).toHaveBeenCalledWith(setIsLoadingContentCatalogueAction(true));
            expect(contentService.getContentLists).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith(setContentCatalogueAction(payload));
            expect(dispatch).toHaveBeenCalledTimes(2);
        });

        it('should do nothing when contentCatalogue already exists', () => {
            function getState() {
                return {
                    homeReducer: {
                        featuredContent: null,
                        contentCatalogue: { some: 'content' }
                    }
                };
            }
            loadContentCatalogueAsyncAction()(dispatch, getState);

            expect(contentService.getContentLists).toHaveBeenCalledTimes(0);
            expect(dispatch).toHaveBeenCalledTimes(0);
        });
    });
});
