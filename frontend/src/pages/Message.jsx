import { useState } from 'react';
import { postMessage } from '../api/messageApi';
import { Link } from 'react-router-dom';

function Message() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || !name) return;

    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      await postMessage({ message, name });
      setStatus('Success');
      setMessage('');
      setName('');
    } catch {
      setStatus('Failed to post message');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={isSubmitting}>Post</button>
      <Link to="/"><button>Home</button></Link>
      <p>{status}</p>
    </form>
  );
}

export default Message;