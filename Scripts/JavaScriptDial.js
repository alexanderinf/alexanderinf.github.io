$(document).ready(function () {
	$('.num').click(function () {
		alert("er")
		var num = $(this);
		var text = $.trim(num.find('.txt').clone().children().remove().end().text());
		var telNumber = $('#telNumber');
		$(telNumber).val(telNumber.val() + text);
	});

});