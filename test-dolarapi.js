fetch("https://ve.dolarapi.com/v1/dolares/oficial")
  .then(res => res.json())
  .then(data => console.log("dolarapi:", data.promedio))
  .catch(console.error);
