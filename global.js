// Custom JS
$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#contact-form').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=89dc510186f1d432035c554d85654baf",
      data: $("#contact-form").serialize(),
      error: function() {
        $('#contact-form').hide();
        $('#formErrorMessage').show();
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#contact-form').hide();
      $('#formSuccessMessage').show();
    });
    return false; //to stop the form from submitting
  });
});