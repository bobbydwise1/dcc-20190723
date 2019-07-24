/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

const dictionary = ['dog','deer','deal']

const searchString = (yourText) => {
  console.log(yourText)
  let output = [];
  let regex = yourText;
  console.log('regex', regex);
  for (i=0; i<dictionary.length; i++) {
    console.log('loop #', i)
    console.log('dictionary term: ', dictionary[i])
    if (dictionary[i].startsWith(regex) === true) {
      output.push(dictionary[i]);
    }
    console.log('Output so far: ', output);
  }
  return output;
}

let searchTerm = 'de'
let final = searchString(searchTerm);
console.log('Final answer =', final)

$(document).ready(function() {
    $('#output-section-1').text(searchTerm);
    $('#output-section-2').text(final);
  });
