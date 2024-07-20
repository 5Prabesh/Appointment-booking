const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Read the google-services.json file
const googleServicesPath = './android/app/google-services.json';
let googleServices = fs.readFileSync(googleServicesPath, 'utf8');

// Replace the placeholder with the actual API key
googleServices = googleServices.replace(/\${API_KEY}/g, process.env.API_KEY);

// Write the updated content back to the google-services.json file
fs.writeFileSync(googleServicesPath, googleServices, 'utf8');

console.log('google-services.json updated successfully!');