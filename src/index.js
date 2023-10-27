module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBrackets = [];
  const closeBrackets = [];
  let pairBrackets = {};
  for(i=0;i<bracketsConfig.length;i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
    pairBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for(i=0;i<str.length;i++) {

  }

}
