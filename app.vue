<template>
  <main>
    <Notifications />
    <div>Hello World</div>

    <div class="buttons">
      <button @click="notifications.info('hello world.')">Add Info</button>
      <button @click="notifications.warning('hello world...')">
        Add Warning
      </button>
      <button @click="notifications.error('hello world!@#')">Add Error</button>
      <button @click="notifications.success('hello world!!1')">
        Add Success
      </button>
    </div>
  </main>
</template>
<script lang="ts" setup>
const notifications = useNotifications();
</script>
<style>
.buttons {
  margin-top: 2rem;
  display: grid;
  width: 10rem;
  gap: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
