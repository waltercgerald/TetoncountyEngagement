import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this._super();
    this.render('index-sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
  }
});
