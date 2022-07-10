<template>
  <div class="App">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
        integrity:
          'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
    ],
  },
}
</script>