export enum NotificationType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}
export interface Notification {
  type: NotificationType;
  message: string;
  timestamp: Date;
}

export function useNotifications() {
  const notifications = useState<Set<Notification>>(
    'notifications',
    () => new Set<Notification>()
  );

  const addNotification = (notification: Omit<Notification, 'timestamp'>) => {
    notifications.value.add({ ...notification, timestamp: new Date() });
  };

  const removeNotification = (notification: Notification) => {
    notifications.value.delete(notification);
  };

  return {
    items: reactive(notifications),
    add: addNotification,
    remove: removeNotification,
    success: (message: string) =>
      addNotification({ message, type: NotificationType.Success }),
    error: (message: string) =>
      addNotification({ message, type: NotificationType.Error }),
    info: (message: string) =>
      addNotification({ message, type: NotificationType.Info }),
    warning: (message: string) =>
      addNotification({ message, type: NotificationType.Warning }),
  };
}
