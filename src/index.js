module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  const openBrackets = [];
  const closeBrackets = [];
  const pairBrackets = {};
  
  for(i=0;i<bracketsConfig.length;i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
    pairBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  return str
         .split('')
         .every( (el, index) => { 
           if (openBrackets.some((e)=>e===el)) {
             if (!((closeBrackets.some((e)=>e===el))&&(stack.length>0)&&(stack[stack.length-1]===el))) stack.push(el);
             else stack.pop();
           }
           else {
             if (stack.length===0) return false; 
             if (stack.pop()!==pairBrackets[el]) return false;
           }; 
           return ( (index===str.length-1)&&(!(stack.length===0)) )?false:true;
         });
}
