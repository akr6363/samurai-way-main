import {DialogsType, messagesType, MessageType} from "../../../redux/dialogs-reducer";




export const createMessages = (dialogs: DialogsType[]) => {
    const messages: messagesType = {}
    dialogs.forEach(d=> {
        messages[d.id] = []
        const trueCount = Math.floor(Math.random() * 3) + 1; // генерируем случайное количество сообщений с isMy: true
        const falseCount = Math.floor(Math.random() * 3) + 1; // генерируем случайное количество сообщений с isMy: false
        let id = 0;

        for (let i = 0; i < trueCount; i++) {
            messages[d.id].push({
                id: ++id,
                message: `Message ${id}`,
                isMy: true,
            });
        }

        for (let i = 0; i < falseCount; i++) {
            messages[d.id].push({
                id: ++id,
                message: `Message ${id}`,
                isMy: false,
            });
        }
    })
    return messages
}