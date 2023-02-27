<template>
  <v-col cols="12">
    <Page
      title="Vehicles"
      :headers="headers"
      endpoint="vehicles"
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
        {title: 'Model', attr: 'model'},
        {title: 'Manufacturer', attr: 'manufacturer'},
        {title: 'Passengers', attr: 'passengers'},
      ],
    }
  },
}
</script>
