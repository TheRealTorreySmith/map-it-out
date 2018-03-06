$(document).ready(function() {

//GETS THE USERS CURRENT LOCATION IN LONGITUDE AND LATITUDE
//IF IT'S NOT ALREADY IN LOCAL STORAGE
if (localStorage.getItem("Coordinates") === null) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const coords = [position.coords.latitude, position.coords.longitude];
    localStorage.setItem('Coordinates', JSON.stringify(coords));
  });
}

//CLICK EVENT HANDLER FOR WHEN LOGIN FORM IS SUBMITTED
$("#login-form").on("submit", function(e) {
  e.preventDefault();
  localStorage.setItem('Name', JSON.stringify($('#name').val()));
  localStorage.setItem('Email', JSON.stringify($('#email').val()));
  $('#search-maps-title')[0].innerText = "Welcome, " + $('#name').val();
  $('#login-div').remove();
  $('#topnav').show();
  $('nav').show();
  $('.row').show();
});

//CLICK EVENT HANDLER FOR CONTACT INFO.
$("#contact").click(function() {
  $('#search-box').hide();
  $('#contact-box').show();
});

//CLICK EVENT HANDLER FOR ABOUT THE SITE
$("#about").click(function() {
  $('#search-box').hide();
});

//CLICK EVENT HANDLER FOR A NEW SEARCH
$("#new-search").click(function(e) {
  e.preventDefault();
  $('iframe').remove();
  $('#search-box').show();
  $('#contact-box').hide();
});

//TAKES THE SEARCH VALUE AND PUTS THE IFRAMES ON THE PAGE
const searchValue = $('#search-value').val();
$('#search-terms').on("click", function(){
  $('#search-box').hide();
  for (let i = 1; i <= 6; i++) {
    const iframe = $('<iframe src="" width="430" height="430" allowfullscreen/>').attr("id",[i]).appendTo($('body'));
    }

    //CURRENT STREET VIEW API CALL
    //USES CURRENT LONG AND LAT FOR CURRENT LOCATION
    //$('#1').attr("src", `https://www.google.com/maps/embed/v1/streetview?key=YOUR_API_KEY&location=${coords}&heading=210&pitch=10&fov=35`);

    //FIRST IFRAME
    //$('#2').attr("src", `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${searchValue}`);
    //const xhr = $.getJSON(`https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${searchValue}`);

    //GEOCODE API THAT RETURNS LONGITUTDE AND LATITUDE
    //const xhr = $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchValue}&key=YOUR_API_KEY`);

    //DIRECTIONS MODE API
    //$('#3').attr("src", `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=Boulder+Colorado&destination=Denver+Colorado&avoid=tolls|highways`);

    //VIEW MODE API CALL
    //$('#4').attr("src", `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=Denver&destination=${searchValue}&avoid=tolls|highways`);
    //https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${coords}&zoom=18&maptype=satellite

     // xhr.done(function(Data){
     //   var lat = Data.results[0].geometry.location.lat;
     //   var long = Data.results[0].geometry.location.lng;


    //});
  });
});
