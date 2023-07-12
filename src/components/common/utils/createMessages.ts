import {DialogsType, messagesType, MessageType} from "../../../redux/dialogs-reducer";

export const _createMessages = (dialogs: DialogsType[]) => {
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

export const createMessages = (dialogs: DialogsType[]) => {
    const messages: messagesType = {}
    dialogs.forEach(d=> {
        messages[d.id] = []
        const numMessages = Math.floor(Math.random() * 11) + 2;
        for (let i = 0; i < numMessages; i++) {
            const id = i + 1;
            const message = `Message ${id}: ${Math.random().toString(36).substring(7)}`; // случайная строка
            const isMy = Math.random() < 0.5; // случайный булевый флаг
            messages[d.id].push({ id, message, isMy });
        }
    })
    return messages
}