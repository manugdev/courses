window.onload = function getData(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "../src/products.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let dataProducts = JSON.parse(this.responseText);
  }
  }
}
