<template lang="pug">
.slyder-b
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-b__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .row
        .mb-4.mb-lg-0(
          :class="`${type === 'normal' ? 'col-lg-6' : 'col-lg-7'} ${inverted ? 'order-start' : 'order-lg-2'}`"
        )
          figure.slyder-b__img
            img(:src='item.imagen', :alt='item.leyendaImagen')
            figcaption(v-if="item.leyendaImagen" v-html="item.leyendaImagen")

        .mb-lg-0(
          :class="`${type === 'normal' ? 'col-lg-6' : 'col-lg-5'} ${inverted ? 'order-end' : '.order-lg-1'}`"
        )
          h3.titulo-slyder-special(v-html="item.titulo")
          p.mb-3(v-html="item.texto")
          .slyder__action
            .slyder__pagination {{index+1}}/{{datos.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn(
              v-if="index != datos.length -1"
              @click="selected = getId(index +1)"
              @mouseover="mostrarIndicador = false"
            )
              i.fas.fa-angle-right
              .indicador__container(v-if="mostrarIndicador && index === 0")
                .indicador--click.indicador--sm
</template>

<script>
import slyderMixins from 'ecored-base-pkg/src/mixins/slyderMixins'
import ScrollHorizontal from 'ecored-base-pkg/src/components/plantilla/ScrollHorizontal'
export default {
  name: 'SlyderEspecial',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  props: {
    type: {
      type: String,
      default: 'normal',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>
