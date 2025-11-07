/// Log Messages (Script & Showcase)
function logMessage(message) {
    console.log(`[LOG]: ${message}`);  
}

logMessage("A User has went on ze website.");

/// Link Check

function checkLinks() {
   if (window.location.href.includes("projecthype.github.io")) {
      logMessage("User is on the correct domain.");
   } else {
        logMessage("User is on an incorrect domain.");
        showToast("Warning: You are on an unverified domain!", "error");
    }
}

checkLinks();

// Toast Notification System

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.innerText = message;

  container.appendChild(toast);

  // Remove after animation
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

function showToastGallery() {
    showToast("Gallery is coming soon!", "info");
}

// Refresh Button

function refreshButton() {
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.addEventListener('click', () => {
        location.reload();
    });
}

// Banner Effect Thingy
const banner = document.querySelector('.banner-content');
let scrollAmount = 0;

function scrollBanner() {
  scrollAmount -= 0.5;
  banner.style.transform = `translateX(${scrollAmount}px)`;
  if (Math.abs(scrollAmount) > banner.scrollWidth / 2) scrollAmount = 0;
  requestAnimationFrame(scrollBanner);
}

// Display Thing:

const screens = [
  document.getElementById('1'),
  document.getElementById('2'),
  document.getElementById('3')
]

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');

const left = document.getElementById('left-button');
const right = document.getElementById('right-button');

let current = 0; // index of the current visible div

function showScreen(index) {
  screens.forEach((div, i) => {
    div.classList.toggle('active', i === index);
  });
}

function nextScreen() {
  current = (current + 1) % screens.length;
  showScreen(current);
}

function prevScreen() {
  current = (current - 1 + screens.length) % screens.length;
  showScreen(current);
}

right.addEventListener('click', nextScreen);
left.addEventListener('click', prevScreen);