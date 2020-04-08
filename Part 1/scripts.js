function randomquote() {

var quotes=$("div")
if(quotes.length) {
var display=Math.floor(Math.random () * quotes.length) ;
for(var i=0;i<quotes.length;i++){
if(i!==display) {
$(quotes[i]).hide();
}
}
}
}