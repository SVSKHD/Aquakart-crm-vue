import { Notify } from "quasar";

let lastErrorNotification;
let ongoingNotification;
let allNotifications = [];

function createNotification(message, options) {
  const dismiss = Notify.create({
    actions: [
      {
        icon: "close",
        color: "white",
        handler: () => {
          /* ... */
        },
      },
    ],
    message: message,
    position: "bottom",
    ...options,
  });

  allNotifications.push(dismiss);
  return () => {
    // Remove function from notification dismissal array
    allNotifications = allNotifications.filter((value) => {
      return value !== dismiss;
    });

    dismiss();
  };
}

export default {
  createNotification,
  createInfoNotification(message) {
    return createNotification(message, { timeout: 2000, type: "info" });
  },
  createSuccessNotification(message) {
    return createNotification(message, { timeout: 2000, type: "positive" });
  },
  createErrorNotification(message) {
    return createNotification(message, { timeout: 0, type: "negative" });
  },
  dismiss() {
    allNotifications.forEach((notification) => {
      notification();
    });
    allNotifications = [];
  },
  dismissLastErrorNotification() {
    if (lastErrorNotification) {
      lastErrorNotification();
    }
    lastErrorNotification = null;
  },
  dismissOngoingNotification() {
    if (ongoingNotification) {
      ongoingNotification();
    }
    ongoingNotification = null;
  },
};
