import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	
  newDate:Ember.computed('model.dataName', function() {
    console.log('model.dataName',this.get('model.dataName') );
      return this.get('model.dataName');
  }),

	actions: {
    save() {
      console.log('+- save action in edit-form component');

 
      this.get('model').save().then((dashboard)=>{
      	return this.save(dashboard);
      })
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.back(this.get('dashboard.model'));
    }
  }
});
