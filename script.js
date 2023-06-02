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
      if (window.matchMedia('(min-width: 768px) and (max-width: 3200px)').matches) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        $(".muñeco").css("display", "none !important");
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
          $(".muñeco").css("display", "block");
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
      //
      //
      //
      if (window.matchMedia('(min-width: 375px) and (max-width: 768px)').matches) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
         
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
    });
  });


  //metodo dos con func replace
$(document).ready(function () {
  $(".descrypt").click(function () {
    var texto = $(".fake-textarea").val();
    var resultado = texto
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
      if (window.matchMedia('(min-width: 768px) and (max-width: 3200px)').matches) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        $(".muñeco").css("display", "none");
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
          $(".muñeco").css("display", "block");
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
      //
      //
      //
      if (window.matchMedia('(min-width: 375px) and (max-width: 768px)').matches) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
         
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
  });
});
  