document.getElementById("boton").addEventListener("click",function(){
      var xhr = new XMLHttpRequest(); 
   var callback = function(){
       if(xhr.readyState===4 && xhr.status===200){
           document.getElementById("ajax").innerHTML=xhr.responseText;
           console.log(xhr.responseText);
       }
   };
  xhr.addEventListener("readystatechange", callback);

// 3.Abrir una conexiòn
  //xhr.open(metodoHTTP, url)
  var url = "http://localhost:2002/demo.html";
  xhr.open("GET", url);
      xhr.send();
  });