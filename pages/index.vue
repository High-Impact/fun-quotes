<template>
  <div>
    <section class="container mx-auto px-8 pt-8 md:pt-12 lg:pt-24 bg-gray ">
      <h1 class="text-4xl md:text-5xl lg:text-6xl	font-black text-blue-700">
        Fun quotes!
      </h1>
      <p class="text-lg">
        There's a sign, about 5 minutes from my home.
        Every 2 weeks or so, they update with a new pun, saying, or joke.
        This website is simply a log of all their sayings.
      </p>
      <hr class="mt-4 mb-8 border-t-2 border-blue-200" />
      <Quotes />
    </section>

  </div>
</template>

<script>
import Quotes from '~/components/Quotes.vue'

export default {
  components: {
    Quotes
  },
  head() {
    return {
        title: "Fun quotes from that one sign."
      };

  }
}
</script>

<style>
/* html {
  background:rgb(236 201 75);
} */
</style>