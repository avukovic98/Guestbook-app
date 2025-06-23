import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../api/messageApi';
import MessageList from '../components/MessageList';

function Home() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages()
      .then(setMessages)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <h1>Guestbook</h1>
      <p>See what people wrote about us and feel free to leave a message.</p>
      <MessageList messages={messages} />
      <Link to="/message"><button>Leave a message</button></Link>
    </div>
  );
}
export default Home;