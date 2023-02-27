<template>
<v-card>

  <v-table density="compact">

    <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-inner-icon="mdi-magnify"
            label="Pesquisar"
            hide-details
            clearable
            @click:clear="cleanSearch"
            @change="doSearch"
          ></v-text-field>
        </v-toolbar>
      </template>
    <thead>
      <tr>
        <th
          class="text-left"
          v-for="item in headers"
          :key="item"
        >
          {{item.title}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        :key="item.name"
      >
        <td v-for="attr in headers" :key="attr">{{ item[attr.attr] }}</td>
      </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPages"
      :total-visible="6"
    ></v-pagination>
  </div>

</v-card>
</template>

<script>
export default {
  props: {
   data: {
    type: Array,
    required: true,
    default: [],
   },
   headers: {
     type: Array,
     required: true,
     default: [],
   },
   totalRegisters: {
     type: Number,
     required: true,
     default: 0,
   },
   title: {
     type: String,
     required: true,
     default: 'People',
   }
  },
  emits: ['changePageOrSearch'],
  data () {
    return {
      page: 1,
      search: '',
    }
  },
  watch: {
    page(newPage) {
      this.$emit('changePageOrSearch', newPage, this.search)
    },
  },
  methods: {
    doSearch(){
      this.page = 1
      this.$emit('changePageOrSearch', this.page, this.search)
    },
    cleanSearch(){
      this.search = ''
      this.page = 1
      this.$emit('changePageOrSearch', this.page, this.search)
    }
  },
  computed: {
    totalPages() {
      if(this.totalRegisters / 10 > parseInt(this.totalRegisters / 10))
        return parseInt(1 + this.totalRegisters / 10)
      else
        return parseInt(this.totalRegisters / 10)
    }
  }


}
</script>
