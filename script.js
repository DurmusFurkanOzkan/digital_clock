const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');


//? setInterval ile sürekli bu kodu döndürüyoruz.
const clock = setInterval(() =>{

    const dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();

    hr=hr.toString().padStart("2","0");//? değeri sınırlıyor başına 0 yazıyor
    min=min.toString().padStart("2","0");
    sec=sec.toString().padStart("2","0");

    const timeString = `${hr} : ${min} : ${sec}`;
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;

},500);

// * padStart' incelemek isteyenler için w3school linki
// * https://www.w3schools.com/jsref/jsref_string_padstart.asp