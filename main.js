// Licznik odwiedzin
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('counter').textContent = visitCount;

// Element ruszający (śnieżynka)
const snowflake = document.getElementById('snowflake');
const screenWidth = window.innerWidth;
const randomPosition = Math.random() * screenWidth;
snowflake.style.left = `${randomPosition}px`;
