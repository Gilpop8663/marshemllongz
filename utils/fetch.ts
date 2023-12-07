export const getFetch = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('잘못된 요청입니다.');
  }

  return response.json();
};

export const postFetch = async <T>(url: string, body: T): Promise<string | null> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('잘못된 요청입니다.');
  }

  return response.headers.get('location');
};

export const putFetch = async <T>(url: string, body: T) => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('잘못된 요청입니다.');
  }
};

export const patchFetch = async <T>(url: string, body: T) => {
  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('잘못된 요청입니다.');
  }
};

export const deleteFetch = async (url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('잘못된 요청입니다.');
  }
};
