
(function(nu, k) {
    nu=[1,2,3,4,5,6,7];
    k=3;

  for (let i = 0; i <k; i++) {
            nu.unshift(nu.pop());
            console.log(nu);
        }
        
})();