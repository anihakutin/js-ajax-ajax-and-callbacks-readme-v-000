 $(document).ready(function () {
   $.get('sentence.html', function (response) {
     $('#sentences').html(response);
   });

   $.get('doc-doesnt-exist.html', function (response) {
     $('#sentences').html(response);
   })
   .fail(function (error) {
     console.log('Something went wrong: ' + error.statusText);
   })
   .always(function () {
     alert("I'm done!");
   });
 })
