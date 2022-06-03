/*⋕js.Pm.FA.Cls.2*/
    
  function count (){
      let num = 10;
      return function (){
          alert(num);
          num--;
      }
  }
 
let a = count();
a();
a();
 