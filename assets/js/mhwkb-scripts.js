// LANGUAGE DROPDOWN DATA LIST
// Now only this list needs to be updated when a new language is added.
var languageDropDownDataList = [
  {
    lang: '00_00', url: '/'
  },
  {
    lang: 'de_DE', url: '/category/DE'
  },
  {
    lang: 'en_US', url: '/category/EN'
  },
  {
    lang: 'hi_IN', url: '/category/HI'
  },
  {
    lang: 'ne_NP', url: '/category/NE'
  },
  {
    lang: 'nl_NL', url: '/category/NL'
  },
  {
    lang: 'pt_BR', url: '/category/pt_BR'
  },
  {
    lang: 'sv_SE', url: '/category/SV'
  }
];

// TO ALLOW DROPDOWN RESULTS USING BOOTSTRAP DROPDOWNS
function checkSearchValAndDropdown() {
  if($('#search-input').val()){
    $("#search-container").addClass('open');
  }
  else {
    $("#search-container").removeClass('open');
  }
}

// USED TO SET DATA-AVAILABLE ATTRIBUTE FOR #languageSelector element
function getLanguageDataAvailable() { 
  var languageDataAvaialbe = '';
  languageDropDownDataList.forEach(x => languageDataAvaialbe += x.lang + ',');
  languageDataAvaialbe = languageDataAvaialbe.replace(/,\s*$/, "");
  return languageDataAvaialbe;
}

// USER TO SET DATA-LANGUGE ATTRIBUTE FOR #languageSelector element
function getCurrentLanguageFromURL() {
  var url = document.location.href;
  var categoryString = "/category/";
  var tagString = "/tag/";

  if (url.includes(categoryString)) {
    var catString = categoryString + url.substr(url.indexOf(categoryString) + categoryString.length, url.length);  
    var delimiter = '/',
      end = 3,
      tokens = catString.split(delimiter).slice(0, end),
      catString = tokens.join(delimiter);   
    var langData = languageDropDownDataList.find(x => x.url == catString);
    return langData.lang;
  }
  else if (url.includes(tagString)){
    var langID = $(".panel").first().attr("lang-id");
    var urlString = categoryString + langID;
    var langData = languageDropDownDataList.find(x => x.url == urlString);
    return langData.lang;
  }
  else {
    return '00_00';
  }
}

// FOR LANGUAGE DROPDOWN CHANGE DETECTION
$(document).ready(function(){
  $('#languageSelector').attr('data-available', getLanguageDataAvailable());

  $('#languageSelector').attr('data-language', getCurrentLanguageFromURL());

  $('.bfh-selectbox').on('change.bfhselectbox', function () {
    var lang = $(this).val();

    if (languageDropDownDataList.findIndex(x => x.lang == lang) != -1)
    {
      var langData = languageDropDownDataList.find(x => x.lang == lang);
      document.location.href = langData.url;
    }
  });
});
