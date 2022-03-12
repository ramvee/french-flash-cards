// script1.js for rpflashcardsjs.html

// Using regular loop
// let list ='';

// for (var i =0; i < words.length; i++) {
//     list += `<div class="card"><div class="french"><h3>${words[i][0]}</h3></div>`
//     list += `<div class="english"><p>${words[i][1]}</p></div></div>` 
// };

// document.getElementById('container').innerHTML = list;

// Using for..of loop
let list ='';

// iterating through Arrays - for..of loop
for (var word of words) {
    list += `<div class="card"><div class="french"><h3>${word[0]}</h3></div>`
    list += `<div class="english"><p>${word[1]}</p></div></div>` 
};

document.getElementById('container').innerHTML = list;



