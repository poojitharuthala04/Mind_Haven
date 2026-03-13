
function recommendApps() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const result = document.getElementById('results');
    const appRecommendations = {
        anxiety: ["Calm", "Headspace", "Sanvello"],
        depression: ["BetterHelp", "7 Cups", "Happify"],
        sleep: ["SleepTown", "Calm", "Insight Timer"],
        loneliness: ["7 Cups", "iCall", "YourDOST"],
        productivity: ["Daylio", "Reflectly", "Happify"]
    };
    result.innerHTML = "<h3>Recommended Apps:</h3><ul>";
    checkboxes.forEach(box => {
        const key = box.value;
        if (appRecommendations[key]) {
            appRecommendations[key].forEach(app => {
                result.innerHTML += `<li>${app}</li>`;
            });
        }
    });
    result.innerHTML += "</ul>";
}

function saveMood() {
    const mood = document.querySelector('input[name="mood"]:checked').value;
    let history = JSON.parse(localStorage.getItem('moodHistory') || "[]");
    const now = new Date().toLocaleDateString();
    history.push({ date: now, mood: mood });
    localStorage.setItem('moodHistory', JSON.stringify(history));
    alert("Mood saved!");
}

function loadMoodHistory() {
    let history = JSON.parse(localStorage.getItem('moodHistory') || "[]");
    const container = document.getElementById("moodHistory");
    container.innerHTML = "<h3>Mood History:</h3><ul>";
    history.forEach(entry => {
        container.innerHTML += `<li>${entry.date}: ${entry.mood}</li>`;
    });
    container.innerHTML += "</ul>";
}
