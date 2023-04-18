
import {ActionsTypes} from "./redux-store";

const ADD_POST = "ADD_POST"
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type changeNewPostTextActionType = ReturnType<typeof changeNewPostTextAC>

export type ActionsTypesForProfile =
    AddPostActionType
    | changeNewPostTextActionType


const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 15},
        {id: 2, message: "It is my first post", likeCount: 20},
        {id: 3, message: "Yoooo", likeCount: 1111},
        {id: 4, message: "Vlad dibil", likeCount: 100500},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state

        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.value
            return state
        default:
            return state
    }
};

export const addPostAC = () => ({
    type: ADD_POST
} as const)

export const changeNewPostTextAC = (newText: string) => ({
    type: CHANGE_NEW_POST_TEXT,
    value: newText
} as const)


export default profileReducer