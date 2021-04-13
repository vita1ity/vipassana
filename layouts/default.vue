<template>
  <div class="animate-fade-fast" id="start">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
