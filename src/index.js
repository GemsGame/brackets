module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for(i=0;i<str.length;i++) {
  //console.log(str);
      for(b=0;b<bracketsConfig.length;b++) {

        if(str[i] == openBrackets(bracketsConfig)[b]){
            stack.push(str[i]); //Если элемент является открывающей скобкой - добавляем в стек
          }
          
          if((str[i] == closeBrackets(bracketsConfig)[b]) && stack[stack.length - 1] == openBrackets(bracketsConfig)[b]) 
          {
              stack.pop();         
          }
         /* if(str[i] == closeBrackets(bracketsConfig)[b]){ // прилетел элемент  }
           if ( (str[i] == ")") && stack[stack.length - 1] == "("|| (str[i] == "}") && stack[stack.length - 1] == "{"||
           (str[i] == "]") && stack[stack.length - 1] == "["|| (str[i] == "|") && stack[stack.length - 1] == "|") {
             //дикая проверка
            stack.pop(); 
            } */
           /*
            Если элемент является закрывающей скобкой - посмотрите, соответствует ли он последнему элементу в стеке. 
            Если это так, удалите из стека последний элемент и перейдите к следующему элементу. */ 
    }
  }
  console.log(stack);
  if(stack.length == 0){      
      return true;
  } else  return false;
}

const openBrackets = (bracketsConfig) => {
    return bracketsConfig.map(item => item[0]);
}

const closeBrackets = (bracketsConfig) => {
    return bracketsConfig.map(item => item[1]);
}