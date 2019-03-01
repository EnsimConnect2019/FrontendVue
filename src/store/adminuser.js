import axios from 'axios'

const state = {
  status: '',
  addUsers: '',
  users: [],
  updateUsers: ''
}
const getters = {
  status: state => state.status,
  users: state => state.users,
  addUsers: state => state.addUsers,
  updateUsers: state => state.updateUsers
}
const mutations = {
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, data) {
    state.status = 'success'
  },
  auth_error (state) {
    state.status = 'error'
  },
  addRequest (state, user) {
    state.status = 'loading'
  },
  addUsers (state, status) {
    state.addUsers = 'success'
  },
  fetchUsers (state, users) {
    state.users = users
  },
  updateUsers (state, status) {
    state.updateUsers = 'success'
  }
}
const actions = {
  fetchAlluser ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({
        url: 'http://10.195.37.114:8000/api/users',
        params: {role: user.usertype},
        method: 'GET',
        headers: {
          Authorization: 'Token ' + user.token
        }
      })
        .then((response) => {
          commit('fetchUsers', response)
          resolve(response)
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
    })
  },
  addUser ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('addRequest', user)
      axios({url: 'http://10.195.37.114:8000/api/users',
        data: user,
        method: 'POST',
        headers: {
          Authorization: 'Token ' + user.token
        }
      })
        .then(resp => {
          const status = resp.status
          commit('addUsers', { 'status': status })
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
    })
  },
  updateUsers ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('addRequest', user)
      const token = this.getters.token
      const id = user.id
      axios({url: 'http://10.195.37.114:8000/api/users/' + id,
        data: user,
        method: 'PATCH',
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then(resp => {
          const status = resp.status
          commit('updateUsers', { 'status': status })
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
    })
  },
  updateTeacher ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('addRequest', user)
      const token = this.getters.token
      const id = user.id
      axios({url: 'http://10.195.37.114:8000/api/users/' + id,
        data: user,
        method: 'PATCH',
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then(resp => {
          const status = resp.status
          commit('updateTeacher', { 'status': status })
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
    })
  },
  updateParent ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('addRequestt', user)
      const token = this.getters.token
      const id = user.id
      axios({url: 'http://10.195.37.114:8000/api/users/' + id,
        data: user,
        method: 'PATCH',
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then(resp => {
          const status = resp.status
          commit('updateParent', { 'status': status })
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
    })
  }
}
export const user = {
  state,
  getters,
  actions,
  mutations
}
