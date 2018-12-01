// search for formField element up the DOM
function containingField (jq) {
    return jq.parents('.formField').first();
}

// inputSelect dropdown functionality
function doToggleDropdown (field) {
    var menu = field.find('ul');
    var menuLink = field.find('.menuLink');
    var menuArrow = field.find('.menuArrow');
    menu.add(menuLink).add(menuArrow).toggleClass('open');
    if (menuArrow.hasClass('open')) {
	menuArrow.text('arrow_drop_up');
    } else {
	menuArrow.text('arrow_drop_down');
    }
}

function toggleDropdown (e) {
    e.preventDefault();
    doToggleDropdown(containingField($(this)));
}

function selectItem (e) {
    e.preventDefault();
    var elem = $(this).find('a').first();
    var value = elem.attr('value');
    var text = elem.html();
    var field = containingField($(this));
    var hinput = field.find('input');
    var menuLink = field.find('.menuLink');
    menuLink.text(text);
    hinput.val(value).trigger('change');
    doToggleDropdown(field);
}

function setupDropdown () {
    var field = $(this);
    var menuArrow = field.find('.menuArrow');
    var menuLink = field.find('.menuLink');
    menuLink.add(menuArrow).on('click', toggleDropdown);
    $(this).on('click', 'li', selectItem);
}

$(document).ready(function() {
    $('.dropdown-select').each(setupDropdown);
});

// inputLine functionality
function shiftLabel () {
    $(this).parents('.formField').first().find('label').addClass('filled focused');
}

function unshiftLabel () {
    $(this).parents('.formField').first().find('label').removeClass('focused');
    if (this.value === '') {
	$(this).parents('.formField').first().find('label').removeClass('filled');
    }
}

function bindLabel (selector) {
    $(selector).on('focusin', shiftLabel);
    $(selector).on('focusout', unshiftLabel);
}

$(document).ready(function() {
    bindLabel('.input-line');
    $('.submit-on-change').on('change', function () {$(this).parents('form').first().submit();});
});

// individual forms
$(document).ready(function() {
    $('#date-from').bootstrapMaterialDatePicker().on('change', function (e, date) {$(this).parents('form').first().submit();});
    $('#date-to').bootstrapMaterialDatePicker().on('change', function (e, date) {$(this).parents('form').first().submit();});
    $('.site-summary-filter input').on('change', function () { $('#summary-filter-form input[name=site]').val($(this).val()).trigger('change'); });
});
