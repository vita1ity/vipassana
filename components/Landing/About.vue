<template>
    <div class="about">
      <h3 class="heading-tertiary">{{ $t('about.title1') }}</h3>
      <h3 class="heading-tertiary">{{ $t('about.title2') }}</h3>
      <div class="separator"></div>
      <p class="paragraph-primary margin-bottom-medium" v-html="$t(
        'about.text1', {
          'mauna': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/osnovy-yogi/mauna/\'>' + $t('mauna') + '</a>',
        })">
      </p>
      <p class="paragraph-primary margin-bottom-medium" v-html="$t(
        'about.text2', {
          'concentration': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/meditatsiya/meditatsiya/\'>' + $t('concentration') + '</a>',
          'asana': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/asany/\'>' + $t('asana') + '</a>',
        })">
      </p>
      <p class="paragraph-primary" v-html="$t(
        'about.text3', {
          'concentration': '<a class=\'text-link\' target=\'_blank\' href=\'https://www.oum.ru/yoga/meditatsiya/meditatsiya/\'>' + $t('concentration') + '</a>',
        })">
      </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.about 
  margin: 20rem 6rem 10rem 6rem
  grid-column: col-start 2 / col-end 7
  //width: 75%
  justify-self: center
  
  @include respond(tab-port) 
    grid-column: center-start / center-end
    margin: 10rem 3rem 5rem 3rem

  @include respond(phone) 
    grid-column: full-start / full-end
    margin: 10rem 3rem 5rem 3rem
</style>