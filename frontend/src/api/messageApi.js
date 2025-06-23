const API_URL = 'http://localhost:5000/api/messages';

export const fetchMessages = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch messages');
  return await res.json();
};

export const postMessage = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to post message');
  return await res.json();
};