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
    
    const lessonHours = ["8:10", "9:00", "9:55", "10:45", "11:40", "12:30", "13:25", "14:15", "15:10", "16:05", "16:55", "17:45"];
    
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
                
                if(lesson.note.length>0)
                row += `<td class='clickable log' onclick="showInfo('${lesson.id}','${lesson.note}','${lesson.type}')">
                            ${subject[lesson.id].short || "ERR" }
                            <div class='progress-bar progress${g}' id='progress-${i}-${g}'></div>
                        </td>`;
                else
                row += `<td class='clickable' onclick="showInfo('${lesson.id}','')">
                            ${subject[lesson.id].short || "ERR"}
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

function showInfo(type,info,t) {
    if(info.length>0)
    alert(`${subject[type].name}\n${info}\n${types[t]}`)
    else
    alert(subject[type].name)
 
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
