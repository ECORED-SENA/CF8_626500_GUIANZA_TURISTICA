export default {
  global: {
    componenteFormativo: 'El esquema y la narración de la escritura creativa',
    descripcionCurso:
      'Estructurar guiones en la guianza es una parte de la tarea permanente que requiere de un conjunto de saberes y competencias por parte del equipo de trabajo que organiza recorridos que exigen cada vez más creatividad e innovación; esto para que la experiencia del cliente sea de calidad, abriendo un nuevo mercado de servicios y productos de turismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
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
        titulo: 'Producción textual en la escritura creativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Lectura: tipos, niveles, identificación de secuencias',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comprensión textual y literaria',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Etapas en la producción de textos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas para escribir',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Escritura correcta',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Las técnicas de la escritura',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Esquema y estructuras narrativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Literatura colombiana y narración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos y características',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Autores colombianos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Marco histórico de la literatura',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Relación literatura y turismo',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cartografía literaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'El mapa literario colectivo',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Las aventuras literarias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Referentes rutas temáticas en Colombia y en el exterior',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'El guion',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Guiones turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Tipos',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'La interpretación en el guion',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Análisis de ejemplos',
            hash: 't_8_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.4',
            titulo: 'Propuesta y estructuración',
            hash: 't_8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Bermúdez, C. (2012-2013). Camino del Gaucho. <em>Revista de la Cátedra Unesco sobre Desarrollo Sostenible de la UPV/EHU, (6)</em>, p. 59-64. ',
      link:
        'https://www.ehu.eus/cdsea/web/wp-content/uploads/2016/12/Revista-6.pdf',
    },
    {
      referencia:
        'Díaz, L. y Arnáez, P. (2006). <em>Técnicas de corrección para los textos escritos</em>. Educare. ',
      link:
        'https://revistas.investigacion-upelipb.com/index.php/educare/article/download/311/297/318',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Matriz DOFA [Video]</em>. YouTube. ',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0 ',
    },
    {
      referencia:
        'Instituto Distrital de las Artes [Idartes]. (2021). <em>Detrás de las fotografías de Jesús Abad Colorado en el Cine y Yo</em>. Gov.co. ',
      link:
        'https://www.idartes.gov.co/es/noticia/detras-de-las-fotografias-de-jesus-abad-colorado-en-el-cine-y-yo',
    },
    {
      referencia:
        'Instituto Distrital de Turismo [IDT]. (s. f.). <em>Guiones turísticos</em>. Gov.co. ',
      link:
        'https://www.idt.gov.co/es/kit-herramientas-empresario/guiones-tur%C3%ADsticos',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo [Mincomercio]. (2015). <em>Plan maestro de maestro de turismo de la Ruta Macondo</em>. Informe final. ',
    },
    {
      referencia:
        'Organización Mundial del Turismo [OMT]. (2022). <em>El Turismo crece en medio de la incertidumbre</em>. UNWTO. ',
      link:
        'https://www.unwto.org/es/el-turismo-crece-en-medio-de-la-incertidumbre-onu-turismo-noticias-41',
    },
    {
      referencia:
        'Programa de Guianza Turística SENA. <em>Rutas y guiones creativos para turismo</em>. Guion interpretativo, un producto del plan interpretativo. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cartografía',
      significado:
        'elaboración, difusión, organización y estudio específico de mapas.',
    },
    {
      termino: 'Literaria',
      significado: 'uso de las letras, específica de la literatura.',
    },
    {
      termino: 'Planteamiento',
      significado:
        'enunciado, descripción de un asunto, tratamiento de un problema o situación.',
    },
    {
      termino: 'Ruta',
      significado:
        'recorrido de un lugar a otro, camino, vía para transitar. Dirección con un propósito.',
    },
    {
      termino: 'Secuencia',
      significado:
        'sucesos que ocurren uno detrás de otro. Orden de una serie de elementos.',
    },
    {
      termino: 'Técnica',
      significado:
        'recursos, pasos, procedimientos necesarios y especializados para una actividad con perfección.',
    },
    {
      termino: 'Texto',
      significado: 'enunciado que compone un documento escrito.',
    },
  ],
  complementario: [
    {
      tema: '2. Técnicas para escribir',
      referencia:
        'El Sur, taller literario y algo más. (2020). <em>Cómo escribir diálogos (1): puntuar los diálogos correctamente [Video]</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=utYWBsD7pps',
    },
    {
      tema: '5.2 Las aventuras literarias',
      referencia:
        'Asociación de Editores Madrid, Comunidad de Madrid, Cedro, Metro. (2021). <em>Plano Literario de Metro de Madrid</em>. Asocición de Editores Madrid',
      tipo: 'Página web',
      link: 'https://www.editoresmadrid.org/plano-literario/',
    },
    {
      tema: '8. Guiones turísticos',
      referencia:
        'Cátedra Turismo Sostenible UNED. (2016). <em>Cierre II videoconferencia 5168 [Video]</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NGCB9JE4ftw',
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
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Francisco Quintero',
        cargo: 'Instructor',
        centro:
          'Centro de Gestión Tecnológica de Servicios - CGTS - Regional Valle',
      },
      {
        nombre: 'Sandra Villamizar Rivera',
        cargo: 'Profesional',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Aandres Reina Montañez',
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
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
