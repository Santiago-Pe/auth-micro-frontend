
export const login = async (username: string, password: string) => {
  const response = await fetch(process.env.REACT_APP_API_LOGIN_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  return data.token;
};
export const signup = async (username: string, password: string) => {
  const response = await fetch(process.env.REACT_APP_API_SIGNUP_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Signup failed');
  }
  const data = await response.json();
  return data;
};
export const verify = async (token: string) => {
  const response = await fetch(process.env.REACT_APP_API_VERIFY_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  if (!response.ok) {
    throw new Error('Verification failed');
  }
  const data = await response.json();
  return data.verified;
};
