const capitalize = require('./capitalize')

test('Returns first character of string capitalized', () => {
  expect(capitalize('hello')).toBe('Hello')
})
