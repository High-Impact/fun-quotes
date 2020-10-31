<template>
  <div>
    <section class="container mx-auto pt-24 pb-8">
      <h1 class="text-6xl	font-black">
        Funny quotes from that one sign!
      </h1>
      <hr />
    </section>

    <Quotes />
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