var i, x, j;
var tab =[];
var tab2 =[];
var tab3 =[];
var s=0, b;
var currentsec=0; 
var currentmin=0;
var currentmil=0;
var keepgoin=false;
function wylosuj()
{
x = Math.floor(Math.random()*100);
if(x<10)
{
    tab[0]="0"+x;
} 
else tab[0]=x;
document.getElementById(0).innerHTML = tab[0];
for(i=1; i<=99; i++)
{
    x = Math.floor(Math.random()*100);
    for(j=i; j>=0; j--)
    {
        if(x==tab[j])
        {
           x = Math.floor(Math.random()*100);
           j=i;
        }
    }
    if(x<10)
    {
        tab[i]=x;
        document.getElementById(i).innerHTML = "0"+tab[i];
    } 
    else {
        tab[i]=x;
        document.getElementById(i).innerHTML = tab[i];
    }
}
for(i=0; i<=99; i++)
{
    document.getElementById(i).disabled  = false;
}
for(i=0; i<=99; i++)
{
    for(j=0; j<=99; j++)
    {
        if(i==tab[j])
        {
           tab2[i]  = j;
        }
    }
}
for(i=0;i<=99; i++)
{
    tab3[i] = document.getElementById(i);
}
}
var kkk=0;
function czydobrze(num1)
{
    if(tab2[kkk]===num1)
    {
        zmienkolor();
        kkk++;
        if(kkk==100)
        {
            keepgoin=false;
        }
    }
}
function zmienkolor()
{
    tab3[tab2[kkk]].style.backgroundColor = "grey";
    tab3[tab2[kkk]].style.color = "black";
}
function start()
{
    for(i=0; i<=99; i++)
    {
        document.getElementById(i).style.color = "grey";
    }
}
function change()
{
    
    if(document.getElementById("start").value != "RESET")
    {
        document.getElementById("start").value="RESET";
    } 
    else document.location.reload(true);
}
function timer(){
 if(keepgoin){
  currentmil+=1;
   if (currentmil==10){  
    currentmil=0;  
    currentsec+=1;  
   }
   if (currentsec==60){  
    currentsec=0;  
    currentmin+=1; 
   }
  Strsec=""+currentsec;
  Strmin=""+currentmin;
  Strmil=""+currentmil;
   if (Strsec.length!=2){ 
    Strsec="0"+currentsec;
   }
   if (Strmin.length!=2){ 
    Strmin="0"+currentmin;
   }
  document.display.seconds.value=Strsec;
  document.display.minutes.value=Strmin;
  document.display.milsecs.value=Strmil;
   setTimeout("timer()", 100); 
 }
}
function stoper()
{
    wylosuj();
    timer();
    start();
}
   
