<template>
<v-row>
  <v-col cols="6">
    <v-card>

      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>

      <div v-if="!loading">
        <apexchart type="bar" :options="chartOptions" :series="chartSeries" height="350" />
      </div>

    </v-card>

  </v-col>

  <v-col cols="6">
    <v-card>

      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>

      <div v-if="!loading">
        <apexchart type="bar" :options="chartOptions" :series="chartSeries" height="350" />
      </div>

    </v-card>

  </v-col>




</v-row>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data () {
    return {
      loading: false,
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        title: {
          text: "How many people by gender",
          align: "center"
        },
        colors:['#F44336'],
        xaxis: {
          categories: []
        }
      },
      chartSeries: [{
        name: "People",
        data: []
      }]
    }
  },
  mounted(){
    this.loading = true
    axios.get('https://swapi.dev/api/people')
      .then(({ data }) => {

        console.log("get data")
        console.log(data.results)

        this.chartOptions.xaxis.categories = data.results.reduce((gender, person) => {
          if (!gender[person.gender]) {
            gender[person.gender] = true;
          }
          return gender;
        }, {});

        this.chartOptions.xaxis.categories = Object.keys(this.chartOptions.xaxis.categories);

        this.chartSeries[0].data = data.results.reduce((gender, person) => {
          if (!gender[person.gender]) {
            gender[person.gender] = 1;
          } else {
            gender[person.gender] += 1;
          }
          return gender;
        }, {});

        this.chartSeries[0].data = Object.values(this.chartSeries[0].data);

      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
