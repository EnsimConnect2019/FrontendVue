<template>
    <div class="change_password">
      <frontend-header></frontend-header>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm4 md2>
            <front-sidebar></front-sidebar>
          </v-flex>
          <v-flex xs12 sm4 md6>
            <v-content>
              <v-container
                fluid
                grid-list-md text-xs-center
              >
                <v-flex xs11>
                  <div class="font-weight-thin my-2 display-1 text-lg-left">
                    Change Password
                  </div>
                </v-flex>
                <v-layout row wrap>
                  <v-flex xs11>
                    <div class="font-weight-thin my-2 display-1 text-lg-left">
                      <v-divider class=""></v-divider>
                    </div>
                  </v-flex>
                  <v-flex xs11 pl-3>
                    <form>
                      <v-text-field
                        v-model="npassword"
                        v-validate="'required|max:20'"
                        :counter="20"
                        :error-messages="errors.collect('npassword')"
                        label="New Password"
                        data-vv-name="npassword"
                        required
                        ref="npassword"
                      ></v-text-field>
                      <v-text-field
                        v-model="cpassword"
                        v-validate="'required|max:20|confirmed:npassword'"
                        :counter="20"
                        :error-messages="errors.collect('cpassword')"
                        label="Confirm Password"
                        data-vv-name="cpassword"
                        required
                      ></v-text-field>
                      <v-btn @click="change_password">submit</v-btn>
                      <v-btn @click="clear">clear</v-btn>
                    </form>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-content>
          </v-flex>
        </v-layout>
      </v-container>
      <frontend-footer></frontend-footer>
    </div>
</template>

<script>
import FrontendHeader from './FrontendHeader'
import FrontendFooter from './FrontendFooter'
import FrontSidebar from './FrontSidebar'
export default {
  name: "ChangeUserPassword",
  components: {FrontSidebar, FrontendFooter, FrontendHeader},
  data: () => ({
    npassword: '',
    cpassword: '',
    dictionary: {
      custom: {
        npassword: {
          required: () => 'Password can not be empty',
          max: 'The password field may not be greater than 20 characters'
          // custom messages
        },
        cpassword: {
          required: () => 'Confirm Password can not be empty',
          max: 'The password field may not be greater than 20 characters',
          confirmed: 'The Confirm password field mismatch22'
          // custom messages
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.npassword = null
      this.cpassword = null
    },
    change_password: function () {
      const password = this.npassword
      const UserId = this.$store.getters.useruseid
      const Usertoken = this.$store.getters.usertoken
      this.$store.dispatch('AUTH_USER_UPDATE', { password, UserId, Usertoken })
        .then((response) => {
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
          //this.submited = true
        })
    }
  }
}
</script>

<style scoped>

</style>
