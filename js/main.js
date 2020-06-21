let contador = 0;
let btn = document.getElementById("circle");
let btn2 = document.getElementById("circle2");
let texto = document.getElementById("texto");
texto.style.display = "none";

btn.onclick=()=>{
    ++contador;
    switch (contador){
         case 1:
            document.getElementById("txt").textContent = "Te dije que no lo toques. 🙄";
        break
        case 2:
            btn.style.width = "10px";
            btn.style.height = "10px";
            document.getElementById("txt").textContent = "OK. 😑";
        break
        case 3:
            btn.style.width = "2px";
            btn.style.height = "2px";
            document.getElementById("txt").textContent = "Ah, ¿y ahora? 😏";
        break
        case 4:
            btn.style.width = "150px";
            btn.style.height = "150px";
            document.getElementById("txt").textContent = "¿Cómo pudiste? 😲";
        break
        case 5:
            btn.style.width = "150px";
            btn.style.height = "150px";
            btn.style.backgroundColor = "blue"
            document.getElementById("txt").textContent = "Tocá el círculo rojo. 😂";
        break
        case 6:
            btn.style.width = "150px";
            btn.style.height = "150px";
            btn.style.backgroundColor = "red"
            document.getElementById("txt").textContent = "¡Rompés todas las reglas! 😠";
        break
        case 7:
            btn.style.width = "150px";
            btn.style.height = "150px";
            btn.style.marginLeft = "90px";
            btn.style.marginTop = "40px"
            document.getElementById("txt").textContent = "¡Apa! Me estoy moviendo... 👉";
        break
        case 8:
            btn.style.width = "150px";
            btn.style.height = "150px";
            btn.style.marginLeft = "150px";
            btn.style.marginTop = "80px"
            document.getElementById("txt").textContent = "Un poco más... 🤏";
        break
        case 9:
            btn.style.width = "150px";
            btn.style.height = "150px";
            btn.style.marginLeft = "210px";
            btn.style.marginTop = "120px"
            document.getElementById("txt").textContent = "Ya casi... 👇";
        break
        case 10:
            btn.style.width = "1px";
            btn.style.height = "1px";
            btn.style.marginLeft = "10%";
            btn.style.marginTop = "400px"
            document.getElementById("txt").textContent = "¡Ajá! Me fui. 💪 (¿O no?)";
        break
        case 11:
            btn.style.width = "10px";
            btn.style.height = "10px";
            btn.style.marginLeft = "34px";
            btn.style.marginTop = "-75px";
            document.getElementById("txt").textContent = "¿QUÉ? Te odio. 🤬";
        break
        case 12:
            btn.style.width = "150px";
            btn.style.height = "150px";
            btn.style.marginLeft = "0";
            btn.style.marginTop = "0";
            document.getElementById("txt").textContent = "😴";
        break
        case 13:
            document.getElementById("txt").textContent = "😴";
        break
        case 14:
            document.getElementById("txt").textContent = "😴";
        break
        case 15:
            document.getElementById("txt").textContent = "Pensé que así te irías. 🤦";
        break
        case 16:
            btn2.style.display = "block";
            document.getElementById("txt").textContent = "Soy el de abajo. 😁";
        break
        case 17:
            btn2.style.display = "none";
            document.getElementById("txt").textContent = "No sos fácil de engañar. 😪";
        break
        case 18:
            document.getElementById("txt").textContent = "Ahora de verdad. Me voy. 👋";
            setTimeout(() => {
                btn.style.display = "none";
                document.getElementById("txt").style.display = "none";
                texto.style.display = "block"
            }, 1000)
                        
        break
    }
}

texto.onclick=()=>{
    contador = 0;
    texto.style.display = "none";
    btn.style.display = "block";
    document.getElementById("txt").style.display = "block";
    document.getElementById("txt").textContent = "¡No de nuevo, decía! 😫";
}
