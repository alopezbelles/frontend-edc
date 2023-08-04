<template>
  <div>
    <h2>Registros de la tabla</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios.get('http://127.0.0.1:8000/alltasks')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las tareas:', error);
        });
    },
  },
};
</script>

<style scoped>
@import './TasksList.css';

</style>
