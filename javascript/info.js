document.getElementById('mostrarFormulario').addEventListener('click', function() {
    var formulario = document.getElementById('formulario');
    if (formulario.classList.contains('oculto')) {
      formulario.classList.remove('oculto');
    } else {
      formulario.classList.add('oculto');
    }
  });
  