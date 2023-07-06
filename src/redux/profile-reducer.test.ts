import {v1} from "uuid";
import profileReducer, {addPostAC, deletePostAC, ProfilePageType, setProfile} from "./profile-reducer";
import {profileAPI} from "../api/api";


let startState: ProfilePageType


beforeEach(() => {
    startState = {
        postsData: [
            {id: 1, message: "Hi, how are you?", likeCount: 15},
            {id: 2, message: "It is my first post", likeCount: 20},
            {id: 3, message: "Yoooo", likeCount: 1111},
            {id: 4, message: "Vlad dibil", likeCount: 100500},
        ],
        profile: null,
        status: ''
    }
})

test('new post should be added', () => {
    const endState = profileReducer(startState, addPostAC('Hello!'))
    expect(endState.postsData.length).toBe(5)
    expect(endState.postsData[0]).toEqual({id: 5, message: "Hello!", likeCount: 0})
})

test('post should be deleted',  () => {
    const endState = profileReducer(startState, deletePostAC(1))
    expect(endState.postsData.length).toBe(3)
    expect(startState.postsData.length).toBe(4)
})


