export const UserLogin = async (email, password) => {
  try {
    const userDetails = { email, password };
    const url = "http://localhost:8000/login";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log(res.status, "status");
      return res.status;
    }
  } catch (error) {
    console.log(error, "error");
  }
};
