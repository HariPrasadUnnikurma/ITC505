// Function to sanitize user inputs to prevent XSS attacks
function sanitizeInput(input) {
    // Replace < and > with their HTML entities
    input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    // Escape single and double quotes
    input = input.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    
    // Prevent execution of JavaScript code by escaping certain characters
    input = input.replace(/\//g, "&#x2F;");
    input = input.replace(/\\/g, "&#x5C;");
    
    return escapeOutput(input) ;
}



// Function to escape output data
function escapeOutput(output) {
    // Encode output data to prevent it from being interpreted as HTML or JavaScript

    return output.replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#39;");
}
// Function to sanitize URLs
function sanitizeURL(url) {
    // Use encodeURI to encode the URL
    return encodeURI(url);
}

function validateEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
