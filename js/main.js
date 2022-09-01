async function GetData() {
    const response = await fetch("http://127.0.0.1:5500/data/data.json");
    const json = await response.json();

    console.log(json);
}

GetData();