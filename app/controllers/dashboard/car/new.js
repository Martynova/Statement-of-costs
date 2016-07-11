import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    save(model) {
      console.log('+--- save action called in car new controller');
    },
    cancel() {
      console.log('+--- cancel action called in car new controller');
    }
  }
});
