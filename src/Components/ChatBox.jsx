import React, { useState, useRef } from "react";
import chat from "../Assets/Group 3417.png";
import user from "../Assets/Rectangle 1148.png";
import send from "../Assets/Group 3419.png";
import user1 from "../Assets/Rectangle 1144.png";
import imgChat from "../Assets/Rectangle 1151.png";
import { useEffect } from "react";
import "./Style/Chat.css";

const ChatBox = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef(null);
  const handleChatOpen = () => {
    setChatOpen(true);
  };

  const hideChat = () => {
    setChatOpen(false);
  };

  //   outside click to close chat handler

  function handler(e) {
    if (chatRef.current && !chatRef.current.contains(e.target)) {
      hideChat();
    }
  }
  // run useEffect when state change
  useEffect(() => {
    if (chatOpen) {
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  }, [chatOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="chatBox_container">
      <div className="chatbox_md">
        <img
          onClick={() => {
            !chatOpen ? handleChatOpen() : hideChat();
          }}
          className="chatImg"
          src={chat}
          alt="img"
        />
        {chatOpen ? (
          <div ref={chatRef} className="helpChat_div">
            <div className="help_chat_head_div">
              <ul className="webName_ul">
                <li>
                  <img className="smCartoonImg" src={user1} alt="img" />
                </li>
                <li>
                  <p className="webName">Customer Support Agent</p>
                </li>
              </ul>
            </div>
            <div className="help_msgs_div">
              <ul className="help_msg_ul">
                <li>
                  <div>
                    <img className="msg_smCartoonImg" src={user} alt="img" />
                    <p className="help_msg_para">Hi, Welcome to iPurvey!</p>
                  </div>
                  {/* <p className="date">1/1/2021 | 05:00 PM</p> */}
                </li>
                <li>
                  <div>
                    <img className="msg_smCartoonImg" src={user} alt="img" />
                    <p className="help_msg_para">How can I help you?</p>
                  </div>
                  <p className="date">1/1/2021 | 05:00 PM</p>
                </li>
              </ul>
              <ul className="cr_user_msd_ul">
                <li>
                  <div>
                    <p className="cr_help_msg_para">
                      I'm a business manager at Qatar Airways. Would like to
                      know about API Plans and Pricing!
                    </p>
                    <img className="msg_smCartoonImg" src={user} alt="img" />
                  </div>
                  <p className="date2">1/1/2021 | 05:00 PM</p>
                  <div className="chat_img">
                    <img src={imgChat} alt="..." />
                  </div>
                </li>
              </ul>
            </div>
            <div className="help_input_div">
              <input
                className="help_input"
                type="text"
                placeholder="How can we help you?"
              />
              <img className="mic_img" src={send} alt="img" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChatBox;
