# Nuxt - Simple Toast Notification System

Welcome to the `nuxt-example-toast` project! This repository demonstrates a simple yet effective notification system implemented in a Nuxt 3 application. Our goal is to provide a straightforward example of how to integrate toast notifications into a Vue-based project.

## Features

- **Nuxt 3 Framework**: Utilizes the latest features of Nuxt 3.
- **Toast Notifications**: Showcases different types of notifications (info, success, warning, error).
- **Vue 3 Composition API**: Leverages the composition API for state management.
- **Responsive Design**: Ensures compatibility with various devices.

The `useNotifications` composable in the `nuxt-example-toast` project is designed to manage toast notifications within a Vue 3 application using the Composition API. Here's a guide on how to use it:

### Importing `useNotifications`

First, you need to import the `useNotifications` composable into your Vue component where you want to use notifications.

```javascript
import { useNotifications } from '@/composables/useNotifications';
```

### Using `useNotifications` in a Component

Once imported, you can use `useNotifications` in your setup:

```javascript
  const notifications = useNotifications();
```

### Adding Notifications

The `useNotifications` composable provides methods to add notifications of various types:

- **Info**: Display an informational message.
  ```javascript
  notifications.info('Your informational message');
  ```
- **Success**: Show a success message.
  ```javascript
  notifications.success('Your success message');
  ```
- **Warning**: Present a warning message.
  ```javascript
  notifications.warning('Your warning message');
  ```
- **Error**: Indicate an error message.
  ```javascript
  notifications.error('Your error message');
  ```

Each method takes a string message as an argument.

### Removing Notifications

To remove a notification, you can use the `remove` method provided by the composable. This method requires a notification object as a parameter:

```javascript
notifications.remove(notificationObject);
```

The `notificationObject` typically contains details about the notification you want to remove, such as type, message, and timestamp.

### Example

Here’s a simple example of how `useNotifications` can be used in a Vue component:

```vue
<template>
  <button @click="addInfoNotification">Show Info Notification</button>
</template>

<script>
import { useNotifications } from '@/composables/useNotifications';

export default {
  setup() {
    const notifications = useNotifications();

    function addInfoNotification() {
      notifications.info('This is an info notification');
    }

    return { addInfoNotification };
  }
};
</script>
```

In this example, clicking the button triggers an info notification displaying the message "This is an info notification".

Remember, the `useNotifications` composable is part of the state management within the Vue application, and it provides a simple and effective way to handle toast notifications throughout your application.

## Project Structure

- `components/`: Vue components including notification elements.
- `composables/`: Contains `useNotifications` composable for managing notifications.
- `nuxt.config.ts`: Configuration file for Nuxt.
- `package.json`: Defines project dependencies and scripts.

## Working with this repository

### Prerequisites

- Node.js (LTS version recommended)
- A package manager like npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/L422Y/nuxt-example-toast.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nuxt-example-toast
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

### Building for Production

Generate a production build:

```bash
npm run build
# or
yarn build
# or
pnpm run build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm run preview
```

## Contributing

Contributions to enhance `nuxt-example-toast` are welcome. Please feel free to submit pull requests or open issues to discuss potential improvements.

## License

This project is licensed under the MIT License
