function contactFunc() {
  $('iframe').remove();
  $('#search-box').hide();
  $('#contact-box').show();
}

function contactClick() {
  $('iframe').remove();
  $('#search-box').hide();
  $('#contact-box').show();
}

function commentSubmit() {
  $('#contact-box').hide();
  $('#submitted-comment').show();
}

function hideMobileBtn() {
  $('#mobile-btn').hide();
}

function mobileSearch() {
  $('iframe').remove();
  $('#search-box').show();
  $('#contact-box').hide();
  $('#submitted-comment').hide();
}

function newSearchClick() {
  $('iframe').remove();
  $('#search-box').show();
  $('#contact-box').hide();
  $('#submitted-comment').hide();
}

//CLICK EVENT HANDLER FOR WHEN LOGIN FORM IS SUBMITTED
function loginSubmit() {
  localStorage.setItem('Name', JSON.stringify($('input[type="text"]').val()));
  localStorage.setItem('Email', JSON.stringify($('input[type="email"]').val()));
  $('#search-maps-title')[0].innerText = "Welcome, " + $('input[type="text"]').val();
  $('#login-div').remove();
  $('#topnav').show();
  $('nav').show();
  $('.row').show();
  $('#submitted-comment').hide();
  $('#mobile-btn').show();
}

$(document).ready(function () {
  //HIDES THE MOBILE MENU FOR LARGER SCREEN-WIDTHS
  hideMobileBtn();

  //GETS THE USERS CURRENT LOCATION IN LONGITUDE AND LATITUDE
  //IF IT'S NOT ALREADY IN LOCAL STORAGE
  if (localStorage.getItem("Coordinates") === null) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const coords = [position.coords.latitude, position.coords.longitude];
      localStorage.setItem('Coordinates', coords.join(','));
    });
  }

  //CLICK EVENT HANDLER FOR WHEN LOGIN FORM IS SUBMITTED
  $("#login-form").on("submit", loginSubmit);
  //CLICK EVENT HANDLER FOR A NEW SEARCH
  $("#new-search").on("click", newSearchClick);
  //MOBILE CLICK EVENT HANDLER FOR NEW SEARCH
  $("#mobile-search").on("click", mobileSearch);
  //CLICK EVENT HANDLER FOR CONTACT INFO.
  $("#contact").on("click", contactFunc);
  //MOBILE CLICK EVENT HANDLER FOR CONTACT INFO.
  $("#mobile-contact").on("click", contactClick);
  //CLICK EVENT HANDLER FOR COMMENT SUBMIT BUTTON
  $("#submit-btn").on("click", commentSubmit);

  //CHANGE EVENT HANDLER FOR NUMBER OF CHECKED BOXES
  let number = 0;
  $('[type="checkbox"]').change(function() {
    if ($(event.target).is(':checked')) {
      number += 1;
    } else {
      number -= 1;
    }
  });

  //TAKES THE SEARCH VALUE AND PUTS THE IFRAMES ON THE PAGE
  $('#search-terms').on("click", function() {
    if ($('#search-value').val() === "") {
      alert("Please choose a keyword to search!")
    } else if (number === 0){
      alert("Please choose one or more maps to search!")
    } else {
      $('#search-box').hide();
      const searchValue = $('#search-value').val();
      const coords = localStorage.getItem('Coordinates');
      for (let i = 1; i <= number; i++) {
        const iframe = $('<iframe src="" width="430" height="430" allowfullscreen/>').attr("id", [i]).appendTo($('body'));
      }

      //GEOCODE API THAT RETURNS LONGITUTDE AND LATITUDE
      const xhr = $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchValue}&key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU`);
      xhr.done(function(Data){
        var lat = Data.results[0].geometry.location.lat;
        var long = Data.results[0].geometry.location.lng;
        const destCoords = lat + "," + long;

        //CURRENT LOCATION PANORAMIC
        $('#1').attr("src", `https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU&location=${coords}&heading=210&pitch=10&fov=35`);
        //CURRENT LOCATION SATELLITE
        $('#2').attr("src", `https://www.google.com/maps/embed/v1/view?key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU&center=${coords}&zoom=18&maptype=satellite`);
        //CURRENT LOCATION OVERVIEW
        $('#3').attr("src", `https://www.google.com/maps/embed/v1/search?key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU&q=Boulder`);
        //DESTINATION PANORAMIC
        $('#4').attr("src", `https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU&location=${destCoords}&heading=210&pitch=10&fov=35`);
        //DESTINATION SATELLITE
        $('#5').attr("src", `https://www.google.com/maps/embed/v1/view?key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU&center=${destCoords}&zoom=18&maptype=satellite`);
        //DESTINATION LOCATION OVERVIEW
        $('#6').attr("src", `https://www.google.com/maps/embed/v1/search?key=AIzaSyAdIFq65Zr53hb-rranIX2NzTW-ZeKv_rU&q=${searchValue}`);
        });
      }
    });
  });
