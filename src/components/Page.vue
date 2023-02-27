<template>
  <div v-if="loading">
    <v-progress-linear
      indeterminate
      color="secondary"
    />
  </div>

  <v-col cols="12">
    <Table
      :data="data"
      :headers="headers"
      :totalRegisters="totalRegisters"
      :title="title"
      @changePageOrSearch="changePage"
    />
  </v-col>

</template>

<script>
import axios from 'axios'
import Table from '@/components/Table'

export default {
  components: {
    Table,
  },
  props: {
   headers: {
     type: Array,
     required: true,
     default: [],
   },
   endpoint: {
     type: String,
     required: true,
     default: 'people',
   },
   title: {
     type: String,
     required: true,
     default: 'People',
   }
  },
  data () {
    return {
      data: [],
      totalRegisters: 0,
      loading: true,
    }
  },
  mounted() {
    this.loading = true;
    axios.get('https://swapi.dev/api/'+ this.endpoint)
      .then(({ data }) => {
        this.data = data.results;
        this.totalRegisters = data.count
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    changePage(page, search){
      this.data = []
      this.loading = true;

      axios.get('https://swapi.dev/api/'+ this.endpoint + '?page=' + page + '&search=' + search)
        .then(({ data }) => {
          this.data = data.results;
          this.totalRegisters = data.count
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  }
}
</script>
