<template>
  <Transition name="fade">
    <div class="notification" :class="passed.notification.type">
      <button class="close" @click="removeNotification">✕</button>
      <div class="message">
        <div>{{ emoji }}</div>
        <div>{{ passed.notification.message }}</div>
      </div>
      <time>{{ passed.notification.timestamp.toLocaleTimeString() }}</time>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
const passed = defineProps<{ notification: Notification }>();

const removeNotification = () => {
  useNotifications().remove(passed.notification);
};

const emoji = computed(() => {
  switch (passed.notification.type) {
    case NotificationType.Info:
      return 'ℹ️';
    case NotificationType.Success:
      return '✨';
    case NotificationType.Warning:
      return '⚠️';
    case NotificationType.Error:
      return '🚨';
    default:
      return '';
  }
});
</script>
<style scoped>
.notification {
  padding: 0.5rem;
  width: 200px;
  position: relative;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
  &.info {
    background: lightblue;
  }
  &.warning {
    background: lightyellow;
  }
  &.success {
    background: #ddffdd;
  }

  &.error {
    background: #ffeeee;
  }
}
.close {
  border: 0;
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.4rem;
}
.message {
  display: flex;
  gap: 0.25rem;
}
time {
  font-size: 12px;
}
</style>
