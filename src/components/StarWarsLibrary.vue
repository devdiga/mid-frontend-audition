<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center">
      <div class="d-flex align-center bg-primary pa-2 mb-3">
        <h1 class="text-h3 font-weight-bold mx-2">Star Wars Library</h1>
        <v-spacer />
        <v-text-field
          bg-color="white rounded-pill mx-2"
          density="compact"
          hide-details="auto"
          placeholder="Busca"
          variant="solo"
        />
      </div>
      <h2 class="text-h6 font-weight-bold mx-4">People</h2>
      <div v-if="loading">
        <v-progress-linear
          indeterminate
          color="secondary"
        />
      </div>
      <v-table
        v-else
        density="compact"
      >
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-right">
              Gender
            </th>
            <th class="text-right">
              Birth year
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="person in people"
            :key="person.id"
          >
            <td class="text-left">
              {{ person.name }}
            </td>
            <td class="text-right">
              {{ person.gender }}
            </td>
            <td class="text-right">
              {{ person.birth_year }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-responsive>
  </v-container>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const loading = ref(false);
const people = ref(null);

onMounted(() => {
  getPeople();
})

function getPeople() {
  loading.value = true;
  axios.get('https://swapi.dev/api/people')
    .then(({ data }) => {
      people.value = data.results;
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
