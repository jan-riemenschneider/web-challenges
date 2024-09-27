
const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url); 
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.results[2].eye_color);
}

fetchData();
