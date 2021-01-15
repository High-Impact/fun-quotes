<template>
  <div>
    <section class="container mx-auto px-8 pt-8 md:pt-12 lg:pt-24 bg-yellow-500 ">
      <h1 class="text-4xl md:text-5xl lg:text-6xl	font-black text-blue-700">
        Quotes from that one sign!
      </h1>
      <hr class="mb-8 border-t-2 border-blue-700" />
      <Quotes />
    </section>

  </div>
</template>

<script>
import Quotes from '~/components/Quotes.vue'

export default {
  components: {
    Quotes
  }
}
</script>

<style>
html {
  background:rgb(236 201 75);
}
</style>