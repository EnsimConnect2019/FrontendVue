<template>
  <div id="adminLogin">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Administrator Login</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <form>
                  <v-card-text>
                    <div>
                      <v-alert v-if="submited"
                        :value="true"
                        color="error"
                        icon="warning"
                        outline
                      >
                        This is a error alert.
                      </v-alert>
                    </div>
                    <v-text-field
                      v-model="username"
                      label="User Name"
                      data-vv-name="username"
                      prepend-icon="person"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      v-validate="'required'"
                      label="Password"
                      data-vv-name="password"
                      prepend-icon="lock"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="post" color="primary">Login</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  name: 'adminLogin',
  data: () => {
    return {
      username: '',
      password: '',
      submited: false
    }
  },
  methods: {
    post: function () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        username: this.username,
        password: this.password
      }).then(function (data) {
        this.submited = true
        console.log(data)
        console.log(data.status)
      })
    }
  }
}
</script>
