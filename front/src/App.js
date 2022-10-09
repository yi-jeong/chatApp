import React,{ useState, useEffect, useCallback, useRef } from 'react';
import './assets/css/bootstrap.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import NameSetting from './Components/NameSetting';
import ChatContentBox from './Components/ChatContentBox';
import ChatInputBox from './Components/ChatInputBox';
import { ChatProvider } from './ChatContext';



function App() {
  return (
    <ChatProvider>
      <div className="wrap">
        <div className='con'>
          <NameSetting />
          <ChatContentBox />
          <ChatInputBox />
        </div> 
      </div>
    </ChatProvider>
  );
}

export default App;
