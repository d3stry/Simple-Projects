const idiomas = {
    es: {
      title: 'Técnico Desarrollador & Estudiante de Pentester',
      nav1: 'Inicio',
      nav2: 'Info',
      nav3: 'Contactos',
      btn1: 'Inglés',
      btn2: 'Español',
      aboutme1: 'Hola!!, soy Héctor',
      aboutme2: 'O d3s.try',
      aboutme3: 'Me encanta la programación y el Pentesting',
      aboutme4: 'Aunque en un futuro me gustaría hacer auditorias',
      aboutme5: 'Támbien me gustaría ser Full Stack Developer',
      aboutme6: 'Siempre trato de tener oportunidades',
      aboutme7: 'Para crecer en éste ámbito.',
      aboutme8: '¡Gracías por venir a mi página y saber un poco más acerca de mí!',
      soc: '¡Mis Redes Sociales! ->'
    },
    en: {
      title: 'Technical Developer & Pentester Student',
      nav1: 'Home',
      nav2: 'Info',
      nav3: 'Contact me',
      btn1: 'English',
      btn2: 'Spanish', 
      aboutme1: 'Hi there!!, I am Héctor',
      aboutme2: 'Or d3s.try',
      aboutme3: 'I love programming and the Pentesting',
      aboutme4: 'Although in the future I would like to do audits.',
      aboutme5: "also i'd like to be Full Stack Developer",
      aboutme6: 'Always try to have opportunities',
      aboutme7: 'To Grow up in this area.',
      aboutme8: '¡Thx for comming to my page and know a little about me!',
      soc: '¡My Social Media! ->'
    }
  };
  
  function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll('[data-i18n]');
  
    elementos.forEach(elemento => {
      const clave = elemento.dataset.i18n;
      elemento.textContent = idiomas[idioma][clave];
    });
  }