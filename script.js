//metodo uno con switch-case
$(document).ready(function () {
  var windowWidth = $(window).width();
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
      if (windowWidth > 768) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        //$(".muñeco").css("display", "none");
        $('.muñeco').hide();
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
          $(".muñeco").show();
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
      //
      //
      //
      if (windowWidth <= 768) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        $('.muñeco').hide();
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
          $('.muñeco').show();
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
    });
  });


  //metodo dos con func replace
$(document).ready(function () {
  var windowWidth = $(window).width();
  $(".descrypt").click(function () {
    var texto = $(".fake-textarea").val();
    var resultado = texto
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
      if (windowWidth>768) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        //$('.muñeco')[0].style.display = 'none';
        $('.muñeco').hide();
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
          $(".muñeco").show();
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
      //
      //
      //
      if (windowWidth<=768) {
        // Media query se cumple
        $(".noencontrado").text(resultado);
        $(".noencontrado2").css("display", "none");
        $(".copy2").css("display", "block");
        $(".linita").css("display", "block");
        $('.muñeco').hide();
        if (texto == '') {
          $(".noencontrado").text("Ningún mensaje fue encontrado")
          $(".noencontrado2").css("display", "block");
          $(".copy2").css("display", "none");
          $(".linita").css("display", "none");
          $('.muñeco').show();
          // $(".noencontrado2").css("margin-left", "2.2rem");
        }
        //opciones de visualización del condicional para resoluciones de 375px a 758px
      }
  });
});
  