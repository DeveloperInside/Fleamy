import { getParent, types } from "mobx-state-tree";
import { commentModel } from "./Comment";
import { commentListModel } from "./CommentList";
import { postModel } from "./post";
import { postListModel } from "./PostList";
import Reactotron from 'reactotron-react-native'
import { friendListModel } from "./FriendList";

export const userModel = types
    .model('User', {
        userID: types.identifier,
        username: types.string,
        profilePhoto: types.string,
        userPosts: types.optional(postListModel, { posts: [] }),
        friends: types.optional(friendListModel, { friends: [] })
    }).views(self => ({
        get takePosts() {
            var postsArray = []
            postsArray = [...self.userPosts.posts, { 'username': self.username }]
            postsArray.forEach(element => {

            });
            self.friends.friends.forEach(element => {
                postsArray = [...postsArray, ...element.userPosts.posts]
            });
            return [postsArray, ['asd']]
        }
    }))

const randomNumb = Math.random().toString()
export const user = userModel.create({
    userID: "0",
    username: 'guest',
    profilePhoto: 'https://picsum.photos/seed/picsum/500/500',
    userPosts: {
        posts: [
            {
                postID: 1,
                postPhoto: 'https://picsum.photos/seed/picsum/800/600',
                postMessage: 'dummyMessage',
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
            }, {
                postID: 2,
                postPhoto: 'https://picsum.photos/seed/picsum/800/600',
                postMessage: 'dummyMessage',
                postComments: {
                    comments: [
                        {
                            commentID: 3,
                            commentText: 'helloworld',
                            relative_x: '88',
                            relative_y: '99',
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
                username: 'Friend1',
                profilePhoto: 'https://source.unsplash.com/user/c_v_r/500x500',
                userPosts: {
                    posts: [
                        {
                            postID: 3,
                            postPhoto: 'https://picsum.photos/800/600?random=3',
                            postMessage: 'friendPostMessage',
                            postComments: {
                                comments: [
                                    {
                                        commentID: 3,
                                        commentText: 'helloworld',
                                        relative_x: '88',
                                        relative_y: '99',
                                        userIdentity: "2"
                                    },
                                    {
                                        commentID: 4,
                                        commentText: 'helloworld4',
                                        relative_x: '100',
                                        relative_y: '150',
                                        userIdentity: "1"
                                    }
                                ]
                            }
                        }, {
                            postID: 4,
                            postPhoto: 'https://picsum.photos/800/600?random=3',
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
                username: 'Friend2',
                profilePhoto: 'https://source.unsplash.com/user/c_v_r/500x500',
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
})