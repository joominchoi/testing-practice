const capitalize = require('./capitalize')

test('Returns first character capitalized', () => {
  expect(capitalize('hello')).toBe('Hello')
})
