(function( $ ) {
	'use strict';

	//Document ready
	$(function() {

		/**
		 * Handle submission of volunteer opportunity sign up form inclding validation and AJAX processing.
		 */
		$( '#wivm-sign-up-form input[type=submit]' ).click(function(e){
			e.preventDefault();
			var $this = $( this ),
				form_valid;

			$( this ).prop( "disabled", true );

			form_valid = validate_sign_up_form();
			if( form_valid === true ){
				submit_sign_up_form( $this );
			}
			else { //Allow submission again if there were errors
				$this.prop( "disabled", false );
			}
		});

	});

	/**
	 * Validate the volunteer opportunity sign up form.
	 * @return {bool} Whether the form is valid.
	 */
	function validate_sign_up_form(){
		var has_errors = false;
		$( '#wivm-sign-up-form input[type=text], #wivm-sign-up-form input[type=email]' ).each(function() {
            if( this.value === '' ) {
                $( this ).addClass( 'field-error' );
                has_errors = true;
            }
            else if ( this.type === 'email' && !validate_email( this.value ) ){
            	$( this ).addClass( 'field-error' );
                has_errors = true;
            }
            else {
            	$( this ).removeClass( 'field-error' );
            }
        });

		//If not valid return false.
        if( has_errors === true ){
        	$( '.volunteer_opp .loading, .volunteer_opp .success' ).slideUp();
        	$( '.volunteer_opp .error' ).slideDown();
        	return false;
        }
        else {
        	$( '.volunteer_opp .message' ).slideUp();
        	return true;
        }
	}

	/**
	 * Validates a provided email address.
	 * 
	 * @param  {string} email The provided email address.
	 * @return {bool}   	  Whether the provided email address is valid.
	 */
	function validate_email( email ){
		var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		if( email_regex.test( email ) ){
        	return true;
        }
        else {
        	return false;
        }
	}

	/**
	 * Submit the sign up form for processing on the backend.
	 */
	function submit_sign_up_form( submit_button ){
		//Show messages to user
		$( '.volunteer_opp .error' ).slideUp();
		$( '.volunteer_opp .loading' ).slideDown();

		jQuery.post( wivm_ajax.ajaxurl,
			{
				action: 'wivm_sign_up',
				data: $( '#wivm-sign-up-form' ).serialize()
			},
			function( response ){
				//Show user success message and re-enable submit button
				$( '.volunteer_opp .loading' ).slideUp();
				$( '.volunteer_opp .success' ).slideDown();
				submit_button.prop( "disabled", false );
			}
		);
	}

})( jQuery );