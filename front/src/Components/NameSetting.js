import React, { useEffect, useState } from "react";
import { useChatDispatch,useChatState } from "../ChatContext";

function NameSetting(){

    useEffect(()=>{
        const nameValue = document.getElementById("chatName").value;
        dispatch({
            type: "CHANGE_NAME",
            name: nameValue
        });
    },[])

    const state = useChatState();
    const dispatch = useChatDispatch();

    const change = (e) => {
        dispatch({
            type: "CHANGE_NAME",
            name: e.target.value
        });
    }

    console.log(state)

    return(
        <div className="namesetting-wrap">
            <div className="container">
                <div className="namesetting">
                    <dl className="d-flex align-items-center">
                        <dt className="button-box">닉네임 설정</dt>
                        <dd className="input-box">
                            <input className="form-control" type="text" id="chatName" onChange={(e)=> change(e)}/>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default NameSetting