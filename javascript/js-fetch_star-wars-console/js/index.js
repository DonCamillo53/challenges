console.clear();

const url = "https://swapi.py4e.com/api/people";

let fetchedData;
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData().then((data) => {
  fetchedData = data;
});
