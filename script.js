'use strict';

function watchFormSubmit(){
  $('.search-form').submit(event => {
    event.preventDefault();
    $(".js-results-list").empty();
    const userName = $('.username-search').val();
    getUsers(userName);
  });
}

function getUsers(userName){
const url="https://api.github.com/users/" + userName + "/repos"

  fetch(url)
  .then(response => response.json())
  .then(responseJson => showRepos(responseJson))
  .catch(error => alert("Oops!, something went wrong!"));


}

function showRepos(responseJson){
  console.log(responseJson);
  for (let i = 0; i < responseJson.length; i++){
    $('.js-results-list').append(`<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3></li>`
    )};

    $('.js-results').removeclass('hidden');
}


$(watchFormSubmit);