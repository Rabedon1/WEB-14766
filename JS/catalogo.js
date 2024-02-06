document.addEventListener('DOMContentLoaded', function() {
    const descriptionButtons = document.querySelectorAll('.description-btn');
  
    descriptionButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const descriptionContent = this.parentElement.querySelector('.description-content');
        descriptionContent.classList.add('active');
  
        // Agregar un retraso para ocultar el texto de descripción después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
          descriptionContent.classList.remove('active');
        }, 3000);
      });
    });
  });
  