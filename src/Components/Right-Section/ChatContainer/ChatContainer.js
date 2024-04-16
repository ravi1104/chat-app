import React, { useState, useRef, useEffect } from 'react';
import styles from './chat.module.css';
import Hero from './Hero/Hero';
import Picker from 'emoji-picker-react';

function ChatContainer() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [isMentioning, setMentioning] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("");
  const messagesEndRef = useRef(null);

  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  function handleSubmit(e) {
    e.preventDefault();
    if (message === '') {
      return;
    }
    const userName = user_list[Math.floor(Math.random() * user_list.length)];
    const newChat = { userName, text: message };

    setChats([...chats, newChat]);
    setMessage('');
    setMentioning(false)
  }

  function onEmojiClick(emojiObject) {
    const emoji = emojiObject.emoji;
    setMessage(prev => prev + emoji);
    setShowPicker(false);
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  function handleChange(e) {
    const value = e.target.value;
    const indexOfAt = value.lastIndexOf("@");
    if (indexOfAt !== -1 && (value.length === indexOfAt + 1 || value[indexOfAt + 1].match(/\s/) === null)) {
      setMentioning(true);
      const filterText = value.substring(indexOfAt + 1).split(/\s/)[0];
      setMentionFilter(filterText);
    } else {
      setMentioning(false);
    }
    setMessage(value);
  }

  function handleSelectUser(user) {
    const lastAt = message.lastIndexOf("@");
    setMessage(`${message.substring(0, lastAt)}@${user} `);
    setMentioning(false);

  }

  const filteredUsers = mentionFilter ? user_list.filter(user => user.toLowerCase().includes(mentionFilter.toLowerCase())) : user_list;

  return (
    <div>
      <div className={styles.container}>
        {chats.map((chat, index) => (
          <div className={styles.message} key={index}>
            <Hero userName={chat.userName} message={chat.text} />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={message}
          onChange={handleChange}
          placeholder="Type a message..."
          onClick={() => setMentioning(false)}
        />
        <button className={styles.button} type="button" onClick={() => setShowPicker(!showPicker)}>😀</button>
        {showPicker && (
          <div className={styles.emojiContainer}>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
        {isMentioning && (
          <ul className={styles.userList}>
            {filteredUsers.map((user, index) => (
              <li key={index} onClick={() => handleSelectUser(user)}>{user}</li>
            ))}
          </ul>
        )}
        <button className={styles.button} type='submit'>Send</button>
      </form>
    </div>
  );
}

export default ChatContainer;
