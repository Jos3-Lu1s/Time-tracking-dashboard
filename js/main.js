async function GetData() {
    const response = await fetch("https://jos3-lu1s.github.io/Time-tracking-dashboard/data/data.json");
    const json = await response.json();

    let hrs = document.getElementsByClassName("hrs");
    let week = document.getElementsByClassName("week");

    daily.addEventListener("click", function () {
        daily.style.color="hsl(235, 45%, 61%)";
        monthly.style.color="#eeeeee";
        weekly.style.color="#eeeeee";

        for (let i = 0; i < hrs.length; i++) {
            hrs[i].innerHTML = json[i].timeframes.daily.current + "hrs"
            week[i].innerHTML = "Last Week - " + json[i].timeframes.daily.previous + "hrs"
        }
    })
    weekly.addEventListener("click", function () {
        weekly.style.color="hsl(235, 45%, 61%)";
        monthly.style.color="#eeeeee";
        daily.style.color="#eeeeee";

        for (let i = 0; i < hrs.length; i++) {
            hrs[i].innerHTML = json[i].timeframes.weekly.current + "hrs"
            week[i].innerHTML = "Last Week - " + json[i].timeframes.weekly.previous + "hrs"
        }
    })
    monthly.addEventListener("click", function () {
        monthly.style.color="hsl(235, 45%, 61%)";
        weekly.style.color="#eeeeee";
        daily.style.color="#eeeeee";

        for (let i = 0; i < hrs.length; i++) {
            hrs[i].innerHTML = json[i].timeframes.monthly.current + "hrs"
            week[i].innerHTML = "Last Week - " + json[i].timeframes.monthly.previous + "hrs"
        }
    })
}

GetData();
