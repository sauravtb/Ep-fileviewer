export const userLogin = async (email, password) => {
  try {
    const userDetails = { email, password };
    console.log(userDetails);
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
      console.log(data);
    } else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};
