function visualizarTreino() {
  switch (document.getElementById("visualizarsecao").value) {
    case "a":
      window.location.href = "treinoA.html";

      break;
    case "b":
      window.location.href = "treinoB.html";
      break;
    case "c":
      window.location.href = "treinoC.html";
      break;
    case "d":
      window.location.href = "treinoD.html";
      break;

    case "e":
      window.location.href = "treinoE.html";
      break;

    case "f":
      window.location.href = "treinoF.html";
      break;
  }
}

function editar(index) {
  var mostrarEdit = document.querySelectorAll(".exercicio-editar");
  mostrarEdit[index].style.display = "block";
}
function cancelar(index) {
  var cancelarEdit = document.querySelectorAll(".exercicio-editar");
  cancelarEdit[index].style.display = "none";
  location.reload();
}
localStorage.setItem("treinoA", JSON.stringify(treinoA));
localStorage.setItem("treinoB", JSON.stringify(treinoB));
localStorage.setItem("treinoC", JSON.stringify(treinoC));
localStorage.setItem("treinoD", JSON.stringify(treinoD));
localStorage.setItem("treinoE", JSON.stringify(treinoE));
localStorage.setItem("treinoF", JSON.stringify(treinoF));
