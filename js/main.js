function encrypt() {
    
    var number = document.getElementById("number");
    var list = document.createElement("li");
    var button = document.createElement("button");
    var input = document.createElement("input");
    var a= document.getElementById("text").value;
    if( a==="") {
      alert("please enter any message!")
    } else {
     
      var b64=btoa(a);
        var unicode=atob(b64) ;
      list.innerHTML = `${b64}<span>${unicode}</span>`;
      
       button.innerHTML = "delete";
       button.style = "margin:15px;color: white;border: none;outline:none;text-transform: uppercase;padding: 10px;background:#448AFF;";
  
      //  console.log(unicode);

      list.style =
        "color:white;font-family: Trebuchet MS, Lucida Sans Unicode, Lucida Grande,Lucida Sans, Arial, sans-serif;font-size: larger;";
  
      number.appendChild(list);
      list.appendChild(button);

      // button.addEventListener("mouseenter",() => {
      //   button.style =  "margin:15px;color: #448AFF;border: none;outline:none;text-transform: uppercase;padding: 10px; background-color:white;";
        
      // });
     
  
      button.addEventListener("click", function () {
        list.remove();
      });
        
    }

    
  }
