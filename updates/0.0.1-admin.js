var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: { first: 'admin' },
		email: 'admin@keystonejs.com',
		password: 'admin',
		canAccessKeystone: true,
		isAdmin: true,
		isProtected: true,
	}).save(done);
};
