<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Patronaje masculino básico

    .row.justify-content-center.caja-gris1.g-0.mb-5
      .col-lg.mb-lg-0.mb-5
        p.mb-0.px-5.py-4 Una de las fases más importantes del proceso de desarrollo de colecciones de moda, tiene que ver con el patronaje, pues acá es donde se comienzan a materializar las ideas de diseño a partir de la construcción en plano de cada una de las piezas que van a conformar una prenda. Este proceso lleva todo un análisis previo de la manera en la que se entiende el cuerpo y cómo garantizar la funcionalidad y vestibilidad de las prendas.
          br
          br
          | Los patrones en la moda son lo que los planos a la arquitectura, pues a través del uso de dibujos planos y geométricos se traduce la volumetría del cuerpo humano y se establece la construcción y desarrollo de las prendas.
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2-imagen1.jpg")

    #t_2_1.titulo-segundo
      h2 2.1    Inducción al patronaje y escalado masculino

    .row.justify-content-center.mb-4
      .col-lg-4.mb-lg-0.mb-5
        figure
          img(src="@/assets/curso/tema2-imagen2.jpg")
      .col-lg-8
        p.mb-0 El patronaje masculino tiene sus orígenes en la sastrería. Desde los siglos XVIII y XIX, donde el hombre pasó del glamour excesivo a la sobriedad del traje que se usó hasta mediados del siglo XX, momento en el que se diversifica la moda en general con la aparición de los universos del vestuario; sin embargo, el desarrollo de las prendas de vestir masculinas sigue partiendo de los mismos patrones básicos y es al momento de realizar los desarrollos cuando se ajustan las teorías según el diseño a construir para conseguir el resultado esperado.
          br
          br
          | Durante el desarrollo de esta unidad se tendrán como bases lo patrones de la camisa, el pantalón, la chaqueta y la camiseta de los cuales, al realizar las variaciones pertinentes, es posible obtener los diferentes desarrollos de prendas exteriores.
    
    .cajon.color-primario.p-5.mb-4
      p.mb-0 Para la obtención de las diferentes tallas se utiliza una técnica conocida como escalado, la cual permite incrementar o disminuir la talla de un patrón o molde a partir de la modificación de ciertas medidas en puntos específicos partiendo de la diferencia entre tallas que se obtiene de la tabla de medidas con la que se trabaje. 

    p.mb-5 Las teorías de escalado funcionan de igual manera para las diferentes líneas de vestir, lo que cambia son las fórmulas de escalado, ya que, para cada tipología de prenda, según la línea y el cuadro de tallas a trabajar, se emplean valores diferentes.

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src="@/assets/curso/tema2-imagen3.jpg")
        p.mb-5 Entender el cuerpo como un cilindro para el desarrollo de patrones partiendo de los cuartos de medidas, será un elemento indispensable para el proceso de escalado, pues al trasladar la volumetría al dibujo plano, se establecen ciertos ejes que harán las veces de centros de escalado y serán puntos fijos que no se modificarán.
        figure.mb-5
          img(src="@/assets/curso/tema2-imagen4.svg").mb-2
          figcaption Fuente: elaboración propia en Optitex.

    .row.justify-content-center.mb-5
      .col-lg-6
        .caja.temporal--rosa.p-5.mb-5
          p.mb-0 El escalado parte de unos ejes, que para las prendas superiores, serán las líneas de centro del frente y el centro espalda como ejes verticales, y como eje horizontal se emplea la línea o altura de sisa. El eje se comporta como centro del escalado, manteniéndose inmóvil.
        figure
          img(src="@/assets/curso/tema2-imagen5.svg").mb-3
          figcaption Fuente: Escalado (Gaviria; 2018).
      .col-lg-6
        .caja.temporal--rosa.p-5.mb-5
          p.mb-0 En las partes inferiores masculinas (pantalones) el eje vertical se ubica en la línea de aplome y el eje horizontal a la altura de cadera o tiro. Creciendo y decreciendo horizontalmente hacia los costados, tiro y entrepierna y verticalmente hacia la cintura y la bota.
        figure
          img(src="@/assets/curso/tema2-imagen6.svg").mb-3
          figcaption Fuente: Escalado (Gaviria; 2018)
    
    p.mb-5 Para escalar es muy importante tener en cuenta estos ejes y sobre estos trazar un plano cartesiano en cada punto a escalar, para luego aplicar la medida (según incrementos en tabla de medidas) hacia afuera (en tallas mayores) y hacia adentro (en tallas menores), manteniendo las proporciones y curvas del patrón base o inicial.

    .row.justify-content-center
      .col-lg-5.d-flex
        p.mb-0.caja--outline-rosa.px-4.py-3.texto-rosa Posición de las escuadras para trazar los planos cartesianos en puntos de prendas superiores.
      .col-lg-5.d-flex
        p.mb-0.caja--outline-rosa.px-4.py-3.texto-rosa Posición de las escuadras para trazar los planos cartesianos en puntos de prendas inferiores.
  
    .row.justify-content-center
      .col-lg-5.d-flex
        figure.mb-4
          img(src="@/assets/curso/tema2-imagen7.svg")
          figcaption Fuente: Escalado (Gaviria; 2018)
      .col-lg-5.d-flex
        figure.mb-4
          img(src="@/assets/curso/tema2-imagen8.svg")
          figcaption Fuente: Escalado (Gaviria; 2018)
      .col-lg-10
        .cajon.color-acento-contenido.p-5.mb-4
          p.mb-0 A continuación se presenta un ejemplo en el que se explica gráficamente el escalado del punto de hombro por sisa (hombro x sisa), con unos valores de 0.84cm en X y 0.76cm en Y (los cuales dependen de cada punto y de la tabla de medidas con la que se trabaje), como se ve en la figura.
        figure.mb-4
          img(src="@/assets/curso/tema2-imagen9.svg").mb-3
          figcaption Fuente: Escalado (Gaviria; 2018). Ejemplo de escalado del punto hombro por sisa.  
        p.mb-4 Como se observa en la figura anterior, se marcó el plano cartesiano sobre el punto y en cada uno de los ejes la medida correspondiente (0.84 cm en X y 0.76 cm en Y), para luego prolongar paralelamente estas líneas formando una retícula o cuadrícula, en la que se identifican cada uno de los puntos de cruces de las tallas. Teniendo como referencias cada uno de estos puntos se traza cada talla utilizando el molde base.
        p.mb-5.text-center.py-3.caja.temporal--rosa Adaptado de Carrera de Diseño y Gestión en Moda, 2015; Gaviria; 2018.
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo.  
              | Escalados (Gaviria; 2018).

    Separador

    #t_2_2.titulo-segundo
      h2 2.2    Medidas y cuadros de tallas

    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-5
        p.mb-0 Para comenzar a trabajar los patrones es fundamental tener las medidas del cuerpo a vestir. Como se vio en la unidad Fundamentos de Patronaje, el patronaje industrializado se basa en las tablas de tallas y medidas, cuadro en los que se reúne la información antropométrica de los individuos o consumidores según las tallas. Cabe recordar que es imprescindible que cada marca trabaje con las medidas antropométricas del mercado o consumidor al que se dirige, ya que éstas varían según el estilo de vida de las personas o la ocasión de uso en la que se enfoca la línea de vestuario.
          br
          br
          | Para el desarrollo de patrones se emplean algunas medidas tomadas directamente sobre el cuerpo (antropométricas) y otras medidas que son deducidas, es decir que se construyen a partir de fórmulas matemáticas, estas se explicarán en cada desarrollo. En patronaje masculino las medidas más empleadas son:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2-imagen10.svg")

    .row.justify-content-center.mb-4
      .col-lg-3
        figure
          img(src="@/assets/curso/tema2-imagen11.svg")
      .col-lg-9
        .row.justify-content-center
          .col-lg-4
            h4.mb-3 Contornos
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Cuello
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Pecho
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Cintura
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Cadera
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Bíceps
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Muñeca o puño
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Muslo
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Rodilla
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Pantorrilla
              li 
                .lista-ol--cuadro__vineta
                  span 10
                | Tobillo o bota
          .col-lg-8
            h4.mb-3 Largos (longitudinales verticales):
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Estatura total
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Estatura séptima cervical
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Talle
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Largo brazo o manga
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Profundidad o altura de sisa (medida deducida o con fórmula)
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Largo de camisa (medida según diseño)
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Caída o altura de hombro (medida estandarizada)
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Entrepierna
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Altura de cintura (cintura a suelo) o largo de pantalón
              li 
                .lista-ol--cuadro__vineta
                  span 10
                | Altura tiro o cintura a tiro (ver imagen para la toma de esta medida)
              li 
                .lista-ol--cuadro__vineta
                  span 11
                | Altura de rodilla
        .row.justify-content-center
          .col-12
            h4.mb-3 Anchos (longitudinales horizontales):
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Ancho espalda
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Ancho pecho
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Largo hombro
    p.mb-5 Como ya se ha explicado, cada patronista emplea su propio cuadro de medidas y tallas o el de la empresa para la que trabaja, incluyendo las medidas que requiere para el desarrollo de las prendas. A continuación, se presentan algunos ejemplos de tablas de medidas masculinas. 

    .row.justify-content-center.mb-4
      .col-lg-3.mb-lg-0.mb-5.d-flex
        figure
          img(src="@/assets/curso/tema2-imagen12.svg")
          figcaption Fuente: Manual de patronaje básico e interpretación de diseños (Gutiérrez Rengifo et al., 2011).
      .col-lg-3.mb-lg-0.mb-5.d-flex
        figure
          img(src="@/assets/curso/tema2-imagen13.svg")
          figcaption Fuente: Texto Guía del participante Confección textil (Araujo et al., 2014).
      .col-lg-3.mb-lg-0.mb-5.d-flex
        figure
          img(src="@/assets/curso/tema2-imagen14.svg")
          figcaption Fuente: Módulo I: Patronaje Industrial Masculino. Versión Imprimible (SENA, s.f.).
      .col-lg-3.d-flex
        figure
          img(src="@/assets/curso/tema2-imagen15.svg")
          figcaption Fuente: Tallas tops. Instructora: Maritza Rodríguez (Rodríguez, 2018).
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0 Para el desarrollo de los patrones de este módulo se tomará como tabla de medidas esta última, tomada de Manual de patronaje básico e interpretación de diseños y convertida a centímetros por la instructora Maritza Rodríguez. Como se observa en el cuadro (para masculino), tanto las tallas superiores (camisas) como las inferiores (pantalones), se nombran con números, así: para las camisas (generalmente) la talla corresponde a la medida del cuello en centímetros, mientras que para el pantalón la talla es el contorno de cintura en pulgadas. Aunque se presentan las tallas de uno en uno, industrialmente se trabaja sólo con las tallas pares, es decir, 36, 38, 40, 42 para camisas y 28, 30, 32, 40, 42, 44 para pantalones.
          br
          br
          | Aunque esta denominación está estandarizada, cada patronista podrá trabajar con las medidas que requiera.
    .row.justify-content-center.mb-4
      .col-lg-8.mb-4
        p.mb-0.py-2.caja.temporal--rosa.text-center Gaviria, F. et al., 2019; Gutiérrez Rengifo et al., 2011; SENA, s.f.-a.
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo.  
              | Escalados (Gaviria; 2018).

    Separador

    #t_2_3.titulo-segundo
      h2 2.3    Básico de la camisa: delanteros, espalda, almilla, mangas, cuellos, puños y perillas

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-imagen16.svg")
      .col-lg-8
        p.mb-1 Para comenzar a trabajar los patrones es fundamental tener las medidas del cuerpo a vestir. Como se vio en la unidad Fundamentos de Patronaje, el patronaje industrializado se basa en las tablas de tallas y medidas, cuadro en los que se reúne la información antropométrica de los individuos o consumidores según las tallas. Cabe recordar que es imprescindible que cada marca trabaje con las medidas antropométricas del mercado o consumidor al que se dirige, ya que éstas varían según el estilo de vida de las personas o la ocasión de uso en la que se enfoca la línea de vestuario.
          br
          br
          | Para el desarrollo de patrones se emplean algunas medidas tomadas directamente sobre el cuerpo (antropométricas) y otras medidas que son deducidas, es decir que se construyen a partir de fórmulas matemáticas, estas se explicarán en cada desarrollo. En patronaje masculino las medidas más empleadas son:
          br
          br
          strong Para su construcción se necesitarán las medidas de 

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Contorno de pecho
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Ancho de espalda
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Ancho de Pecho
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Largo total de camisa
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Largo de hombro
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Largo de Talle
    
    figure.mb-5 
      img(src="@/assets/curso/tema2-imagen17.svg")

    .row.justify-content-center
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2-imagen18.svg")
      .col-lg-9
        SlyderEspecial.especial1.mb-5(:datos="datosSlyder")

    .row.justify-content-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2-imagen32.svg")

    .row.justify-content-center.mb-4
      .col-lg-11
        p.caja.temporal--rosa.py-2.px-4.text-center La manga puede variar dependiendo del diseño. Acá se explicará el paso a paso para el trazo de la manga larga básica de camisa masculina. Las medidas necesarias son: 
      .col-lg-8
        .row.justify-content-center
          .col-lg-4
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Contorno de puño 
          .col-lg-4
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Ancho de espalda 
          .col-lg-4
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 3
                |  Largo de manga
        .row.justify-content-center
          SlyderC.mb-5(:datos="datosSlyder2")

      .col-lg-11.caja.temporal--azul
        .row.justify-content-center.p-4
          .col-lg-8.mb-lg-0.mb-5
            p.mb-0
              strong Complementos
              br
              br
              | En los complementos encontrarán las piezas que como su nombre lo dice, complementan el patrón de la camisa, como es el caso de los puños, perillas y cuellos. Estos pueden variar según las especificaciones del diseño y la creatividad del diseñador.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2-imagen38.svg")

    .row.justify-content-center.mb-4
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2-imagen39.svg")
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
import SlyderEspecial from '../components/SlyderBSpecial.vue'
export default {
  name: 'Tema2',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
    SlyderEspecial,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Para comenzar se traza un rectángulo de la mitad (½) del contorno de pecho más 5 cm de flojo u holgura por el largo total de camisa; a la línea vertical Izquierda corresponde al centro atrás. Y la vertical derecha centro frente.',
        imagen: require('@/assets/curso/tema2-imagen19.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Desde el vértice superior izquierdo hacia abajo, marcar el largo de talle y escuadrar hacia la derecha; ubicando la línea de Cintura.',
        imagen: require('@/assets/curso/tema2-imagen20.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Tomar la mitad de la medida que hay entre la línea superior del rectángulo y la línea de cintura, más 4 cm hacia abajo y escuadrar hacia la derecha, construyendo así la línea de profundidad de sisa.',
        imagen: require('@/assets/curso/tema2-imagen21.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Ubicar la mitad (½) de esta línea (línea profundidad de sisa) y escuadrar hacia abajo creando los costados de la camisa. ',
        imagen: require('@/assets/curso/tema2-imagen22.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Desde el centro atrás y sobre la línea de profundidad de sisa, hacia la derecha, marcar la mitad (½) del ancho de espalda menos 1 cm. Luego escuadrar hasta la línea superior del rectángulo. La intersección de estas dos líneas se denomina vértice hombro – sisa de la espalda. ',
        imagen: require('@/assets/curso/tema2-imagen23.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'En el delantero se aplica la operación del punto anterior, con la siguiente variación: desde el centro frente y sobre la línea de profundidad de sisa hacia la izquierda, marcar la medida de la mitad de ancho de espalda y escuadrar hasta la línea superior del rectángulo. ',
        imagen: require('@/assets/curso/tema2-imagen24.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Desde este último punto, bajar 2.5 cm correspondientes a la caída de hombro y escuadrar una línea de apoyo de aproximadamente 5 cm hacia la izquierda, este punto será el vértice hombro – sisa del delantero.',
        imagen: require('@/assets/curso/tema2-imagen25.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'A continuación se divide por 6 la medida que hay entre la línea superior del rectángulo y la profundidad de sisa. El resultado de esta operación se aplica desde el vértice superior derecho del rectángulo hacia la izquierda, llamándose vértice cuello – hombro del delantero. ',
        imagen: require('@/assets/curso/tema2-imagen26.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Realizar esta misma operación en la espalda, pero escuadra el punto 2.5 cm hacia arriba de la línea superior del rectángulo; este punto será el vértice cuello – hombro de espalda.',
        imagen: require('@/assets/curso/tema2-imagen27.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Desde el vértice cuello – hombro espalda, hacia la derecha y cayendo sobre el vértice hombro – sisa en diagonal, marcar la medida de hombro. Realiza el mismo procedimiento sobre el delantero. ',
        imagen: require('@/assets/curso/tema2-imagen28.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Del vértice superior derecho hacia abajo, marcar un tercio (1/3) de la medida que hay entre la línea profundidad de sisa y línea superior del rectángulo. Este será el vértice de centro frente – cuello. ',
        imagen: require('@/assets/curso/tema2-imagen29.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Desde el vértice hombro – sisa, pasando por la línea que determina el ancho de pecho y ancho de espalda, hasta la línea profundidad de sisa trazar una curva con la regla de curvas o sisómetro, creando así la sisa del delantero y la sisa de la espalda. ',
        imagen: require('@/assets/curso/tema2-imagen30.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'La curva del cuello, sale de unir con curva el vértice superior izquierdo hasta el vértice de cuello – hombro; realizar esta misma operación en el delantero, uniendo el vértice de cuello – hombro con el punto marcado sobre la línea de centro frente. Este punto es llamado vértice centro frente – cuello.',
        imagen: require('@/assets/curso/tema2-imagen31.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
    ],
    datosSlyder2: [
      {
        titulo: '',
        texto:
          'Trazar un rectángulo, de ancho se pone la medida de la mitad de ancho de espalda más 2 cm y de largo, la medida de largo de manga. ',
        imagen: require('@/assets/curso/tema2-imagen33.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Del vértice superior derecho bajar 8 cm y unir en recta con el vértice superior izquierdo creando una diagonal. ',
        imagen: require('@/assets/curso/tema2-imagen34.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Dividir la diagonal en tres partes iguales y realizar una seña en cada fracción de la línea. En la primera seña, escuadrar sobre la diagonal hacia arriba 1 cm. La segunda seña indica la mitad de la línea. En la última seña escuadrar hacia abajo 1 cm',
        imagen: require('@/assets/curso/tema2-imagen35.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Para trazar la curva de cabeza de la manga, unir con el sisómetro, en sentido cóncavo el vértice superior izquierdo con el 1cm que se subió, pasando por la seña que indica la mitad de la línea y, por último, ubicar el sisómetro en sentido convexo, pasando por la marca de 1 cm que se bajó y finalizar en los 8 cm que se bajaron. ',
        imagen: require('@/assets/curso/tema2-imagen36.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
      {
        titulo: '',
        texto:
          'Del vértice inferior izquierdo hacia la derecha marcar la mitad (½) del contorno de puño. Unir los puntos con línea recta.',
        imagen: require('@/assets/curso/tema2-imagen37.svg'),
        leyendaImagen: 'Fuente: elaboración propia en Optitex.',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
