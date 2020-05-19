function press(){
    var quote=["Romans 8:31 What shall we say to these things? if God be ffor us, who can against us",
    "Romans 8:6 For to be carnally minded is death but to be spiritual minded is life and peace",
    "Romans 6:1 What shall we say then? shall we continue in sin that grace may abound",
    "Romans 6:7 For he that is dead is freed from sin",
    "Romans 4:7 Blessed are those whose iniquities are forgiven and whose sins are covered",
    "Romans 3:10 As it is ritten, there is none righteous, n, not one",
    "Romans 3:23 For al have sinned, and come short of the glory of God"]
    var randomnum=Math.floor(Math.random()*(quote.length));
    document.getElementById('fact').innerHTML=quote[randomnum];
    document.getElementById('quote').style.background="#" + Math.floor(Math.random()*256);
    
    setTimeout(press,1200);

}