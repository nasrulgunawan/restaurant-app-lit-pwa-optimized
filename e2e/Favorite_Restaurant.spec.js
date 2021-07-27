const assert = require('assert');

Feature('Favorite Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorites');
});

Scenario('Add restaurant to favorite list', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('x-content');
  I.seeElement('pierce/.icon-container');
  const firstRestaurantName = await I.grabTextFrom('pierce/.card-title');
  I.forceClick('pierce/.icon-container');
  I.seeElement('pierce/.icon-unfavorite');
  I.amOnPage('/#/favorites');
  I.seeElement('pierce/.icon-favorite');
  const favoriteRestaurantName = await I.grabTextFrom('pierce/.card-title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('Add then remove restaurant from favorite list', ({I}) => {
  I.amOnPage('/');
  I.seeElement('x-content');
  I.seeElement('pierce/.icon-container');
  I.forceClick('pierce/.icon-container');
  I.seeElement('pierce/.icon-unfavorite');

  I.amOnPage('/#/favorites');
  I.seeElement('pierce/x-card');
  I.seeElement('pierce/.icon-container');
  I.forceClick('pierce/.icon-container');

  I.amOnPage('/#/favorites');
  I.see('Data tidak tersedia', 'pierce/p');
});
