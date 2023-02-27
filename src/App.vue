<template>
  <v-app id="inspire">

    <v-navigation-drawer
        permanent
        location="left"
        v-model="drawer"
      >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            title="Star Wars Library"
            subtitle="made by Leandro Barbosa"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in menu"
            :key="item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.to">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar
        app
        color="teal-darken-4"
        :image="AppBarBackground"
      >
        <template v-slot:image>
          <v-img></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title> Star Wars Library</v-app-bar-title>

        <v-spacer></v-spacer>

      </v-app-bar>

    <v-main>
      <v-col cols="12">
        <router-view />
      </v-col>

    </v-main>
  </v-app>
</template>

<script>
import AppBarBackground from '@/assets/img/bg-star-wars.jpg';

export default {
  data: () => ({
    drawer: false,
    menu: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      {title: 'People', icon: 'mdi-account-group', to: '/people'},
      {title: 'Films', icon: 'mdi-video-vintage', to: '/films'},
      {title: 'Planets', icon: 'mdi-earth', to: '/planets'},
      {title: 'Species', icon: 'mdi-family-tree', to: '/species'},
      {title: 'Starships', icon: 'mdi-rocket-launch', to: '/starships'},
      {title: 'Vehicles', icon: 'mdi-car', to: '/vehicles'},
    ],
    AppBarBackground: AppBarBackground,
  }),
}
</script>

