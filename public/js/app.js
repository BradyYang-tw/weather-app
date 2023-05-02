console.log('Hello World');

// fetch('http://puzzle.mead.io/puzzle').then((res)=>{
//     console.log(res.data);
//     res.json().then((data)=>{
//         console.log(data);
//     })
// })
const getWeather = (address)=>{
    fetch(`http://localhost:3000/weather?address=${address}`).then((res)=>{
    res.json().then((data)=>{
        console.log(data);
        if (data.error){
            console.log(data.error);
        }else{
            const location = document.querySelector('.location');
            const forecast = document.querySelector('.forecast');
            console.log(data.location);
            console.log(data.forecast);
            location.textContent = data.location;
            forecast.textContent = data.forecast[0];
        }
    })
})
}


const weatherForm =  document.querySelector('form');
const search = document.querySelector('input')
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = search.value;
    getWeather(location);
})