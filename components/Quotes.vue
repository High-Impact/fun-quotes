<template>
    <div>
        <div v-if="loading && loading !== 'error'">Loading...</div>
        <section v-else class="container mx-auto pb-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-32">
            <div v-for="quote in quotes" class="">
                <div class="">
                    <div class="quoteMark text-blue-200">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-left fa-w-16"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" class=""></path></svg>
                    </div>
                    <div class="text-blue-900 text-4xl" v-html="quote.quote" /> 
                    <p class="ml-6 italic">- seen: {{ quote.dateSeen }}</p>
                </div>
            </div>
        </section>
      <div v-if="loading === 'error'">Error</div>
  </div>
</template>

<script>

    module.exports = {

        mounted() {
            fetch('https://fsq.cp.highimpact.design/api/collections/get/Quotes?sort[date]=-1&token=78ba39b1bc5e4a75f541411af8dc58')
                .then(response => response.json())
                .then(json => {
                    this.quotes = json.entries.reverse();
                    console.log(json);
                    this.loading = false;
                })
                .catch(error => this.loading = 'error');
        },
        
        data: function () {
            return {
                loading: true,
                quotes: []
            }
        }
    }
</script>
<style>
.quoteMark {
    width: 4em;
    margin-bottom: -3em;
    margin-left: -1em;
    opacity: .5;
    z-index:-1;
    position: relative;
}
.quoteMark svg {
    width:100%;
}
</style>