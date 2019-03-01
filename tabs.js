var currentPage;
var aboutTxt = 100;
var aboutBg = 200;
var btn1Hovering = false;
var gamesTxt = 100;
var gamesBg = 200;
var btn2Hovering = false;
var updatesTxt = 100;
var updatesBg = 200;
var btn3Hovering = false;
if(localStorage.getItem("currentPage") === null) {
  currentPage = "games";
}
else {
  currentPage = localStorage.getItem("currentPage");
}
function init() {
  if(currentPage === "about") {
    document.getElementById("about").style.opacity = 1;
    document.getElementById("games").style.opacity = 0;
    document.getElementById("updates").style.opacity = 0;
    aboutTxt = 200;
    aboutBg = 100;
  }
  else if(currentPage === "games") {
    document.getElementById("about").style.opacity = 0;
    document.getElementById("games").style.opacity = 1;
    document.getElementById("updates").style.opacity = 0;
    gamesTxt = 200;
    gamesBg = 100;
  }
  else if(currentPage === "updates"){
    document.getElementById("about").style.opacity = 0;
    document.getElementById("games").style.opacity = 1;
    document.getElementById("updates").style.opacity = 0;
    updatesTxt = 200;
    updatesBg = 100;
  }
};
function fadePages() {
  if(currentPage === "about") {
    var about = document.getElementById("about");
    if(parseFloat(about.style.opacity) < 1) {
      document.getElementById("about").style.opacity = parseFloat(about.style.opacity) + 0.05;
    }
    var games = document.getElementById("games");
    if(parseFloat(games.style.opacity) > 0) {
      document.getElementById("games").style.opacity = parseFloat(games.style.opacity) - 0.05;
    }
    var updates = document.getElementById("updates");
    if(parseFloat(updates.style.opacity) > 0) {
      document.getElementById("updates").style.opacity = parseFloat(about.style.opacity) - 0.05;
    }
  }
  else if(currentPage === "games") {
    var about = document.getElementById("about");
    if(parseFloat(about.style.opacity) > 0) {
      document.getElementById("about").style.opacity = parseFloat(about.style.opacity) - 0.05;
    }
    var games = document.getElementById("games");
    if(parseFloat(games.style.opacity) < 1) {
      document.getElementById("games").style.opacity = parseFloat(games.style.opacity) + 0.05;
    }
    var updates = document.getElementById("updates");
    if(parseFloat(updates.style.opacity) > 0) {
      document.getElementById("updates").style.opacity = parseFloat(updates.style.opacity) - 0.05;
    }
  }
  else if(currentPage === "updates") {
    var about = document.getElementById("about");
    if(parseFloat(about.style.opacity) > 0) {
      document.getElementById("about").style.opacity = parseFloat(about.style.opacity) - 0.05;
    }
    var games = document.getElementById("games");
    if(parseFloat(games.style.opacity) > 0) {
      document.getElementById("games").style.opacity = parseFloat(games.style.opacity) - 0.05;
    }
    var updates = document.getElementById("updates");
    if(parseFloat(updates.style.opacity) < 1) {
      document.getElementById("updates").style.opacity = parseFloat(updates.style.opacity) + 0.05;
    }
  }
  var about = document.getElementById("about");
  if(parseFloat(about.style.opacity) <= 0) {
    about.style.left = "-9999px";
  }
  else {
    about.style.left = "20%";
  }
  var games = document.getElementById("games");
  console.log(parseFloat(games.style.opacity));
  if(parseFloat(games.style.opacity) <= 0) {
    games.style.left = "-9999px";
  }
  else {
    games.style.left = "20%";
  }
  var updates = document.getElementById("updates");
  if(parseFloat(updates.style.opacity) <= 0) {
    updates.style.left = "-9999px";
  }
  else {
    updates.style.left = "20%";
  }
};
init();
function btn1Hover() {
  var aboutTab = document.getElementById("about-tab");
  aboutTab.style.backgroundColor = "rgb(" + aboutBg + ", " + aboutBg + ", " + aboutBg + ")";
  aboutTab.style.color = "rgb(" + aboutTxt + ", " + aboutTxt + ", " + aboutTxt + ")";
  aboutTxt += (aboutTxt < 200) ? 5 : 0;
  aboutBg -= (aboutBg > 100) ? 5 : 0;
};
function btn1NoHover() {
  var aboutTab = document.getElementById("about-tab");
  aboutTab.style.backgroundColor = "rgb(" + aboutBg + ", " + aboutBg + ", " + aboutBg + ")";
  aboutTab.style.color = "rgb(" + aboutTxt + ", " + aboutTxt + ", " + aboutTxt + ")";
  aboutTxt -= (aboutTxt > 100) ? 5 : 0;
  aboutBg += (aboutBg < 200) ? 5 : 0;
};
function btn2Hover() {
  var gamesTab = document.getElementById("games-tab");
  gamesTab.style.backgroundColor = "rgb(" + gamesBg + ", " + gamesBg + ", " + gamesBg + ")";
  gamesTab.style.color = "rgb(" + gamesTxt + ", " + gamesTxt + ", " + gamesTxt + ")";
  gamesTxt += (gamesTxt < 200) ? 5 : 0;
  gamesBg -= (gamesBg > 100) ? 5 : 0;
};
function btn2NoHover() {
  var gamesTab = document.getElementById("games-tab");
  gamesTab.style.backgroundColor = "rgb(" + gamesBg + ", " + gamesBg + ", " + gamesBg + ")";
  gamesTab.style.color = "rgb(" + gamesTxt + ", " + gamesTxt + ", " + gamesTxt + ")";
  gamesTxt -= (gamesTxt > 100) ? 5 : 0;
  gamesBg += (gamesBg < 200) ? 5 : 0;
};
function btn3Hover() {
  var updatesTab = document.getElementById("updates-tab");
  updatesTab.style.backgroundColor = "rgb(" + updatesBg + ", " + updatesBg + ", " + updatesBg + ")";
  updatesTab.style.color = "rgb(" + updatesTxt + ", " + updatesTxt + ", " + updatesTxt + ")";
  updatesTxt += (updatesTxt < 200) ? 5 : 0;
  updatesBg -= (updatesBg > 100) ? 5 : 0;
};
function btn3NoHover() {
  var updatesTab = document.getElementById("updates-tab");
  updatesTab.style.backgroundColor = "rgb(" + updatesBg + ", " + updatesBg + ", " + updatesBg + ")";
  updatesTab.style.color = "rgb(" + updatesTxt + ", " + updatesTxt + ", " + updatesTxt + ")";
  updatesTxt -= (updatesTxt > 100) ? 5 : 0;
  updatesBg += (updatesBg < 200) ? 5 : 0;
};
var pPage = currentPage; //what page you were on 1 frame ago
function doByTime() {
  if(btn1Hovering || currentPage === "about") {
    btn1Hover();
  }
  else {
    btn1NoHover();
  }
  if(btn2Hovering || currentPage === "games") {
    btn2Hover();
  }
  else {
    btn2NoHover();
  }
  if(btn3Hovering || currentPage === "updates") {
    btn3Hover();
  }
  else {
    btn3NoHover();
  }
  fadePages();
  if(pPage !== currentPage) {
    localStorage.setItem("currentPage", currentPage);
  }
  pPage = currentPage;
};
window.setInterval(doByTime, 1000 / 60);
