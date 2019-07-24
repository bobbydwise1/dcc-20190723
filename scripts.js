/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

const dictionaryA = ['ardvark','anteater','azure']
const dictionaryB = ['bird','bingo','bright']
const dictionaryC = ['cat','catch','caper']
const dictionaryD = ['dog','deer','deal']
const dictionary = [['null'], dictionaryA, dictionaryB, dictionaryC, dictionaryD]

const searchString = (yourText) => {
  console.log(yourText)
  let output = [];
  let regex = yourText;
  console.log('regex', regex);
  let letter = yourText.charCodeAt(0)-96;
  for (i=0; i < dictionary[letter].length; i++) {
    console.log('loop #', i)
    console.log('dictionary term: ', dictionary[letter][i])
    if (dictionary[letter][i].startsWith(regex) === true) {
      output.push(dictionary[letter][i]);
    }
    console.log('Output so far: ', output);
  }
  return output;
}

// let searchTerm = 'de'
// let final = searchString(searchTerm);
// console.log('Final answer =', final)

$(document).ready(function() {
    $('#output-section-a').text(dictionary[1]);
    $('#output-section-b').text(dictionary[2]);
    $('#output-section-c').text(dictionary[3]);
    $('#output-section-d').text(dictionary[4]);

    $('#form1').submit(function(event) {
      event.preventDefault();
      console.log('clicky');
      let searchTerm = $('#form1').val();
      console.log('searchterm=', searchTerm);
      let final = searchString(searchTerm);
      $('#output-section-1').text(searchTerm);
      $('#output-section-2').text(final);
    });
  });
