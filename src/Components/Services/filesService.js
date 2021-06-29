export const fetchFiles = async (fileUrl) => {
  try {
    const url = `http://localhost:8000/api/${fileUrl}`;
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log(res.status);
    }
  } catch (error) {
    console.log(error);
  }
};
