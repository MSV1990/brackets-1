module.exports = function check(str, bracketsConfig) {
  let brackets = str.split('');
  if(brackets.length % 2 !== 0){return false};
  let openBrackets = [];
  let closeBrackets = [];
  for( let i =0; i < bracketsConfig.length; i++){
   openBrackets.push(bracketsConfig[i][0]);
   closeBrackets.push(bracketsConfig[i][1]);

  }
  
let stack = [];

  for(let i=0; i < brackets.length; i++){
    if(openBrackets.includes(brackets[i])){
      if (closeBrackets.indexOf(brackets[i]) == stack[stack.length - 1]) {
        stack.pop()
      }
    else stack.push(openBrackets.indexOf(brackets[i]));
      }
   
   else if(closeBrackets.includes(brackets[i])){
    if(stack[stack.length - 1] === closeBrackets.indexOf(brackets[i])){
      stack.pop();
    
    }
      
      else { 
        return false;
      }
    


    }
   
  } 
  return stack.length === 0;
  

}

