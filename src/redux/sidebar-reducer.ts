import {ActionsTypes, navBarType} from "./store";
import AndrewPhoto from "../img/friends/Andrew.png";
import DimaPhoto from "../img/friends/Dima.png";
import GarryPhoto from "../img/friends/Garry.png";

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