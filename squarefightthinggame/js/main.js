window.addEventListener('DOMContentLoaded', function() {
  	var cvs = document.getElementById('cvs');
	var ctx = cvs.getContext('2d');

	var w = cvs.width;
	var h = cvs.height;

	cvs.width = 400;
	cvs.height = 400;

	ctx.fillStyle = "#a6ada8";
	ctx.fillRect(0, 0, cvs.width, cvs.height);
});
