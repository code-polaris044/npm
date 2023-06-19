let a = fetch(
  "https://umayadia-apisample.azurewebsites.net/api/persons/Shakespeare"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((response) => {
    const data = response.data; // dataオブジェクトを取得

    console.log(response); // { success: true, data: { ... } }
    console.log("Name:", data.name);
    console.log("Age:", data.age);
    console.log("Note:", data.note);
    console.log("Register Date:", data.registerDate);

    document.getElementById("music").innerText = `
      Name: ${data.name}
      Age: ${data.age}
      Note: ${data.note}
      Register Date: ${data.registerDate}
    `;
  })
  .catch((error) => {
    console.error(error);
  });
