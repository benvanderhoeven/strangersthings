import React from 'react';
import { Link } from 'react-router-dom';
import messages_json from '../messages_json';

const MessageInbox = ({messages}) => {
    return(

     <div className="messages-inbox">
    <ul>
      {messages_json.map((msg) => (
        <li key={msg._id}>
          <span>{msg.content}</span>
        </li>
      ))}
    </ul>
    </div>
)
};
export default MessageInbox;
   
    
   

        

    







// Name: ES7 + React / Redux / React - Native snippets
// Id: dsznajder.es7 - react - js - snippets
// Description: Extensions for React, React - Native and Redux in JS / TS with ES7 + syntax.Customizable.Built -in integration with prettier.
//     Version: 4.4.3
// Publisher: dsznajder
// VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets