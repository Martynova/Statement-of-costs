import Ember from 'ember';

export default Ember.Controller.extend({
  backToIndex(dashboard) {
      console.log('+--- cancel action called in car new controller');
      this.transitionToRoute('dashboard.car');
    },
  actions: {
    save(model) {
      console.log('+--- save action called in car new controller');
      //this.transitionToRoute('dashboard.car');
    },
    
  }
});