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

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const totalScreens = document.querySelectorAll('.marketing-div').length;

  const left = document.getElementById('left-button');
  const right = document.getElementById('right-button');

  let current = 0;

  function updateSlide() {
    slidesContainer.style.transform = `translateX(-${current * 100}%)`;
  }

  function nextScreen() {
    current = (current + 1) % totalScreens;
    updateSlide();
  }

  function prevScreen() {
    current = (current - 1 + totalScreens) % totalScreens;
    updateSlide();
  }

  right.addEventListener('click', nextScreen);
  left.addEventListener('click', prevScreen);
});
