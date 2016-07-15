import Ember from 'ember';

export function indexNew(params/*, hash*/) {

  return +params+1;
}

export default Ember.Helper.helper(indexNew);
