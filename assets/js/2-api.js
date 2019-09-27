$(document).ready(function() {
  function getAPIResults() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/photos?albumId=1',
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
        displayResults(result);
      }
    })

  }

  function displayResults(result) {
    for(i=0;i<result.length;i++) {
      var photoURL = result[i].thumbnailUrl;
      $('#album-holder').append(
        '<div class="col-12 col-sm-6 col-md-4 col-lg-3 album-cover" style="background-image:url('+ photoURL +')"></div>'
      )
    }
    $('#loading').css('display','none');
  }
  getAPIResults();
})
