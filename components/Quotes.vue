<template>
    <div>
        <div v-if="loading && loading !== 'error'">Loading...</div>
        <section v-else class="container mx-auto pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div v-for="quote in quotes" class="rounded overflow-hidden shadow-lg bg-white border-4 border-blue-700 w-full">
                <div class="px-6 py-4">
                    <p class="text-blue-900 text-lg">
                        {{ quote.quote }}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 opacity-50">
                    <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-blue-700 border-2 border-blue-700 mr-2 mb-2">
                        Seen: {{ quote.dateSeen }}
                    </span>
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