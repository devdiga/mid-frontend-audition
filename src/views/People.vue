<template>
  <v-col cols="12">
    <Page
      title="People"
      :headers="headers"
      endpoint="people"
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
        {title: 'Gender', attr: 'gender'},
        {title: 'Birth Year', attr: 'birth_year'},
      ],
    }
  },
}
</script>
