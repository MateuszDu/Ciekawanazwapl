function Oblicz(){
    let uno = document.getElementById("uno").value;
    let duo = document.getElementById("duo").value;
    let tree = document.getElementById("tree").value;
   document.getElementById("wynik").innerHTML ="Suma wynosi"+" "+(parseInt(uno)+parseInt(duo)+parseInt(tree)); 
}

function srednia(){
    let jeden = document.getElementById("jeden").value;
    let dwa = document.getElementById("dwa").value;
    let trzy = document.getElementById("trzy").value;
  let srednia =parseInt(jeden)+parseInt(dwa)+parseInt(trzy);
    document.getElementById("wynik2").innerHTML ="Średnia wynosi"+" "+(parseInt(srednia)/3); 
}

function Wyniki(){
    let ein = document.getElementById("ein").value;
    let zwei = document.getElementById("zwei").value;
    document.getElementById("wynik3").innerHTML ="Suma wynosi"+" "+(parseInt(ein)+parseInt(zwei))+"<br>"; 
    document.getElementById("wynik3").innerHTML +="różnicy wynosi"+" "+(parseInt(ein)-parseInt(zwei))+"<br>"; 
    document.getElementById("wynik3").innerHTML +="iloczyn wynosi"+" "+(parseInt(ein)*parseInt(zwei))+"<br>"; 
}
function kwadrat(){
  let bok = document.getElementById("bok").value;
  document.getElementById("wynik-pole-kwadratu").innerHTML ="pole kwadratu wynosi"+" "+(parseInt(bok)*parseInt(bok)+"cm"); 
} 
function piewiastkowanie(){
  let pierwiastek = document.getElementById("pierwiastek").value;
  document.getElementById("wynik-pierwiastkowania").innerHTML ="pierwiastek z liczby to"+" "+( Math.sqrt( pierwiastek )); 
}

 function prostopadloscian(){
   let side1 = document.getElementById("side1").value;
   let side2 = document.getElementById("side2").value;
   let side3 = document.getElementById("side3").value;
  document.getElementById("wynik-pole-prostopadloscianu").innerHTML ="pole prostopadloscianu wynosi"+" "+(2*(parseInt(side1)*parseInt(side2)+parseInt(side2)*parseInt(side3)+parseInt(side1)*parseInt(side3))+"cm²"); 
 } 

function kolo(){
  let promien = document.getElementById("promien").value;
  document.getElementById("wynik-pole-kola").innerHTML ="pole koła wynosi"+" "+(Math.PI * Math.pow(parseInt(promien), 2))+"<br>"; 
  document.getElementById("wynik-pole-kola").innerHTML +="objętość koła wynosi"+" "+( 2 * Math.PI * parseInt(promien)); 

} 
function szczecin(){
  let cenapaliwa = document.getElementById("cenapaliwa").value;
  let spalanie =100/8;
  let trasa = 360/spalanie;
  let wynik = trasa*cenapaliwa;
  document.getElementById("koszt-szczecin").innerHTML ="koszt przejazdu z Gdańska do Szczecina wyniesie nas "+" "+(wynik)+"zł"; 
} 
function trasa(){
  let cenapaliwa = document.getElementById("cena-paliwa").value;
  let dymienie = document.getElementById("dymienie").value;
  let odleglosc = document.getElementById("odleglosc").value;
  let spalanie =100/dymienie;
  let trasa = odleglosc/spalanie;
  let wynik = trasa*cenapaliwa;
  document.getElementById("kosztownosc").innerHTML ="koszt przejazdu z Gdańska do Szczecina wyniesie nas "+" "+(wynik)+"zł"; 
} 
function bank(){
  let lokata = document.getElementById("lokata").value;
  let lata= (((lokata*1.08)-lokata)*0.81);
  document.getElementById("lokatowanie").innerHTML ="twoj zysk z lokaty :"+" "+( lata)+"zł"; 
}
