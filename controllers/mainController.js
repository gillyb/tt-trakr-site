
var nodemailer = require('nodemailer');

app.get('/', function(req, res) {
	res.render('homepage');
});

app.get('/download', function(req, res) {
	var file = __dirname + '/../download/TimeTrakr.zip';
	res.download(file);
});

app.get('/buy', function(req, res) {
	
});

app.post('/support/send', function(req, res) {

	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'gillyb@gmail.com',
	        pass: 'GG123456'
	    }
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'TimeTrakr Support', // sender address
	    to: 'gillyb@gmail.com', // list of receivers
	    subject: 'TimeTrakr.com - Support (' + req.email + ')', // Subject line
	    text: req.message // plaintext body
	    //html: '<b>Hello world ✔</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if (error)
	        console.log(error);
	    else
	        console.log('Message sent: ' + info.response);
	});

	res.json({ 'STATUS': 'OK' });
});