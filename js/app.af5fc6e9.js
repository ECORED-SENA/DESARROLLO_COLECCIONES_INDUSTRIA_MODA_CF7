(function(e){function a(a){for(var i,r,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],i=!0,r=1;r<o.length;r++){var s=o[r];0!==n[s]&&(i=!1)}i&&(t.splice(a--,1),e=c(c.s=o[0]))}return e}var i={},r={app:0},n={app:0},t=[];function s(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"3008a2bc","chunk-0206bfa0":"5c3501ed","chunk-04b93936":"34e078f5","chunk-13a6037e":"b934c241","chunk-16015154":"eb7f22fe","chunk-17977988":"b78bf512","chunk-2c06842c":"51812a54","chunk-2d208d90":"79835158","chunk-2d21d0e2":"735ec04b","chunk-2d22c123":"98a617e5","chunk-2e80bb9a":"55d87e23","chunk-3145fe0f":"b99a69e1","chunk-319206de":"c486131e","chunk-328f70dd":"99db7a36","chunk-3807499c":"aa42cd40","chunk-3dc647fd":"5a467309","chunk-4cdd78c0":"496417cd","chunk-4fde0a08":"0ec61d80","chunk-515a8379":"893aa0b3","chunk-53ccb27e":"a712c8a3","chunk-59974754":"e7709c19","chunk-766a929b":"2cf60214","chunk-839300a6":"66c84162","chunk-c796899c":"f8806167","chunk-dbb9869e":"a8175abf",comple:"9b0886cd",creditos:"ea636192",glosario:"8a0e49dd",intro:"63b17bac",referencias:"489a647d",tema1:"cb2d0217",tema2:"6f0f3991"}[e]+".js"}function c(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1};r[e]?a.push(r[e]):0!==r[e]&&o[e]&&a.push(r[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"af523a77","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"aca61583","chunk-766a929b":"d05dea55","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"10775c03",creditos:"33e0638d",glosario:"84a96c6a",intro:"0e433876",referencias:"61c3bfbc",tema1:"d035a47c",tema2:"d035a47c"}[e]+".css",n=c.p+i,t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var l=t[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===n))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===n)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||n,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete r[e],m.parentNode.removeChild(m),o(t)},m.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var i=n[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,o){i=n[e]=[a,o]}));a.push(i[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=n[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,o[1](u)}n[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=i,c.d=function(e,a,o){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)c.d(o,i,function(a){return e[a]}.bind(null,i));return o},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"230f":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.2ecbb827.svg"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("68f3"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},n=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},s=t,c=o("2877"),l=Object(c["a"])(s,r,n,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),f=o("ae58"),p=o("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Fundamentos del patronaje y patronaje masculino básico",descripcionCurso:"La industria de la moda demanda profesionales capaces de desarrollar todo tipo de prendas requeridas por los diferentes mercados y consumidores, con materiales variados, durante los tiempos establecidos por las temporadas y económicamente aptos para ser producidos. Conseguirlo es el resultado de múltiples actividades de índole artística, ergonómica, tecnológica y económica; van desde el boceto, pasando por los diseños, trazados, documentación técnica, confección y validación de prototipos, para concluir en la producción de las cantidades industriales requeridas.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Fundamentos del patronaje",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Patronaje: definición",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Vocabulario técnico de patronaje",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Herramientas: cintas métricas, tijeras, pulidores, escuadras y reglas para patronaje, lápices de marcar, alfiler, desbaratador, piqueteador y perforador",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Fundamentos de antropometría y ergonomía",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Márgenes, desahogos y tipos de costuras",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Toma de medidas antropométricas",hash:"t_1_6"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Patronaje industrial manual y sistematizado",hash:"t_1_7"},{icono:"far fa-file-alt",numero:"1.8",titulo:"Señalización e industrialización de patrones",hash:"t_1_8"},{icono:"far fa-file-alt",numero:"1.9",titulo:"Encogimientos y acabados",hash:"t_1_9"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Patronaje masculino básico",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Inducción al patronaje y escalado masculino",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Medidas y cuadros de tallas",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Básico de la camisa: delanteros, espalda, almilla, mangas, cuellos, puños y perillas",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Variaciones de la camisa: diferentes tipos de cortes, recogidos y almillas alforzas",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Cuellos, puños, perillas, tapas y charreteras",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Escalado de la camisa",hash:"t_2_6"},{icono:"far fa-file-alt",numero:"2.7",titulo:"Desarrollo de modelos de camisa",hash:"t_2_7"},{icono:"far fa-file-alt",numero:"2.8",titulo:"Básico del pantalón clásico y avíos",hash:"t_2_8"},{icono:"far fa-file-alt",numero:"2.9",titulo:"Básico del <i>jeans</i> y avíos",hash:"t_2_9"},{icono:"far fa-file-alt",numero:"2.10",titulo:"Tipos de bolsillos",hash:"t_2_10"},{icono:"far fa-file-alt",numero:"2.11",titulo:"Variaciones del pantalón",hash:"t_2_11"},{icono:"far fa-file-alt",numero:"2.12",titulo:"Desarrollo de modelos del pantalón",hash:"t_2_12"},{icono:"far fa-file-alt",numero:"2.13",titulo:"Escalado del pantalón",hash:"t_2_13"},{icono:"far fa-file-alt",numero:"2.14",titulo:"Básico del chaleco",hash:"t_2_14"},{icono:"far fa-file-alt",numero:"2.15",titulo:"Básico de la chaqueta (vaquera <i>jeans</i>)",hash:"t_2_15"},{icono:"far fa-file-alt",numero:"2.16",titulo:"Básico de camiseta t-shirt",hash:"t_2_16"},{icono:"far fa-file-alt",numero:"2.17",titulo:"Desarrollo de camisetas: polo y ranglan",hash:"t_2_17"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Amigos de la costura. (2019, April 5). Técnicas para marcar márgenes de costura. [Video]. YouTube.",link:"https://www.youtube.com/watch?v=xZRCi8yp5wM&feature=youtu.be"},{referencia:"Araujo, G., FAUTAPO, Cooperación Suiza, & Patzy, J. (2014). Texto Guía del participante Confección textil. FAUTAPO."},{referencia:"Avila-Chaurand, R., González-Muñiz, E., & Prado-León, L. (2007). Dimensiones antropométricas de población latinoamericana. Universidad de Guadalajara."},{referencia:"Camisa. (s.f.). Orion Folguias.",link:"https://folguiasorion.com/services/camisa/"},{referencia:"Celestecielo. (s.f.). El Rincon De Celestecielo: Desahogos, holguras o flojos y costuras en los patrones para tejido plano. El Rincón de Celestecielo.",link:"https://elrincondecelestecielo.blogspot.com/2012/08/desahogos-o-flojos-y-costuras-en-los.html"},{referencia:"Como cubrir un cuerpo. (2014, May 4). Despiece cazadora tejana tipo Versace. Como Cubrir Un Cuerpo.",link:"https://www.comocubriruncuerpo.org/despiece-cazadora-tejana-tipo-versace/"},{referencia:"Cómo cubrir un cuerpo. (2013). Trazado base del patrón del chaleco masculino. Cómo Cubrir Un Cuerpo.",link:"https://www.comocubriruncuerpo.org/trazado-base-del-patron-del-chaleco-masculino/"},{referencia:"Coser es fácil. (s.f.-a). Regla curva francesa - Coser es fácil. Coser Es Fácil. ",link:"https://differenttreat.blogspot.com/2014/07/regla-curva-francesa.html"},{referencia:"Coser es fácil. (s.f.-b). Regla curva sastre - Coser es fácil. Coser Es Fácil. ",link:"https://differenttreat.blogspot.com/2014/07/regla-curva-sastre.html"},{referencia:"Coser y cantar. (s.f.). REGLAS C Y C NEGRO (1).pdf - Google Drive. ",link:"https://drive.google.com/file/d/0B1cDsXW96yjYNGpZNW9JWERTZXM/view"},{referencia:"Cottonworks. (s.f.). El Arte del Control de Encogimiento | CottonWorksTM. Cottonworks. ",link:"https://www.cottonworks.com/topics/en-espanol/procesos-de-algodon/el-arte-del-control-de-encogimiento/"},{referencia:"Definicion.de. (s.f.). Definicion.de. Definicion.De.",link:"https://definicion.de/sastre/"},{referencia:"DICCIONARIO DE COSTURA LETRA - E -. (s.f.). Jarcamora. ",link:"https://www.jarcamora.com/diccionario-de-costura-letra-e/"},{referencia:"EcuRed. (s.f.). Cinta métrica - EcuRed. EcuRed. ",link:"https://www.ecured.cu/Cinta_m%C3%A9trica"},{referencia:"Ecosistema de Recursos Educativos SENA. (2019, November 7). Patronaje industrial masculino: toma de medidas - YouTube. YouTube. ",link:"https://www.youtube.com/watch?v=UkwF4YVTnLU&feature=youtu.be"},{referencia:"Farlex. (s.f.). The free dictionary. The Free Dictionary by Farlex. ",link:"https://es.thefreedictionary.com/cosm%C3%A9tica"},{referencia:"Fernández, G. (2016, Septiembre 11). Vocabulario de patronaje y confección. Slideshare. ",link:"https://es.slideshare.net/GemaLuciaFernandezSa/vocabulario-de-patronaje-y-confeccin?from_action=save"},{referencia:"García, M. E. (2016, agosto 25). Cuánto se deja para el margen de costura. El Baúl de La Costurera. ",link:"https://www.elbauldelacosturera.com/2016/08/cuanto-se-deja-para-el-margen-de-costura.html"},{referencia:"Gaviria, F. A., Karina, F., Cardona, E., Rosique-Gracia, J., Vega, L., & (SENA), S. N. de A. (2019). Manual para la toma y registro de medidas antropométricas aplicadas en la industria del diseño de vestuario. Servicio Nacional de Aprendizaje (SENA). "},{referencia:"Gaviria, A. (2018). Escalado. "},{referencia:"Gaviria, F. A., Karina, F., Cardona, E., Rosique-Gracia, J., Vega, L., & (SENA), S. N. de A. (2019). Manual para la toma y registro de medidas antropométricas aplicadas en la industria del diseño de vestuario. Servicio Nacional de Aprendizaje (SENA). "},{referencia:"Goyes, H. (s.f.). Ajuste y holguras. ",link:"https://www.scribd.com/doc/187465705/VALORES-DE-DESAHOGO-ESTIMADOS-SEGUN-EL-TIPO-DE-PRENDA-Y-VOLUMEN-DESEADO-2"},{referencia:"Gremi de Tintorers i Bugaders. (2011a). Procesos textiles I. Tintolimp, 483, 16–19. "},{referencia:"Gremi de Tintorers i Bugaders. (2011b). Procesos textiles III. Tintolimp, 483, 16–19. "},{referencia:"Gremi de Tintorers i Bugaders. (2011c). Procesos textiles IV. Tintolimp, 483, 16–19. "},{referencia:"Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., Moreno Brand, D. & Servicio Nacional de Aprendizaje. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje. ",link:"https://hdl.handle.net/11404/4725"},{referencia:"Hatem, L. (2017, diciembre 11). Aprende cómo Hacer el Cuello Ópera o Esmoquin. – Mi Mundo De Moda – Cursos de Costura. Mi Mundo de Moda. ",link:"https://mimundodemoda.com/aprende-como-hacer-el-cuello-opera-o-esmoquin/"},{referencia:"Handbox. (2016, octubre 8). Añadir márgenes de costura. Handbox. ",link:"https://handbox.es/anadir-margenes-de-costura"},{referencia:"HISTORIA DE LA MODA - FASHION HISTORY : CUELLOS. (s.f.). Historia de La Moda. ",link:"https://modaenlahistoria.blogspot.com/search?q=CUELLOS"},{referencia:"Isn’t that sew. (s.f.). Pattern Drafting Tools. Isn’t That Sew. ",link:"http://isntthatsew.org/pattern-drafting-tools-functions/"},{referencia:"Lafayette. (2019, noviembre 22). El arte del trazo: descubre cómo se optimiza una prenda - Lafayette. Lafayette. ",link:"https://www.lafayette.com/el-arte-del-trazo-descubre-como-se-optimiza-una-prenda/"},{referencia:"Lafayette. (2020, febrro 10). Las distintas máquinas de coser más útiles de acuerdo con cada tejido. Lafayette. ",link:"https://www.lafayette.com/conoce-las-distintas-maquinas-de-coser-mas-utiles-de-acuerdo-con-cada-tejido-2/"},{referencia:"Lockuán, F. (2012). VI. La industria textil y su control de calidad by Fidel Lockuán - issuu (01 ed.). ",link:"https://issuu.com/fidel_lockuan/docs/vi._la_industria_textil_y_su_control_de_calidad"},{referencia:"López Andrea. (2018, noviembre 2). Margen de costura en pinzas, esquinas y bajos | Patronaje para principiantes. [Video]. YouTube. ",link:"https://www.youtube.com/watch?v=AScFmlP1qlc&t=9s"},{referencia:"Lupita C.L. (2008, enero 27). industria textil: ACABADO DE PRENDAS. Industria Textil. ",link:"http://preparacionyacabadogcl.blogspot.com/2008/01/acabado-de-prendas.html"},{referencia:"Marimar. (2016, nviembre 19). Costura - Glosario de Corte y Confección - Bricolaje10.com. Bricolaje10.Com. ",link:"https://bricolaje10.com/glosario-de-la-costura/"},{referencia:"Mundo Herramienta. (s.f.). ▷ Los Mejores Cutters Circulares 【2020】-【Guía Especializada】. Mundo Herramieta. ",link:"https://www.mundoherramienta.net/herramientas/mejor-cutter-circular/"},{referencia:"Nunes, A. (s.f.). Costura e Modelagem. Alvarinanunes.Com. ",link:"http://www.alvarinanunes.com/costuraemodelagem.html"},{referencia:"Olivares, M. O. (2012). Laboratorio de Patronaje y Confección de Vestuario Masculino Adulto."},{referencia:"Páez, L. (2018, Agosto 15). 5 HERRAMIENTAS o materiales para PATRONAJE. [Video]. YouTube. ",link:"https://www.youtube.com/watch?v=zi_5puNAvLc"},{referencia:"Páez, L. (2020, January 15). Como entender el patronaje o moldería de ropa – PRINCIPIANTES. [Video]. YouTube. ",link:"https://www.youtube.com/watch?v=ZcuDiqrkEWU"},{referencia:"Palacios, N. (s.f.). Corte y confeccion: Herramientas de trabajo. ",link:"http://corteyconfeccioncnp.blogspot.com/2010/05/herramientas-de-trabajo.html"},{referencia:"Real Academia Española. (s.f.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. ",link:"https://dle.rae.es/"},{referencia:"Revista Fucsia. (s.f.). Historia de la chaqueta de jean. Fucsia. ",link:"https://www.fucsia.co/edicion-impresa/articulo/historia-de-la-chaqueta-de-jean/53733"},{referencia:"Rebasado. (s.f.). Glosario de Términos en la Confeccion. Rebasando. ",link:"https://rebasando.com/fashion/209-glosario-de-terminos-en-la-confeccion"},{referencia:"Rodríguez, M. (2018). TALLAS TOPS INSTRUCTORA : MARITZA RODRÍGUEZ."},{referencia:"SENA. (s.f.-a). Módulo I: Patronaje Industrial Masculino. Versión Imprimible."},{referencia:"SENA. (s.f.-a). Módulo II: Patronaje Industrial Masculino. Versión Imprimible."},{referencia:"SENA. (s.f.-a). Módulo III: Patronaje Industrial Masculino. Versión Imprimible."},{referencia:"SENA. (s.f.-a). Módulo IV: Patronaje Industrial Masculino. Versión Imprimible."},{referencia:"Santiago. (2018, marzo 5). Vocabulario Imprescindible de Costura | Superprof. Superprof. ",link:"https://www.superprof.co/blog/diccionario-de-costura/"},{referencia:"SENA. (2014). Trazo, corte y confección de la falda clásica. "},{referencia:"Skarlett Costura. (s.f.). Añadir el margen de costura nunca había sido tan fácil / Plantilla descargable - Skarlett Costura. Skarlett.Es. ",link:"https://skarlett.es/anadir-margen-de-costura-patron/"},{referencia:"Tipos de Puño de Camisa. (2014, Agosto 27). La Trajería. ",link:"http://www.alquilerchaque.es/2014/08/tipos-de-puno-de-camisa.html"},{referencia:"Vestuario. (s.f.). Glosario términos de confección | Técnicas de costura. Vestuario CR. ",link:"http://www.vestuariocr.com/costura-general/interesante/164-glosario-terminos-de-confeccion-tecnicas-de-costura.html"},{referencia:"Vocabulario técnico de patronaje. (s.f.). Vocabulario Técnico de Patronaje. ",link:"https://sites.google.com/site/vocabulariotecnicodepatronaje/"},{referencia:"Vestuario. (s.f.). Glosario términos de confección | Técnicas de costura. Vestuario CR. ",link:"http://www.vestuariocr.com/costura-general/interesante/164-glosario-terminos-de-confeccion-tecnicas-de-costura.html"},{referencia:"Wikipedia. (s.f.). Wikipedia, la enciclopedia libre. Wikipedia. ",link:"https://es.wikipedia.org/wiki/C%C3%B3digo_de_vestimenta"}],glosario:[{termino:"Acabado",significado:"3. m. Calidad de un objeto en los detalles finales de su elaboración, especialmente en loque se refiere a su aspecto (Real Academia Española, s.f.)."},{termino:"Acromio",significado:"1. m. Anat. Apófisis del omóplato, con la que se articula la extremidad externa de la clavícula (Real Academia Española, s.f.)."},{termino:"Aletilla",significado:"Pieza de tela que acompaña a la cremallera de una prenda (Vestuario, s.f.)."},{termino:"Aletillón",significado:"Es una aleta doble que se le coloca al lado derecho de la parte superior del tiro delantero y sirve para proteger la piel del cierre, en el momento en que éste se cierre (SENA, s.f.-c). "},{termino:"Almilla",significado:"1. s. f. INDUMENTARIA Y MODA Prenda de vestir parecida a un jubón la parte superior de la almilla resaltaba su corpulencia  (Farlex, s.f.)."},{termino:"Aplome",significado:"3. v. tr. Poner una cosa vertical (Farlex, s.f.)."},{termino:"Basta",significado:"Puede provenir de bastjan, un vocablo germánico que puede traducirse como “coser”. En este último caso, una basta es un hilván: una costura que se lleva a cabo mediante puntadas largas (Definicion.de, s.f.)."},{termino:"Bidimensional",significado:"1. adj. De dos dimensiones (Real Academia Española, s.f.)."},{termino:"Bocamanga",significado:"s. f. INDUMENTARIA Y MODA Abertura de la manga por donde sale la mano o el brazo, especialmente la parte interior de la misma (Farlex, s.f.)."},{termino:"Bolsillo",significado:"1. s. m. INDUMENTARIA Y MODA Parte de algunas prendas de vestir consistente en una bolsa interior o superpuesta (Farlex, s.f.)."},{termino:"Cerradora de codo",significado:"Son máquinas especialmente utilizadas para confeccionar el cerramiento de camisas, mangas, chaquetas, jeans, entre otros. Utiliza 3 agujas y es capaz de hacer hasta 7.000 puntadas por minuto.<br>Se utiliza en tejidos de tipo plano. (Lafayette, 2020)"},{termino:"Chaqueta",significado:"1. s. f. INDUMENTARIA Y MODA Prenda de vestir con mangas, que cubre la parte superior del cuerpo hasta los muslos y se abotona por delante (Farlex, s.f.)."},{termino:"Cilindro",significado:"1. m. Cuerpo geométrico limitado por una superficie cilíndrica cerrada y dos planos que la cortan.<br>Geom. cilindro terminado por dos planos no paralelos (Real Academia Española, s.f.)."},{termino:"Contorno",significado:"2. m. Conjunto de las líneas que limitan una figura o composición. loc. adv. Alrededor (Real Academia Española, s.f.)."},{termino:"Corte",significado:"3. Abertura o señal que queda al cortar, corte y confección ENSEÑANZA, TEXTIL Arte y oficio de cortar y confeccionar prendas de vestir (Farlex, s.f.)."},{termino:"Cremallera",significado:"1. s. f. Indumentaria y moda: cierre para aberturas longitudinales de prendas de vestir, bolsos, cojines y otras cosas, que consiste en dos filas de dientes metálicos que encajan unos con otros (Farlex, s.f.)."},{termino:"Cuello",significado:"3. INDUMENTARIA Y MODA Adorno suelto de tela, encaje, piel u otra materia que se pone alrededor del cuello, Parte de una prenda de vestir que rodea el cuello (Farlex, s.f.)."},{termino:"Cuerpo",significado:"11. TEXTIL Parte del vestido que cubre desde el cuello hasta la cintura (Farlex, s.f.)."},{termino:"Cutter Rotatorio",significado:"El cutter circular, se trata de una herramienta de corte que dispone de una cuchilla con formato circular, por lo que solo tendremos que deslizar el cutter sobre la superficie a cortar, la cuchilla gira cortando el material (Mundo Herramienta, s.f.)."},{termino:"Dimensión",significado:"1. f. Aspecto o faceta de algo.<br>3. f. Fís. Cada una de las magnitudes que fijan la posición de un punto en un espacio. Una superficie tiene dos dimensiones: el largo y el ancho (Real Academia Española, s.f.)."},{termino:"Dobladillo",significado:"1. s. m. Pliegue cosido que remata los bordes de la ropa  (Farlex, s.f.)."},{termino:"Efecto plissé",significado:"Plisar: Del fr. plisser, y este del lat. plicāre 'plegar'. 1. tr. Hacer que una tela o cosa flexible quede formando pliegues (Real Academia Española, s.f.)."},{termino:"Encarterar",significado:"Método de refuerzo (DICCIONARIO DE COSTURA LETRA - E -, s.f.)."},{termino:"Ergonomía",significado:"1. f. Estudio de la adaptación de las máquinas, muebles y utensilios a la persona que los emplea habitualmente, para lograr una mayor comodidad y eficacia.<br>2. f. Cualidad de ergonómico (‖ adaptado a las condiciones del usuario). El puesto de conducción tiene buena ergonomía (Real Academia Española, s.f.)."},{termino:"Escuadrar",significado:"v. tr. Disponer un objeto de modo que sus caras formen ángulos rectos con las caras contiguas. (Farlex, s.f.)."},{termino:"Espalda",significado:"2. Indumentaria y moda: parte de una prenda de vestir que corresponde a esta parte del tronco (Farlex, s.f.)."},{termino:"Fileteadora",significado:"Este tipo de máquinas funciona con un mecanismo que permite entrelazar un hilo y dos hilazas, un tipo de costura llamado sobrehilado que consiste en rematar el borde del tejido para evitar que se deshilache.<br>Se utiliza principalmente en tejido de punto, aunque también puede ser usada en tejido plano (Lafayette, 2020)."},{termino:"Flojo",significado:"1. adj. Que no está bien ajustado o apretado (Real Academia Española, s.f.)."},{termino:"Forro",significado:"2. INDUMENTARIA Y MODA Tela que se pone por la parte interior de las prendas de vestir o de otras cosas (Farlex, s.f.)."},{termino:"Fricción",significado:"Frotar, restregar o rozar algo. Se conoce como fuerza de fricción a la que realiza una oposición al desplazamiento de una superficie sobre otra, o a aquélla opuesta al comienzo de un movimiento (Definicion.de, s.f.)."},{termino:"Higroscópico",significado:"1. f. Fís. Propiedad de algunas sustancias de absorber y exhalar la humedad según el   medio en que se encuentran (Real Academia Española, s.f.)."},{termino:"Horizontal",significado:"1. adj. Perteneciente o relativo al horizonte. 2. adj. Paralelo al horizonte. U. t. c. s. (Real Academia Española, s.f.)."},{termino:"Lateral",significado:"1. adj. Que está en un lado  (Farlex, s.f.)."},{termino:"Longitudinal",significado:"1. adj. Perteneciente o relativo a la longitud. 2. adj. Hecho o colocado en el sentido o dirección de la longitud (Real Academia Española, s.f.)."},{termino:"Lustre",significado:"1. m. Brillo de las cosas tersas o bruñidas. 2. m. Esplendor, gloria."},{termino:"Manga",significado:"1. s. f. INDUMENTARIA Y MODA Parte de una prenda de vestir que cubre el brazo o la parte superior de él (Farlex, s.f.)."},{termino:"Maquina plana",significado:"Es una de las máquinas más utilizadas ya que permite hacer costuras básicas en la mayoría de prendas. Tiene como principal función la de entrelazar un hilo superior con uno inferior a través de la tela haciendo una costura recta. Sirve tanto para tejido plano como para tejido de punto (Lafayette, 2020)."},{termino:"Media",significado:"Es el resultado de dividir la suma de diversas cantidades por el número de ellas. En este caso, media es sinónimo de promedio (Definicion.de, s.f.)."},{termino:"Molde",significado:"2. Cualquier utensilio, aunque no sea hueco, que sirve para estampar o dar forma a una   cosa  (Farlex, s.f.)."},{termino:"Pantalón",significado:"1. s. m. Indumentaria y moda: prenda de vestir con dos perneras que cubre desde la cintura hasta los pies (Farlex, s.f.)."},{termino:"Patrón base",significado:"Se hace referencia a la plantilla en papel que se copia en una tela en concreto con el claro objetivo de poder crear y coser así cualquier prenda de vestir. Así, a partir de dicha plantilla, la costurera o el sastre cortarán las piezas que conforman la prenda en cuestión y posteriormente procederán a confeccionarla (Definicion.de, s.f.)."},{termino:"Perímetro",significado:"1. m. Contorno de una superficie. 2. m. Geom. Contorno de una figura. 3. m. Geom. Medida del contorno de una figura (Real Academia Española, s.f.)."},{termino:"Pernera",significado:"s. f. INDUMENTARIA Y MODA Parte del calzón o pantalón que cubre la pierna, y espacio por donde ésta se mete (Farlex, s.f.)."},{termino:"Pespunte",significado:"1. s. m. TEXTIL Labor de costura que consiste en volver la aguja hacia atrás después de cada punto para meter la hebra en el mismo sitio por donde se pasó antes, de modo que las puntadas queden unidas (Farlex, s.f.)."},{termino:"Pinza",significado:"2. INDUMENTARIA Y MODA Pliegue de una tela terminado en punta, que se hace para estrecharla o como adorno (Farlex, s.f.)."},{termino:"Piquete",significado:"2. Agujero o corte pequeño que se hace en la ropa u otras cosas (Real Academia Española, s.f.)."},{termino:"Pretina",significado:"1. s. f. INDUMENTARIA Y MODA Cinta con una hebilla o un broche que se pone en la cintura para sujetar una prenda de vestir (Farlex, s.f.)."},{termino:"Recubridora",significado:"Collarín: Esta máquina permite cubrir los orillos de las telas sobrepuestas sobre otra con fines decorativos. Es especialmente utilizada en tejidos de punto, aunque también puede usarse en tejidos planos. Puede ser muy útil en la confección de ropa interior y telas elásticas (Lafayette, 2020)."},{termino:"Ruedo",significado:"3. Borde de una cosa redonda 7. Indumentaria y moda refuerzo o forro con que se guarnecen interiormente por la parte inferior los vestidos talares (Farlex, s.f.)."},{termino:"Simetría",significado:"1. F. Correspondencia exacta en forma, tamaño y posición de las partes de un todo. 3. F. Geom. Correspondencia exacta en la disposición regular de las partes o puntos de un cuerpo o figura con relación a un centro, un eje o un plano (real academia española, s.f.)."},{termino:"Sisa",significado:"2. Indumentaria y moda corte hecho en una prenda de vestir para que se ajuste al cuerpo y, en especial, el corte curvo que sehace en la parte de la axila (Farlex, s.f.)."},{termino:"Talla",significado:"4. Indumentaria y moda medida convencional usada en la fabricación y venta de prendas de vestir (Farlex, s.f.)."},{termino:"Talle",significado:"2. Indumentaria y moda parte de una prenda de vestir correspondiente a la cintura   del cuerpo humano (Farlex, s.f.)."},{termino:"Tiro",significado:"9. Textil: distancia desde la unión de las perneras hasta la cintura de un pantalón (Farlex, s.f.)."},{termino:"Tórax",significado:"2. m. Cavidad del pecho (Real Academia Española, s.f.)."},{termino:"Tridimensional",significado:"Calificar a aquello que tiene tres dimensiones. Para comprender a qué se refiere la noción, por lo tanto, es necesario entender el concepto de dimensión (Definicion.de, s.f.)."},{termino:"Vertical",significado:"1. adj. Dicho de una recta o de un plano: Que es perpendicular a un plano horizontal. 2. adj. Que tiene la dirección de la plomada. Apl. a una línea, u. t. c. s. f. 3. adj. Que, en figuras, dibujos, escritos, impresos, etc., va de la cabeza al pie. U. t. c. s. f. (Real Academia Española, s.f.)."},{termino:"Vértice",significado:"Geom. Punto en que concurren los dos lados de un ángulo o las caras de un ángulo poliedro. Punto de una curva en que esta se encuentra con su eje (Farlex, s.f.)."}],complementario:[{texto:"(Gutiérrez Rengifo et al., 2011) Manual de patronaje básico e interpretación de diseños.",tipo:"PDF",descarga:"/downloads/A_U1_Manual_patronaje_basico_interpretacion_diseno.PDF"},{texto:"(Fernández, 2016) Vocabulario de patronaje y confección",tipo:"PDF",descarga:"/downloads/D_U1_vocabulariodepatronajeyconfeccin_160911085102.pdf"},{texto:"(Gaviria et al., 2019) Manual para la toma y registro de medidas antropométricas aplicadas en la industria del diseño de vestuario",tipo:"PDF",descarga:"/downloads/I_U1_Manual_toma_medidas_antropometricas_aplicadas_industria_vestuario_Inamod.pdf"},{texto:"(Goyes, s.f.) Ajustes y holguras",tipo:"PDF",descarga:"/downloads/N_U1_valores_de_desahogo_estimados_segun_el_tipo_de_prenda_y_volumen_deseado_2.pdf"},{texto:"(SENA, 2014) Trazo, corte y confección de la falda clásica",tipo:"PDF",descarga:"/downloads/O_U1_Trazo _corte_ y_confeccion_de_la_falda.pdf"},{texto:"(Gremi de Tintorers i Bugaders, 2011b) Procesos textiles I",tipo:"PDF",descarga:"/downloads/P_U1_PROCESOS_TEXTILES_I.pdf"},{texto:"(Gremi de Tintorers i Bugaders, 2011b) Procesos textiles II",tipo:"PDF",descarga:"/downloads/Q_U1_PROCESOS_TEXTILES_II.pdf"},{texto:"(Gremi de Tintorers i Bugaders, 2011b) Procesos textiles III",tipo:"PDF",descarga:"/downloads/R_U1_PROCESOS_TEXTILES_III.pdf"},{texto:"(Gremi de Tintorers i Bugaders, 2011c) Procesos textiles IV",tipo:"PDF",descarga:"/downloads/S_U1_PRPCESOS_TEXTILES_IV.pdf"},{texto:"(Avila-Chaurand et al., 2007) Dimensiones antropométricas de población latinoamericana",tipo:"PDF",descarga:"/downloads/K_U1_Dimensiones_antropometricas_de_la_poblacion_lationamericana.pdf"},{texto:"(Gaviria, A.; 2018) Escalados",tipo:"PDF",descarga:"/downloads/A_U2_Escalados_masculinos_Manual_ CMTC_ 10_ 11_ 2018.pdf"},{texto:"(Ecosistema de Recursos Educativos SENA, 2019) Patronaje industrial masculino: toma de medidas ",tipo:"Video",link:"https://www.youtube.com/watch?v=UkwF4YVTnLU&feature=youtu.be"},{texto:"(Rodríguez, 2018)",tipo:"PDF",descarga:"/downloads/IMAGEN_1_CUADRO_DE_TALLAS_ASCULINO_EN_CENTIMETROS.pdf"},{texto:"(SENA, s.f.-a)",tipo:"PDF",descarga:"/downloads/imprimible_patronaje_masculino_m1.pdf"},{texto:"(SENA, s.f.-b)",tipo:"PDF",descarga:"/downloads/imprimible_patronaje_masculino_m2.pdf"},{texto:"(SENA, s.f.-c)",tipo:"PDF",descarga:"/downloads/imprimible_patronaje_masculino_m3.pdf"},{texto:"(SENA, s.f.-d)",tipo:"PDF",descarga:"/downloads/imprimible_patronaje_masculino_m4.pdf"},{texto:"(Olivares, 2012)",tipo:"PDF",descarga:"/downloads/Laboratorio_de Patronaje_y_Confeccion_de_Vestuario_Masculino Adulto.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Marisol Osorio",cargo:"Líder sennova",centro:"Centro de Diseño Confección y Moda - Regional Antioquia."},{nombre:"María Luisa Yepes",cargo:"Instructora",centro:"Centro de Diseño Confección y Moda - Regional Antioquia."},{nombre:"Fabio Andrés Gaviria",cargo:"Instructor",centro:"Centro de Diseño Confección y Moda - Regional Antioquia."},{nombre:"Jhon Fernando Jaramillo Taborda",cargo:"Investigador – Grupo de investigación INAMOD",centro:"Centro de Diseño Confección y Moda - Regional Antioquia."},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Diseñador instruccional",centro:"Centro para la Comunicación de la Industria Gráfica – Regional Distrito Capital"},{nombre:"Julieth Paola Vital",cargo:"Corrector de estilo",centro:"Centro para la Comunicación de la Industria Gráfica – Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Oscar Ivan Uribe Ortiz",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Sergio Omar Camacho Orduz",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});i["a"].prototype.$config=v;var A=o("9224");i["a"].prototype.$package=A,new i["a"]({router:g,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.d154d6b1.svg"}});
//# sourceMappingURL=app.af5fc6e9.js.map