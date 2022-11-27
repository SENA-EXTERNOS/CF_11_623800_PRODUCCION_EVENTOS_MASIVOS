export default {
  global: {
    componenteFormativo: 'Condiciones comerciales de proveedores',
    descripcionCurso:
      'Los acuerdos con proveedores comerciales se realizan en toda empresa al momento de comprar cualquier bien o servicio, para lo cual se requieren los conocimientos en elaboración de cotizaciones, diseño de estructura de un cuadro comparativo, presentación de oferta comercial, modelos de certificación de proveedores, desarrollo sostenible y buenas prácticas, lo que permite establecer sinergia entre las partes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner_principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cotizaciones de proveedores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cuadros comparativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Oferta comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Certificación de proveedores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Desarrollo sostenible',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Buenas prácticas de selección de proveedores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cotización',
      referencia:
        'Montes, J. (2022). <i>Cotización </i>. Economipedia: https://economipedia.com/definiciones/cotizacion.html',
      tipo: 'Sitio web',
      link: 'https://economipedia.com/definiciones/cotizacion.html',
    },
    {
      tema: 'Certificación de proveedores.',
      referencia:
        'González, Y. (2017) <i> Certificación gestión de eventos sociales empresariales </i> [video]. YouTube. https://www.youtube.com/watch?v=9CP4sPFzMdg',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=9CP4sPFzMdg',
    },
    {
      tema: 'Desarrollo sostenible.',
      referencia:
        'Universidad Rey Juan Carlos. (2017). Guía de buenas prácticas para la realización de eventos sostenibles en la URJC. (Archivo PDF). https://www.urjc.es/images/EstudiarURJC/vida_universitaria/compromiso_social/sostenibilidad/guia-de-buenas-practicas-para-la-realizacion-de-eventos-sostenibles-en-la-urjc.pdf',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=RstFV_n6wRg',
    },
    {
      tema: 'Desarrollo sostenible.',
      referencia:
        'Universidad Rey Juan Carlos. (2017). <i> Guía de buenas prácticas para la realización de eventos sostenibles en la URJC. </i> (Archivo PDF). https://www.urjc.es/images/EstudiarURJC/vida_universitaria/compromiso_social/sostenibilidad/guia-de-buenas-practicas-para-la-realizacion-de-eventos-sostenibles-en-la-urjc.pdf',
      tipo: 'PDF',
      descarga:
        'https://www.urjc.es/images/EstudiarURJC/vida_universitaria/compromiso_social/sostenibilidad/guia-de-buenas-practicas-para-la-realizacion-de-eventos-sostenibles-en-la-urjc.pdf',
    },
    {
      tema: 'Buenas prácticas en la selección de proveedores.',
      referencia:
        'AERCE. Agencia de Eventos Españoles Asociadas AEVEA. (2018). <i> Guía técnica de buenas prácticas en la compra de servicios de eventos. </i> (Archivo PDF). https://aevea.es/add/modelos-de-trabajo/Guia-Buenas-Practicas-Compras-de-Eventos-2018.pdf',
      tipo: 'PDF',
      descarga:
        'https://aevea.es/add/modelos-de-trabajo/Guia-Buenas-Practicas-Compras-de-Eventos-2018.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
