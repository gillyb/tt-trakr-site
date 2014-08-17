
app.get('/', function(req, res) {
	res.render('homepage');
});

app.get('/download', function(req, res) {
	var file = __dirname + '/../download/TimeTrakr.zip';
	res.download(file);
});

app.get('/buy', function(req, res) {
	
});

app.get('/support', function(req, res) {
	res.render('support');
});