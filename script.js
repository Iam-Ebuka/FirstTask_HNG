const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
const dayNumber = currentDate.getDay();
const dayOfWeek = daysOfWeek[dayNumber];
let day = document.getElementById('currentDay').textContent = `Today is ${dayOfWeek}`;


 function updateMilliseconds() {
            const currentTimeInMilliseconds = new Date().getTime();
            document.getElementById("time").textContent = `Current UTC Milliseconds: ${currentTimeInMilliseconds}`;
        }

       
        setInterval(updateMilliseconds, 1000);
        
        
        updateMilliseconds();