

var key = '56f6937a1d052f6ce1e005bc291d24b3';
// fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=${key}`)
//   .then((res) => {console.log(res)})
//   .then((data) => {console.log(data)})
//   .catch((err) => {console.log(err)})

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=abia&appid=${key}`)
// .then((res) => {return res.json()})
//  .then((data) => {
//    document.getElementById('test').innerHTML = data.weather[0].main;
//    document.getElementById('des').innerHTML = data.weather[0].description;
//    console.log(data);
//   })
// .catch((err) => {console.log(err)})
(function getLocation() {
  if (navigator.geolocation) {
    console.log('Geolocation Supported');
    var location = navigator.geolocation.watchPosition((position, err) => {
      if (err) {
        console.log(err);
      } else {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        .then((res) => {return res.json()})
         .then((data) => {
           document.getElementById('test').innerHTML = data.weather[0].main;
           document.getElementById('des').innerHTML = data.main.temp;
           //console.log(data);
         })
       .catch((err) => {
         document.getElementById('test').innerHTML = 'Something went wrong, Try a well known city or place. If problem persist Contact me'
         document.getElementById('des').innerHTML = 0.00;
       });
      };
    });
    console.log(location);
  } else {
    console.log('Please Use a Browser that supports Geolocation');
  }
}());


async function searchWeather() {  
  const searchInput = document.getElementById("search").value
  const storage = localStorage.setItem('local', searchInput);
  const output = 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${key}`)
   .then((res) => {return res.json()})
    .then((data) => {
      document.getElementById('test').innerHTML = data.weather[0].main;
      document.getElementById('des').innerHTML = data.main.temp;
      //console.log(data);
    })
  .catch((err) => {
    document.getElementById('test').innerHTML = 'Something went wrong, Try a well known city or place. If problem persist Contact me'
    document.getElementById('des').innerHTML = 0.00;
  });


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
};