
(function(){
    let a1=[1,2,2,3,4,4,5,6,7,3,12,34,56];
   let a2= a1.filter((v,i,a)=>a.indexOf(v)==i);
   console.log(a2);
})();