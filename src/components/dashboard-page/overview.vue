<template>
  <div>
    <section>
      <h2>Overview</h2>
      <Card :title='Presets' :img=''>
        <p slot='description'>
          Description presets
        </p>
      </Card>
      <Card :title='Presets' :img=''>
        <p slot='description'>
          Description Articles
        </p>
      </Card>
    </section>
  </div>
</template>

<script>
  import Card from './card.vue'

  export default {
    name: 'Overview',
    data () {
      return {
      }
    },
    components: {
      Card
    }
  }
</script>

<style>

</style>
