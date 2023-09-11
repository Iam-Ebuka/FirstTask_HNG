const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
const dayNumber = currentDate.getDay();
const dayOfWeek = daysOfWeek[dayNumber];
let day = document.getElementById('currentDay').textContent = `Today is ${dayOfWeek}`;


 function updateMilliseconds() {
            const currentTime = new Date();
			const hours = currentTime.getHours();
			const minutes = currentTime.getMinutes();
			const seconds = currentTime.getSeconds();
			const milliseconds = currentTime.getMilliseconds();

			
			document.getElementById("hour").textContent = ` ${hours}`;
			document.getElementById("minute").textContent = ` ${minutes}`;
			document.getElementById("seconds").textContent = ` ${seconds}`;
			document.getElementById("millisec").textContent = ` ${milliseconds}`;
        }

        setInterval(updateMilliseconds, 1);
        
        
        updateMilliseconds();