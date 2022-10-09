import React,{ useState, useEffect, useCallback, useRef } from 'react';
import io from "socket.io-client";
import './assets/css/bootstrap.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import NameSetting from './Components/NameSetting';
import ChatContentBox from './Components/ChatContentBox';
import ChatInputBox from './Components/ChatInputBox';

const socket = io.connect("http://localhost:4000");

function App() {

  const [userName, setUserName] = useState('');
  const [nowChat, setNowChat] = useState('');


  useEffect(() => {
    socket.on("receive chat", (message) => {
      console.log(message)
      setChatList((chatList) => chatList.concat(message));
    });
  }, []);

  const buttonHandler = useCallback(() => {
    console.log("버튼클릭")
    socket.emit("send chat", { name: userName, message: nowChat }); 
  }, [{ name: userName, message: nowChat }]);

  return (
      <div className="wrap">
        <div className='con'>

          <div className="namesetting-wrap">
              <div className="container">
                  <div className="namesetting">
                      <dl className="d-flex align-items-center">
                          <dt>닉네임 설정</dt>
                          <dd>
                              {userName}
                              <input type="text" onChange={(e)=> setUserName(e.target.value)}/>
                          </dd>
                      </dl>
                  </div>
              </div>
          </div>

          <div className="chat-wrap">
            <div className="container">
                <div className="chat-content-box">
                {chatList.map((ele, index) => (
                  <div className="chat-box" key={index}>
                    <div className="chat-name">{ele.name}</div>
                    <div className="chat-txt">{ele.message}</div>
                  </div>
                ))}
                </div>
            </div>
          </div>

          <div className="chat-wrap">
            <div className="container">
                <div className="chat-content-box">
                    <input className='form-control' type="text" onChange={(e)=> setNowChat(e.target.value)} />
                    <button onClick={() => buttonHandler()}>입력</button>
                </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default App;
