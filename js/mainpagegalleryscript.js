$(function () {

	var imagesToLoadCountFirst = 20,
		imagesToLoadCountNext = 10,
		imagesPath = 'img/preview/',
		imagesPathBig = 'img/original/',
		imagesCount = 100,
		nextImageToLoad = 1
		bottomScrollOffeset = 300;
		$gal = $('.maingallery').packery({
			itemSelector: '.gallery-item',
			gutter: 15,
			columnWidth: 300
		});

	var renderMainPageGallery = function(path, start, end) {
	    var out = '';
	    for (start; start < end; start++) { 
	        var url = path + (start) + '.jpg';
	        var urlBug = imagesPathBig + (start) + '.jpg';
		    out += '<li style="opacity:0;" class="gallery-item" ><a href="' + urlBug + '" data-lightbox="image-' + start + '"><img src="' + url + '"/></a></li>';
		}
		return out;
	};

	function appendPhotosToGallery(imageFirstLoading) {
		if (nextImageToLoad > imagesCount) return;
		var count = (imageFirstLoading ? imagesToLoadCountFirst : imagesToLoadCountNext);
		var toImageNumber = nextImageToLoad + count;
		if (toImageNumber > imagesCount) {
			toImageNumber = imagesCount;
		}
	    var $photos = $(renderMainPageGallery(imagesPath, nextImageToLoad, toImageNumber));
	    $gal.append( $photos );
		$gal.imagesLoaded(function(){
			console.log('dsdad');
            $gal.show().packery( 'appended', $photos );
        });
	    nextImageToLoad = toImageNumber + 1;
	};

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - bottomScrollOffeset) {
	       appendPhotosToGallery();
	   }
	});

	$gal.hide();

	appendPhotosToGallery(true);

}); 
