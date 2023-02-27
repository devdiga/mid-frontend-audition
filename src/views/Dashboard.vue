<template>


<div class="text-center ma-2">
  <v-snackbar
    v-model="snackbar"
  >
    {{ stackbarText }}

    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</div>

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

<v-row>
  <v-col cols="12">
    <v-card>

      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>

      <div v-if="!loading">
        <apexchart
          type="treemap"
          :options="treeChart.chartOptions"
          :series="treeChart.chartOptions.series"
          height="400"
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
      snackbar: false,
      peopleData: [],
      stackbarText: '',
      peopleByGenderChart: {
        chartOptions: {
          chart: {
            id: "vuechart-example"
          },
          title: {
            text: "People by gender",
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
            text: "People by eye color",
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
            text: "People by skin color (bars)",
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
      treeChart: {
        chartOptions: {
          chart: {
            height: 400,
            type: 'treemap'
          },
          title: {
            text: "People by skin color",
            align: "center"
          },
          plotOptions: {
            treemap: {
              distributed: true,
              enableShades: false
            }
          },

          series: [{
            data: [],
          }]
        },
      }

    }
  },
  mounted(){
    this.loading = true
    axios.get('https://swapi.dev/api/people')
      .then( response1 => {

        this.peopleData = response1.data.results

        return axios.get('https://swapi.dev/api/people?page=2')
      })
      .then( response2 => {

          this.peopleData = this.peopleData.concat(response2.data.results)


          this.peopleByGenderChart.chartOptions.xaxis.categories = this.peopleData.reduce((gender, person) => {
            if (!gender[person.gender]) {
              gender[person.gender] = true;
            }
            return gender;
          }, {});

          this.peopleByGenderChart.chartOptions.xaxis.categories = Object.keys(this.peopleByGenderChart.chartOptions.xaxis.categories);

          this.peopleByGenderChart.chartSeries[0].data = this.peopleData.reduce((gender, person) => {
            if (!gender[person.gender]) {
              gender[person.gender] = 1;
            } else {
              gender[person.gender] += 1;
            }
            return gender;
          }, {});

          this.peopleByGenderChart.chartSeries[0].data = Object.values(this.peopleByGenderChart.chartSeries[0].data);

          /***********************************************************************/

          this.peopleByEyeColorChart.chartOptions.xaxis.categories = this.peopleData.reduce((eye_color, person) => {
            if (!eye_color[person.eye_color]) {
              eye_color[person.eye_color] = true;
            }
            return eye_color;
          }, {});

          this.peopleByEyeColorChart.chartOptions.xaxis.categories = Object.keys(this.peopleByEyeColorChart.chartOptions.xaxis.categories);

          this.peopleByEyeColorChart.chartSeries[0].data = this.peopleData.reduce((eye_color, person) => {
            if (!eye_color[person.eye_color]) {
              eye_color[person.eye_color] = 1;
            } else {
              eye_color[person.eye_color] += 1;
            }
            return eye_color;
          }, {});

          this.peopleByEyeColorChart.chartSeries[0].data = Object.values(this.peopleByEyeColorChart.chartSeries[0].data);

          /***********************************************************************/

          this.peopleBySkinColorChart.chartOptions.xaxis.categories = this.peopleData.reduce((skin_color, person) => {
            if (!skin_color[person.skin_color]) {
              skin_color[person.skin_color] = true;
            }
            return skin_color;
          }, {});

          this.peopleBySkinColorChart.chartOptions.xaxis.categories = Object.keys(this.peopleBySkinColorChart.chartOptions.xaxis.categories);

          this.peopleBySkinColorChart.chartSeries[0].data = this.peopleData.reduce((skin_color, person) => {
            if (!skin_color[person.skin_color]) {
              skin_color[person.skin_color] = 1;
            } else {
              skin_color[person.skin_color] += 1;
            }
            return skin_color;
          }, {});

            /********** HELPER FOR TREE CHART******************/

              const newArray = Object.entries(this.peopleBySkinColorChart.chartSeries[0].data).map(function(entry) {
                return { x: entry[0], y: entry[1] };
              });

              this.treeChart.chartOptions.series = [{data: newArray }]

            /********** END HELPER FOR TREE CHART******************/

          this.peopleBySkinColorChart.chartSeries[0].data = Object.values(this.peopleBySkinColorChart.chartSeries[0].data);

          /***********************************************************************/

      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        this.snackbar = true;
        this.stackbarText = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}


</script>
