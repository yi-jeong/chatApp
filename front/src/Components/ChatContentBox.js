import React,{useRef,useEffect} from "react";
import { useChatList } from "../ChatContext";

function ChatContentBox(){

    const messageBoxRef = useRef();
    const chatList = useChatList();
    
    const scrollToBottom = () => {
        if (messageBoxRef.current) {
          messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
      };

      useEffect(() => {
        scrollToBottom();
      }, [chatList]);

    return(
        <div className="chat-wrap">
            <div className="container">
                <div className="chat-content-box" ref={messageBoxRef}>
                    { chatList.map((el, index) => (
                        <div className="chat" key={index}>
                            <div className="chat-name">{el.name}</div>
                            <div className="chat-message">{el.message}</div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatContentBox