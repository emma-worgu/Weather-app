

var key = '56f6937a1d052f6ce1e005bc291d24b3';
// fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=${key}`)
//   .then((res) => {console.log(res)})
//   .then((data) => {console.log(data)})
//   .catch((err) => {console.log(err)})

fetch(`http://api.openweathermap.org/data/2.5/weather?q=abia&appid=${key}`)
.then((res) => {return res.json()})
 .then((data) => {
   document.getElementById('test').innerHTML = data.weather[0].main;
   document.getElementById('des').innerHTML = data.weather[0].description;
   console.log(data);
  })
.catch((err) => {console.log(err)})


async function searchWeather() {  
  const searchInput = document.getElementById("search").value
  if (searchInput === ""){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=nigeria,${searchInput}&appid=${key}`)
   .then((res) => {return res.json()})
    .then((data) => {document.getElementById('test').innerHTML = data.weather[0].description})
  .catch((err) => {console.log(err)})
  }


  // try {
  //   let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${key}`, {
  //     method: "GET",
  //     mode: "no-cors",
  //   })
  //   //const data = response.json();
  //   const data = response.text();
  //   console.log(data)
  // } catch (error) {
  //   //alert(error);
  // }
  console.log(searchInput);
  console.log("Am working!!!");
  
};