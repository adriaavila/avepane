async function run() {
  console.log("Fetching pydolarve...");
  try {
    const res = await fetch("https://pydolarve.org/api/v1/dollar?page=bcv");
    const json = await res.json();
    console.log("pydolarve:", json);
  } catch (e) {
    console.error("pydolarve error:", e.message);
  }
  
  console.log("Fetching dolarapi...");
  try {
    const res2 = await fetch("https://ve.dolarapi.com/v1/dolares/oficial");
    const json2 = await res2.json();
    console.log("dolarapi:", json2);
  } catch (e) {
    console.error("dolarapi error:", e.message);
  }
}
run();
