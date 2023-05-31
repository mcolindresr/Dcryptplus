//metodo uno con switch-case
$(document).ready(function () {
    $(".crypt").click(function () {
      var texto = $(".fake-textarea").val();
      var resultado = "";
      for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);
        switch (letra.toLowerCase()) {
          case "a":
            resultado += "ai";
            break;
          case "e":
            resultado += "enter";
            break;
          case "i":
            resultado += "imes";
            break;
          case "o":
            resultado += "ober";
            break;
          case "u":
            resultado += "ufat";
            break;
          default:
            resultado += letra;
            break;
        }
      }
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".muñeco").css("display", "none");
      $(".copy2").css("display", "block");
      $(".linita").css("display", "block");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado");
        $(".noencontrado2").css("display", "block");
        $(".muñeco").css("display", "block");
        $(".copy2").css("display", "none");
        $(".linita").css("display", "none");
        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
    });
  });
  