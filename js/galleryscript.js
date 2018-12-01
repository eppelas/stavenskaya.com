$(function () {

	// Создаем фотографии с урлом в дата-атрибуте, чтобы они не показывались сразу
	 window.createPhotos = function(path, start, end) {
	    var length = end - start + 1;
	    return new Array(length).join().split(',').map(function (item, index) {
	        var url = path + (start + index) + '.jpg';
	        return $('<a href="' + url + '" data-lightbox="gallery"><img style="min-height: 300px" height="500" data-src="' + url + '"/></a>');
	    });
	};


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-11157774-2', 'auto');
  ga('send', 'pageview');
});
