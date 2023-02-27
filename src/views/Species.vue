<template>
  <v-col cols="12">
    <Page
      title="Species"
      :headers="headers"
      endpoint="species"
   />
  </v-col>
</template>

<script>
import Page from '@/components/Page'
export default {
  components: {
    Page,
  },
  data () {
    return {
      headers: [
        {title: 'Name', attr: 'name'},
        {title: 'Classification', attr: 'classification'},
        {title: 'Average height', attr: 'average_height'},
        {title: 'Average lifespan', attr: 'average_lifespan'},
      ],
    }
  },
}
</script>
