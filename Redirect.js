document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button
    var logInButton = document.getElementById('logInBtn');
    
    // Add click event listener to the button
    logInButton.addEventListener('click', function() {
        // Redirect to the welcome page
        window.location.href = 'WelcomePage.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button
    var logOutButton = document.getElementById('logOutBtn');
    
    // Add click event listener to the button
    logOutButton.addEventListener('click', function() {
        // Redirect to the welcome page
        window.location.href = 'LoginPage.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button
    var logOutButton = document.getElementById('homeRed');

    // Add click event listener to the button
    logOutButton.addEventListener('click', function() {
        // Redirect to the welcome page
        window.location.href = 'WelcomePage.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button
    var logOutButton = document.getElementById('aboutRed');

    // Add click event listener to the button
    logOutButton.addEventListener('click', function() {
        // Redirect to the welcome page
        window.location.href = 'about.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button
    var logOutButton = document.getElementById('resourcesRed');

    // Add click event listener to the button
    logOutButton.addEventListener('click', function() {
        // Redirect to the welcome page
        window.location.href = 'resources.html';
    });

});
