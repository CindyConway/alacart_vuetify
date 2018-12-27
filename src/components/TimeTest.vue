<template>
<div>
    <v-layout row wrap>
    <v-flex md12 lg6>
      <h2>Green Test</h2>
      <v-time-picker v-model="e4" color="green lighten-1"></v-time-picker>
    </v-flex>
    <v-flex md12 lg6 class="hidden-xs-only">
      <h2>Pink Test</h2>
      <v-time-picker v-model="e4" color="green lighten-1" header-color="primary"></v-time-picker>
    </v-flex>
   <v-flex xs12 sm6>
      <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
    </v-flex>
    <v-flex xs12 sm6 class="hidden-xs-only">
      <v-date-picker
      v-model="picker2"
      color="green lighten-1"
       header-color="primary">
       </v-date-picker>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      e4: null,
    };
  },
};
</script>
