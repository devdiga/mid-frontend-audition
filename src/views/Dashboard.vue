<template>
<v-row>
  <v-col cols="4">
    <v-card>

      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>

      <div v-if="!loading">
        <apexchart
          type="bar"
          :options="peopleByGenderChart.chartOptions"
          :series="peopleByGenderChart.chartSeries"
          height="350"
        />
      </div>

    </v-card>

  </v-col>

  <v-col cols="4">
    <v-card>

      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>

      <div v-if="!loading">
        <apexchart
          type="bar"
          :options="peopleByEyeColorChart.chartOptions"
          :series="peopleByEyeColorChart.chartSeries"
          height="350"
        />
      </div>

    </v-card>

  </v-col>

    <v-col cols="4">
    <v-card>

      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>

      <div v-if="!loading">
        <apexchart
          type="bar"
          :options="peopleBySkinColorChart.chartOptions"
          :series="peopleBySkinColorChart.chartSeries"
          height="350"
        />
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
      peopleByGenderChart: {
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
      },
      peopleByEyeColorChart: {
        chartOptions: {
          chart: {
            id: "vuechart-example"
          },
          title: {
            text: "How many people by eye color",
            align: "center"
          },
          colors:['#E91E63'],
          xaxis: {
            categories: []
          }
        },
        chartSeries: [{
          name: "People",
          data: []
        }]
      },
      peopleBySkinColorChart: {
        chartOptions: {
          chart: {
            id: "vuechart-example"
          },
          title: {
            text: "How many people by skin color",
            align: "center"
          },
          colors:['#9C27B0'],
          xaxis: {
            categories: []
          }
        },
        chartSeries: [{
          name: "People",
          data: []
        }]
      },

    }
  },
  mounted(){
    this.loading = true
    axios.get('https://swapi.dev/api/people')
      .then(({ data }) => {

        console.log("get data")
        console.log(data.results)

        this.peopleByGenderChart.chartOptions.xaxis.categories = data.results.reduce((gender, person) => {
          if (!gender[person.gender]) {
            gender[person.gender] = true;
          }
          return gender;
        }, {});

        this.peopleByGenderChart.chartOptions.xaxis.categories = Object.keys(this.peopleByGenderChart.chartOptions.xaxis.categories);

        this.peopleByGenderChart.chartSeries[0].data = data.results.reduce((gender, person) => {
          if (!gender[person.gender]) {
            gender[person.gender] = 1;
          } else {
            gender[person.gender] += 1;
          }
          return gender;
        }, {});

        this.peopleByGenderChart.chartSeries[0].data = Object.values(this.peopleByGenderChart.chartSeries[0].data);

        /***********************************************************************/

        this.peopleByEyeColorChart.chartOptions.xaxis.categories = data.results.reduce((eye_color, person) => {
          if (!eye_color[person.eye_color]) {
            eye_color[person.eye_color] = true;
          }
          return eye_color;
        }, {});

        this.peopleByEyeColorChart.chartOptions.xaxis.categories = Object.keys(this.peopleByEyeColorChart.chartOptions.xaxis.categories);

        this.peopleByEyeColorChart.chartSeries[0].data = data.results.reduce((eye_color, person) => {
          if (!eye_color[person.eye_color]) {
            eye_color[person.eye_color] = 1;
          } else {
            eye_color[person.eye_color] += 1;
          }
          return eye_color;
        }, {});

        this.peopleByEyeColorChart.chartSeries[0].data = Object.values(this.peopleByEyeColorChart.chartSeries[0].data);

        /***********************************************************************/

        this.peopleBySkinColorChart.chartOptions.xaxis.categories = data.results.reduce((skin_color, person) => {
          if (!skin_color[person.skin_color]) {
            skin_color[person.skin_color] = true;
          }
          return skin_color;
        }, {});

        this.peopleBySkinColorChart.chartOptions.xaxis.categories = Object.keys(this.peopleBySkinColorChart.chartOptions.xaxis.categories);

        this.peopleBySkinColorChart.chartSeries[0].data = data.results.reduce((skin_color, person) => {
          if (!skin_color[person.skin_color]) {
            skin_color[person.skin_color] = 1;
          } else {
            skin_color[person.skin_color] += 1;
          }
          return skin_color;
        }, {});

        this.peopleBySkinColorChart.chartSeries[0].data = Object.values(this.peopleBySkinColorChart.chartSeries[0].data);


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
