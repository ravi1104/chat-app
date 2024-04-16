import './App.css';
import { useEffect, useState } from 'react';
import ChatApp from './Components/ChatApp';

function App() {
  const [auth, setAuth] = useState(null);
  const [time, setTime] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1)
      if (time <= 0) {
        setAuth(true)
      }
    }, 1000);
  })
  return (
    <div className="App">
      {(!auth) ?
        <>
          <p>Auto Entering in {time} seconds</p>
        </> :
        <>
          <ChatApp />
        </>}
    </div>
  );
}

export default App;
