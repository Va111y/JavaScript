const divInput = document.getElementById('divInput');

const resultDiv = document.getElementById('enterDate');

function validationDate (day, month) {
    if(day <= 31 && month <= 12) {
        return true;
    } else {
        alert('Date is not correct');
        return false;
    }
};

function displayDate () {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (validationDate(day, month)) {
            const enterDate = `${year}-${month}-${day}`;
            const enterTime = '00:00:00.000Z';
            const enterDateTime = `${enterDate}T${enterTime}`;
            const enterCorrectDateTimeMs = Date.parse(enterDateTime);

            const timer = document.getElementById('timer');

            const interval = setInterval(() => {
                const now = new Date();
                const currentDateTime = now.toISOString();
                const finishDate = Date.parse(currentDateTime);
                const timeLeftSec = Math.floor((enterCorrectDateTimeMs - finishDate) / 1000);

                if (timeLeftSec <= 0 ) {
                    clearInterval(interval);
                    timer.textContent = `До ${enterDate} час сплив`;
                    return
                }
                    const days = Math.floor(timeLeftSec / 86400);
                    const hours = Math.floor((timeLeftSec % 86400) / 3600);
                    const minutes = Math.floor((timeLeftSec % 3600) / 60);
                    const seconds = Math.floor(timeLeftSec % 60);

                    timer.textContent = `До ${enterDate} залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
            }, 1000)

    };
    
};

divInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        displayDate() 
    }
});

