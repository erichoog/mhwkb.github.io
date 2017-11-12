// TO ALLOW DROPDOWN RESULTS USING BOOTSTRAP DROPDOWNS
function checkSearchValAndDropdown() {
  if($('#search-input').val()){
    $("#search-container").addClass('open');
  }
  else {
    $("#search-container").removeClass('open'); 
  }
}
