/*⋕js.Pm.FA.Cls.3*/
    
   function count (){
      let num = 3;
      return function (){
          if (num > 0){
            alert(num);
            num--;
          }
          else {alert('The count is finished')}       
      }
  }
 
