export const initialState = {
    userID: "0",
    username: 'Christopher',
    profilePhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    userPosts: {
        posts: [
            {
                postID: 1,
                postPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                postMessage: 'dummyMessage',
                postComments: {
                    comments: [
                        {
                            commentID: 3,
                            commentText: 'I liked your curly hair 🧡',
                            relative_x: '88',
                            relative_y: '99',
                            userIdentity: "1"
                        }
                    ]
                }
            }, {
                postID: 2,
                postPhoto: 'https://picsum.photos/seed/picsum/800/600',
                postMessage: 'dummyMessage',
                postComments: {
                    comments: [
                        {
                            commentID: 3,
                            commentText: 'helloworld2',
                            relative_x: '120',
                            relative_y: '190',
                            userIdentity: "0"
                        }
                    ]
                }
            }
        ]
    },
    friends: {
        friends: [
            {
                userID: "1",
                username: 'Karen',
                profilePhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                userPosts: {
                    posts: [
                        {
                            postID: 3,
                            postPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                            postMessage: 'From my happy hour 🧡',
                            postComments: {
                                comments: [
                                    {
                                        commentID: 3,
                                        commentText: 'I love your smile 😻',
                                        relative_x: '135',
                                        relative_y: '95',
                                        userIdentity: "0"
                                    },
                                    {
                                        commentID: 4,
                                        commentText: 'Your hair looks gorgeous',
                                        relative_x: '313',
                                        relative_y: '135',
                                        userIdentity: "2"
                                    },
                                    {
                                        commentID: 4,
                                        commentText: 'Comment my blouse',
                                        relative_x: '93',
                                        relative_y: '239',
                                        userIdentity: "1"
                                    }
                                ]
                            }
                        }, {
                            postID: 4,
                            postPhoto: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80',
                            postMessage: 'friendPostMessage',
                            postComments: {
                                comments: [
                                    {
                                        commentID: 5,
                                        commentText: 'helloworld',
                                        relative_x: '88',
                                        relative_y: '99',
                                        userIdentity: "2"
                                    },
                                    {
                                        commentID: 6,
                                        commentText: 'helloworld4',
                                        relative_x: '100',
                                        relative_y: '150',
                                        userIdentity: "0"
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                userID: "2",
                username: 'Joseph',
                profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                userPosts: {
                    posts: [
                        {
                            postID: 3,
                            postPhoto: 'https://picsum.photos/800/600?random=2',
                            postMessage: 'friendPostMessage',
                            postComments: {
                                comments: [
                                    {
                                        commentID: 3,
                                        commentText: 'helloworld',
                                        relative_x: '88',
                                        relative_y: '99',
                                        userIdentity: "1"
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}