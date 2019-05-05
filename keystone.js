//import keystone and database url
var keystone = require('keystone');
const key = require('./utils/keys');
const PORT = process.env.PORT || 3000;

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'CMS Project',
  // Paths to our application static files
  'static': [
      './server/public/img/',
      './server/public/js/'
  ],
  // Setting port to local or production
  'port': PORT,
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': `mongodb://${key.mlabUser}:${key.mlabPass}@ds247670.mlab.com:47670/cms-project`,
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': key.cookieSecret,
});

// Load your project's Models
keystone.import('./server/models');

// Setting routes 
keystone.set('routes', require('./server/routes'));

// Start Keystone
keystone.start();
