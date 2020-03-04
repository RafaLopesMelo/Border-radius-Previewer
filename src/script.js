const optionPixel = document.body.querySelector("main form#dados #pixel")
const optionPercent = document.body.querySelector("main form#dados #percent")

const topLeft = document.body.querySelector("main form#dados #top-left") 
const topRight = document.body.querySelector("main form#dados #top-right")
const bottomRight = document.body.querySelector("main form#dados #bottom-right")
const bottomLeft = document.body.querySelector("main form#dados #bottom-left")

const box = document.body.querySelector("main div#box")
const botao = document.body.querySelector("main form#dados input#botao")

const dados = document.body.querySelector("main textarea")
const copyButton = document.body.querySelector("main button")


botao.addEventListener("click", () => {

if (optionPixel.checked == true) {
    box.style.borderTopLeftRadius = topLeft.value + "px";
    box.style.borderTopRightRadius = topRight.value + "px";
    box.style.borderBottomRightRadius = bottomRight.value + "px";
    box.style.borderBottomLeftRadius = bottomLeft.value + "px";

    dados.value = "\r\rborder-top-left-radius: " + topLeft.value + "px\n\n" +
                "border-top-right-radius: " + topRight.value + "px\n\n" +
                "border-bottom-right-radius: " + bottomRight.value + "px\n\n" +
                "border-bottom-left-radius: " + bottomLeft.value + "px";
                
} else if (optionPercent.checked == true) {
    box.style.borderTopLeftRadius = topLeft.value + "%";
    box.style.borderTopRightRadius = topRight.value + "%";
    box.style.borderBottomRightRadius = bottomRight.value + "%";
    box.style.borderBottomLeftRadius = bottomLeft.value + "%";

    dados.value = "\r\rborder-top-left-radius: " + topLeft.value + "%\n\n" +
    "border-top-right-radius: " + topRight.value + "%\n\n" +
    "border-bottom-right-radius: " + bottomRight.value + "%\n\n" +
    "border-bottom-left-radius: " + bottomLeft.value + "%";

} else {
    alert("Marque alguma das medições de border-radius!")
}

})

copyButton.addEventListener("click", () => {
    dados.select();
    document.execCommand("copy")
})


                
