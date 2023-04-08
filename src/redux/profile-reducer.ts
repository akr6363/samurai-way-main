import {ActionsTypes, profilePageType} from "./state";

const ADD_POST = "ADD_POST"
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

type AddPostActionType = ReturnType<typeof addPostAC>
type changeNewPostTextActionType = ReturnType<typeof changeNewPostTextAC>

export type ActionsTypesForProfile =
    AddPostActionType
    | changeNewPostTextActionType

const profileReducer = (state: profilePageType, action: ActionsTypes) => {

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