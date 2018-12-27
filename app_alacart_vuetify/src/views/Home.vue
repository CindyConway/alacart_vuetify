<template>
    <div>
      <h1>Time Piker Test</h1>
    <time-test/>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import TimeTest from '../../../src/components/TimeTest.vue';

export default {
  components: {
    HelloWorld,
    TimeTest,
  },
};
</script>
