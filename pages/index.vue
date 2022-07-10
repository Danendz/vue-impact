<template>
 <div>
  Home page
 </div>
</template>

<script>
export default {
  name: 'IndexPage',
  beforeMount() {
    this.$router.push('/gacha')
  }
}
</script>