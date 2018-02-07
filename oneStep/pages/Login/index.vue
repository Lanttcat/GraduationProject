<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-text-field
          name="phone"
          prepend-icon="phone"
          label="Enter your password"
          hint="输入手机号码"
          v-model="password"
          min="11"
          max='11'
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          counter
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Visible</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          :append-icon="e2 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e2 = !e2)"
          value="wqfasds"
          class="input-group--focused"
          :type="e2 ? 'password' : 'text'"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Not visible</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          :append-icon="e3 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e3 = !e3)"
          value="wqfasds"
          class="input-group--focused"
          :type="e3 ? 'password' : 'text'"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Error</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          :append-icon="e4 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e4 = !e4)"
          value="Pa"
          :rules="[() => ('The email and password you entered don\'t match')]"
          error
          :type="e4 ? 'password' : 'text'"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    name: 'login',
    data () {
      return {
        e1: false,
        e2: false,
        e3: false,
        e4: false,
        password: 'Password'
      }
    }
  }
</script>
