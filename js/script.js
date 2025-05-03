document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const movie = document.getElementById('movie').value.trim();
        const genre = document.getElementById('genre').value;
        const message = document.getElementById('message').value.trim();
  
        const errors = [];
  
        if (name.length < 10) errors.push('A név legalább 10 karakter legyen!');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          errors.push('Érvénytelen email cím!');
        }
        if (movie.length < 3) errors.push('Kérlek adj meg egy filmcímet!');
        if (!genre) errors.push('Válassz műfajt!');
        if (message.length < 10) errors.push('A vélemény/javaslat legalább 10 karakter legyen!');
  
        if (errors.length > 0) {
          alert(errors.join('\n'));
        } else {
          alert('Űrlap sikeresen elküldve!');
          form.reset();
        }
      });
    }
  });