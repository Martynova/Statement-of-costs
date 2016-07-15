import Ember from 'ember';

export default Ember.Controller.extend({
	backToIndex(dashboard) {
      console.log('+--- cancel action called in car edit controller');
      this.transitionToRoute('dashboard');
    },
  actions: {
    save(model) {
      console.log('+--- save action called in car edit controller');
      this.transitionToRoute('dashboard');
    },
    
  }
});
