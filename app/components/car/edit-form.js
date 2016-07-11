import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    save() {
      console.log('+- save action in edit-form component');
      this.get('model').save().then((dashboard)=>{
      	return this.save(dashboard);
      })
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel();
    }
  }
});
