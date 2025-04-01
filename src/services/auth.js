const base_url = "https://loginsignupbanckend-7.onrender.com/auth"
export const loginUser = async (email, password) => {
    const response = await fetch(`${base_url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  };

  export const signupUser = async (username,email, password) => {
    const response = await fetch(`${base_url}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username,email, password })
    });
    return response.json();
  };
