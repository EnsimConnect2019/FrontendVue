<template>
  <div class="header">
    <v-app style="height:60px;">
      <v-toolbar dark color="primary">
        <router-link to="/"><v-toolbar-title class="white--text">Title</v-toolbar-title></router-link>
        <v-spacer></v-spacer>
        <v-menu bottom origin="center" transition="scale-transition" v-if=" this.$store.getters.userrole === ''">
          <v-btn slot="activator" color="primary" dark >
            User Login
          </v-btn>
          <div class="menu-list" origin="center">
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i">
                <v-list-tile-title>
                  <router-link :to="item.url">
                    {{ item.title }}
                  </router-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </div>
        </v-menu>
        <v-menu bottom origin="center" transition="scale-transition" v-else >
          <v-btn slot="activator" color="primary" dark >
            My Account
          </v-btn>
          <div class="menu-list" origin="center">
            <v-list>.............................................
              <v-list-tile v-for="(litem, j) in litems" :key="j">
                <v-list-tile-title>
                  <router-link :to="litem.url" v-if="litem.url != '#'">
                    {{ litem.title }}
                  </router-link>
                  <a @click="logoutuser()" v-else > {{litem.title}} </a>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </div>
        </v-menu>
      </v-toolbar>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'FrontendHeader',
  data: () => ({
    items: [
      { title: 'Parent Login', url: 'userlogin', oval: 'p' },
      { title: 'Teacher Login', url: 'userlogin', val: 't' }
    ],
    litems: [
      { title: 'My Dashboard', url: 'dashboard' },
      { title: 'Logout', url: '#', evt: 'logout' }
    ]
  }),
  methods: {
    logoutuser: function () {
      alert('You want to logout')
      this.$store.dispatch('logoutuser')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>

</style>
