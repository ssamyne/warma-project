const API_DOMAIN = 'http://localhost:5555/context';

export const addContext = async (context: string) => {
  const response = await fetch(API_DOMAIN, {
    method: 'POST',
    body: JSON.stringify({ context }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Sharing system not available.');
  }

  return null;
};
