fetch("https://pydolarve.org/api/v1/dollar?page=bcv")
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
fetch("https://ve.dolarapi.com/v1/dolares/oficial")
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
