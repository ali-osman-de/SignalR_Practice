import React, { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import WaitingRoom from './components/WaitingRoom';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import ChatRoom from './components/ChatRoom';


function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log(users)

  }, [users])


  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5215/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on('JoinSpecificChatRoom', (username, msg) => {
        console.log("msg: " + msg);
      })

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, { username, msg }]);
      })

      conn.on("ShowAllUsers", () => {
        setUsers(users => [...users, {}]);
        console.log(users);
      })



      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);
    }
    catch (e) {
      console.log(e)
    }
  }

  const sendMessage = async (message) => {
    try {
      await conn.invoke("SendMessage", message)
    } catch (error) {
      console.log(e)
    }
  }

  return (
    <>
      <NavigationBar />

      <div>
        {
          !conn ? <WaitingRoom joinChatRoom={joinChatRoom} /> : <ChatRoom messages={messages} sendMessage={sendMessage} />
        }
      </div>
    </>
  );
}

export default App;
