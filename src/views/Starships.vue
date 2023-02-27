<template>
  <v-col cols="12">
    <Page
      title="Starships"
      :headers="headers"
      endpoint="starships"
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
        {title: 'Manufacturer', attr: 'manufacturer'},
        {title: 'Length', attr: 'length'},
        {title: 'Passengers', attr: 'passengers'},
      ],
    }
  },
}
</script>
