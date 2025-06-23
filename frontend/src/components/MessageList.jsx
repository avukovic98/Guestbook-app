// src/components/MessageList.jsx
function MessageList({ messages }) {
  if (!Array.isArray(messages)) return null;

  return (
    <ul>
      {messages.map((msg, idx) => (
        <li key={idx}>
          <p>{msg.message}</p>
          <small>— {msg.name}, {new Date(msg.created_at).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}

export default MessageList;