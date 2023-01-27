const todos = document.querySelectorAll(".todo");
const togglers = document.querySelectorAll(".toggler");

todos.forEach((todo) => {
  todo.addEventListener("click", () => {
     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  });
});

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    toggler.nextElementSibling.classList.toggle("active");
  });
});