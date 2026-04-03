const hello = require('./index');

test('basic test', () => {
  expect(hello()).toBe("Hello IAM System");
});
