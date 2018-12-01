$(document).ready(function () {
    $(document).on('click', '.opener', function (e) {
	e.preventDefault();
	$(this).siblings().removeClass('hidden');
	$(this).addClass('hidden');
    });


    $('.user-rules-subcategory-list-item-collapsed').click(function (event) {
        var $coll = $(this);
        var $list = $coll
            .closest('.user-rules-subcategory-list-item')
            .children('.user-rules-subcategory-list');
        $list.stop().slideToggle(300, function() {
            if ($(this).is(':hidden')) {
                $coll.html('+');
            } else {
                $coll.html('-');
            }
        });
        event.stopPropagation();
    });
});




