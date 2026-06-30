// ===============================
// Gamified Learning Platform
// Developed by Muhammad Mohsin
// ===============================

// Welcome Button
function showMessage() {
    alert("🎉 Welcome to the Gamified Learning Platform!\nStart learning and earn exciting rewards.");
}

// Counter Animation
function animateValue(id, start, end, duration) {

    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let obj = document.getElementById(id);

    let timer = setInterval(function () {

        current += increment;
        obj.innerHTML = current;

        if (current == end) {
            clearInterval(timer);
        }

    }, stepTime);
}

// Progress Bar Animation
window.onload = function () {

    let progress = document.querySelectorAll(".progress-fill");

    progress.forEach(function(bar){

        let value = bar.getAttribute("data-progress");

        bar.style.width = value + "%";

    });

};


// Leaderboard Hover
let players = document.querySelectorAll(".leaderboard li");

players.forEach(function(player){

    player.addEventListener("mouseover",function(){

        player.style.color="#6C63FF";
        player.style.fontWeight="bold";

    });

    player.addEventListener("mouseout",function(){

        player.style.color="#222";
        player.style.fontWeight="normal";

    });

});


// Notification Button
function notification(){

    alert("🏆 Congratulations!\nYou earned +50 XP.");

}


// Daily Goal
let xp = 60;

function earnXP(){

    xp += 10;

    if(xp>100)
        xp=100;

    document.getElementById("xp").innerHTML=xp+" / 100 XP";

    document.getElementById("dailyBar").style.width=xp+"%";

    if(xp==100){

        alert("🎉 Daily Goal Completed!");

    }

}


// Dark Mode

function darkMode(){

    document.body.classList.toggle("dark");

}


// Quiz

let score = 0;

function checkAnswer(answer){

    if(answer=="correct"){

        score+=20;

        alert("✅ Correct!\n+20 XP");

    }

    else{

        alert("❌ Wrong Answer");

    }

}


// Badge Unlock

function unlockBadge(){

    alert("🥇 Congratulations!\nYou unlocked the Gold Badge!");

}


// Search Courses

function searchCourse(){

    let input=document.getElementById("search").value.toLowerCase();

    let cards=document.querySelectorAll(".course-card");

    cards.forEach(function(card){

        let title=card.innerText.toLowerCase();

        if(title.indexOf(input)>-1){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// Scroll Button

window.onscroll=function(){

    let btn=document.getElementById("topBtn");

    if(btn){

        if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

            btn.style.display="block";

        }

        else{

            btn.style.display="none";

        }

    }

};

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}