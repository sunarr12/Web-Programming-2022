 function masuk() {
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     if (username == "user2021" && password == "123") {
         alert("Anda berhasil login!");
         window.open("baru.html")
     } else {
         alert("Maaf, username atau password yang Anda masukkan salah.");

     }
 }