<template>
  <v-col cols="12">
    <Page
      title="Films"
      :headers="headers"
      endpoint="films"
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
        {title: 'Title', attr: 'title'},
        {title: 'Director', attr: 'director'},
        {title: 'Producer', attr: 'producer'},
      ],
    }
  },
}
</script>
