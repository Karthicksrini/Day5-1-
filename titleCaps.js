
var arr=["hello","everyone","i", "am","karthick"];
var arr1=[];
(function(){
    arr.map(function(word){
      arr1.push((word.charAt(0).toUpperCase()+word.slice(1)));
        })
    
})();
console.log(arr1);