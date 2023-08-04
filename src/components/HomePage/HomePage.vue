<template>
  <div class="hello">
    <h1>Hello, this is home.</h1>
    <TasksList />
  </div>
</template>

<script>
import TasksList from '../TasksList/TasksList.vue'; // Ajusta la ruta según la ubicación de TasksList.vue

export default {
  name: 'HomePage',
  components: {
    TasksList
  },
  props: {
    msg: String
  }
};
</script>


<style scoped>
@import './HomePage.css';

</style>
