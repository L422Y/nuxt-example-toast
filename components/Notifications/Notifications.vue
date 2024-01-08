<template>
  <transition-group name="fade" tag="div" class="notifications">
    <template v-for="notification in activeNotifications">
      <NotificationsItem :notification />
    </template>
  </transition-group>
</template>
<script lang="ts" setup>
const notifications = useNotifications();
const activeNotifications = computed(() => {
  return notifications.items.value;
});
</script>
<style scoped>
.notifications {
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  gap: 0.4rem;
  padding: 0.25rem;
}
</style>
