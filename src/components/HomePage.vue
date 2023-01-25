<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border">
      <div class="container-fluid">
        <div class="search-container" align="center">
          <input type="text" v-model="search" placeholder="Enter search term" @keyup="searchHandler" class="search-input" />
          <select v-model="searchType" class="search-select">
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
          </select>
        </div>
      </div>
    </nav>
    <div class="search-container">
      <input type="text" v-model="search" placeholder="Enter search term" @keyup="searchHandler" class="search-input" />
      <select v-model="searchType" class="search-select">
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="planets">Planets</option>
      </select>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="results.length">
      <table class="results-table">
        <thead>
        <tr>
          <th v-if="searchType === 'people'">Name</th>
          <th v-else-if="searchType === 'films'">Title</th>
          <th v-else-if="searchType === 'planets'">Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="result in results" :key="result.url">
          <td v-if="searchType === 'people'">
            <a href="#" @click="showDetail(result)">{{ result.name }}</a>
          </td>
          <td v-else-if="searchType === 'films'">
            <a href="#" @click="showDetail(result)">{{ result.title }}</a>
          </td>
          <td v-else-if="searchType === 'planets'">
            <a href="#" @click="showDetail(result)">{{ result.name }}</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header border">
          <h2>{{modalData.name || modalData.title}}</h2>
          <button @click="hideModal">Close</button>
        </div>
        <div class="modal-body">
          <p v-if="searchType === 'people'">Birth Year: {{modalData.birth_year}}, Eye Color: {{modalData.eye_color}}, Gender: {{modalData.gender}}, Height: {{modalData.height}}</p>
          <p v-else-if="searchType === 'films'">Director: {{modalData.director}}, Episode: {{modalData.episode_id}}, Producer: {{modalData.producer}}, Release Date: {{modalData.release_date}}</p>
          <p v-else-if="searchType === 'planets'">Population: {{modalData.population}}, Diameter: {{modalData.diameter}}, Gravity: {{modalData.gravity}}, Climate: {{modalData.climate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      search: '',
      searchType: 'people',
      results: [],
      loading: false,
      error: null,
      showModal: false,
      modalData: {}
    }
  },
  methods: {
    async searchHandler() {
      try {
        this.loading = true;
        const res = await axios.get(`https://swapi.dev/api/${this.searchType}/?search=${this.search}`);
        this.results = res.data.results;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    showDetail(result) {
      this.modalData = result;
      this.showModal = true;
    },
    hideModal() {
      this.modalData = {};
      this.showModal = false;
      if (sear){

      }
    }
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.search-input {
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
}
.search-select {
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
}
.loading {
  text-align: center;
  font-size: 1.5em;
  margin-top: 1em;
}
.error {
  text-align: center;
  color: red;
  font-size: 1.5em;
  margin-top: 1em;
}
.results-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1em;
}
.results-table th,
.results-table td {
  padding: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
</style>


