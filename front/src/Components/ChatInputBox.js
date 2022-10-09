import React, {useState } from "react";
import { useChatDispatch, useChatState } from "../ChatContext";

function ChatInputBox(){

    const [nowChat, setNowChat] = useState('');

    const state = useChatState();
    const dispatch = useChatDispatch();

    const chatMessageChange = (e) => {
        setNowChat(e.target.value);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }

    const onSubmit = e => {
        dispatch({
            type: "CREATE",
            chat: {
                name: state.name,
                message: nowChat
            }
        });
        document.getElementById("chatMessage").value="";
    }

    return(
        <div className="chat-wrap">
            <div className="container">
                <div className="chat-content-box d-flex">
                    <div className="input-box"><input className="form-control" id="chatMessage" type="text" onKeyPress={(e)=>handleKeyPress(e)} onChange={(e)=>chatMessageChange(e)}/></div>
                    <div className="button-box"><button className="btn btn-success" onClick={(e)=>onSubmit(e)}>입력</button></div>               
                </div>
            </div>
        </div>
    )
}

export default ChatInputBox