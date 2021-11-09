<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del patronaje

    .row.justify-content-center.gx-0
      .col-md-9.d-md-flex
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 Un desarrollador de vestuario necesita conocer las medidas del cuerpo humano y sus características (volúmenes, tamaños, proporciones e incrementos) según la línea a trabajar (femenino, masculino o infantil) para así, trazar los patrones adecuados y conseguir que la prenda diseñada cobre la forma requerida ajustándose a la anatomía del consumidor y cubriendo la escala de tallas en la que se oferta. El patronaje es considerado uno de los primordiales pasos del proceso productivo de la moda, debido a que de un buen patrón depende, en gran medida, el éxito de la prenda.
          span - Carrera de Diseño y Gestión en Moda, 2015a
      .col-md-3.d-md-flex
        img.img-adjust(src="@/assets/curso/tema1-imagen1.jpg")

    Separador

    #t_1_1.titulo-segundo
      h2 1.1  Patronaje: definición

    p.mb-5 El patronaje es un sistema por el cual se comienza la fabricación de una prenda de vestir partiendo de un diseño determinado. Éste consiste en desglosar en piezas separadas las áreas del cuerpo humano a cubrir y así, una vez cortadas en tela y unidas las piezas se obtiene el modelo o prototipo del producto diseñado (Carrera de Diseño y Gestión en Moda, 2015a).

    .row.justify-content-center
      .col-md-5.mb-4
        figure
          img(src="@/assets/curso/tema1-imagen2.svg")
      .col-md-5.mb-4
        figure
          img(src="@/assets/curso/tema1-imagen3.svg")
      .col-md-10.mb-5
        p.mb-4 El ejercicio del patronaje comienza por el análisis y toma de medidas del cuerpo humano, su constitución, dimensiones, proporciones y tipología, para así, interpretar la construcción adecuada de cada molde o pieza y cumplir con los requerimientos de la prenda (Gutiérrez Rengifo et al., 2011).
        .row.justify-content-center
          .col-lg-6
            a.anexo.mb-4(href="https://youtu.be/8aICqukm-Ng" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/icono-youtube.svg")
              .anexo__texto
                p
                  strong Video.
                  |   Fines del Patronaje.
      .col-md-10.mb-4
        figure.mb-0
          img(src="@/assets/curso/tema1-imagen4.jpg")
        .cajon.color-acento-contenido.px-5.py-4.mb-4
          p.px-5.mb-0 Luego, las medidas son traducidas o dibujadas sobre un papel (en el caso del patronaje manual) a lo que se llama patrón o molde de la pieza y el conjunto de todas las piezas recibe el nombre de patrón del modelo. El patronaje se vale de moldes básicos previamente validados sobre el cuerpo humano (modelados), para desarrollar los diferentes diseños. Este proceso le permite al patronista (profesional encargado del patronaje), adelantar trabajo y así no tener que trazar desde cero cada vez que se requiera un diseño.
      .col-md-9
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen5.svg")
        p.mb-5 El patronista debe interpretar correctamente el boceto o diseño del modelo a desarrollar, crear la secuencia de transformaciones del patrón básico, incluyendo métodos de trazado y construcción de patrones adicionales para lograr el patrón de la prenda a confeccionar.
        .row.justify-content-center
          .col-md-3
            figure
              img(src="@/assets/curso/tema1-imagen6.svg")
          .col-md-8.offset-md-1
            .cajon.color-primario.p-5.mb-4
              p.mb-0 Con el fin de agilizar el proceso de patronaje industrializado y evitar construir un patrón para cada talla, se recurre al proceso de escalado, que consiste en aumentar o disminuir las medidas de cada una de las piezas según el tamaño o talla del cuerpo al que corresponde.
            p.mb-0 Una vez finalizados los patrones, dependiendo del ancho útil de la tela, se realiza un trazado preliminar con el fin de calcular el consumo de materiales y registrar la información en la ficha técnica del producto, la cual será suministro de las áreas financieras y de producción.
        figure.mt-2.mb-5
          figcaption Fuente: Técnicas de patronaje. Tomo I: Mujer (Carrera de Diseño y Gestión en Moda, 2015a)
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen7.jpg")
          figcaption Fuente: Elaboración propia en Optitex Marker.
        p.mb-4 En definitiva, el patronaje está presente en toda la cadena productiva del vestuario, iniciando con la creación de los patrones a partir del concepto creativo del diseñador, conservando su originalidad, asegurando las correctas medidas y proporciones, suministrando la información necesaria para los cálculos financieros y productivos, constituyéndose en un aliado fundamental que enlaza el departamento creativo con el de producción.
      .col-md-8
        .cajon-adicional--con-bordes.px-3.py-2.mb-5
          p.mb-0 (Adaptado de: Carrera de Diseño y Gestión en Moda, 2015a).

    Separador

    #t_1_2.titulo-segundo
      h2 1.2  Vocabulario técnico de patronaje

    p.mb-5 Cada actividad técnica emplea terminología específica, es decir, palabras que se entienden en el contexto de la profesión. A continuación, se presenta vocabulario relacionado con el patronaje:

    .row.justify-content-center.mb-5
      .col-md-3.mb-md-0.mb-5
        figure.mb-0
          img(src="@/assets/curso/tema1-imagen8.svg")
      .col-md-9
        .tarjeta.tarjeta--gris.p-4.mb-0
          LineaTiempoC.color-acento-contenido(text-small)
            .row.px-5.py-4(titulo="Acabado")
              .col-12
                p.mb-0.px-5 Hace referencia a los diferentes procesos industriales para perfeccionar un producto. El acabado en los tejidos y prendas comprende el blanqueado, teñido, encogido, estirado, estampado, satinado y planchado, entre otros.
            .row.px-5.py-4(titulo="Almilla")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen9.svg")
              .col-lg-7
                p.mb-0.px-5 Es también conocida como canesú, es un corte superior en la espalda o el frente de la camisa o la blusa.
            .row.px-5.py-4(titulo="Ángulo")
              .col-12
                p.mb-0.px-5 Abertura entre dos líneas o planos que se cortan entre sí, se expresa en grados, por ejemplo, un ángulo recto o perpendicular equivale a 90°.
            .row.px-5.py-4(titulo="Aplome")
              .col-12
                p.mb-0.px-5 Es la línea que indica el hilo de la tela o quiebre de una prenda, se traza sobre el molde indicando la posición en que se cortará sobre la tela, esta línea permite cortes alineados, evitando que las partes se tuerzan al momento del trazado.
            .row.px-5.py-4(titulo="Área")
              .col-12
                p.mb-0.px-5 Superficie comprendida dentro de un perímetro, así el área se refiere a la superficie de cada una de las piezas, la suma de éstas será el área del modelo.
            .row.px-5.py-4(titulo="Banda de cuello")
              .col-12
                p.mb-0.px-5 También llamada pie de cuello, es la parte inferior del cuello camisero.
            .row(titulo="Bisectriz")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen10.svg")
              .col-lg-7
                p.mb-0.px-5 Recta que pasa por el vértice de un ángulo y lo divide en dos partes iguales.
            .row.px-5.py-4(titulo="Blusa")
              .col-12
                p.mb-0.px-5 Prenda superior de tela fina, similar a la camisa, que usan las mujeres y los niños.
            .row.px-5.py-4(titulo="Bocamanga")
              .col-12
                p.mb-0.px-5 Parte inferior de las mangas, también conocida como bajo o ruedo.
            .row.px-5.py-4(titulo="Bolsillo")
              .col-12
                p.mb-0.px-5 Pieza que va cosida y forma una bolsa utilizada para guardar objetos en las prendas y accesorios, puede ser sobrepuesto (tipo parche) o interno (de ribete o lateral).
            .row.px-5.py-4(titulo="Boca de bolsillo")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen11.svg")
              .col-lg-7
                p.mb-0.px-5 Es la parte abierta del bolsillo, por la cual se introduce la mano.
            .row.px-5.py-4(titulo="Corte")
              .col-12
                p.mb-0.px-5 Separación de una pieza en dos diferentes.
            .row.px-5.py-4(titulo="Costado")
              .col-12
                p.mb-0.px-5 Lado en el que se unen las piezas delanteras con posteriores.
            .row.px-5.py-4(titulo="Costura")
              .col-12
                p.mb-0.px-5 Serie de puntadas que une dos piezas cosidas, en patronaje se denomina costura a la margen que se adiciona para este fin.
            .row.px-5.py-4(titulo="Cuello")
              .col-12
                p.mb-0.px-5 Pieza superior de la camisa que rodea el cuello. Para la elaboración del patrón se requieren las medidas de escote delantero y escote espalda.
            .row.px-5.py-4(titulo="Cuerpo")
              .col-12
                p.mb-0.px-5 Parte de las prendas superiores que va desde los hombros y hasta la cintura.
            .row.px-5.py-4(titulo="Curva")
              .col-12
                p.mb-0.px-5 Línea que se aparta de manera continua de la dirección recta, sin formar ángulos.
            .row.px-5.py-4(titulo="Curva cóncava")
              .col-12
                p.mb-0.px-5 Curva o superficie que se asemeja al interior de una circunferencia o una esfera (hacia adentro).
            .row.px-5.py-4(titulo="Curva convexa")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen12.svg")
              .col-lg-7
                p.mb-0.px-5 Curva o superficie que se asemeja al exterior de una circunferencia o esfera (hacia afuera).
            .row.px-5.py-4(titulo="Delantero")
              .col-12
                p.mb-0.px-5 Pieza que constituye la parte frontal de las prendas.
            .row.px-5.py-4(titulo="Desarrollo de modelos")
              .col-12
                p.mb-0.px-5 Operaciones necesarias para la obtención de los patrones vestibles a partir de los patrones base.
            .row.px-5.py-4(titulo="Dobladillo")
              .col-12
                p.mb-0.px-5 Borde de la tela doblada dos veces sobre si misma asegurada con puntadas a mano o a máquina en la parte inferior de las prendas.
            .row.px-5.py-4(titulo="Embebido")
              .col-12
                p.mb-0.px-5 Recogido de tela sobrante sin que se formen pliegues, con el fin de que la pieza embebida tenga las mismas dimensiones que la pieza a la que se va a unir.
            .row.px-5.py-4(titulo="Equidistancia")
              .col-12
                p.mb-0.px-5 Igualdad de distancia entre varios puntos u objetos.
            .row.px-5.py-4(titulo="Escalado")
              .col-12
                p.mb-0.px-5 Técnica o proceso mediante el cual se obtienen las tallas inferiores y superiores a partir de un patrón base, incrementando o disminuyendo las proporciones según lo consignado en la tabla de tallas y medidas.
            .row.px-5.py-4(titulo="Escote")
              .col-12
                p.mb-0.px-5 Abertura en prendas de vestir superiores, por la que asoma el cuello y parte del pecho o de la espalda.
            .row.px-5.py-4(titulo="Escuadrar")
              .col-12
                p.mb-0.px-5 Formar ángulo recto entre dos líneas o partes del patrón.
            .row.px-5.py-4(titulo="Espalda")
              .col-12
                p.mb-0.px-5 En las prendas superiores la pieza que cubre la espalda del cuerpo humano.
            .row.px-5.py-4(titulo="Espejo, mitad o lomo")
              .col-12
                p.mb-0.px-5 Se refiere al doblez del molde o patrón con el fin lograr simetría, es decir, que el lado derecho sea idéntico al izquierdo.
            .row.px-5.py-4(titulo="Falso")
              .col-12
                p.mb-0.px-5 Pieza de refuerzo que se ubica en la parte interna de las prendas dando fuerza o terminación a los bordes.
            .row.px-5.py-4(titulo="Flojo")
              .col-12
                p.mb-0.px-5 Es una tolerancia o medida de más que sirve para evitar que la prenda quede ajustada o tirante.
            .row.px-5.py-4(titulo="Fondo de bolsillo")
              .col-12
                p.mb-0.px-5 Bolsa interna de tela en donde se guardan objetos, compuesto por dos fondos o tapas y una vista.
            .row.px-5.py-4(titulo="Industrialización de patrones")
              .col-12
                p.mb-0.px-5 Marcación de los patrones con la simbología y codificación necesarias para indicar características y acciones a realizar al momento de preparar y efectuar el corte y confección de la prenda.
            .row.px-5.py-4(titulo="Lateral")
              .col-12
                p.mb-0.px-5 El lado o el costado de una pieza.
            .row.px-5.py-4(titulo="Línea")
              .col-12
                p.mb-0.px-5 Adicional al concepto de línea en dibujo, en patronaje se refiere al conjunto de prendas de vestir dirigidas a un mercado específico, por ejemplo: línea femenina, línea masculina, línea infantil y línea interior, entre otras.
            .row.px-5.py-4(titulo="Manga")
              .col-12
                p.mb-0.px-5 Parte de las prendas superiores que rodea cada uno de los brazos. Existen muchos tipos de mangas corta, ranglan, tres cuartos (¾) y larga, entre otras.
            .row.px-5.py-4(titulo="Pantalón")
              .col-12
                p.mb-0.px-5 Prenda inferior que consta de dos perneras que generalmente, cubren desde la cintura hasta los tobillos.
            .row.px-5.py-4(titulo="Paralela")
              .col-12
                p.mb-0.px-5 Líneas equidistantes entre sí y que por más que se prolonguen no pueden encontrarse.
            .row.px-5.py-4(titulo="Pasador")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen13.jpg")
              .col-lg-7
                p.mb-0.px-5 Pieza delgada ubicada generalmente en la pretina por donde pasa un cinturón.
            .row.px-5.py-4(titulo="Patrón o molde")
              .col-12
                p.mb-0.px-5 Cada una de las piezas o componentes del patrón de la prenda, ya sean dibujadas, cortadas en papel, cartón o sistematizadas, cada uno de ellos puede copiarse, reproducirse en serie o transformarse. El conjunto del total de componentes de la prenda se llama patrón del modelo.
            .row.px-5.py-4(titulo="Patronaje")
              .col-12
                p.mb-0.px-5 Como se expone en el tema anterior, es el procedimiento ordenado para la construcción de los moldes o patrones de una prenda de vestir.
            .row.px-5.py-4(titulo="Patrones base")
              .col-12
                p.mb-0.px-5 Son aquellos que sirven como punto de partida para la creación de diferentes modelos.
            .row.px-5.py-4(titulo="Perilla")
              .col-12
                p.mb-0.px-5 Pieza que complementa y da terminación a la abertura frontal de la camisa o de la manga.
            .row.px-5.py-4(titulo="Perímetro")
              .col-12
                p.mb-0.px-5 Conjunto de líneas que limitan una figura o una superficie, es el contorno de una figura.
            .row.px-5.py-4(titulo="Pernera")
              .col-12
                p.mb-0.px-5 Cada una de las partes del pantalón que cubre cada pierna. Pernera delantera, pieza que cubre la parte delantera de la pierna, pernera posterior pieza opuesta y el complemento de la pernera delantera. Se hace necesario partir del molde básico de la pernera delantera para trazar el molde de la posterior.
            .row.px-5.py-4(titulo="Perpendicular")
              .col-12
                p.mb-0.px-5 Recta o plano que forma ángulo recto (de 90º) con otra recta o plano, en patronaje también conocido como escuadrar.
            .row.px-5.py-4(titulo="Pieza")
              .col-12
                p.mb-0.px-5 Molde o patrón de cada una de las partes que, en conjunto, componen una prenda.
            .row.px-5.py-4(titulo="Pinza")
              .col-12
                p.mb-0.px-5 Pequeño pliegue cosido que termina en punta, que permite una mejor adaptación de la prenda a las formas del cuerpo (caderas, pecho, entre otras). La pinza se dibuja abierta en los patrones bases, siendo el largo de pinza la altura de la misma, y la profundidad de pinza la anchura.
            .row.px-5.py-4(titulo="Piquete")
              .col-12
                p.mb-0.px-5 Señal, corte o muesca que se marca en el borde de un patrón para delimitar puntos importantes, facilitar el montaje y costura de una prenda.
            .row.px-5.py-4(titulo="Pretina")
              .col-12
                p.mb-0.px-5 Parte de las prendas inferiores que se ajusta a la cintura.
            .row.px-5.py-4(titulo="Rectángulo")
              .col-12
                p.mb-0.px-5 Figura geométrica (cuadrilátero) que tiene cuatro ángulos rectos (90°) y cuyos lados son iguales de dos a dos.
            .row.px-5.py-4(titulo="Ruedo")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen14.jpg")
              .col-lg-7
                p.mb-0.px-5 También conocido como bajo, es el orillo o borde inferior que da el acabado a la parte inferior de las prendas.
            .row.px-5.py-4(titulo="Sesgo o Bies")
              .col-12
                p.mb-0.px-5 Acción de trazar la línea de aplome a un molde en diagonal, con el fin de mejorar la caída de la tela en la pieza, se utiliza en drapeados o prendas con mucho vuelo.
            .row.px-5.py-4(titulo="Sisa")
              .col-12
                p.mb-0.px-5 Abertura o corte curvo en las prendas superiores, que permite el paso del brazo y se une a las mangas (en caso de llevarlas).
            .row.px-5.py-4(titulo="Talla")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen15.jpg")
              .col-lg-7
                p.mb-0.px-5 Estandarización de medidas que permite clasificar a las personas según su tamaño e identificarlas para el uso de las prendas de vestir, nombradas alfanuméricamente según el tipo de prenda o la línea de vestuario, se utilizan para la elaboración de un molde, patrón base o básico.
            .row.px-5.py-4(titulo="Tela")
              .col-lg-5.mb-lg-0.mb-5
                figure
                  img(src="@/assets/curso/tema1-imagen16.jpg")
              .col-lg-7
                p.mb-0.px-5 Material generalmente constituido por muchos hilos entrecruzados que forman una especie de hoja o lámina flexible, utilizado para la confección de prendas de vestir, entre otros usos.
            .row.px-5.py-4(titulo="Tiro")
              .col-12
                p.mb-0.px-5 En las prendas inferiores la distancia desde la unión de las perneras y la cintura.
            .row.px-5.py-4(titulo="Trazar")
              .col-12
                p.mb-0.px-5 Hacer trazos o líneas, también ejecutar la acción del trazado.
            .row.px-5.py-4(titulo="Trazo")
              .col-12
                p.mb-0.px-5 Línea o raya que constituye la forma o el contorno de algo.
            .row.px-5.py-4(titulo="Trazo o trazado industrial")
              .col-12
                p.mb-0.px-5 Organizar y marcar las piezas que componen el diseño o modelo, de manera óptima y eficiente según los materiales para hacer el corte.
            .row.px-5.py-4(titulo="Vértice")
              .col-12
                p.mb-0.px-5 Intersección de dos líneas que forman un ángulo.
            .row.px-5.py-4(titulo="Vista")
              .col-12
                p.mb-0.px-5 Como su nombre lo indica, pieza del interior de la prenda que queda visible y que parte del mismo patrón inicial, se utiliza para formar la solapa en determinados modelos, para rematar y dar un buen acabado. Pieza que va sobrepuesta en el fondo de bolsillo y se corta en la misma tela del pantalón, ayudando a ocultar el forro.
            .row.px-5.py-4(titulo="Vivo")
              .col-12
                p.mb-0.px-5 Franja de tejido o tela cortada al bies que se coloca para rematar la prenda, sustituyendo a la vista o el ruedo, también utilizadas para rematar aberturas y formar así bolsillos y ojales.

    p.mb-0 En el ejercicio profesional se hace fundamental emplear adecuadamente los términos, al igual que mantener actualizado el léxico según los avances de las técnicas y tecnologías.
      br
      br
      | Los términos concernientes a los instrumentos, herramientas y toma de medidas se presentarán en los temas siguientes.
      br
      br
      | (Adaptado de: Carrera de Diseño y Gestión en Moda, 2015a; Fernández, 2016; Marimar, 2016; Real Academia Española, s.f.; Rebasado, s.f.; Santiago, 2018; <i>Vocabulario Técnico  de Patronaje</i>, s.f.)
    Separador

    #t_1_3.titulo-segundo
      h2 1.3   Herramientas: cintas métricas, tijeras, pulidores, escuadras y reglas para patronaje, lápices de marcar, alfiler, desbaratador, piqueteador y perforador

    .row.justify-content-center.align-items-center.caja-cafe.g-0.mb-5
      .col-lg-9.mb-lg-0.mb-5
        p.mb-0.px-5 Antes de comenzar con el desarrollo de patrones es necesario conocer cuáles son las principales herramientas que existen para facilitar la construcción de la moldería, sus nombres y usos en el proceso del patronaje.
          br
          br
          | Se agrupan en tres bloques dependiendo de su funcionalidad: herramientas de medición y construcción (<i>cinta métrica, escuadras, reglas curvas, alfileres</i>), herramientas de trazo y marcado (<i>lápices de marcado, tiza, piqueteadora, perforadora</i>) y, por último, herramientas de corte y pulido (<i>tijeras, pulidora, desbaratador</i>).
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1-imagen17.jpg")

    tab-special
      .row.justify-content-center(titulo="Herramientas de medición y construcción")
        .col-lg-10.mt-5.mb-5
          .cajon.color-primario.p-5.mb-4
            p.mb-0 En este grupo están los instrumentos y herramientas que facilitan la toma de medidas en el cuerpo y su traslado a la construcción geométrica de los patrones a desarrollar.
        .col-12
          SlyderEspecial.especial1.mb-5(:datos="datosSlyder")
        .col-lg-8.caja.temporal--azul.text-center.py-2
          p.mb-0 A continuación, se muestra el ejemplo de cómo se usan las reglas en el trazo de patrones.
        .col-lg-11
          figure
            img(src="@/assets/curso/tema1-imagen25.svg")
      .row.justify-content-center(titulo="Herramientas de trazo y marcado")
        .col-lg-10.mt-5.mb-5
          .cajon.color-primario.p-5.mb-4
            p.mb-0 Las herramientas de esta sección ayudarán el proceso de realizar la moldería de manera manual. El delineado, trazo, señas, entre otras marcaciones necesarias para la construcción de los patrones y su industrialización.
          TabsA.color-acento-botones.mb-5
            .tarjeta.tarjeta--azul.p-5(titulo="Alfileres")
              .row.justify-content-center
                .col-lg-7.mb-lg-0.mb-5
                  p.mb-0 Son implementos de gran utilidad, se encuentran en el departamento de diseño para fijar los moldes a la tela cuando se va a cortar para hacer las muestras, fijar un molde a otro de manera temporal para trazar; en el departamento de corte, en caso de no contar con engrapadora para fijar el trazo a la tela, se usan alfileres y dentro del departamento de confección durante el proceso, en ocasiones las operarias recurren a ellos para lograr un mejor trabajo (Palacios, s.f.).
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema1-imagen27.jpg")
            .tarjeta.tarjeta--azul.p-5(titulo="Lápices de marcar")
              .row.justify-content-center
                .col-lg-7.mb-lg-0.mb-5
                  p.mb-0 Se utilizan para delinear los contornos de los patrones sobre la tela, cuando se van a elaborar las muestras; también durante el proceso de confección las operarias en ocasiones tienen la necesidad de usarlos para centrar piezas, marcar pinzas internas o puntos de referencias y cuando no se pueden hacer piquetes con la cortadora (Palacios, s.f.).
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema1-imagen26.jpg")
            .tarjeta.tarjeta--azul.p-5(titulo="Perforadora")
              .row.justify-content-center
                .col-lg-7.mb-lg-0.mb-5
                  p.mb-0 Herramienta generalmente utilizada para perforar todos los moldes que conforman un diseño y agruparlos mediante un listón o cordón. Esto se hace para llevar un control en el perchero del departamento de corte y no existan pérdidas de piezas.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema1-imagen28.jpg")
            .tarjeta.tarjeta--azul.p-5(titulo="Piqueteador")
              .row.justify-content-center
                .col-lg-7.mb-lg-0.mb-5
                  p.mb-0 Se utiliza para crear marcas en los bordes de los patrones, que sirven como piquetes, costuras, dobladillos, señas para identificar frente de espalda en los patrones, entre otros usos (Isn’t that sew, s.f.).
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema1-imagen29.jpg")
            .tarjeta.tarjeta--azul.p-5(titulo="Tiza para confección")
              .row.justify-content-center
                .col-lg-7.mb-lg-0.mb-5
                  p.mb-0 Se utiliza para marcar el patrón sobre la tela antes de coserla o cortarla, las hay a base de arcilla o de cera y vienen de diferentes colores, se debe utilizar dependiendo del color de la tela sobre la que se va a marcar con la intensión de que sea visible al momento de realizar los diferentes procesos que requieren de esta guía (Palacios, s.f.).
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema1-imagen30.jpg")

      .row.justify-content-center(titulo="Herramientas de corte y pulido")
        .col-lg-10.mt-5.mb-5
          .cajon.color-primario.p-5.mb-4
            p.mb-0 Como su nombre lo indica, son aquellas herramientas que permitir cortar los patrones y eliminar algunas hebras que quedan en el proceso de confección de la muestra.
          h3.titulo-slyder-special Tijeras
          p.mb-4 En el departamento de diseño se requieren diferentes tipos de tijeras y en sí, durante todo el proceso de diseño y desarrollo de prendas de vestir se deben tener tijeras especiales para cada actividad, así:
          .row.justify-content-center
            .col-lg-4.mb-lg-0.mb-5
              figure
                img(src="@/assets/curso/tema1-imagen31.jpg")
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | Tijeras para cortar papel.
                li
                  i.fas.fa-angle-right
                  | Tijeras para cortar tela en recto.
                li
                  i.fas.fa-angle-right
                  | Tijeras para contar en zigzag.
                li
                  i.fas.fa-angle-right
                  | Tijeras para cortar hebras.
          .bloque-texto-d.color-secundario.p-4.mt-2.mb-5
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h4 Como se puede apreciar, se tienen diferentes tipos de tijeras según su uso, un determinado tipo de tijeras no se puede usar para desarrollar varias actividades de corte pues no se obtendrían resultados satisfactorios, además de que su vida útil se reduciría por no utilizarse para los fines que fue diseñada.
              i.fas.fa-quote-right
            .bloque-texto-d__autor
              .h6.mb-0 - Palacios, s.f.).
          p.mb-5.text-center En la imagen a continuación se pueden observar:
        .col-12.mb-5
          .row.justify-content-center
            .col-lg-3.mb-lg-0.mb-4
              figure
                img(src="@/assets/curso/tema1-imagen32.svg")
              p.mb-0 Debe ser muy afilada y está indicada solo para cortar tejidos. No debe utilizarse en fieltros o similares.
            .col-lg-3.mb-lg-0.mb-4
              figure
                img(src="@/assets/curso/tema1-imagen33.svg")
              p.mb-0 Tiene una hoja redondeada y una hoja más fina, que sirven para cortar artículos con varias capas.
            .col-lg-3.mb-lg-0.mb-4
              figure
                img(src="@/assets/curso/tema1-imagen34.svg")
              p.mb-0 Con una punta pequeña, esta tijera es muy utilizada para quitar el exceso de hilos y hacer terminaciones.
            .col-lg-3
              figure
                img(src="@/assets/curso/tema1-imagen35.svg")
              p.mb-0 Indicadas para cortar moldes de papel, tiene punta y no debe usarse para cortar tejidos.
        .col-lg-10
          h3.titulo-slyder-special Pulidor (tijeras pulidoras)
          p.mb-4 Se utilizan para cortar hilos e hilachas de las prendas, se usan sólo las puntas de las hojas de cortar, por eso su diseño está pensado en la rapidez de su maniobra (Palacios, s.f.).
        .col-lg-7
          figure
            img(src="@/assets/curso/tema1-imagen36.jpg")
          p.mb-4 Estas son solo algunas de las herramientas que existen para el desarrollo de patrones. Son las más utilizadas por su funcionalidad y versatilidad lo cual facilita al patronista la construcción y materialización de la moldería.
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-5
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo-Set5reglasadulto.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Set 5 reglas+ 1 niños, (Coser y cantar, s.f.)
            .col-lg-6.mb-lg-0.mb-5
              a.anexo.mb-4(href="https://differenttreat.blogspot.com/2014/07/regla-curva-sastre.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Anexo. Regla curva sastre (Coser es fácil, s.f.-b)
            .col-lg-6.mb-lg-0.mb-5
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo-Regla-curva-francesa.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Regla curva francesa (Coser es fácil, s.f.-a)
            .col-lg-6
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=zi_5puNAvLc" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/icono-youtube.svg")
                .anexo__texto
                  p Enlace video.  Herramientas o materiales para patronaje.
    Separador

    #t_1_4.titulo-segundo
      h2 1.4   Fundamentos de antropometría y ergonomía

    p.mb-5 El proceso de patronaje comienza entendiendo el cuerpo humano, su forma, dimensiones (medidas), proporciones y capacidades motrices (movimiento). Para conseguirlo se hace indispensable que un patronista tenga conocimientos en antropometría y en ergonomía del vestir.

    .row.justify-content-center
      .col-lg-7
        figure
          img(src="@/assets/curso/tema1-imagen37.jpg")
        .cajon.color-primario.p-5.mb-4
            p.mb-0 Para comenzar a entender el patronaje de prendas de vestir, es importante entender que el cuerpo humano puede compararse con una figura geométrica tridimensional (3D) con forma cilíndrica, que al abrirla para llevarla a una figura plana (bidimensional – 2D) se obtiene un rectángulo que representa el área que cubre el cuerpo humano, como se puede ver en las siguientes imágenes:
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen38.svg")
          figcaption Fuente: Técnicas de patronaje. Tomo I: Mujer (Carrera de Diseño y Gestión en Moda, 2015a).
        p.mb-5 Por lo anterior es que, al momento de medir el cuerpo, se toman medidas de contornos (perimetrales), longitudinales verticales (largos) y longitudinales horizontales (anchos), que luego se traducirán sobre el patrón. Con el fin de mantener la simetría en los moldes, las medidas de contorno se trabajan por cuartos (1/4) con eje en el centro frente y el centro espalda.
          br
          br
          | La antropometría, es un término proveniente del griego anthropos (hombre) y metrikos (medida), es el estudio del tamaño, proporción, forma y composición del cuerpo humano. Se basa en las medidas corporales, el somatotipo, el estudio de la proporcionalidad y de la composición corporal.
        p.mb-5.border-bottom.text-center Existen algunos términos de la antropometría que se emplean en la moda, tales como:

      .col-lg-11.mb-5
        .row.justify-content-center.mb-5
          .col-lg-4.mb-lg-0.mb-5
            .tarjeta-avatar
              img(src='@/assets/curso/tema1-imagen39.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-5
                  h4.text-center Arquetipo
                  p.mb-0 El cual se refiere al cuerpo ideal o perfecto (sin embargo, pocos individuos tienen estas características corporales).

          .col-lg-4.mb-lg-0.mb-5
            .tarjeta-avatar
              img(src='@/assets/curso/tema1-imagen40.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-5
                  h4.text-center Estereotipo
                  p.mb-0 Que es la agrupación de personas con características similares, de estos grupos se extraen la mayoría de cuadros de tallas y medidas.

          .col-lg-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema1-imagen41.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-5
                  h4.text-center Somatotipos o tipo físico
                  p.mb-0 Se utiliza para estimar la forma corporal y su composición, obteniendo un análisis del físico de cada individuo.
        .row.justify-content-center
          .col-lg-7.mb-lg-0.mb-5
            p.mb-2 Si bien cada individuo tiene características únicas y la forma de su cuerpo lo identifica, en la moda, para el desarrollo de las prendas se hace necesario agrupar las formas y medidas corporales de acuerdo con el tipo de usuario o perfil de consumidor al que se dirige el producto.
              br
              br
              | Para lo cual se hacen estudios de medidas de grupos de personas, teniendo en cuenta sus condiciones y estilo de vida, es decir, edad, sexo bilógico (femenino, masculino), lugar de procedencia, lugar de residencia, clima, tipo de trabajo y tipo de actividades físicas, entre otras. A los individuos de la muestra se les toman las medidas corporales requeridas, dividiendo entre el número de sujetos de la muestra, lo que da lugar a la media, que puede tener valor por si misma o ser comparada con otras medidas.
              br
              br
              | Dando como resultado los cuadros de tallas y medidas, los cuales deben corresponder al perfil del consumidor de la marca.
            img(src="@/assets/curso/tema1-imagen42.svg")
          .col-lg-5
            .indicador__container
              .indicador--click
            figure.hover-image(@click="openClickAnexo(obtenerLink('/downloads/A_U1_Manual_patronaje_basico_interpretacion_diseno.pdf\#page=23'))")
              img(src="@/assets/curso/tema1-imagen43.svg")
      .col-lg-9.mb-5
        .caja.temporal--azul.text-center.py-3
          p.mb-0 En temas posteriores se describirá el proceso de toma de medidas corporales para el desarrollo de patrones.
      .col-lg-11.mb-4
        p.mb-5 La ergonomía hace referencia a la adaptación entre los objetos (máquinas, muebles, utensilios, entre otros) y la persona que los emplea, para lograr una mayor comodidad y eficacia. Para el caso de la moda, la ergonomía del vestuario, es el ajuste de la ropa sobre el cuerpo humano, cubriendo de manera óptima cada una de sus partes y permitiendo la <i>performance</i> de la actividad para la que está diseñado cada producto.
      .col-lg-9.mb-4
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen44.jpg")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-5
            a.anexo.mb-4(:href="obtenerLink('/downloads/I_U1_Manual_toma_medidas_antropometricas_aplicadas_industria_vestuario_Inamod.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p
                  strong Anexo.
                  | Manual para la toma y registro de medidas antropométricas aplicadas en la industria del diseño de vestuario
          .col-lg-6.mb-lg-0.mb-5
            a.anexo.mb-4(:href="obtenerLink('/downloads/K_U1_Dimensiones_antropometricas_de_la_poblacion_lationamericana.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p
                  strong Anexo.
                  | Dimensiones antropométricas de población latinoamericana.
          .col-lg-6
            a.anexo.mb-4(href="https://www.youtube.com/watch?v=-3iETPRjy5w" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/icono-youtube.svg")
              .anexo__texto
                p
                  strong Anexo.
                  | Como entender el patronaje o moldería de ropa.

    Separador

    #t_1_5.titulo-segundo
      h2 1.5   Márgenes, desahogos y tipos de costuras

    p.mb-5 Una vez realizados los patrones o moldes de las prendas, los cuales vienen sin la adición de tela necesaria para poder unirlos, se le debe añadir lo que se denomina margen o ventaja de costura. Esta margen dependerá del tipo de tela o tejido, el tipo de costura o la máquina que se empleará y del modelo que se va a coser.

    .cajon.color-primario.p-5.mb-0
      p.mb-0 Algunos moldes ya tienen incluidas las costuras, esto se sabrá cuando en las teorías para su desarrollo así lo indique, sin embargo, a nivel industrial, las márgenes de costura se añaden una vez se desarrolla el modelo, lo cual quiere decir que los patrones base o moldes básicos no las incluyen.
    figure.mb-5
      img(src="@/assets/curso/tema1-imagen45.jpg")

    p.mb-5 Como se ha expresado la margen de costura corresponde directamente a la operación, parte del patrón y a la máquina con que será confeccionada, es por ello que el patronista debe prestar atención a los detalles consignados en la ficha técnica, documento en el cual se reúne toda esta información.
      br
      br
      | A continuación, se indicarán algunos ejemplos

    .row.justify-content-center
      .col-lg-10.mb-3
        .row
          .col-lg-3.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema1-imagen46.jpg")
          .col-lg-9.mb-4
            ol.lista-ol--cuadro.lista-ol--separador.list-with--borders.py-4
              li
                .lista-ol--cuadro__vineta.circle
                  span 1
                | La fileteadora puntada sencilla utilizada generalmente en tejidos de punto requiere un margen de entre 0,25 cm a 0,5 cm dependiendo del tipo de prenda y la función que va a cumplir.
              li
                .lista-ol--cuadro__vineta.circle
                  span 2
                | La fileteadora con puntada de seguridad (utilizada en tejido plano) requiere de 0,7 cm, 1,2 cm o 1,5 cm; lo cual depende del ajuste de la máquina y el requerimiento de la parte o costura.
              li
                .lista-ol--cuadro__vineta.circle
                  span 3
                | Las cerradoras de codo (empleadas en costados de camisas y pantalones) utilizan entre 1,2 cm y 2,5 cm de margen de costura, esto debido a que la tela se dobla para ser encarterada.
              li
                .lista-ol--cuadro__vineta.circle
                  span 4
                | Para los ruedos o bajos dependerá del procedimiento que se realice, es decir, si se hará sencillo en una recubridora, sólo habrá que dar la ventaja deseada en el ruedo (Ej. 2,5 cm), mientras que si éste se hará dobladillado (doblado y vuelto a doblar) en plana se deberá adicionar la ventaja del ruedo más la del doblez (Ej. 2,5 cm + 1 cm de doblez).
          .col-lg-12
            p.text-center.mb-4.fw-bold Cuando no se cuenta con la información de las costuras ¿cuánto margen de costura añadir? ¿Hay una medida universal?
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Los patrones comerciales que ya incluyen margen de costura generalmente utilizan un margen entre 1.5 cm y 2.0 cm.
              li
                .lista-ol--cuadro__vineta
                  span b
                | En tejidos de punto lo normal es darle un margen de costura de 0.6 cm a 1 cm.
              li
                .lista-ol--cuadro__vineta
                  span c
                | Para tejidos no elásticos se puede dejar 1 cm de costuras por todos los lados excepto por los dobladillos o bajos.
      .col-lg-6.mb-5
        .caja.temporal--azul.text-center.py-3
          p.mb-0 En cuanto a los márgenes de costura para hacer los dobladillos:

      .col-lg-10.mb-5
        .row
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen47.jpg")
          .col-lg-8
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Para una falda circular completa: 1.25 cm.
              li
                i.lista-ul__vineta
                | Falda circular media: 2.5 cm.
              li
                i.lista-ul__vineta
                | Falda con vuelo: 3.7 cm.
              li
                i.lista-ul__vineta
                | Falda recta o pantalones: 5 cm.
              li
                i.lista-ul__vineta
                | Para dobladillos simples que se recogen por el revés se dejan 4 cm, 1 cm para pulir el borde y 3 cm para el dobladillo en sí.

      .col-lg-6.mb-5
        .caja.temporal--rosa.text-center.py-3
          p.mb-0 ¿Cómo añadir el margen de costura?

    SlyderEspecial.especial1.mb-5(:datos="datosSlyder1")

    .row.justify-content-center
      .col-lg-11
        div.additional-ext.pt-1
          .row.justify-content-center.mt-5
            .col-lg-8
              p.mb-4 La palabra desahogo es el aumento, amplitud o soltura que se debe añadir al patrón de la prenda de vestir, para que, aparte de la comodidad facilite su postura o el movimiento que se haga con ella (<i>performance</i>).
              figure.mb-5
                img(src="@/assets/curso/tema1-imagen56.jpg")
              p.mb-4 Los desahogos u holguras se dan en centímetros o pulgadas según el sistema métrico que se utilice en la empresa a trabajar. Dependen directamente del tejido y el desarrollo del modelo a realizar, se añaden luego de tener el patrón listo, tanto por contornos, como en los largos.
              .titulo-sexto.color-acento-contenido
                span Ejemplo de desahogo.
              figure.mb-5
                img(src="@/assets/curso/tema1-imagen57.svg")
                figcaption Fuente: Celestecielo, s.f.
      .col-lg-11.mb-5
        .row.justify-content-center
          .col-lg-7.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema1-imagen58.svg")
          .col-lg-5
            p.mb-4 Es importante establecer el tipo de prenda a la que se le añadirán, si es interior o exterior, la línea a la que se dirige (femenino, masculino, infantil), el tejido que se utilizará y los puntos en que se ajustará o sujetará en el cuerpo humano. Las prendas se pueden clasificar en tres pieles o capas así:
            .cajon.color-primario.p-5.mb-5
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  p.mb-0
                    strong Primera piel:
                    | están totalmente en contacto con la piel (prendas íntimas o ropa interior).
                li
                  i.lista-ul__vineta
                  p.mb-0
                    strong Segunda piel:
                    | van sobre las anteriores y corresponden a las prendas exteriores.
                li
                  i.lista-ul__vineta
                  p.mb-0
                    strong Tercera piel:
                    | corresponden a los abrigos y chaquetas, van sobre las prendas exteriores.

            p.mb-0 Según el tipo de país en el que se viva y su clima, pueden existir más capas de vestir o pieles. Cada una de las capas tendrá mayor capacidad o desahogo que la anterior, con el fin de poder cubrir cómodamente el cuerpo.
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          span Tabla: valores de desahogo estimados según el tipo de prenda y volumen deseado (expresados en centímetros).
        .tabla-a.color-acento-botones.mb-5
          table
            caption  Fuente: Ajuste y holguras (Goyes, s.f.).
            thead
              tr
                th Prenda
                th Estrecho
                th Ajustado
                th Normal
                th Ancho
                th Muy ancho
            tbody
              tr
                td Blusa
                td 2
                td 4
                td 6
                td 8
                td 10
              tr
                td Vestido
                td 4
                td 6
                td 8
                td 10
                td 12
              tr
                td Falda
                td 0
                td 1
                td 2
                td 6
                td 8
              tr
                td Pantalón
                td 0
                td 1
                td 2
                td 4
                td 6
              tr
                td Chaqueta
                td 4
                td 6
                td 8
                td 10
                td 12
              tr
                td Chaquetón
                td 6
                td 8
                td 10
                td 12
                td 14
              tr
                td Abrigo
                td 8
                td 10
                td 12
                td 14
                td 16
        p.mb-5.text-center En función al volumen de los tejidos los anteriores valores pueden ser ajustados así:
        .tabla-a.color-acento-botones.mb-5
          table
            caption  Fuente: Ajuste y holguras (Goyes, s.f.).
            thead
              tr
                th Muy fino
                th Fino
                th Normal
                th Grueso
                th Muy grueso
            tbody
              tr
                td -2
                td -1
                td 0
                td 2
                td 4
        p.mb-5 A las prendas de vestir que se desarrollan en tejido de punto con elongación y son ajustadas sobre el cuerpo (Ej. interior, active) no se les aplica desahogo, por el contrario, se aplica una reducción de medida, conocida como porcentaje de elongación, el cual dependerá de cuán elástico sea el material textil, a continuación, se presenta un ejemplo de aplicación de la fórmula de porcentaje de elongación para un material con 25%.
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              span Tabla de reducción de medidas para tejido de punto con porcentaje de elongación del 25%.

            table.special
              caption  Fuente: Ajuste y holguras (Goyes, s.f.).
              tbody
                tr(style="background-color: #F4F4F4;")
                  td(style="text-align: center;") Pecho    44
                  td(style="text-align: center;") 44/125= 35.2
                tr
                  td(style="text-align: center;") Busto    48
                  td(style="text-align: center;") 48/125= 36. 8
                tr(style="background-color: #F4F4F4;")
                  td(style="text-align: center;") Cintura  36
                  td(style="text-align: center;") 36/125=28. 8
                tr
                  td(style="text-align: center;") Cadera   48
                  td(style="text-align: center;") 48/125=38. 4
        .cajon.color-acento-contenido.p-5.mb-5
          p.mb-0  La holgura es una amplitud determinada a veces como espacio independiente a los desahogos. Estos valores se trabajan de forma estándar, aunque algunas marcas de ropa comercial y diseñadores famosos han hecho variantes apropiándose de otros nombres y estilos.
        p.mb-5.text-center
          strong Se han denominado siluetas y las más comunes son:

      .col-lg-11
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Silueta entallada – <i>Slim fit</i>  ")
            .col-lg-6.mb-lg-0.mb-5
              p.mb-0 Es la predominante en diseños confeccionados en telas elásticas.  Normalmente son prendas ajustadas al cuerpo. No necesitan holgura. Estas prendas se adaptan a la figura. Moldean el busto, la cadera, la cintura. Su holgura es de 0 cm.
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1-imagen59.jpg")
          .row(titulo="Silueta semientallada – <i>Straight fit</i> ")
            .col-lg-6.mb-lg-0.mb-5
              p.mb-0 Es predominante en diseños confeccionados en telas semielásticas y telas livianas. También en algunas telas rígidas.  Normalmente son prendas casi pegadas al cuerpo, con algo de movilidad. Siguen la línea del cuerpo, con una holgura total de 8 cm. Es decir, hacer el trazo del patrón normal, pero con las medidas de contorno aumentadas en 8 cm a 10 cm.
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1-imagen60.jpg")
          .row(titulo="Silueta normal – <i>Regular fit</i>")
            .col-lg-6.mb-lg-0.mb-5
              p.mb-0 Es predominante en diseños confeccionados en telas semielásticas y telas livianas. También en algunas telas rígidas.  Normalmente son prendas casi pegadas al cuerpo, con algo de movilidad. Siguen la línea del cuerpo, con una holgura total de 8 cm. Es decir, hacer el trazo del patrón normal, pero con las medidas de contorno aumentadas en 8 cm a 10 cm.
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1-imagen61.jpg")
          .row(titulo="Silueta amplia – <i>Large fit</i>")
            .col-lg-6.mb-lg-0.mb-5
              p.mb-5 Esta silueta se usa para dar mucho vuelo y movilidad a los diseños. Se usan telas rígidas tanto livianas, medianas como pesadas.  Son prendas muy sueltas con gran movilidad. Se caracteriza por tener sisas muy grandes, no se marca la cintura, muchos fruncidos. Este tipo de prendas tienen holgura hasta de 20 cms en los contornos.
            .col-lg-6
              .indicador__container
                .indicador--click
              figure.hover-image(@click="openClickAnexo(obtenerLink('/downloads/guia_de_fit-pantalon_de_mujer.pdf'))")
                img(src="@/assets/curso/tema1-imagen62.svg")
      .col-lg-10
        .row.justify-content-center.align-items-center.background1-especial2.border-radius.left.right.mb-5
          .col-auto.background1-especial1.border-radius.right
            figure.p-4
              img(src="@/assets/curso/tema1-imagen63.svg")
          .col
            p.mb-0 Observación:  el aumento se da a las medidas totales de contorno de busto, cintura y cadera y no se debe confundir la holgura o desahogo con el aumento para costuras.
        p.text-center.mb-5 Adaptado de ¿Qué Es Un Margen de Costura?; Araujo et al., 2014; Celestecielo, s.f.; García, 2016; Goyes, s.f.; Handbox, 2016; Skarlett Costura, s.f.
        .row.justify-content-center
          //- .col-lg-6
          //-   a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          //-     .anexo__icono
          //-       img(src="@/assets/curso/icono-youtube.svg")
          //-     .anexo__texto
          //-       p Enlace video.  Técnicas para marcar márgenes de costura
          //- .col-lg-6
          //-   a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          //-     .anexo__icono
          //-       img(src="@/assets/curso/icono-youtube.svg")
          //-     .anexo__texto
          //-       p Enlace video.  Margen de costura en pinzas, esquinas y bajos | Patronaje para principiantes
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/N_U1_valores_de_desahogo_estimados_segun_el_tipo_de_prenda_y_volumen_deseado_2.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo.  Ajustes y Holguras (Goyes, s.f.)

    Separador

    #t_1_6.titulo-segundo
      h2 1.6   Toma de medidas antropométricas

    p.mb-5 La toma de medidas antropométrica es el comienzo del proceso de patronaje, como se ha expresado con anterioridad. Es fundamental tener las medidas, puesto que a partir de éstas se desarrollan los patrones para adecuarse a los volúmenes y formas del cuerpo a vestir.

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1-imagen64.jpg")
      .col-lg-7
        p.mb-4 Para la toma de medidas se debe contar con unas condiciones adecuadas del espacio y unos equipos y herramientas apropiados. El espacio deberá ser agradable y propiciar privacidad, para que así la persona tenga la disposición voluntaria de participar y se sienta en confianza.
        .cajon.color-acento-contenido.p-5.mb-4
          p.mb-0  Disponer del espacio suficiente en el que estarán el sujeto a medir, el antropómetra (persona que toma las medidas) y el anotador (persona que escribe las medidas).
        p.mb-0 La persona a medir deberá estar en ropa interior o ropa ligera (el traje de baño de dos piezas sin rellenos, o trusa, es el ideal para mujeres), no debe portar calzado ni medias, el cabello recogido (en caso de tenerlo largo). Asumirá una postura erguida de pie, con la cabeza al frente y los ojos mirando a un punto fijo, las extremidades superiores relajadas a los lados del cuerpo, con los dedos extendidos apuntando hacia abajo (la postura de las extremidades superiores podrá variar según la medida a tomar), los pies levemente separados. Se mantendrá en estado de relajación, con la respiración reposada y relajada, ya que puede afectar las medidas del tórax.

    .row.justify-content-center.mb-5
      .col-lg-9
        p.text-center.caja.temporal--rosa.p-4 Se emplean diferentes o herramientas de medición dependiendo medida a tomar, así:
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1-imagen65.jpg', alt='Texto que describa la imagen')
            .col-md-7
              h3 Báscula digital
              p Se utiliza para determinar el peso corporal, generalmente expresado en kilogramos.

          .row
            .col-md-7.mb-4.mb-md-0
              h3 Cinta métrica o antropométrica
              p Debe ser flexible sin llegar a elástica, con una anchura inferior a 0.7 cm y un espacio regulador antes del cero, de al menos 4 cm, con las medidas en centímetros y milímetros marcadas claramente y de fácil lectura.
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-imagen66.jpg', alt='Texto que describa la imagen')

          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1-imagen67.jpg', alt='Texto que describa la imagen')
            .col-md-7
              h3 Tallímetro
              p Instrumento utilizado para tomar la estatura con una precisión de 1 mm. En caso de no contar con tallímetro se puede emplear una cinta métrica invertida, comenzando por el cero (0) en la base o piso y con la ayuda de una escuadra tomar la medida.

          .row
            .col-md-7.mb-4.mb-md-0
              h3 Lápices dermográficos:
              p Se utilizan para marcar sobre el cuerpo los puntos de referencia para la toma de medidas, éstos pueden ser reemplazados por lápices de maquillaje para ojos o cejas.
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-imagen68.jpg', alt='Texto que describa la imagen')
      .col-lg-9
        p.text-center.caja.temporal--azul.p-4 Las siguientes imágenes muestran los puntos referenciales del cuerpo a tener en cuenta para la toma:
        .row.justify-content-center.mb-5
          .col-lg-6
            figure.mb-3
              img(src="@/assets/curso/tema1-imagen69.svg")
            .bloque-texto-c.color-secundario.p-4
              i.fas.fa-quote-right
              h4.mb-2 Puntos de referencia corporales anatómicos – Frontales. Fuente: Manual de patronaje básico e interpretación de diseños.
              span - Gutiérrez Rengifo et al., 2011.
          .col-lg-6
            figure.mb-3
              img(src="@/assets/curso/tema1-imagen70.svg")
            .bloque-texto-c.color-secundario.p-4
              i.fas.fa-quote-right
              h4.mb-2 Puntos de referencia corporales anatómicos – Laterales. Fuente: Manual de patronaje básico e interpretación de diseños.
              span - Gutiérrez Rengifo et al., 2011.
        p.mb-5.text-center Las principales medidas corporales (antropométricas) a tomar son:
        .tarjeta.tarjeta--gris.p-4.mb-5
          SlyderA
            .row.justify-content-center
              .col-md-11
                p.mb-4
                  strong Estatura:
                  |   distancia vertical desde el suelo hasta la parte superior de la cabeza.
                figure
                  img(src="@/assets/curso/tema1-imagen73.jpg")
                  figcaption Estatura tomada con tallímetro y Estatura tomada con cinta métrica y escuadra. <br> Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen71.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de cuello:
                      |   perímetro del cuello al colocar la cinta métrica por debajo de la nuez de adán.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen72.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno completo de hombro a hombro –bandeja:
                      |   perímetro tomado al nivel de la parte superior de ambos brazos.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen74.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de busto:
                      |   perímetro horizontal máximo de busto; tomado en la parte más prominente del busto.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen75.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Separación de busto:
                      |   distancia horizontal existente de busto a busto, en el centro (generalmente de pezón a pezón).

            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen76.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno pecho:
                      |   perímetro del tórax por encima del busto.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen77.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno Submamario:
                      |   perímetro justo debajo del busto.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen78.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Ancho de espalda de hombro a hombro:
                      |   distancia horizontal desde los puntos más laterales de los brazos (punto de acromio), por la parte posterior.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen79.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Ancho frente de hombro a hombro:
                      |   distancia horizontal desde los puntos más laterales de los brazos (punto de acromio), por la parte frontal.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen80.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Longitud de hombro:
                      |   medida horizontal desde el vértice de la unión del cuello hasta la punta del hombro, específicamente hasta el acromion.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen81.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Ancho de pecho de axila a axila:
                      |   distancia horizontal entre los extremos del pecho, a nivel del cuarto espacio intercostal sobre el esternón (pliegue axilar).
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen82.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Altura de busto:
                      |   distancia vertical desde el nacimiento del hombro en el vértice en donde se encuentra el cuello con el hombro hasta la parte más prominente del busto.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen83.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Longitud de busto a cintura:
                      |   distancia vertical desde la parte más prominente del busto hasta la cintura.
                      br
                      br
                      | Para las medidas que toman como punto referencial la cintura, se anuda una cuerda, cinta o cordón (sin ejercer presión) sobre la cintura..
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen84.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Longitud central frontal o centro frente:
                      |   distancia vertical entre el esternón (centro del puño o manubrio external) hasta el nivel de la cintura.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen85.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Longitud del centro de la espalda:
                      |   distancia vertical tomada desde el centro del punto posterior del cuello (vértebra cervical o C7) hasta el nivel de la cintura.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen86.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Longitud del brazo:
                      |   distancia vertical desde punto acromial (en el hombro) hasta el punto estiloideo del cúbito (en la muñeca - apófisis estiloide del radio).
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen87.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de Bíceps o brazo:
                      |   perímetro del punto medio de la distancia acromiale-radiale (hombro a codo).
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen88.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno completo de bíceps a bíceps -sobre brazos-:
                      |   perímetro de bíceps a bíceps, pasando por el busto.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen89.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de muñeca:
                      |   perímetro de la muñeca. Coincide con la mínima circunferencia del antebrazo.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen90.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de cintura:
                      |   también llamado abdominal 1, perímetro tomado a nivel de la región más estrecha entre el punto medio de la distancia entre el borde costal (último arco costal (10ª costilla)) y la cresta iliaca (terminación de la reja costal).
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen91.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Perímetro abdominal:
                      |   medida de la circunferencia que pasa por debajo del ombligo.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen92.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de cadera alta:
                      |   perímetro de la cadera, a nivel del máximo relieve de los músculos glúteos.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen93.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de cadera o glúteo:
                      |   perímetro tomado desde el nivel de la máxima protuberancia de las nalgas.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen94.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Altura de la cintura (ombligo a piso):
                      |   distancia vertical desde el piso hasta el nivel de la cintura (cinta que demarca la cintura).
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen95.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Altura de cadera de la parte posterior:
                      |   distancia vertical entre la cintura y la parte más prominente del glúteo.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen96.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Tiro completo:
                      |   distancia desde el centro de la cintura en la espalda hasta el centro delantero, pasando por la entrepierna.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen97.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de muslo (pliegue):
                      |   conocido como “Muslo 1”. Es el perímetro del muslo, tomando un centímetro por debajo del pliegue del glúteo.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen133.svg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Pierna costura externa o largo pantalón:
                      |   Distancia lateral desde piso hasta el nivel de la cintura.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen134.svg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Longitud de la entrepierna:
                      |   Distancia vertical desde el piso hasta el pliegue glúteo (marca en que la curva glútea intercepta al muslo).
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen98.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de muslo medio:
                      |   perímetro situado en el punto medio entre el pliegue inguinal y la parte superior de la rótula (rodilla). Generalmente se ubica a 15 cm de la parte superior de la rótula.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen99.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de rodilla:
                      |   perímetro máximo de la rodilla, a nivel de la rótula.
            .row.justify-content-center
              .col-md-10
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen100.jpg")
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de pantorrilla:
                      |   Contorno de pantorrilla: perímetro máximo de la pantorrilla a nivel de la marca del pliegue de Pantorrilla medial.
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-flex
                    figure
                      img(src="@/assets/curso/tema1-imagen101.jpg")
                      figcaption Fuente: Grupo de Investigación INAMOD (Gaviria et al., 2019).
                  .col-lg-7.d-flex
                    p.mb-0
                      strong Contorno de tobillo:
                      |   perímetro del tobillo es tomado en el punto más estrecho por encima del maléolo tibial lateral y medial, considerado el menor perímetro de la parte inferior de la pantorrilla.
        .row.justify-content-center.align-items-center.background1-especial2.border-radius.left.right.mb-5
          .col-auto.background1-especial1.border-radius.right
            figure.p-4
              img(src="@/assets/curso/tema1-imagen63.svg")
          .col
            p.mb-0 Nota: las medidas deben ser tomadas sobre la superficie sin presionar o contraer el cuerpo con la cinta métrica y sin incluir el dedo del antropómetra.

        figure
          img(src="@/assets/curso/tema1-imagen102.jpg")
      .col-lg-10
        p.mb-5 Cuando se trabajan diseños personalizados, se le toman las medidas a cada uno de los clientes a vestir. Al tratarse de patronaje industrial, se deben tomar medidas a una muestra significativa de la población y estandarizar tallas de acuerdo a los resultados del estudio, esto es lo que se conoce como cuadro de tallas. Cada empresa trabaja con su propio cuadro de tallas, puesto que su consumidor se diferencia de las demás. Existen normas técnicas internacionales para la regulación del tallaje y medidas de los consumidores, sin embargo, siempre se recomienda hacer el propio estudio de medidas y tallas.

        .row.justify-content-center
          .col-lg-7
            figure
              img(src="@/assets/curso/tema1-imagen103.svg")
          .col-lg-5
            a.anexo.mb-4(:href="obtenerLink('/downloads/A_U1_Manual_patronaje_basico_interpretacion_diseno.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Manual de patronaje básico e interpretación de diseños.
            a.anexo.mb-4(:href="obtenerLink('/downloads/I_U1_Manual_toma_medidas_antropometricas_aplicadas_industria_vestuario_Inamod.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Manual para la toma y registro de medidas antropométricas aplicadas en la industria del diseño de vestuario.

    Separador

    #t_1_7.titulo-segundo
      h2 1.7   Patronaje industrial manual y sistematizado

    p.mb-5 El patronaje industrial es el que se realiza en serie, para la producción de prendas de vestir a niveles de industria, para marcas o empresas mayoristas, se diferencia del patronaje personalizado en el uso de tallas estandarizadas, el escalado y el trazado de lotes. Este proceso tradicionalmente se ha realizado de manera manual, gracias a los avances de la tecnología existen <i>softwares</i> que permiten realizarlo de manera sistematizada, lo que le proporciona precisión y agilidad a la labor.

    figure
      img(src="@/assets/curso/tema1-imagen104.jpg")

    p.mb-5 Como su nombre lo indica, el patronaje manual, es aquel que se realiza con las manos, utilizando herramientas básicas para trazar los patrones o moldes sobre un papel, escalarlos, desarrollarlos y recortarlos, este método requiere mayor tiempo y dedicación por parte del patronista. El consumo de tela en ocasiones se ve afectado (mayor cantidad de tela requerida) ya que no se cuenta con la exactitud brindada por el <i>software</i> especializado.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-5.mb-4
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-5
              p.mb-0 Para realizar moldes sistematizados, es decir con la ayuda de un <i>software</i> (programa de computador), se hace indispensable saber patronar de manera manual. Las ventajas de este sistema son el ahorro de espacio físico para guardar patrones básicos y desarrollos en las diferentes tallas, la agilidad para acceder y modificar los patrones, al igual que la facilidad y precisión para el escalado. El trazado (módulo generalmente independiente) es quizás el proceso en el que más se evidencia la velocidad y exactitud para acomodar las diferentes piezas en las tallas a elaborar. Adicionalmente los <i>softwares</i> de patronaje han ido incorporando la posibilidad de realizar prototipos en 3D, lo cual le permite al patronista validar el producto en tiempo real y ahorrar en procesos de trazo, corte y confección de muestras preliminares, y observar en el mapa de tensiones la vestibilidad de la prenda.
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1-imagen105.svg")
        p.mb-5 Los programas de Diseño Asistido por Computador (CAD), trabajan de manera similar utilizando en el área de trabajo las coordenadas del plano cartesiano para determinar los puntos de construcción de los patrones. Los más utilizados a nivel comercial en Colombia, son:
        SlyderC.mb-5(:datos="datosSlyder2")
      .col-lg-8
        .cajon.color-primario.p-5.mb-4
          p.mb-0 Los anteriores <i>softwares</i> requieren una membresía y trabajan con un sistema de hardware (llave) licenciado, las empresas adquieren el número de licencias y módulos según el número de puestos de trabajo (patronistas, trazadores y cortadores, entre otros). Existen algunos <i>softwares</i> de uso libre, tales como:
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema1-imagen111.jpg")
            p.text-center
              strong Valentina
              br
              | https://valentinaproject.bitbucket.io/
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1-imagen112.jpg")
            p.text-center
              strong Seamly2D
              br
              | https://seamly.net/
        p.mb-5 Al igual que todas las actividades humanas, el patronaje requiere de práctica y dedicación para conseguir la experticia en las diferentes líneas de vestuario y con diversos materiales.
          br
          | (Innovación y Cualificación, 2018; Lafayette, 2019)


    Separador

    #t_1_8.titulo-segundo
      h2 1.8   Señalización e industrialización de patrones

    p.mb-5 La señalización e industrialización de los patrones, es la fase del proceso en la que se realiza la identificación, codificación y registro de algunas indicaciones para el corte de la moldería. Esto se logra a partir del uso de una serie de símbolos y convenciones en cada pieza del patrón que brindan información sobre la forma en la que se debe ubicar el molde en la tela, número de piezas por patrón, número de veces que debe ser cortada la pieza, los materiales en los que debe ir la pieza, muescas o piquetes a realizar.

    .row.justify-content-center
      .col-lg-8
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen113.svg")
          figcaption Fuente: Trazo, corte y confección de la falda clásica (SENA, 2014).
        p.mb-5 Además de estas convenciones, en el proceso de industrialización de la moldería se incluye la información relacionada con la clasificación de la prenda, es decir, número de la referencia, nombre del diseño, referencia, pieza a la que corresponde el patrón, toda la información que facilite su codificación y ágil interpretación del patrón.
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen114.svg")
          figcaption Fuente: Trazo, corte y confección de la falda clásica (SENA, 2014).
        p.mb-5 De esta manera, la señalización e industrialización permiten al personal patronista hacer una interpretación del desarrollo del patrón, además de orientaciones al proceso de corte y confección.
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen115.svg")
          figcaption Fuente: SENA, 2014.

      .col-lg-6.mb-lg-0.mb-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/A_U1_Manual_patronaje_basico_interpretacion_diseno.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo Manual de patronaje básico e interpretación de diseños.
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/O_U1_Trazo _corte_ y_confeccion_de_la_falda.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo.  Trazo, corte y confección de la falda clásica .

    Separador

    #t_1_9.titulo-segundo
      h2 1.9   Encogimientos y acabados

    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-5
        p.mb-0 Para poder desarrollar patrones, es necesario tener ciertos conocimientos básicos sobre la materia prima, en este caso textiles (telas), pues su comportamiento y características influyen en la construcción del patrón. Tanto los acabados como los encogimientos son características de los textiles que pueden significar una modificación en el aspecto, textura o dimensión de la tela.
          br
          br
          | Los acabados son procesos que se le realizan a la tela para modificar su apariencia en términos de textura, sensación o comportamiento. Pueden ser transformaciones superficiales como algunos métodos de estampación, o cambios en la forma de construcción del tejido. Un acabado puede hacer que la tela sea repelente al agua, tenga un proceso de combustión lenta o antiarrugas, entre otros.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1-imagen116.jpg")
    .row.justify-content-center
      .col-lg-10.mb-lg-0.mb-5
        .bloque-texto-c.color-secundario.p-4.mb-5
          i.fas.fa-quote-right
          h4.mb-2 La importancia de conocer sobre acabados radica principalmente en dos razones: la primera es poder hacer selección de materiales dependiendo de la funcionalidad que se espera de la prenda, para determinar aspectos como la caída (suficiencia), control de fluidos y conservación de temperatura, entre otros. La segunda razón es lograr resaltar formas del cuerpo con el uso de materiales, es decir, las telas voluminosas o gruesas agregaran visualmente rigidez y tamaño al cuerpo que se viste.
          span -  Priest &amp; Pullen, 2001.
        p.mb-5 Los acabados se pueden clasificar en dos grandes grupos, los físicos y los químicos. Los acabados físicos son aquellos en los que, mediante el uso del calor, se modifica el tacto de la tela mediante la alteración de su estructura superficial, es decir, hay una modificación de la textura como lo son los grabados. Estos pueden ser sobre el tejido seco o húmedo.
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="Parte 1")
              .col-lg-4.mb-lg-0.mb-5
                figure.mb-4
                  img(src="@/assets/curso/tema1-imagen117.jpg")
                  figcaption Fuente: tintoreriaindustrial.com (s.f.)
                figure.mb-4
                  img(src="@/assets/curso/tema1-imagen118.jpg")
                  figcaption Fuente: annamcneary.com (s.f.).
              .col-lg-8
                p.mb-4.caja.temporal--azul.p-3.text-center Dentro de los acabados secos
                  br
                  | (sin presencia de vapor o agua) están:
                p.mb-5
                  strong Calandrado:
                  |    por medio de la fricción, presión y calor se obtiene un aspecto liso, brillante y compacto. Las fibras que sobresalen del tejido – y que son las causantes de la opacidad- son plegadas obteniendo mayor lisura y por ende aumentando su reflectancia, lo que da su apariencia de brillo. Es un acabado pasajero que disminuye con el lavado.
                p.mb-5
                  strong Gofrado:
                  |    también conocido como grabado. Es el proceso en donde un cilindro metálico tallado o grabado ejerce fricción y calor sobre la tela, como en el calandrado y transfiere el diseño a la tela. El efecto puede ser permanente mediante el uso de sustancias tipo resinas que termofijan (fijación por medio de calor) el material.
            .row.justify-content-center(titulo="Parte 2")
              .col-12
                .row.justify-content-center.mb-4
                  .col-lg-4.mb-lg-0.mb-5
                    figure.mb-0
                      img(src="@/assets/curso/tema1-imagen119.jpg")
                      figcaption Fuente: experimentaciontextilartesanal. wordpress.com (2016).
                  .col-lg-8
                    p.mb-0
                      strong Esmerilado (lijado o arenado):
                      |   da la apariencia de textura similar a la piel de durazno. La tela pasa por una maquina con varios rodillos que contienen un material abrasivo desgastando superficialmente el tejido. Este proceso se puede realizar de manera manual o artesanal con el uso de lijas de diferentes calibres.
                      br
                      br
                      strong Cepillado:
                      |   se utiliza para limpiar impurezas, levantar o acostar el pelo de loes tejidos perchados o hacer un esmerilado ligero.
                .row.justify-content-center
                  .col-lg-8.mb-lg-0.mb-5
                    p.mb-0
                      strong Perchado:
                      |   este acabado genera un efecto aislante y aumenta la cobertura del material dando la sensación de ser más abrigadora aumentando su suavidad por unas de las caras de la tela.
                  .col-lg-4
                    figure.mb-0
                      img(src="@/assets/curso/tema1-imagen120.jpg")
                      figcaption Fuente: pe.all.biz/acabado-textil (s.f.).
            .row.justify-content-center(titulo="Parte 3")
              .col-12
                p.caja.temporal--azul.mb-3.px-5.py-3 Los acabados en húmedo tienen como característica la presencia de agua – ya sea líquida o en vapor- acelerando el proceso de arreglo o moldeo de las fibras según el acabado que se busque. Por lo general son utilizados con el fin de estabilizar las dimensiones de la tela por el tema del encogimiento del material.
                .row.justify-content-center
                  .col-lg-4.mb-lg-0.mb-5
                    figure
                      img(src="@/assets/curso/tema1-imagen121.jpg")
                      figcaption Fuente: tintoreriaindustrial.com (s.f.)
                  .col-lg-8
                    p.mb-0
                      strong Sanforizado:
                      |   lo que se pretende con este acabado es estabilizar las dimensiones aplicando vapor y fuerza, lo que produce un encogimiento comprensivo del material. La tela es sometida a tensión sobre una plancha o bandeja de goma, mientras se aplica vapor.
                      br
                      br
                      strong Compactado:
                      |   es un proceso similar al sanforizado, la diferencia es que se usa en tejidos de algodón 100% para garantizar al máximo su estabilidad dimensional durante todo el proceso de lavandería y teñido en los cuales por la fuerza de tensión ejercida sobre el material tiende a estirarse, esto es lo que pasa en ocasiones cuando las prendas son lavadas de manera doméstica y se encogen
            .row.justify-content-center(titulo="Parte 4")
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen122.jpg")
              .col-lg-8
                p.mb-0
                  strong Batanado:
                  |   con este acabado, mediante la aplicación de humedad combinada con calor, fricción y compresión, se pretende fieltrar los tejidos de lana, éstos pierden dimensiones, aumentan su espesor, peso por metro cuadrado y ofrecen más resistencia a la penetración.
                  br
                  | El batanado se basa en que la superficie de la fibra de lana está formada por escamas que se acoplan unas con otras al producir un movimiento relativo entre ellas. A pesar de que el diámetro de la fibra no cambia, el aire entre las fibras se elimina a medida que éstas se enredan, de modo que el tejido "se encoge".
                  br
                  br
                  strong Decatizado:
                  |   similar al sanforizado, pero para tejidos de calada de lana y sus mezclas. Se adquiere importantes cualidades básicas como buena caída, resistencia a las arrugas, moderado lustre y estabilidad dimensional óptima – en longitud y anchura – gracias a la aplicación de vapor a presión.
            .row.justify-content-center(titulo="Parte 5")
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen123.jpg")
              .col-lg-8
                p.mb-0
                  strong Vaporizado:
                  |   el vaporizado sin tensión en tejidos de lana es la técnica más utilizada para obtener una buena estabilidad dimensional al planchado a vapor.
                  br
                  | La acción de vapor implica el hinchamiento higroscópico de las fibras con una subsiguiente relajación o contracción de la tela, que recupera su forma natural. El vaporizado elimina también todas las tensiones residuales.
                  br
                  br
                  strong Acabados químicos:
                  |   mediante la aplicación de productos o aditamentos químicos, un tejido puede obtener ciertas características dándoles un valor agregado pensando en su funcionalidad.
                  br
                  br
                  strong Suavizado:
                  |   a partir del uso de un agente químico se contribuye a aumentar la suavidad de la tela al penetrar el tejido facilitando el deslizamiento de la fibra.
                  br
                  br
                  strong Antiarrugas:
                  |   tratamiento que se aplica a la tela para reducir el nivel de arrugas e incluso obtener un planchado permanente.
            .row.justify-content-center(titulo="Parte 6")
              .col-lg-8
                p.mb-0
                  strong Antimicrobianos:
                  |   con este tipo de acabado se busca prevenir la transmisión y propagación de microorganismos y reducir los olores desagradables (desodorización). El agente antimicrobiano funciona ya sea por una lenta liberación del ingrediente activo. O por contacto de la superficie con los microbios.  En la práctica el efecto antimicrobiano se obtiene mediante la aplicación de productos químicos específicos durante la fase de acabado o en el proceso de hilatura.
                  br
                  br
                  strong Fungicidas:
                  |   evitan la formación de hongos sobre la fibra, en tejidos que están a la intemperie en contacto con la humedad o con el suelo, por ejemplo, lonas, redes, toldos, ropa interior. Se logra mediante la modificación química de las fibras, su impermeabilización o la aplicación de un recubrimiento.
                  br
                  br
                  strong Antisépticos:
                  |   tiene por objetivo destruir la acción perjudicial que producen ciertos organismos sobre las fibras textiles. Para eso se añaden al tejido ciertos productos que pueden inhibir la acción del microorganismo o destruirlo.
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen124.jpg")
            .row.justify-content-center(titulo="Parte 7")
              .col-12
                .row.justify-content-center
                  .col-lg-8
                    figure
                      img(src="@/assets/curso/tema1-imagen125.jpg")
                      figcaption Fuente: la industria textil y su control de calidad (Lockuán; 2012).
                  .col-lg-4
                    p.mb-0
                      strong  Transporte de la humedad (<i>wicking</i>):
                      br
                      |   como su nombre lo indica permite que la humedad y el calor del cuerpo escapen fácilmente. Ayuda a transportar el vapor de agua fuera del cuerpo haciendo que se sienta comodidad y frescura; ayudando a evitar la frialdad del postejercicio.
                .row.justify-content-center
                  .col-lg-8
                    figure
                      img(src="@/assets/curso/tema1-imagen126.jpg")
                      figcaption Fuente: la industria textil y su control de calidad (Lockuán; 2012).
                  .col-lg-4
                    p.mb-0
                      strong Repelencia al agua o acabado hidrófugo:
                      br
                      |   permite el paso del aire, pero no del agua. (Lockuán, 2012)
            .row.justify-content-center(titulo="Parte 8")
              .col-12
                .row.justify-content-center.mb-5
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1-imagen127.jpg")
                      figcaption Fuente: la industria textil y su control de calidad. (Lockuán, 2012).
                  .col-lg-8
                    p.mb-0
                      strong Repelencia y/o liberación de manchas:
                      |   los tejidos por su naturaleza, superficie irregular y esponjosidad son propensos a almacenar diferentes tipos de suciedad. Este tipo de acabados busca repeler o liberar el tejido de las manchas y suciedades. Dependiendo del tipo de suciedad que se quiera evitar, existen varios tipos de acabado:
                    ul.lista-ul--color
                      li
                        i.lista-ul__vineta
                        | Antiestáticos: los tejidos electrostáticamente atraen el polvo, que desmejora el aspecto del tejido. Los antiestáticos son productos higroscópicos, que captan humedad y eliminan las cargas eléctricas de las fibras.
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    | Repelentes a la impureza seca: se tratan los tejidos con óxidos metálicos que rellenan las cavidades de las fibras impidiendo que las impurezas se depositen allí, dando al tejido un color grisáceo.
                  li
                    i.lista-ul__vineta
                    | Repelentes a la suciedad húmeda (anti soil): los repelentes a las manchas se usan en una variedad de telas de algodón, para prendas y hasta tapicería. La gran ventaja es que los tejidos resisten las manchas durante el uso. Cuando ocurre un derrame, esa zona puede limpiarse fácilmente, ya que la mancha se limita a la superficie y no penetra profundamente en el tejido.
                  li
                    i.lista-ul__vineta
                    | Repelentes a las grasas, aceites y bencinas.
            .row.justify-content-center(titulo="Parte 9")
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema1-imagen128.jpg")
                  figcaption Fuente: blog.aznartextil.com/devore/; (s.f.)
                figure
                  img(src="@/assets/curso/tema1-imagen129.jpg")
                  figcaption Fuente: blog.aznartextil.com/devore/; (s.f.)
              .col-lg-8
                p.mb-5.caja.temporal--rosa.py-2.px-5.text-center Acabados ácidos
                p.mb-0
                  strong Apergaminado:
                  |   en las telas de algodón, los efectos translúcidos se producen mediante un tratamiento con ácido sulfúrico concentrado llamado Orgendil. Como el ácido ataca el algodón, el proceso debe controlarse muy cuidadosamente cada 5 o 6 segundos. Con este acabado es posible lograr los efectos de apergaminado total, apergaminado parcial y efectos plissé.
                  br
                  br
                  strong  Devorado (devoré):
                  |   los efectos devorados se obtienen estampando ciertos productos químicos sobre una tela constituida con fibras de diferentes grupos (rayón-seda), una de las fibras se destruye, dejando áreas más delgadas en el tejido dando la ilusión de transparencia. (Lupita C.L, 2008)
            .row.justify-content-center(titulo="Parte 10")
              .col-12
                .row.justify-content-center.mb-5
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1-imagen130.jpg")
                  .col-lg-8
                    p.mb-4.caja.temporal--rosa.py-2.px-5.text-center Otros acabados
                    p.mb-0
                      strong Blanqueado:
                      |   consiste en eliminar o decolorar las materias naturales del algodón y de la lana, obteniendo así un tejido con aspecto más blanco. Se suelen utilizar oxidantes que reaccionan con las fibras, produciéndoles un aspecto mucho más blanco.
                      br
                      br
                      strong Tintura:
                      |   consiste en transferir un color artificial al tejido, por medio de colorantes convencionales o por impregnación pigmentaria.
                .row.justify-content-center
                  .col-lg-8
                    p.mb-4.caja.temporal--rosa.py-2.px-5.text-center Otros acabados
                    p.mb-0
                      strong Estampación:
                      |   aplicar a la superficie del tejido un dibujo en uno o varios colores por medio de colorantes convencionales, pigmentos, transfer o aerografía, entre otros
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1-imagen131.jpg")
            .row.justify-content-center(titulo="Parte 11")
              p.mb-4 <strong>Encogimiento</strong>:  el “cambio dimensional” se refiere a cualquier cambio en una tela o prenda, ya sea positivo o negativo. Un cambio positivo en dimensión es “crecimiento” y un cambio negativo es “encogimiento.” En prendas de vestir, las características de encogimiento se refieren no sólo a cambios dimensionales, sino también a cambios como el sesgo y el fruncido de bolsillos, el cambio de relación entre el cuerpo de la tela y los avíos, y cambios en el propio ajuste de la prenda. El encogimiento se define como “un cambio dimensional en la tela o prenda ocasionado por la aplicación de una fuerza, energía o cambio en el ambiente que permite tanto que los productos se “relajen” o bien que se obligue a la tela a moverse en determinada dirección”.
              figure
                img(src="@/assets/curso/tema1-imagen132.jpg")
            .row.justify-content-center(titulo="Parte 12")
              .col-12
                p.mb-4
                  strong  Tipos de Encogimiento
                p.mb-4
                  strong El encogimiento y sus causas se pueden separar en 2 tipos:
                  |   encogimiento por construcción y encogimiento por proceso. Significa que el encogimiento se ve afectado tanto por los parámetros de construcción de la tela y las fuerzas aplicadas durante el teñido y el acabado. Los procesos de costura y acabados durante la confección también pueden afectar el encogimiento. El encogimiento de un producto se ve afectado tanto por la aplicación y remoción de factores de estrés (Cottonworks, s.f.).
                .cajon.color-acento-contenido.p-4.mb-4
                  p.mb-0 Dentro de los acabados, los expuestos en la sección de acabados en húmedo, aportan a la estabilización de las dimensiones de la tela, ayudando así al manejo del encogimiento textil.
                p.mb-0 Estos acabados son algunos de los más comunes y se pueden dar en tejidos o prendas. Para el patronista es relevante esta información pues al momento de desarrollar los patrones debe contemplar el efecto del proceso en la construcción de la prenda y los cambios dimensionales para hacer las correcciones necesarias en la moldería.

</template>

<script>
import TabSpecial from '../components/TabSpecial1.vue'
import SlyderEspecial from '../components/SlyderBSpecial.vue'
export default {
  name: 'Tema1',
  components: {
    TabSpecial,
    SlyderEspecial,
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Cintas métricas',
        texto:
          'Una cinta métrica o simplemente metro es un instrumento de medida que consiste en una cinta flexible graduada y que se puede enrollar, haciendo que el transporte sea más fácil. Con ella se pueden medir líneas y superficies rectas y curvas (EcuRed, s.f.)',
        imagen: require('@/assets/curso/tema1-imagen18.jpg'),
      },
      {
        titulo: 'Escuadras',
        texto:
          'Las escuadras (triangular o en “L”) son reglas básicas para hacer patrones. Ayuda a crear ángulos precisos de 90°, líneas paralelas y bordes rectos. Mide y rige simultáneamente (Isn’t that sew, s.f.). ',
        imagen: require('@/assets/curso/tema1-imagen19.jpg'),
      },
      {
        titulo: 'Reglas curvas',
        texto:
          'Como su nombre lo indica, son un conjunto de reglas que facilitan el trazado de diferentes tipos de curvas en el desarrollo de los patrones. Las más comunes son:',
        imagen: require('@/assets/curso/tema1-imagen20.jpg'),
      },
      {
        titulo: 'Curva de Cadera',
        texto:
          'Ayuda a configurar curvas largas y suaves, por ejemplo, para dar forma a la línea de la cadera, la entrepierna, el dobladillo, las solapas y rectificar costados en prendas ajustadas, entre otras (Isn’t that sew, s.f.; Palacios, s.f.). ',
        imagen: require('@/assets/curso/tema1-imagen21.jpg'),
      },
      {
        titulo: 'Curva francesa',
        texto:
          'Esta regla ayuda a trazar escotes, frentes, espaldas, sisas, corte princesa y tiros de pantalones (Palacios, s.f.)',
        imagen: require('@/assets/curso/tema1-imagen22.jpg'),
      },
      {
        titulo: 'Curva princesa o variable',
        texto:
          'Se utiliza especialmente en el patronaje femenino. Ayuda a trazar la línea de cadera, escotes en espalda (Palacios, s.f.). Su nombre de variable viene precisamente de la facilidad para trazar otras curvas más pequeñas según las necesidades del diseño.',
        imagen: require('@/assets/curso/tema1-imagen23.jpg'),
      },
      {
        titulo: 'Gota, pera, lágrima o sisómetro',
        texto:
          'Se usa para el trazo de las curvas de sisa, sus lados son asimétricos: uno de ellos (con la curva más pronunciada) es usado para la sisa delantera y el otro (con la curva más suave o menos profunda) para la sisa de la espalda. Esta regla, al igual que muchas, se puede emplear en el trazo de otras líneas como por ejemplo para las curvas de cuello (Palacios, s.f.).',
        imagen: require('@/assets/curso/tema1-imagen24.jpg'),
      },
    ],
    datosSlyder1: [
      {
        titulo: '',
        texto:
          'Saber si tiene o no la margen de costura en el patrón de una prenda, depende del tamaño de ésta según las medidas del cuadro de tallas. Si se determina que no la posee, entonces se procederá a añadirla con algún instrumento o técnica mencionados a continuación:<br><br>Desde la línea inicial del patrón se toma la medida inicial y con una regla se le añade el incremento deseado.',
        imagen: require('@/assets/curso/tema1-imagen48.jpg'),
      },
      {
        titulo: '',
        texto:
          'También se puede lograr al unir dos lápices con una goma elástica, este método es sencillo, ya que se unen dos lápices de forma paralela con un elástico para fijarlo. Una vez hecho, se pasa uno de los lápices por el contorno exterior del patrón y directamente se dibujará el margen de costura de 1 cm (para aquellos patrones que se requiera esta medida de margen).',
        imagen: require('@/assets/curso/tema1-imagen49.jpg'),
      },
      {
        titulo: '',
        texto:
          'Calibre de costura, corresponde a una regla con un indicador deslizable que se puede dejar fijo para tener siempre marcada la misma medida. Con el indicador se van añadiendo diferentes puntos al rededor del patrón, y posteriormente se dibuja la margen de costura en su totalidad.',
        imagen: require('@/assets/curso/tema1-imagen50.jpg'),
      },
      {
        titulo: '',
        texto:
          'Doble ruleta de trazado, este instrumento dispone de dos ruletas paralelas que permitirán marcar márgenes de costura de entre 1 cm y 3 cm. ',
        imagen: require('@/assets/curso/tema1-imagen51.jpg'),
      },
      {
        titulo: '',
        texto:
          'Guía para cortar costuras, estos cilindros imantados se pegan a las tijeras y permiten cortar directamente la tela o el papel añadiendo, a la vez, el margen de costura. Se puede señalar el ancho del margen de costura moviendo la goma negra de la que disponen. Mientras se corta se tendrá que ser cuidadoso para que el cilindro no se mueva, haciendo coincidir la goma negra con el límite del patrón (este no es muy utilizado a nivel industrial).',
        imagen: require('@/assets/curso/tema1-imagen52.jpg'),
      },
      {
        titulo: '',
        texto:
          'Cúter rotatorio con guía, esta pieza se añade como extra al cúter rotatorio. Con él se corta la tela a la vez que se añade el margen de costura de un ancho determinado. Guiándose con la pieza negra, que se puede deslizar a un lado u otro, también se puede regular el ancho de la margen de costura que se quiera añadir (al igual que el anterior, se emplea para piezas únicas o cortar muestras, no es muy recomendado a nivel industrial).',
        imagen: require('@/assets/curso/tema1-imagen53.jpg'),
      },
      {
        titulo: '',
        texto:
          'También se utilizan otro tipo de herramientas como reglas transparentes con medida o plantillas construidas con material fuerte para dar la medida deseada.',
        imagen: require('@/assets/curso/tema1-imagen54.jpg'),
      },
      {
        titulo: '',
        texto:
          'También se utilizan otro tipo de herramientas como reglas transparentes con medida o plantillas construidas con material fuerte para dar la medida deseada.',
        imagen: require('@/assets/curso/tema1-imagen55.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'OPTITEX',
        texto:
          '<a href="https://optitex.com/" target="_blank">https://optitex.com/</a>',
        imagen: require('@/assets/curso/tema1-imagen106.jpg'),
      },
      {
        titulo: 'GERBER TECHNOLOGY – AccuMarK.',
        texto:
          '<a href="https://gerbersoftware.com/products/accumark-2d/" target="_blank">https://gerbersoftware.com/products/accumark-2d/</a>',
        imagen: require('@/assets/curso/tema1-imagen107.jpg'),
      },
      {
        titulo: 'LECTRA MODARIS.',
        texto:
          '<a href="https://www.lectra.com/es" target="_blank">https://www.lectra.com/es</a>',
        imagen: require('@/assets/curso/tema1-imagen108.jpg'),
      },
      {
        titulo: 'OPTITAUDACES.EX',
        texto:
          '<a href="https://www.audaces.com/es/" target="_blank">https://www.audaces.com/es/</a>',
        imagen: require('@/assets/curso/tema1-imagen109.jpg'),
      },
      {
        titulo: 'MORGAN',
        texto:
          '<a href="https://www.morgantecnica.com/es/blog/" target="_blank">https://www.morgantecnica.com/es/blog/</a>',
        imagen: require('@/assets/curso/tema1-imagen110.jpg'),
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
  methods: {
    openClickAnexo(anexo) {
      window.open(anexo, '_blank')
    },
  },
}
</script>

<style lang="sass" scoped></style>
