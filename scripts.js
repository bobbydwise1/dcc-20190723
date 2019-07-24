/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

const dictionary = ['dog','deer','deal']

const searchString = (yourText,searchterm) => {
  console.log(yourText)
  let regex = /yourText/i
  //let output = [];
  let output = yourText.match(regex);
  // for (i=0; i<dictionary.length; i++) {
  //
  // }
  return output;
}

let final = searchString('dog');
console.log('answer =', final)

$(document).ready(function() {
    $('#output-section-1').text('1');
    $('#output-section-1').text('2');
  });
