var paragraf1 = document.getElementById("opis");
var guzik = document.querySelector("button");
function wypisz() {
    paragraf1.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nobis quaerat iste molestias consequuntur veniam officia facere perspiciatis laudantium asperiores, fugit doloribus error fugiat ullam enim neque sequi distinctio, beatae dolore dicta quisquam. Quidem perferendis earum ea tempore sapiente, sequi!";
}
guzik.onclick = wypisz;