var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function (next) {
		var newEnquiry = new Enquiry.model();
		var updater = newEnquiry.getUpdateHandler(req);
		console.log(req.body);

		/*var mailgun = new Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });
		var data = {
		// Specify email data
			from: req.body.email,
		// The email to contact
			to: 'mcavazos@playerwatch.net',
		// Subject and text data
			subject: req.body.enquiryType,
			text: req.body.message,
			html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + req.params.mail + '">Click here to add your email address to a mailing list</a>',
		};
		// Invokes the method to send emails given the above data with the helper library
		mailgun.messages().send(data, function (err, body) {
			// If there is an error, render the error page
			if (err) {
				console.error('Mailgun test failed with error:\n', err);
			} else {
				console.log('Successfully sent Mailgun test with result:\n', body);
			}
		});*/

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	view.render('contact');
};
