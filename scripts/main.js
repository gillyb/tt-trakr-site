
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

	};

	$('#support-btn').click(showSupportModal);
	$('#close-support').click(hideSupportModal);
	$('#send-support').click(sendSupport);

});