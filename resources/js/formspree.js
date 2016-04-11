var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/contact@razvangabriel.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			/*$contactForm.append('<div class="alert alert--loading">Sending message…</div>');*/
		},
		success: function(data) {
			/*$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');*/
            $('.error').css("display","none");
            $('.succes').css("display","block");
		},
		error: function(err) {
			/*$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');*/
            $('.succes').css("display","none");
            $('.error').css("display","block");
		}
	});
});