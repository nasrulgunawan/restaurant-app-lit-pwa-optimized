const NotificationHelper = {
  sendNotification({title, options}) {
    if (!this._checkAvailability()) {
      return;
    }

    if (!this._checkPermission()) {
      this._requestPermission();
      return;
    }

    this._showNotification({title, options});
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  _showNotificationLog(status) {
    const messages = {
      'denied': 'Notification Denied',
      'default': 'Permission closed',
    };

    console.log(messages[status]);
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();
    this._showNotificationLog(status);
  },

  async _showNotification({title, options}) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
