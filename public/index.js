

var key = '56f6937a1d052f6ce1e005bc291d24b3';
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=${key}`)
  .then((res) => {console.log(res)})
  //.then((data) => {console.log(data)})
  .catch((err) => {console.log(err)})

async function searchWeather() {  
  const searchInput = document.getElementById("search").value
  try {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${key}`, {
      method: "GET",
      mode: "cors",
      credentials: "omit",
      headers: {
        "content-type": "application/json"
      }
    })
  } catch (error) {
    alert(error);
  }
  console.log(searchInput);
  console.log("Am working!!!");
};