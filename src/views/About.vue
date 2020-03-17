<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="newUser.name"/>
    <sd-button @click="setNewUser()">Add User</sd-button>
    {{users}}
    {{newUser}}
  </div>
</template>
<script>
import SdButton from '@/layout/SdButton'
export default {
  name: 'About',
  data () {
    return {
      newUser: {
        name: ''
      },
      users: [],
      serverError: null
    }
  },
  methods: {
    setNewUser () {
      console.log('fired')
      this.postUser(this.newUser)
      this.newUser = {}
    },
    postUser: async function (payload) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
          this.users = data.users
          this.getUsers()
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    getUsers: async function () {
      fetch('/api/users')
        .then(res => res.json())
        .then(json => {
          if (json.error) {
            this.serverError = json.error
          } else {
            this.users = json.users
          }
        })
    }
  },
  metaInfo: {
    title: 'About'
  },
  created () {
    this.getUsers()
  },
  components: {
    SdButton
  }
}
</script>
