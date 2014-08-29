
$(function() {

	var showSupportModal = function() {
		$('.support-modal-backdrop').removeClass('hidden');
		$('.support-modal-border').removeClass('hidden');
	};
	var hideSupportModal = function() {
		$('#email').val('');
		$('#message').val('');
		$('.support-modal-backdrop').addClass('hidden');
		$('.support-modal-border').addClass('hidden');
	};
	var sendSupport = function() {
		var email = $('#email').val().trim();
		var message = $('#message').val().trim();

		if (email.length <= 4 || message.length <= 4) {
			alert('Your message has been sent. Thanks!');
			hideSupportModal();
		}

		$.ajax({
			type: 'post',
			url: '/support/send',
			data: {
				email: email,
				message: message
			}
		}).success(function() {
			alert('Your message has been sent. Thanks!');
			hideSupportModal();
		}).error(function() {
			alert('Error while trying to send message');
			hideSupportModal();
		});
	};

	$('#support-btn').click(showSupportModal);
	$('#close-support').click(hideSupportModal);
	$('#send-support').click(sendSupport);

});