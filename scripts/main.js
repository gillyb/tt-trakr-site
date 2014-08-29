
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
		var email = $('#email').val();
		var message = $('#message').val();
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