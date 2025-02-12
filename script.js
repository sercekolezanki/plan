function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString("pl-PL", { hour12: false });
    document.getElementById("date").innerText = now.toLocaleDateString("pl-PL");
}
setInterval(updateClock, 1000);
updateClock();

document.querySelector(".data").addEventListener("change", populateSchedule);

function populateSchedule() {
    const scheduleBody = document.getElementById("scheduleBody");
    scheduleBody.innerHTML = ""; 
    const dateInput = document.querySelector(".data");
    const selectedDate = dateInput && dateInput.value ? dateInput.value : new Date().toISOString().split('T')[0];
    
    const lessonHours = ["8:05", "8:55", "9:50", "10:40", "11:35", "12:25", "13:20", "14:10", "15:05", "16:00", "16:50", "17:40"];
    
    for (let i = 0; i < lessonHours.length; i++) {
        let nextHour = new Date();
        let [h, m] = lessonHours[i].split(":");
        nextHour.setHours(parseInt(h));
        nextHour.setMinutes(parseInt(m) + 45);
        let nextTime = `${nextHour.getHours()}:${nextHour.getMinutes().toString().padStart(2, '0')}`;
        
        let row = `<tr><td>${i + 1}</td><td>${lessonHours[i]}</td>`;
        
        for (let g = 1; g <= 3; g++) {
            
            let lesson = schedule.find(l => l.lessonTime === i + 1 && l.group === g && l.lessonDate === selectedDate);
            if (lesson) {
                row += `<td class='clickable' onclick="showInfo('${lesson.lecturer}', ${g})">
                            ${subject[lesson.id].short}
                            <div class='progress-bar progress${g}' id='progress-${i}-${g}'></div>
                        </td>`;
            } else {
                row += `<td><div class='progress-bar progress${g}' id='progress-${i}-${g}'></div></td>`;
            }
        }
        row += `<td>${nextTime}</td></tr>`;
        scheduleBody.innerHTML += row;
    }
    updateProgressBars();
}

function showInfo(lecturer, group) {
    alert(`Zajęcia prowadzi: ${lecturer}, Grupa: ${group}`);
}

function updateProgressBars() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const lessonTimes = [485, 535, 590, 640, 695, 745, 800, 850, 905, 960, 1010, 1070];
    
    lessonTimes.forEach((start, index) => {
        let elapsed = currentMinutes - start;
        let percentage = Math.min(100, Math.max(0, (elapsed / 45) * 100));
        for (let g = 1; g <= 3; g++) {
            let progressBar = document.getElementById(`progress-${index}-${g}`);
            if (progressBar) {
                progressBar.style.width = percentage + "%";
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", populateSchedule);
setInterval(updateProgressBars, 1000);
