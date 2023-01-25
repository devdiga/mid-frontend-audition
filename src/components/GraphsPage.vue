<template>
  <div>
    <button class="btn btn-primary" @click="showGraphs = true">Open Graphs Page</button>
    <div v-if="showGraphs">
      <div class="row">
        <div class="col-md-3">
          <canvas ref="chart1" width="200" height="200"></canvas>
        </div>
        <div class="col-md-3">
          <canvas ref="chart2" width="200" height="200"></canvas>
        </div>
        <div class="col-md-3">
          <canvas ref="chart3" width="200" height="200"></canvas>
        </div>
        <div class="col-md-3">
          <canvas ref="chart4" width="200" height="200"></canvas>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <select class="form-control" v-model="searchType">
              <option value="people">People</option>
              <option value="films">Films</option>
              <option value="planets">Planets</option>
            </select>
          </div>
          <div v-if="loading" class="text-center">Loading...</div>
          <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>
        </div>
      </div>
      <button class="btn btn-secondary" @click="showGraphs = false">Close Graphs Page</button>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import Chart from 'chart.js'

export default {
  data() {
    return {
      showGraphs: false,
      searchType: 'people',
      results: [],
      loading: false,
      error: null
    }
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        const res = await axios.get(`https://swapi.dev/api/${this.searchType}`);
        this.results = res.data.results;
        this.createCharts();
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    createCharts() {
      // create the first chart
      const ctx1 = this.$refs.chart1.getContext('2d');
      const chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: this.results.map(result => result.name),
          datasets: [{
            label: 'Height (cm)',
            data: this.results.map(result => result.height),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      // create the second chart
      const ctx2 = this.$refs.chart2.getContext('2d');
      const chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
          labels: this.results.map(result => result.gender),
          datasets: [{
            data: this.results.map(result => result.gender === "male" ? 1 : 0).reduce((a, b) => a + b, 0),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
            {
              data: this.results.map(result => result.gender === "female" ? 1 : 0).reduce((a, b) => a + b, 0),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
        },
      });

      // create the third chart
      const ctx3 = this.$refs.chart3.getContext('2d');
      const chart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
          labels: this.results.map(result => result.eye_color),
          datasets: [{
            data: this.results.map(result => result.eye_color === "blue" ? 1 : 0).reduce((a, b) => a + b, 0),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
            {
              data: this.results.map(result => result.eye_color === "brown" ? 1 : 0).reduce((a, b) => a + b, 0),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              data: this.results.map(result => result.eye_color === "green" ? 1 : 0).reduce((a, b) => a + b, 0),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
        },
      });

      // create the fourth chart
      const ctx4 = this.$refs.chart4.getContext('2d');
      const chart4 = new Chart(ctx4, {
        type: 'line',
        data: {
          labels: this.results.map(result => result.name),
          datasets: [{
            label: 'Mass (kg)',
            data: this.results.map(result => result.mass),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  },
  mounted() {
    const ctx1 = document.getElementById('chart1');

  }
}
</script>

<style>
canvas {
  max-width: 100%;
}
</style>
