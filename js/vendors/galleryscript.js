$( document ).ready(function() {

  var i, j, pathToDir, photoUrl, photosLenght, ref;

  photosLenght = 100; // Количество фоток
  pathToDir = "img/preview2/"; // Адрес папки с фотками

  for (i = j = 1, ref = photosLenght; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
    photoUrl = "" + pathToDir + i + ".jpg";
    $("#gallery").append("<img class='item' width='30.6%' src='" + photoUrl + "' />");
  }

  	$('img').load(function() {

		$('.js-packery').packery({
			itemSelector: '.item',
			gutter: 5
			
		});
	});
});
