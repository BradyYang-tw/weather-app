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
            console.log(data.location);
            console.log(data.forecast);
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