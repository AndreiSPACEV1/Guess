

var cuv = [];
cuv[0]="ALBASTRU";
cuv[1]="STICLA";
cuv[2]="PLASTIC";
cuv[3]="OCEAN CURAT";
cuv[4]="INTELEGERE";
cuv[5]="NATURA";
cuv[6]="CURATENIE";
cuv[7]="INPADURIRE";
cuv[8]="COPACI";
cuv[9]="RECICLARE";
var nrCuv;
nrCuv=Math.floor(Math.random() * 10);
var fff;
fff = cuv[nrCuv];
var win1=0 ;
var chances =5 ;
var k=0;
var kkk = 0;
document.getElementById("sansa").innerHTML="CHANCES:5";   

for(var i =0 ; i<=19;i++)
document.getElementById(i).style.display="none";

afiseaza()
function afiseaza(){
    for(var i =0 ; i < cuv[nrCuv].length; i++){
  document.getElementById(i).style.display="inline-block";
  if(" "== fff[i]){
win1++;
document.getElementById(i).style.opacity="0"

}
}
 

}
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var litera="";
function win(){
    for(var i =0 ; i<=19;i++){
        if(" "== fff[i]){
      
            document.getElementById(i).style.opacity="1"
            
            }
    document.getElementById(i).style.display="none";
    

    
    }
    
        for(var i =0 ; i < 7; i++){
            document.getElementById(i).style.display="inline-block";
          }
    
          document.getElementById("0").innerHTML="Y";
          document.getElementById("1").innerHTML="O";
          document.getElementById("2").innerHTML="U";
          document.getElementById("3").innerHTML=" ";
          document.getElementById("4").innerHTML="W";
          document.getElementById("5").innerHTML="O";
          document.getElementById("6").innerHTML="N";
          
          
    
          document.getElementById("0").style.backgroundColor="rgb(97, 177, 73)";
          document.getElementById("1").style.backgroundColor="rgb(97, 177, 73)";
          document.getElementById("2").style.backgroundColor="rgb(97, 177, 73)";
          document.getElementById("3").style.backgroundColor="rgb(97, 177, 73)";
          document.getElementById("4").style.backgroundColor="rgb(97, 177, 73)";
          document.getElementById("5").style.backgroundColor="rgb(97, 177, 73)";
          document.getElementById("6").style.backgroundColor="rgb(97, 177, 73)";
          var Sfx = new Audio("won.mp3");
           Sfx.play();
           for(z=0;z<=26;z++)
           document.getElementById(text[z]).style.display="none";
}
function stop(){
    for(var i =0 ; i<=19;i++)
{
    if(" "== fff[i]){
      
        document.getElementById(i).style.opacity="1"
        
        }
document.getElementById(i).style.display="none";


}

 
var z=0;
    for(var i =0 ; i < 8; i++){
        document.getElementById(i).style.display="inline-block";
      }

      document.getElementById("0").innerHTML="Y";
      document.getElementById("1").innerHTML="O";
      document.getElementById("2").innerHTML="U";
      document.getElementById("3").innerHTML=" ";
      document.getElementById("4").innerHTML="L";
      document.getElementById("5").innerHTML="O";
      document.getElementById("6").innerHTML="S";
      document.getElementById("7").innerHTML="S";

      document.getElementById("0").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("1").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("2").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("3").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("4").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("5").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("6").style.backgroundColor="rgb(177, 73, 73)";
      document.getElementById("7").style.backgroundColor="rgb(177, 73, 73)";
     var Sfx = new Audio("loss.mp3");
      Sfx.play();
  for(z=0;z<=26;z++)
       document.getElementById(text[z]).style.display="none";

       
}
function coloreaza()
{
    document.getElementById("color"+kk).style.backgroundColor="rgb(177, 73, 73)";
   
     kkk= -(kk-5);
    document.getElementById("sansa").innerHTML="CHANCES:" +kkk ;
    document.getElementById("color"+kk).innerHTML=litera;
    var Sfx = new Audio("nope.mp3");
    Sfx.play();
    if(kkk==0)
    stop();
    
}

function crestekk(){
  win1= win1 +k;
  if(k>0)
  {
    var Sfx = new Audio("yup.mp3");
    Sfx.play();
  }
    if(k==0){ 
    kk++; 
    coloreaza();}
if(win1 == cuv[nrCuv].length)
{
    win();
}
k=0;
}


var kk=0;

function cautaQ(){
   for(var i =0 ; i<cuv[nrCuv].length; i++){
    if("Q"== fff[i]){
  document.getElementById(i).innerHTML= fff[i];
k++;  
   document.getElementById("Q").style.backgroundColor= "rgb(97, 177, 73)"; 
   document.getElementById("Q").disabled = true;
}}
  litera="Q"; crestekk(); 
}



function cautaW(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("W"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("W").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("W").disabled = true;
 }
 
   }
   litera="W"; crestekk(); 
 }

 function cautaE(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("E"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("E").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("E").disabled = true;
 }
 
   }
   litera="E"; crestekk(); 
 }

 function cautaR(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("R"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("R").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("R").disabled = true;
 }
 
   }
   litera="R"; crestekk(); 
 }

 function cautaT(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("T"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("T").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("T").disabled = true;
 }
 
   }
   litera="T"; crestekk(); 
 }


 function cautaY(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("Y"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("Y").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("Y").disabled = true;
 }
 
   }
   litera="Y"; crestekk(); 
 }

 function cautaU(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("U"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("U").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("U").disabled = true;
 }
 
   }
   litera="U"; crestekk(); 
 }


 function cautaI(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("I"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("I").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("I").disabled = true;
 }
 
   }
   litera="I"; crestekk(); 
 }

 function cautaO(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("O"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("O").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("O").disabled = true;
 }
 
   }
   litera="O"; crestekk(); 
 }

 function cautaP(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("P"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("P").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("P").disabled = true;
 }
 
   }
   litera="P"; crestekk(); 
 }

 function cautaA(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("A"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("A").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("A").disabled = true;
 }
 
   }
   litera="A"; crestekk(); 
 }

 function cautaS(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("S"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("S").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("S").disabled = true;
 }
 
   }
   litera="S"; crestekk(); 
 }

 function cautaD(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("D"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("D").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("D").disabled = true;
 }
 
   }
   litera="D"; crestekk(); 
 }

 function cautaF(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("F"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("F").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("F").disabled = true;
 }
 
   }
   litera="F"; crestekk(); 
 }

 function cautaG(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("G"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("G").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("G").disabled = true;
 }
 
   }
   litera="G"; crestekk(); 
 }

 function cautaH(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("H"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("H").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("H").disabled = true;
 }
 
   }
   litera="H"; crestekk(); 
 }


 function cautaJ(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("J"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("J").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("J").disabled = true;
 }
 
   }
   litera="J"; crestekk(); 
 }

 function cautaK(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("K"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("K").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("K").disabled = true;
 }
 
   }
   litera="K"; crestekk(); 
 }

 function cautaL(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("L"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("L").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("L").disabled = true;
 }
 
   }
   litera="L"; crestekk(); 
 }


 function cautaZ(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("Z"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("Z").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("Z").disabled = true;
 }
 
   }
   litera="Z"; crestekk(); 
 }

 function cautaX(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("X"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("X").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("X").disabled = true;
 }
 
   }
   litera="X"; crestekk(); 
 }

 function cautaC(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("C"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("C").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("C").disabled = true;
 }
 
   }
   litera="C"; crestekk(); 
 }

 function cautaV(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("V"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("V").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("V").disabled = true;
 }
 
   }
   litera="V"; crestekk(); 
 }

 function cautaB(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("B"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("B").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("B").disabled = true;
 }
 
   }
   litera="B"; crestekk(); 
 }

 function cautaN(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("N"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("N").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("N").disabled = true;
 }
 
   }
   litera="N"; crestekk(); 
 }

 function cautaM(){
    for(var i =0 ; i<cuv[nrCuv].length; i++){
     if("M"== fff[i]){
   document.getElementById(i).innerHTML= fff[i];
 k++;  
    document.getElementById("M").style.backgroundColor= "rgb(97, 177, 73)";
    document.getElementById("M").disabled = true;
 }
 
   }
   litera="M"; crestekk(); 
 }
 


