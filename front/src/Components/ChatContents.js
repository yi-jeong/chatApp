import React, { useState } from "react";

function ChatContents(){
    return(
        <div className="chat-wrap">
            <div className="container">
                <div className="namesetting">
                    <dl className="d-flex align-items-center">
                        <dt>닉네임 설정</dt>
                        <dd>
                            <input type="text" onChange={(e)=> setUserName(e.target.value)}/>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default NameSetting