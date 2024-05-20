// control de cantidad de invitados
cant_personas.oninput = function () {
    if (this.value> 10) {
        this.value = this.value.slice(0,2);
        alert('Máximo 10 personas.');
        this.value = '';
    }
  }