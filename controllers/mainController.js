
app.get('/', function(req, res) {
	res.render('homepage', {
		videos: getHomePageVideos(popularVideos),
		favoriteVideos: getHomePageVideos(favoriteVideos),
		currentVideo:null
	});
});

app.get('/download', function(req, res) {
	res.render('homepage', {
		videos: getHomePageVideos(popularVideos),
		favoriteVideos: getHomePageVideos(favoriteVideos),
		currentVideo: videoId
	});
});

app.post('/buy', function(req, res) {
	
});