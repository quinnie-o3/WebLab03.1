import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'
import React from 'react';
import Counter from './Counter'
import Login from './Login'
import Card from './Card'
import './index.css';
import Accordion from './Accordion'

function App() {
  //const [count, setCount] = useState(0)

  const user1 = {
    name: "Nhi Quynh Nguyen",
    email: "23521111@gm.uit.edu.vn",
    avatarUrl: "img/shin1.jpg",
    imageSize: 90,
  }

  const user2 = {
    name: "Bao Xuan Nguyen",
    email: "23520132@gm.uit.edu.vn",
    avatarUrl: "img/shin2.webp",
    imageSize: 90,
  }
  return (
<div className="App">
      <Card title="Light Theme Profile">
        <UserProfile userData={user1} theme="light" />
      </Card>

      <Card title="Dark Theme Profile">
        <UserProfile userData={user2} theme="dark" />
      </Card>

      <Card title="Interactive Counter">
        <Counter />
      </Card>

      <Card title="Login Form">
        <Login />
      </Card>

      <Card title="Accordion Example">
        <Accordion />
      </Card>
    </div>
  );
}

export default App;
