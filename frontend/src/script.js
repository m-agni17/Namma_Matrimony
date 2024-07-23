document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('getStartedBtn').addEventListener('click', function() {
    window.location.href = 'register.html';
});

// Add these functions to the existing script.js

document.getElementById('backBtn').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('nextStepBtn').addEventListener('click', function() {
    const currentStep = document.querySelector('.form-step.active');
    const nextStep = currentStep.nextElementSibling;
    
    if (nextStep) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    }
});

document.getElementById('googleSignInBtn').addEventListener('click', function() {
    // Google Sign-In logic here (e.g., using Google Identity Services)
    // For this example, we'll simulate the sign-in process
    alert('Signed in with Google!');
    document.querySelector('.form-step.active').classList.remove('active');
    document.getElementById('recommendations').parentElement.classList.add('active');
});

// Initial form step
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form-step').classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profileBtn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
  
    profileBtn.addEventListener('click', function() {
      sidebar.style.left = '0';
    });
  
    closeBtn.addEventListener('click', function() {
      sidebar.style.left = '-250px';
    });
  });
  