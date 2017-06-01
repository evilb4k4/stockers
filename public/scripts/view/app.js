'use strict';

var app = app || {};

//Event Listener for "Search" button on homepage

$(document).ready(function(){

  $('#result, #about-us, #Fav-button2').hide();
  $('#company').on('input', app.searchController.index);
  $('#graph-start-date').val('2017-01-01');

  $('#graph-start-date').on('change', app.graph.changeStartDate);
  $('#searchResults').on('click', 'p', app.searchView.selectCompany);


  $('#submit-search').on('click', app.stockController.index);
});


// Handlebars for the data shown in table
var source   = $('#table-template').html();
var template = Handlebars.compile(source);



// Hide section "Favourite Stocks" and show section "Stock Search Result"




// Event Listener for "Add to Favorites" button, so when user click on it, the selected stock will show on the table on front page.

var favorites = [];

function saveDataToLocalStorage(event) {
  event.preventDefault();
  if(localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }
  favorites.push(app.stock.ticker);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites(favorites);
}

$('#add-fav').on('click', saveDataToLocalStorage);

$('#show-about').on('click',function(event){
  event.preventDefault();
  $('#result, #favorites, #show-about').hide(1000);
  $('#about-us, #Fav-button2').show(1000);
});



//"Remove" button for removing the favorites.


// "Insert Comments" textbox.   When user types in his comment about this particular stock, this comment will show in the div above (#show-comments).

var commentArray = [];
var companyName = app.stockController.ticker;

function addComment(event) {
  event.preventDefault();
  var comment = $('#comment-textarea').val();
  if (localStorage.getItem('comment')) {
    commentArray = JSON.parse(localStorage.getItem('comment'));
  }
  commentArray.push(comment);
  localStorage.setItem('comment', JSON.stringify(commentArray));
  $('#comment-textarea').empty();
// renderComment();


$('#add-comment').on('click', addComment);



// Render the comment that user input onto the <p> (#comment-added)

var commentArray = [1,2,3];





// Button to remove the user's comment.

// $('#remove-comment').on('click',function(event){
//   localStorage.removeItem('');
// });
