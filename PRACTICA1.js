//Ejercicio 1
function uno(){
  var matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]];
  var sum=0;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      sum+=matrix[i][j];
    }
  }
  return sum;
}
console.log("ejemplo del ejercicio uno : "+uno());
//Ejercicio 3
var con=0;
function tres(cad){
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else{
        res+=c;
      }
      con++;
    }
    return res;
}
const add=(cad)=>{
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else if(c==')'){
        res=volteo(res);
        return res;
      }else{
        res+=c;
      }
      con++;
    }
    return res;

}
function volteo(cad){
  let sum='';
  for(let i=cad.length-1;i>=0;i--){
    let c=cad.charAt(i);
    sum+=c;
  }
  return sum;
}

console.log("ejemplo del ejercicio tres : "+tres("foo(bar(baz))blim"));

//Ejercicio 5
function ejerciciocinco(p,n){
    n+=1;
    var sum=p;
    while(n--!=0){
      sum*=10;
    }
    sum+=p;
    sum=Math.pow(sum,2);
    p=0;
    while(sum>0){
      p+=sum%10;
      sum=parseInt(sum/=10);
    }
    return p;
}
console.log("ejemplo del ejercicio cinco : "+cinco(1,2));