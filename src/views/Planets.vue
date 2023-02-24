<template>
  <v-col cols="12">
    <Page
      title="Planets"
      :headers="headers"
      endpoint="planets"
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
        {title: 'Gravity', attr: 'gravity'},
        {title: 'Terrain', attr: 'terrain'},
      ],
    }
  },
}
</script>
