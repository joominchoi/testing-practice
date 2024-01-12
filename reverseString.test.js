const reverseString = require('./reverseString')

test('Returns string reversed', () => {
  expect(reverseString('hello')).toBe('olleh')
})