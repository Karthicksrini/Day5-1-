
(function(){
    let array1=[1,12,15,26,38];
    let array2=[2,13,17,30,45];
    
    let merge=array1.concat(array2);
    merge.sort((a,b)=>a-b);
    const mid=merge.length/2;
    let medain=(merge[mid-1]+merge[mid])/2
    console.log(medain);
    })();
    