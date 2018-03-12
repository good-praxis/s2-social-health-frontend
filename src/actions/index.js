import * as types from '../constants/ActionTypes'

let nextMessageId = 0
let nextUserId = 0
let pics = new Array("images/001-chameleon.png",
                      "images/001-owl.png",
                      "images/001-polar-bear.png");

export const addMessage = (message, author, avatar) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    avatar,
    message,
    author,
    date: new Date().toLocaleDateString(),
    timestamp: new Date().toLocaleTimeString()
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name,
    avatar: choosePic 
})

export const messageReceived = (message, author, avatar) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author,
    avatar,
    date: new Date().toLocaleDateString(),
    timestamp: new Date().toLocaleTimeString()
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})

function choosePic() {
    let randomNum = Math.floor(Math.random() * pics.length);
    return pics[randomNum]
}



