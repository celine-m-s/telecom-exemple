// Custom JS
$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#contact-form').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=db43324d01c3a99e4a03fb9e0335d5c5",
      data: $("#contactForm").serialize(),
      error: function() {
        $('#contactForm').hide();
        $('#formErrorMessage').show();
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#contactForm').hide();
      $('#formSuccessMessage').show();
    });
    return false; //to stop the form from submitting
  });
});