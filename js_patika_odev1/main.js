let name = prompt("Adınızı Giriniz: ")
let user = document.querySelector("#myName")

user.innerHTML = name;



setInterval(myTimer);

function myTimer() {

    const now = new Date();


    let year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        day = now.getDay(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds()



    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']


    let fullClock = document.querySelector("#myClock")
    fullClock.innerHTML = `${hour} : ${minute} : ${second} `

    let fullDate = document.querySelector("#myDate")
    fullDate.innerHTML = `${date} ${months[month]} ${days[day]}`

}