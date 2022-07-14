const FIREBASE_DOMAIN =
  'https://warma-project-73375-default-rtdb.asia-southeast1.firebasedatabase.app/context.json';

export const addContext = async (context: string) => {
  const response = await fetch(FIREBASE_DOMAIN, {
    method: 'POST',
    body: JSON.stringify(context),
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

export async function getAllContext() {
  const response = await fetch(FIREBASE_DOMAIN);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get context.');
  }

  const transformedContexts = [];

  for (const key in data) {
    const contextObj = {
      id: key,
      ...data[key],
    };

    transformedContexts.push(contextObj);
  }

  return transformedContexts;
}
