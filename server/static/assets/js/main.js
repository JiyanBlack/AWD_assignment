var mainDom = {
    "timeSpan": document.getElementById("time-span"),
    "modifiedSpan": document.getElementById("modified-span")
}

function startRun() {
    RunAndSetInterval(setCurrentTime, 1000);
    mainDom.modifiedSpan.innerHTML = document.lastModified.split(" ")[0];
}

function RunAndSetInterval(func, timeInterval) {
    func();
    setInterval(func, timeInterval);
}

function setCurrentTime() {
    var now = new Date();
    mainDom.timeSpan.innerHTML = now.toTimeString();
}

startRun()