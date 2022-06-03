/*⋕js.Pm.FA.Cls.1*/
    
  function count (){
      let num = 1;
      return function (){
          alert(num);
          num++;
      }
  }
 
let a = count();
a();
a();
 