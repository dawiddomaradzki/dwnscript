"use strict";

import { listenerCount } from "cluster";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

const list = document.querySelector('.repositories--js');


fetch('https://api.github.com/users/dawiddomaradzki/repos')
.then(resp => resp.json())
.then(resp => {
  const repos = resp;
  for (const repo of repos) {
    console.log(`${repo.name} ${repo.html_url}`);
    list.innerHTML += `<li>${repo.name} ${repo.html_url}</li>`;
  }
  
})

.catch(err => {
  console.log(err);
});

console.log('test');
