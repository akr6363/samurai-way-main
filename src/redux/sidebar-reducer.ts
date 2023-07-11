
import AndrewPhoto from "../img/friends/Andrew.png";
import DimaPhoto from "../img/friends/Dima.png";
import GarryPhoto from "../img/friends/Garry.png";
import {ActionsTypes} from "./redux-store";

export type friendsType = {
    id: number
    name: string
    photo: string
}
export type navBarType = {
    friends: Array<friendsType>
}

const initialState: navBarType = {
    friends: [
        {id: 1, name: 'Andrew', photo: AndrewPhoto},
        {id: 2, name: 'Dima', photo: DimaPhoto},
        {id: 3, name: 'Garry', photo: GarryPhoto},
    ]
}

const sidebarReducer = (state: navBarType = initialState, action: ActionsTypes) => {

    return state
};

export default sidebarReducer