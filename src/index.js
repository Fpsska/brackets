module.exports = function check(str, bracketsConfig) {

  const bracketsMap = new Map(bracketsConfig);
  const wrongBrackets = [];

  for (let i = 0; i < str.length; i++) {
  
      if (str[i] === bracketsMap.get(wrongBrackets[wrongBrackets.length - 1])) {
          wrongBrackets.pop();
      } else {
          wrongBrackets.push(str[i]);
      }

  }
  return wrongBrackets.length == 0;
};
