import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('1', { '4': true }, ['2', '3'])).toBe('1 2 3 4');
  });
});
