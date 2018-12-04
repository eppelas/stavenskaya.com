$(function () {

    var photos = createPhotos('saratov-akhtubinsk-volgograd/img/', 1, 10);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
