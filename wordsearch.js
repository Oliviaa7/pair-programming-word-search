// Pair programming exercise for week of Oct 20, 2024
// Completed solo by @oliviala7215 due to paired partner being unavailable.

const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    return undefined;
  }

  const horizontalJoin = letters.map(ls => ls.join(''))

  for (l of horizontalJoin) {
      if (l.includes(word)) return true;
  }

  const verticalJoin = [];

  for (let col = 0; col < letters[0].length; col++) {
     let columnString = '';
  for (let row = 0; row < letters.length; row++) {
      columnString += letters[row][col];
    }
    verticalJoin.push(columnString);
  }
  for (c of verticalJoin) {
    if (c.includes(word)) return true;
  }
return false;

};

module.exports = wordSearch