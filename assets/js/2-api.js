$(document).ready(function() {
  function getAPIResults() {
    // api call to get albumID-1 photos only
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/photos?albumId=1',
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
        //on success, process results
        displayResults(result);
      }
    })

  }

  function displayResults(result) {
    for(i=0;i<result.length;i++) {
      var photoURL = result[i].thumbnailUrl;
      // append the divs with background image
      $('#album-holder').append(
        '<div class="col-12 col-sm-6 col-md-4 col-lg-3 album-cover" style="background-image:url('+ photoURL +')"></div>'
      )
    }
    // get rid of the loading div, this should be animated but a bit short of time
    $('#loading').css('display','none');
  }
  // fire the api call once the page is loaded, separate function in case in the future it needs a parameter
  getAPIResults();
})
