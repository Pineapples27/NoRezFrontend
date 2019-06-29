import React from 'react';
import { shallow } from 'enzyme';

import HomeView from '../home.view';

describe('HomeView - Unit Test', () => {
    const featuredContentMock = {
        heading: 'Featured',
        contentResources: [
            {
                uuid: '7aa6bb9c-bf22-47c7-a2bf-643cdc7da26b',
                title: 'Hollywoodland',
                images: {
                    landscapes: [
                        {
                            XS:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171221002518.jpg',
                            SM:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171221002518.jpg',
                            MD:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171221002518.jpg',
                            LG:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171221002518.jpg',
                            dominantColors: ['#dd9565', '#83241e', '#928d7c', '#877688']
                        }
                    ],
                    portraits: [
                        {
                            XS:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20170902002512.jpg',
                            SM:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20170902002514.jpg',
                            MD:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20170902002517.jpg',
                            LG:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171221002511.jpg',
                            dominantColors: ['#db9564', '#882b20', '#988c75', '#9a7484']
                        }
                    ]
                },
                type: 'Movie',
                _links: {
                    self: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/7aa6bb9c-bf22-47c7-a2bf-643cdc7da26b'
                    },
                    content: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/7aa6bb9c-bf22-47c7-a2bf-643cdc7da26b'
                    }
                }
            },
            {
                uuid: '67669313-1233-408e-b3b7-c1dfb778d555',
                title: 'Pain Of Chimamanda - Part 1',
                images: {
                    landscapes: [
                        {
                            XS:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021598.jpg',
                            SM:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021598.jpg',
                            MD:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021598.jpg',
                            LG:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021598.jpg',
                            dominantColors: ['#4b3c2a', '#e7d3bf', '#a6ae6c', '#9d7653', '#7a9a9c']
                        }
                    ],
                    portraits: [
                        {
                            XS:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021600.jpg',
                            SM:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021602.jpg',
                            MD:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021605.jpg',
                            LG:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171127021599.jpg',
                            dominantColors: ['#d7d0c3', '#29251a', '#563726', '#6e5f3c', '#75795b']
                        }
                    ]
                },
                type: 'Movie',
                _links: {
                    self: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/67669313-1233-408e-b3b7-c1dfb778d555'
                    },
                    content: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/67669313-1233-408e-b3b7-c1dfb778d555'
                    }
                }
            },
            {
                uuid: '1b21995e-525f-4b24-b7c9-752d4f9cb3f6',
                title: 'Vacation',
                images: {
                    landscapes: [
                        {
                            XS:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171030012784.jpg',
                            SM:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171030012784.jpg',
                            MD:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171030012784.jpg',
                            LG:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171030012784.jpg',
                            dominantColors: ['#dca787', '#276475', '#13171d', '#6dc2ba', '#4294c1']
                        }
                    ],
                    portraits: [
                        {
                            XS:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171012012786.jpg',
                            SM:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171012012788.jpg',
                            MD:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171012012791.jpg',
                            LG:
                                'https://itv005100.black.co.za/iptvepg/images/poster/20171030012785.jpg',
                            dominantColors: ['#dca07e', '#141e26', '#105379', '#46abae', '#227ba4']
                        }
                    ]
                },
                type: 'Movie',
                _links: {
                    self: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/1b21995e-525f-4b24-b7c9-752d4f9cb3f6'
                    },
                    content: {
                        href:
                            'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/1b21995e-525f-4b24-b7c9-752d4f9cb3f6'
                    }
                }
            }
        ]
    };
    const contentCatalogueMock = [
        {
            heading: 'Trending',
            contentResources: [
                {
                    uuid: '5d3df651-1d31-4afe-87ab-8b33102094ff',
                    title: 'Jurassic World',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019959.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019959.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019959.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019959.jpg',
                                dominantColors: [
                                    '#22292d',
                                    '#c3d1d6',
                                    '#89a5af',
                                    '#727e82',
                                    '#758da1'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019961.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019963.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019966.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171114019960.jpg',
                                dominantColors: [
                                    '#323c41',
                                    '#cfe3e8',
                                    '#728792',
                                    '#91b6c7',
                                    '#7d9cb2'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/5d3df651-1d31-4afe-87ab-8b33102094ff'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/5d3df651-1d31-4afe-87ab-8b33102094ff'
                        }
                    }
                },
                {
                    uuid: 'a2c21a0c-3a69-439b-af83-9661747ecafd',
                    title: 'Amazing Love',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015560.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015560.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015560.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015560.jpg',
                                dominantColors: ['#dab99a', '#b64220', '#878993', '#7a7489']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015562.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015564.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015567.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171023015561.jpg',
                                dominantColors: ['#d4b190', '#b7371f', '#767488', '#7b858d']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/a2c21a0c-3a69-439b-af83-9661747ecafd'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/a2c21a0c-3a69-439b-af83-9661747ecafd'
                        }
                    }
                },
                {
                    uuid: 'a15e270f-9bcd-4b30-8cbe-9342d7470ba0',
                    title: 'Rise of the Guardians',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040164.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040164.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040164.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040164.jpg',
                                dominantColors: [
                                    '#27608e',
                                    '#cca9a0',
                                    '#35221d',
                                    '#52a1dc',
                                    '#69b9e5'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040172.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040174.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040177.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180330040171.jpg',
                                dominantColors: [
                                    '#22496c',
                                    '#cfaca0',
                                    '#4186c1',
                                    '#64b1ca',
                                    '#2e1914'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/a15e270f-9bcd-4b30-8cbe-9342d7470ba0'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/a15e270f-9bcd-4b30-8cbe-9342d7470ba0'
                        }
                    }
                },
                {
                    uuid: '9ea780b8-5fdd-4db3-a2f7-2f0e639466fe',
                    title: 'The Secret Life Of Pets',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045200.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045200.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045200.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045200.jpg',
                                dominantColors: [
                                    '#cbc9cb',
                                    '#312b33',
                                    '#963226',
                                    '#b46d45',
                                    '#837381'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045194.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045196.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045199.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180501045193.jpg',
                                dominantColors: [
                                    '#d3cac6',
                                    '#372c30',
                                    '#8e392a',
                                    '#887175',
                                    '#ad693d'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/9ea780b8-5fdd-4db3-a2f7-2f0e639466fe'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/9ea780b8-5fdd-4db3-a2f7-2f0e639466fe'
                        }
                    }
                },
                {
                    uuid: '25a49a9e-466d-4572-a4cc-de0b57227b41',
                    title: 'Björk: Biophilia Live',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007903.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007903.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007903.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007903.jpg',
                                dominantColors: [
                                    '#8e2c18',
                                    '#2f1921',
                                    '#dde2d4',
                                    '#e36d2c',
                                    '#b5929c'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007897.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007899.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007902.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170918007896.jpg',
                                dominantColors: ['#712015', '#daa694', '#73b6b9', '#16212b']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/25a49a9e-466d-4572-a4cc-de0b57227b41'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/25a49a9e-466d-4572-a4cc-de0b57227b41'
                        }
                    }
                },
                {
                    uuid: '13f0e2fe-23a7-40ee-a01b-f34372957cac',
                    title: 'The Last Song',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019861.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019861.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019861.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019861.jpg',
                                dominantColors: [
                                    '#d69465',
                                    '#4d2312',
                                    '#763c21',
                                    '#f9edd4',
                                    '#f6d9a9'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019855.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019857.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019860.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171111019854.jpg',
                                dominantColors: [
                                    '#c78b5f',
                                    '#381b13',
                                    '#65311f',
                                    '#f7ecdb',
                                    '#f7d4a0'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/13f0e2fe-23a7-40ee-a01b-f34372957cac'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/13f0e2fe-23a7-40ee-a01b-f34372957cac'
                        }
                    }
                },
                {
                    uuid: 'e1a14f73-d3aa-4371-a0a4-978456b070d6',
                    title: 'First Sunday',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029240.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029240.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029240.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029240.jpg',
                                dominantColors: [
                                    '#211513',
                                    '#e2e6ef',
                                    '#943631',
                                    '#bb8562',
                                    '#8d8a91'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029242.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029244.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029247.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180203029241.jpg',
                                dominantColors: [
                                    '#1f1721',
                                    '#dfd3d8',
                                    '#922f34',
                                    '#ae755d',
                                    '#817d8f'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/e1a14f73-d3aa-4371-a0a4-978456b070d6'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/e1a14f73-d3aa-4371-a0a4-978456b070d6'
                        }
                    }
                },
                {
                    uuid: 'e963ace7-2296-46f0-9004-495f16cd1914',
                    title: 'Once Upon A Time In Mexico',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031659.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031659.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031659.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031659.jpg',
                                dominantColors: ['#efe0bb', '#a13320', '#d5883b', '#e3b571']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031653.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031655.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031658.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031652.jpg',
                                dominantColors: ['#9b331f', '#f0deaf', '#dea154', '#d0afa0']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/e963ace7-2296-46f0-9004-495f16cd1914'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/e963ace7-2296-46f0-9004-495f16cd1914'
                        }
                    }
                },
                {
                    uuid: 'd514ce7e-0286-4797-9eab-f4ae91811529',
                    title: 'Sun Zara',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027263.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027263.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027263.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027263.jpg',
                                dominantColors: [
                                    '#201414',
                                    '#e3ceaf',
                                    '#bd272d',
                                    '#ae8365',
                                    '#bf9232'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027265.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027267.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027270.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180118027264.jpg',
                                dominantColors: [
                                    '#201414',
                                    '#e8d6b9',
                                    '#b53c3d',
                                    '#bc9172',
                                    '#cba033'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/d514ce7e-0286-4797-9eab-f4ae91811529'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/d514ce7e-0286-4797-9eab-f4ae91811529'
                        }
                    }
                },
                {
                    uuid: 'eef0ae54-4754-4f1d-ae69-b5dc8ae2dd8d',
                    title: 'Dirty Rotten Scoundrels',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001827.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001827.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001827.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001827.jpg',
                                dominantColors: ['#3681b3', '#dbc9c7', '#7bcce8']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001821.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001823.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001826.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170901001820.jpg',
                                dominantColors: ['#1e82b5', '#ece4d0', '#c43269', '#54c3da']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/eef0ae54-4754-4f1d-ae69-b5dc8ae2dd8d'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/eef0ae54-4754-4f1d-ae69-b5dc8ae2dd8d'
                        }
                    }
                },
                {
                    uuid: '0b97bb95-be38-4427-89aa-4c44a9d67352',
                    title: 'Transporter 2',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006683.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006683.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006683.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006683.jpg',
                                dominantColors: ['#fbef9d', '#f7c526', '#74947c']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006677.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006679.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006682.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170914006676.jpg',
                                dominantColors: ['#faed95', '#f6ab1c', '#748c34']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/0b97bb95-be38-4427-89aa-4c44a9d67352'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/0b97bb95-be38-4427-89aa-4c44a9d67352'
                        }
                    }
                },
                {
                    uuid: 'f188e8d4-52ca-41e2-aac9-892ab9362639',
                    title: 'Geostorm',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028590.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028590.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028590.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028590.jpg',
                                dominantColors: ['#dfc9c1', '#8bb9c0', '#718f94', '#6b9eb0']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028592.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028594.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028597.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180129028591.jpg',
                                dominantColors: ['#d5dbd8', '#47aab1', '#ea2a24', '#3e8f9f']
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/f188e8d4-52ca-41e2-aac9-892ab9362639'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/f188e8d4-52ca-41e2-aac9-892ab9362639'
                        }
                    }
                },
                {
                    uuid: '9979a5aa-d20f-4b83-8638-717ae8cfff69',
                    title: 'Kubo And The Two Strings',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031643.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031643.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031643.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031643.jpg',
                                dominantColors: [
                                    '#233448',
                                    '#ebdfb9',
                                    '#ab2d31',
                                    '#7c918b',
                                    '#cc7b47'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031637.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031639.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031642.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20180227031636.jpg',
                                dominantColors: [
                                    '#e4d9bb',
                                    '#192e42',
                                    '#92272d',
                                    '#638495',
                                    '#c16d41'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/9979a5aa-d20f-4b83-8638-717ae8cfff69'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/9979a5aa-d20f-4b83-8638-717ae8cfff69'
                        }
                    }
                },
                {
                    uuid: '72ae30eb-5786-495b-bbeb-c009e5791d87',
                    title: 'Emotional Blunder',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016518.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016518.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016518.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016518.jpg',
                                dominantColors: [
                                    '#323839',
                                    '#e1dad3',
                                    '#814f3e',
                                    '#82a7b3',
                                    '#a98d50'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016512.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016514.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016517.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171026016511.jpg',
                                dominantColors: [
                                    '#2d2d2e',
                                    '#e5e2e5',
                                    '#8a5748',
                                    '#bd8767',
                                    '#93a8b2'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/72ae30eb-5786-495b-bbeb-c009e5791d87'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/72ae30eb-5786-495b-bbeb-c009e5791d87'
                        }
                    }
                },
                {
                    uuid: 'e4a8ef12-0894-4a60-b74a-7f43fb14422f',
                    title: 'The Good Place',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                dominantColors: [
                                    '#c6b5a4',
                                    '#262c39',
                                    '#70191c',
                                    '#855f3b',
                                    '#5880a2'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                dominantColors: ['#dfcc9a', '#33321a', '#45c9df', '#758f3c']
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/e4a8ef12-0894-4a60-b74a-7f43fb14422f'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/e4a8ef12-0894-4a60-b74a-7f43fb14422f'
                        }
                    }
                },
                {
                    uuid: 'ffc1a681-2159-4e18-a060-b1abd55f9b20',
                    title: 'Sacrifice For Marriage - Part 2',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015800.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015800.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015800.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015800.jpg',
                                dominantColors: [
                                    '#d8bfaf',
                                    '#1e1a1f',
                                    '#ab1d1f',
                                    '#a75631',
                                    '#a46364'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015802.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015804.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015807.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171024015801.jpg',
                                dominantColors: [
                                    '#bd372d',
                                    '#111a1d',
                                    '#d3d2d4',
                                    '#b697a0',
                                    '#722822'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/ffc1a681-2159-4e18-a060-b1abd55f9b20'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/ffc1a681-2159-4e18-a060-b1abd55f9b20'
                        }
                    }
                },
                {
                    uuid: '50cc70c7-649a-4f50-9bdd-13bea976987f',
                    title: 'Village Okoso - Part 2',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021663.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021663.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021663.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021663.jpg',
                                dominantColors: [
                                    '#c48876',
                                    '#50282a',
                                    '#e3e3e3',
                                    '#61463b',
                                    '#d6ccb3'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021665.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021667.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021670.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20171127021664.jpg',
                                dominantColors: [
                                    '#c18172',
                                    '#52292b',
                                    '#e5e6e6',
                                    '#60463c',
                                    '#cbc5b3'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/50cc70c7-649a-4f50-9bdd-13bea976987f'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/50cc70c7-649a-4f50-9bdd-13bea976987f'
                        }
                    }
                },
                {
                    uuid: '389559d6-3c91-4ee0-8977-27df8731850f',
                    title: 'Ill Begotten (Darkside)',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003576.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003576.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003576.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003576.jpg',
                                dominantColors: ['#f4e9bf', '#8f4a26', '#c88331', '#c5945e']
                            }
                        ],
                        portraits: [
                            {
                                XS:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003570.jpg',
                                SM:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003572.jpg',
                                MD:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003575.jpg',
                                LG:
                                    'https://itv005100.black.co.za/iptvepg/images/poster/20170905003569.jpg',
                                dominantColors: [
                                    '#1b1510',
                                    '#f7f4ce',
                                    '#804e28',
                                    '#dd9b33',
                                    '#d1af6a'
                                ]
                            }
                        ]
                    },
                    type: 'Movie',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/movie/389559d6-3c91-4ee0-8977-27df8731850f'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/389559d6-3c91-4ee0-8977-27df8731850f'
                        }
                    }
                }
            ]
        },
        {
            heading: 'New Releases',
            contentResources: [
                {
                    uuid: 'a6be65e7-dd4a-4be4-aaa0-1374d789d158',
                    title: "Marvel's Daredevil",
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/dpNeXLEnuKzAvbNwveJhNEiQvXZ.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/dpNeXLEnuKzAvbNwveJhNEiQvXZ.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/dpNeXLEnuKzAvbNwveJhNEiQvXZ.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/dpNeXLEnuKzAvbNwveJhNEiQvXZ.jpg',
                                dominantColors: [
                                    '#232036',
                                    '#cac0bd',
                                    '#757074',
                                    '#8d9aa2',
                                    '#828b9c'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/cidOqJL8tayqvv3TpfTQCsgeITu.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/cidOqJL8tayqvv3TpfTQCsgeITu.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/cidOqJL8tayqvv3TpfTQCsgeITu.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/cidOqJL8tayqvv3TpfTQCsgeITu.jpg',
                                dominantColors: [
                                    '#181827',
                                    '#aa959f',
                                    '#6b424a',
                                    '#4b6bb2',
                                    '#6d9bd8'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/a6be65e7-dd4a-4be4-aaa0-1374d789d158'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/a6be65e7-dd4a-4be4-aaa0-1374d789d158'
                        }
                    }
                },
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
                    uuid: '5e25dc0b-448e-41d9-867d-7e37a96da89f',
                    title: 'Legion',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/87eP7ITTrOWvkA4EqCuoRdyjzLy.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/87eP7ITTrOWvkA4EqCuoRdyjzLy.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/87eP7ITTrOWvkA4EqCuoRdyjzLy.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/87eP7ITTrOWvkA4EqCuoRdyjzLy.jpg',
                                dominantColors: ['#11a9e3', '#1355c4', '#b06adb', '#102f8e']
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/l8paJlma8P3t73B4SPtFjr8nsWF.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/l8paJlma8P3t73B4SPtFjr8nsWF.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/l8paJlma8P3t73B4SPtFjr8nsWF.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/l8paJlma8P3t73B4SPtFjr8nsWF.jpg',
                                dominantColors: ['#1c68c1', '#209ed8', '#124096', '#5a5ba0']
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/5e25dc0b-448e-41d9-867d-7e37a96da89f'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/5e25dc0b-448e-41d9-867d-7e37a96da89f'
                        }
                    }
                },
                {
                    uuid: 'e4a8ef12-0894-4a60-b74a-7f43fb14422f',
                    title: 'The Good Place',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/mIlUIOGJYbZkb1XBaXhUQsZnbkz.jpg',
                                dominantColors: [
                                    '#c6b5a4',
                                    '#262c39',
                                    '#70191c',
                                    '#855f3b',
                                    '#5880a2'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/m8qZreXnAJLSOQtB0H4JZ5dWHMF.jpg',
                                dominantColors: ['#dfcc9a', '#33321a', '#45c9df', '#758f3c']
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/e4a8ef12-0894-4a60-b74a-7f43fb14422f'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/e4a8ef12-0894-4a60-b74a-7f43fb14422f'
                        }
                    }
                },
                {
                    uuid: 'cab29ffa-1c1f-414e-8fc4-cfab3c183b2a',
                    title: 'Grace and Frankie',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/q6k6VvOXz0pVrsZavLmviK3jDV4.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/q6k6VvOXz0pVrsZavLmviK3jDV4.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/q6k6VvOXz0pVrsZavLmviK3jDV4.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/q6k6VvOXz0pVrsZavLmviK3jDV4.jpg',
                                dominantColors: [
                                    '#483a2e',
                                    '#d0b7a3',
                                    '#987157',
                                    '#a5a776',
                                    '#a6999e'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/nHIRpu3EPcQBY61sHwr1tEWTymB.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/nHIRpu3EPcQBY61sHwr1tEWTymB.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/nHIRpu3EPcQBY61sHwr1tEWTymB.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/nHIRpu3EPcQBY61sHwr1tEWTymB.jpg',
                                dominantColors: [
                                    '#343e3e',
                                    '#c8c1b8',
                                    '#838076',
                                    '#9fb3b4',
                                    '#91a2a5'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/cab29ffa-1c1f-414e-8fc4-cfab3c183b2a'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/cab29ffa-1c1f-414e-8fc4-cfab3c183b2a'
                        }
                    }
                },
                {
                    uuid: '4ceb6409-7e46-4fd8-b710-4770d6438b53',
                    title: '11.22.63',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/pKfCNEJPfIHvNVQWVk4wLqATGmC.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/pKfCNEJPfIHvNVQWVk4wLqATGmC.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/pKfCNEJPfIHvNVQWVk4wLqATGmC.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/pKfCNEJPfIHvNVQWVk4wLqATGmC.jpg',
                                dominantColors: [
                                    '#213036',
                                    '#c9c1ae',
                                    '#796b5b',
                                    '#8aa98b',
                                    '#638ca1'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/N0BjnG960GEIFgMx40BjpwyUAc.jpg',
                                SM: 'http://image.tmdb.org/t/p/w154/N0BjnG960GEIFgMx40BjpwyUAc.jpg',
                                MD: 'http://image.tmdb.org/t/p/w342/N0BjnG960GEIFgMx40BjpwyUAc.jpg',
                                LG: 'http://image.tmdb.org/t/p/w500/N0BjnG960GEIFgMx40BjpwyUAc.jpg',
                                dominantColors: [
                                    '#352918',
                                    '#ccd39a',
                                    '#81794c',
                                    '#95a557',
                                    '#8b8296'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/4ceb6409-7e46-4fd8-b710-4770d6438b53'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/4ceb6409-7e46-4fd8-b710-4770d6438b53'
                        }
                    }
                },
                {
                    uuid: '737e4107-3052-43d7-9ca2-53b21c46b159',
                    title: 'Deutschland 83',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/gyuV7OHhsvXgVdMznBo9MTBCaGG.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/gyuV7OHhsvXgVdMznBo9MTBCaGG.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/gyuV7OHhsvXgVdMznBo9MTBCaGG.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/gyuV7OHhsvXgVdMznBo9MTBCaGG.jpg',
                                dominantColors: [
                                    '#303230',
                                    '#b29a5a',
                                    '#786f68',
                                    '#8699aa',
                                    '#939c6a'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/yL7XdYrbjwPQg9Xt4NUspKLyM1K.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/yL7XdYrbjwPQg9Xt4NUspKLyM1K.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/yL7XdYrbjwPQg9Xt4NUspKLyM1K.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/yL7XdYrbjwPQg9Xt4NUspKLyM1K.jpg',
                                dominantColors: ['#c12694', '#171830', '#4087c0', '#35737d']
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/737e4107-3052-43d7-9ca2-53b21c46b159'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/737e4107-3052-43d7-9ca2-53b21c46b159'
                        }
                    }
                },
                {
                    uuid: '4bc10e6e-8f1a-453e-9d83-e8b949362992',
                    title: 'Sense8',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/o9lkuOw0UijHi6o1VRVVCT3Ivul.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/o9lkuOw0UijHi6o1VRVVCT3Ivul.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/o9lkuOw0UijHi6o1VRVVCT3Ivul.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/o9lkuOw0UijHi6o1VRVVCT3Ivul.jpg',
                                dominantColors: [
                                    '#4f3d48',
                                    '#cde4cf',
                                    '#8ac7b1',
                                    '#8b7659',
                                    '#7e9aa4'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg',
                                dominantColors: [
                                    '#2f414d',
                                    '#e9eee7',
                                    '#875e4c',
                                    '#8ba9a4',
                                    '#a58a68'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/4bc10e6e-8f1a-453e-9d83-e8b949362992'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/4bc10e6e-8f1a-453e-9d83-e8b949362992'
                        }
                    }
                },
                {
                    uuid: '84ef076f-6337-4a1f-a86a-0833caf0ff67',
                    title: 'The Night Of',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/a4IHGvDYVRr7rhquhtvpyOZBbR8.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/a4IHGvDYVRr7rhquhtvpyOZBbR8.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/a4IHGvDYVRr7rhquhtvpyOZBbR8.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/a4IHGvDYVRr7rhquhtvpyOZBbR8.jpg',
                                dominantColors: [
                                    '#111f20',
                                    '#a8bab8',
                                    '#576e6b',
                                    '#7f9792',
                                    '#738698'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/7FBeSojeyiTMgIxm6QPUVzpDP93.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/7FBeSojeyiTMgIxm6QPUVzpDP93.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/7FBeSojeyiTMgIxm6QPUVzpDP93.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/7FBeSojeyiTMgIxm6QPUVzpDP93.jpg',
                                dominantColors: [
                                    '#101719',
                                    '#95a4a5',
                                    '#536565',
                                    '#75848c',
                                    '#848484'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/84ef076f-6337-4a1f-a86a-0833caf0ff67'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/84ef076f-6337-4a1f-a86a-0833caf0ff67'
                        }
                    }
                },
                {
                    uuid: '667d9289-5a6a-4b13-88e7-e8829ebf3349',
                    title: 'Making a Murderer',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/clmdHJpw3NuUCZveyTTwB83wmRH.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/clmdHJpw3NuUCZveyTTwB83wmRH.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/clmdHJpw3NuUCZveyTTwB83wmRH.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/clmdHJpw3NuUCZveyTTwB83wmRH.jpg',
                                dominantColors: [
                                    '#cec7be',
                                    '#a2774d',
                                    '#794d2b',
                                    '#443021',
                                    '#858686'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/4ukKkwZWDSCxdXKBWUEfLSuHWmS.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/4ukKkwZWDSCxdXKBWUEfLSuHWmS.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/4ukKkwZWDSCxdXKBWUEfLSuHWmS.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/4ukKkwZWDSCxdXKBWUEfLSuHWmS.jpg',
                                dominantColors: [
                                    '#8a7c69',
                                    '#261f1a',
                                    '#d3d3d3',
                                    '#4c3623',
                                    '#d4bf9e'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/667d9289-5a6a-4b13-88e7-e8829ebf3349'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/667d9289-5a6a-4b13-88e7-e8829ebf3349'
                        }
                    }
                },
                {
                    uuid: '15bb9b7d-a447-4d02-ae21-90c8218e043c',
                    title: 'The Get Down',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/gBdBZKnMFlim7ey8bqoCxOESV2P.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/gBdBZKnMFlim7ey8bqoCxOESV2P.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/gBdBZKnMFlim7ey8bqoCxOESV2P.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/gBdBZKnMFlim7ey8bqoCxOESV2P.jpg',
                                dominantColors: [
                                    '#342322',
                                    '#d4a796',
                                    '#845e5b',
                                    '#89a0ae',
                                    '#87839a'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/zeEeNDklukfG1Y6jKgfCm0cgI97.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/zeEeNDklukfG1Y6jKgfCm0cgI97.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/zeEeNDklukfG1Y6jKgfCm0cgI97.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/zeEeNDklukfG1Y6jKgfCm0cgI97.jpg',
                                dominantColors: [
                                    '#3f2c37',
                                    '#ebd6c9',
                                    '#943c43',
                                    '#8c8586',
                                    '#b5765b'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/15bb9b7d-a447-4d02-ae21-90c8218e043c'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/15bb9b7d-a447-4d02-ae21-90c8218e043c'
                        }
                    }
                },
                {
                    uuid: '8db32621-7757-423a-bc83-455a1ba27c5d',
                    title: 'The Night Manager',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/tp2aT6JUbWfmjrKH5TtrfRVorS9.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/tp2aT6JUbWfmjrKH5TtrfRVorS9.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/tp2aT6JUbWfmjrKH5TtrfRVorS9.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/tp2aT6JUbWfmjrKH5TtrfRVorS9.jpg',
                                dominantColors: [
                                    '#baa18f',
                                    '#211b2d',
                                    '#e6e9ea',
                                    '#6a443b',
                                    '#8e5c3d'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/7KxR2UpoMIshsrmE7HSHwhLdsIG.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/7KxR2UpoMIshsrmE7HSHwhLdsIG.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/7KxR2UpoMIshsrmE7HSHwhLdsIG.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/7KxR2UpoMIshsrmE7HSHwhLdsIG.jpg',
                                dominantColors: [
                                    '#1c202e',
                                    '#dcd5d0',
                                    '#8a8485',
                                    '#755c58',
                                    '#846c63'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/8db32621-7757-423a-bc83-455a1ba27c5d'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/8db32621-7757-423a-bc83-455a1ba27c5d'
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
                    uuid: '1fea32d9-9dfb-4b29-947a-f321bbe71155',
                    title: 'And Then There Were None',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/tLwr8d4OfReOme8pvuVzCpDnhMi.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/tLwr8d4OfReOme8pvuVzCpDnhMi.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/tLwr8d4OfReOme8pvuVzCpDnhMi.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/tLwr8d4OfReOme8pvuVzCpDnhMi.jpg',
                                dominantColors: [
                                    '#91998b',
                                    '#1e2d2f',
                                    '#e8e7c8',
                                    '#554438',
                                    '#6a5a3f'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/j80tsveoxdhgH4pf5bP25kCLEZC.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/j80tsveoxdhgH4pf5bP25kCLEZC.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/j80tsveoxdhgH4pf5bP25kCLEZC.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/j80tsveoxdhgH4pf5bP25kCLEZC.jpg',
                                dominantColors: [
                                    '#314749',
                                    '#e5e9d1',
                                    '#7c9b8d',
                                    '#6b655c',
                                    '#757662'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/1fea32d9-9dfb-4b29-947a-f321bbe71155'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/1fea32d9-9dfb-4b29-947a-f321bbe71155'
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
                    uuid: 'd75e8329-193f-4805-ab83-7fd14ed3e7cf',
                    title: 'Ash vs Evil Dead',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/5A2CdLk0ZkCiw1dCngVsTlX4G5u.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/5A2CdLk0ZkCiw1dCngVsTlX4G5u.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/5A2CdLk0ZkCiw1dCngVsTlX4G5u.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/5A2CdLk0ZkCiw1dCngVsTlX4G5u.jpg',
                                dominantColors: [
                                    '#282321',
                                    '#af846f',
                                    '#765e51',
                                    '#657b9a',
                                    '#879faf'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/wkHStHo0l34FzuSoaBvLx7nItWC.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/wkHStHo0l34FzuSoaBvLx7nItWC.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/wkHStHo0l34FzuSoaBvLx7nItWC.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/wkHStHo0l34FzuSoaBvLx7nItWC.jpg',
                                dominantColors: ['#d9ab93', '#7a493e', '#988d83', '#9a8184']
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/d75e8329-193f-4805-ab83-7fd14ed3e7cf'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/d75e8329-193f-4805-ab83-7fd14ed3e7cf'
                        }
                    }
                },
                {
                    uuid: 'd94394ad-796c-4f40-bac3-752ff10759f5',
                    title: 'Manhunt: Unabomber',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/z2ZmYbhk0McewduBFtCqkmcZoqT.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/z2ZmYbhk0McewduBFtCqkmcZoqT.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/z2ZmYbhk0McewduBFtCqkmcZoqT.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/z2ZmYbhk0McewduBFtCqkmcZoqT.jpg',
                                dominantColors: [
                                    '#84878f',
                                    '#17172d',
                                    '#cacbd0',
                                    '#3b4451',
                                    '#44443c'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/gmSOPIOenH39XHEdtfPwgi2lWNj.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/gmSOPIOenH39XHEdtfPwgi2lWNj.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/gmSOPIOenH39XHEdtfPwgi2lWNj.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/gmSOPIOenH39XHEdtfPwgi2lWNj.jpg',
                                dominantColors: [
                                    '#6f717e',
                                    '#131429',
                                    '#c7c9d0',
                                    '#abb1bc',
                                    '#b4b3be'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/d94394ad-796c-4f40-bac3-752ff10759f5'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/d94394ad-796c-4f40-bac3-752ff10759f5'
                        }
                    }
                },
                {
                    uuid: '1509a195-f0ff-4947-8405-74c201f53e66',
                    title: 'Castlevania',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/zSV78u29RB5PAOfwE8liVJcxKc1.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/zSV78u29RB5PAOfwE8liVJcxKc1.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/zSV78u29RB5PAOfwE8liVJcxKc1.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/zSV78u29RB5PAOfwE8liVJcxKc1.jpg',
                                dominantColors: ['#d13119', '#681310', '#8c7474', '#74545c']
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/uJ7cHITmM83XWAntdi0GZ1bGePI.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/uJ7cHITmM83XWAntdi0GZ1bGePI.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/uJ7cHITmM83XWAntdi0GZ1bGePI.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/uJ7cHITmM83XWAntdi0GZ1bGePI.jpg',
                                dominantColors: [
                                    '#261a1b',
                                    '#d1b5b6',
                                    '#764649',
                                    '#928b8c',
                                    '#94948c'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/1509a195-f0ff-4947-8405-74c201f53e66'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/1509a195-f0ff-4947-8405-74c201f53e66'
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
                    uuid: '451b4988-f957-425b-b49d-61ea405a4b19',
                    title: 'The Man in the High Castle',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/nsVueoSwrgZBxlFaankiPIhNRPH.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/nsVueoSwrgZBxlFaankiPIhNRPH.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/nsVueoSwrgZBxlFaankiPIhNRPH.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/nsVueoSwrgZBxlFaankiPIhNRPH.jpg',
                                dominantColors: [
                                    '#201d17',
                                    '#b99e84',
                                    '#6f6250',
                                    '#89958c',
                                    '#808a8d'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/m4QvniiInCezPAJGDizky7452LJ.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/m4QvniiInCezPAJGDizky7452LJ.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/m4QvniiInCezPAJGDizky7452LJ.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/m4QvniiInCezPAJGDizky7452LJ.jpg',
                                dominantColors: [
                                    '#301e14',
                                    '#cdac95',
                                    '#866751',
                                    '#9c9a8c',
                                    '#938c8c'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/451b4988-f957-425b-b49d-61ea405a4b19'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/451b4988-f957-425b-b49d-61ea405a4b19'
                        }
                    }
                },
                {
                    uuid: '80fa4bdf-c591-444d-9db9-8b4e25c8b4e2',
                    title: "Dirk Gently's Holistic Detective Agency",
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/tQKKzLbqNWaTufmrcQku7pPcv5j.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/tQKKzLbqNWaTufmrcQku7pPcv5j.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/tQKKzLbqNWaTufmrcQku7pPcv5j.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/tQKKzLbqNWaTufmrcQku7pPcv5j.jpg',
                                dominantColors: [
                                    '#1c1913',
                                    '#baa47c',
                                    '#736442',
                                    '#758093',
                                    '#88959a'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/q8oMpXPEAUJJ0KztsRs5K51T2lo.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/q8oMpXPEAUJJ0KztsRs5K51T2lo.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/q8oMpXPEAUJJ0KztsRs5K51T2lo.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/q8oMpXPEAUJJ0KztsRs5K51T2lo.jpg',
                                dominantColors: [
                                    '#e9ddd7',
                                    '#942524',
                                    '#2f2220',
                                    '#c68737',
                                    '#957b76'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/80fa4bdf-c591-444d-9db9-8b4e25c8b4e2'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/80fa4bdf-c591-444d-9db9-8b4e25c8b4e2'
                        }
                    }
                },
                {
                    uuid: 'ad882a04-f0f9-4fb3-b3f8-d0c6cb06f8d1',
                    title: 'Quarry',
                    images: {
                        landscapes: [
                            {
                                XS:
                                    'http://image.tmdb.org/t/p/original/iqWy5vtos77hgs7poBjb6GMKM0v.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/original/iqWy5vtos77hgs7poBjb6GMKM0v.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/original/iqWy5vtos77hgs7poBjb6GMKM0v.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/original/iqWy5vtos77hgs7poBjb6GMKM0v.jpg',
                                dominantColors: [
                                    '#4bb4be',
                                    '#cbe2dd',
                                    '#2a3036',
                                    '#366c73',
                                    '#575750'
                                ]
                            }
                        ],
                        portraits: [
                            {
                                XS: 'http://image.tmdb.org/t/p/w92/gIM8OF8cbmsJaZCjOSz1ocOxuWW.jpg',
                                SM:
                                    'http://image.tmdb.org/t/p/w154/gIM8OF8cbmsJaZCjOSz1ocOxuWW.jpg',
                                MD:
                                    'http://image.tmdb.org/t/p/w342/gIM8OF8cbmsJaZCjOSz1ocOxuWW.jpg',
                                LG:
                                    'http://image.tmdb.org/t/p/w500/gIM8OF8cbmsJaZCjOSz1ocOxuWW.jpg',
                                dominantColors: [
                                    '#398f9a',
                                    '#b7cfc9',
                                    '#2f3231',
                                    '#8acfd5',
                                    '#31424e'
                                ]
                            }
                        ]
                    },
                    type: 'Series',
                    _links: {
                        self: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/series/ad882a04-f0f9-4fb3-b3f8-d0c6cb06f8d1'
                        },
                        content: {
                            href:
                                'http://black-gateway-black.apps.test-digital.cellc.co.za/api/content/play/ad882a04-f0f9-4fb3-b3f8-d0c6cb06f8d1'
                        }
                    }
                }
            ]
        }
    ];
    const setSelectedItemActionMock = jest.fn();
    const loadFeaturedContentAsyncActionMock = jest.fn();
    const loadContentCatalogueAsyncActionMock = jest.fn();

    it('should render without crashing', () => {
        shallow(
            <HomeView
                setSelectedItemAction={setSelectedItemActionMock}
                loadFeaturedContentAsyncAction={loadFeaturedContentAsyncActionMock}
                loadContentCatalogueAsyncAction={loadContentCatalogueAsyncActionMock}
            />
        );
    });

    it('should render without crashing with content', () => {
        shallow(
            <HomeView
                featuredContent={featuredContentMock}
                contentCatalogue={contentCatalogueMock}
                setSelectedItemAction={setSelectedItemActionMock}
                loadFeaturedContentAsyncAction={loadFeaturedContentAsyncActionMock}
                loadContentCatalogueAsyncAction={loadContentCatalogueAsyncActionMock}
            />
        );
    });
});
