const allProjects = [
  {
    type: 'Frontend',
    projects: [
      {
        id: '1',
        title: 'Máquina de Citas',
        path: 'maquina-citas',
        image: 'src/assets/quote-machine.png',
        url: 'https://www.franscoder.com/quote-machine/',
        description:
          'Una máquina de citas simple que genera una nueva cita random de un array y cambia de color cada vez que se clica el botón. Utiliza SASS y componentes de tipo clase de React.js',
      },
      {
        id: '2',
        title: 'Markdown Previewer',
        path: 'previsualizador-markdown',
        image: 'src/assets/markdown-previewer.png',
        url: 'https://www.franscoder.com/markdownpreviewer/',
        description:
          'Proporciona una forma sencilla de visualizar cómo quedará nuestro código escrito en Markdown. En el cuadro superior escribimos y en el inferior vemos el resultado. Utiliza React, marked.js para procesado y compilación del lenguaje Markdown y prism.js para estilización del output.',
      },
      {
        id: '3',
        title: 'Teclado musical',
        path: 'teclado-musical',
        image: 'src/assets/launchpad.png',
        url: 'https://www.franscoder.com/launchpad/',
        description:
          'Basada en un launchpad de música electrónica, esta aplicación usa CSS y React.js. Las teclas, cada una mapeada con su respectiva letra y sonido, se instancian con un único componente. Además, implementa un control de volumen y pantalla funcionales. Se apoya en el uso de class components, hooks, eventos, objetos y arrays.',
      },
      {
        id: '4',
        title: 'Calculadora',
        path: 'calculadora',
        image: 'src/assets/calculator.png',
        url: 'https://www.franscoder.com/calculator/',
        description:
          'Calculadora construida en React. Usa componentes tipo clase, SASS, JavaScript vanilla, y RegEx entre otros. Una parte de la pantalla muestra la operación actual y otra el resultado acumulado. Cada botón tiene un comportamiento particular dependiendo de la última operación o pulsación.',
      },
      {
        id: '5',
        title: 'Reloj Pomodoro',
        path: 'reloj-pomodoro',
        image: 'src/assets/pomodoro-clock.png',
        url: 'https://www.franscoder.com/pomodoro-clock/',
        description:
          'Típico reloj pomodoro utilizado para optimizar nuestro tiempo de estudio, trabajo, etc. Incorpora una función accurateInterval(), para evitar la falta de precisión que setInterval() tiene en los navegadores. También esta basada en componentes tipo clase de React.js y SASS',
      },
    ],
  },
  {
    type: 'D3',
    projects: [
      {
        id: '6',
        title: 'PIB de los EE.UU.',
        path: 'pib-eeuu',
        image: 'src/assets/us-gdp.png',
        url: 'https://www.franscoder.com/us-gdp/',
        description:
          'Esta aplicación muestra una gráfica del PIB de los EEUU en los últimos 75 años, al pasar el ratón por encima de cada dato se abre un tooltip diseñado con D3.js y CSS. Se basa en la bilioteca D3.js de representación de datos y usa SASS para la hoja de estilos.',
      },
      {
        id: '7',
        title: 'Películas Top-Seller',
        path: 'top-peliculas',
        image: 'src/assets/movie-sales.png',
        url: 'https://www.franscoder.com/movie-sales/',
        description:
          'Esta gráfica ordena las películas con más beneficios de la historia por tamaño y su género por colores, usando un algoritmo de D3.js. También incorpora SASS y ofrece datos más específicos al pasar el ratón por encima.',
      },
      {
        id: '8',
        title: 'Temperatura Global',
        path: 'tempratura-global',
        image: 'src/assets/global-temperatures.png',
        url: 'https://www.franscoder.com/global-temperatures/',
        description:
          'Una gráfica de umbrales que muestra la evolución de la temperatura del globo terrestre en los últimos tres siglos. La temperatura media mensual y la variación con respeto a la media total puede verse pasando el cursor por encima de cada dato. Usa D3.js y SASS.',
      },
      {
        id: '9',
        title: 'Doping en el ciclismo',
        path: 'doping-ciclismo',
        image: 'src/assets/doping-in-cycling.png',
        url: 'https://www.franscoder.com/doping-in-cycling/',
        description:
          'Una gráfica de puntos que muestra las mejores marcas ciclistas de la historia, diferenciando con dos colores las que han sido realizadas por ciclistas que han alegado abiertamente haber consumido sustancias prohibidas y los que no. Al pasar el cursor por encima de cada dato, un tooltip personalizado muestra el autor de la marca, el año, el tiempo y su alegación de consumo de sustanias en caso de haberlo hecho. Ha sido construida con D3.js y SASS.',
      },
      {
        id: '10',
        title: 'Educación en los EE.UU.',
        path: 'educacion-eeuu',
        image: 'src/assets/us-education.png',
        url: 'https://www.franscoder.com/useducation/',
        description:
          'Un mapa que muestra el nivel de educación superior en los condados americanos usando la bilioteca D3.js, tanto al hacer mouseover como con una escala de color. Partimos de dos JSON, uno con los datos geométricos de cada condado y otra con sus niveles educativos. Utiliza Topojson.js para la construcción del mapa.',
      },
    ],
  },
  {
    type: 'Vanilla',
    projects: [
      {
        id: '11',
        title: 'Formulario',
        path: 'formulario',
        image: 'src/assets/survey-form.png',
        url: 'https://www.franscoder.com/survey-form/',
        description:
          'Un formulario de feedback adaptativo construido con Vanilla HTML & CSS',
      },
      {
        id: '12',
        title: 'Tributo a Dark Souls',
        path: 'tributo-darksouls',
        image: 'src/assets/tribute-page.png',
        url: 'https://www.franscoder.com/tribute-page/',
        description:
          'Tributo a al videojuego Dark Souls construido con Vanilla HTML & CSS',
      },
      {
        id: '13',
        title: 'Documentación JS',
        path: 'documentacionjs',
        image: 'src/assets/doc-page.png',
        url: 'https://www.franscoder.com/docs-page/',
        description:
          'Página de documentación de Javascript adaptativa construida con Vanilla HTML & CSS',
      },
      {
        id: '14',
        title: 'Tienda online',
        path: 'tiendaonline',
        image: 'src/assets/landing-page.png',
        url: 'https://www.franscoder.com/product-landing-page/',
        description:
          'Web de ventas adaptativa construida con Vanilla HTML & CSS que incorpora Navbar, Hero, cuerpo y footer',
      },
    ],
  },
];

export default allProjects;
