const NotificationHelper = {
  sendNotification({title, options}) {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
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
