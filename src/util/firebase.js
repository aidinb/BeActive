import analytics from '@react-native-firebase/analytics';

export default {
  init() {
    analytics().setAnalyticsCollectionEnabled(true);
  },

  setUserId(userId) {
    analytics().setUserId(userId);
  },

  setUserProperty(name, value) {
    analytics().setUserProperty(name, value);
  },

  trackScreenView(screenName) {
    analytics().setCurrentScreen(screenName);
  },

  trackEvent(category, action, params) {
    analytics().logEvent(category + '_' + action, params);
  },

  setLogEvent(name, params) {
    analytics().logEvent(name, params);
  },

  trackPurchaseEvent(transaction) {
    analytics().logEvent('ecommerce_purchase', {
      item_id: transaction.productId,
      item_name: transaction.productId,
      value: transaction.revenue,
      price: transaction.revenue,
      currency: transaction.currency,
      transaction_id: transaction.id,
    });
  },
};
