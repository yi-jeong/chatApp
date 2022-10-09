import React, { useState, useEffect, createContext, useContext, useReducer } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

const chatBox = { name: "", message: "" }

function chatReducer(state,action){
    switch (action.type){
        case "CREATE":
            console.log(action.chat);
            return socket.emit("send chat", action.chat);
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.name
            };
        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const ChatStateContext = createContext();
const ChatDispatchContext = createContext();
const ChatListContext = createContext();

export function ChatProvider({children}){

    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on("receive chat", (message) => {
            setChatList((chatList) => chatList.concat(message));
            dispatch({
                type: "CHANGE_NAME",
                name: message.name
            });
        });
    }, []);

    const [state, dispatch] = useReducer(chatReducer,chatBox);

    return(
        <ChatStateContext.Provider value={state}>
            <ChatDispatchContext.Provider value={dispatch}>
                <ChatListContext.Provider value={chatList}>
                    {children}
                </ChatListContext.Provider>
            </ChatDispatchContext.Provider>
        </ChatStateContext.Provider>
    )
}

export function useChatState(){
    return useContext(ChatStateContext);
}

export function useChatDispatch(){
    return useContext(ChatDispatchContext);
}

export function useChatList(){
    return useContext(ChatListContext);
}