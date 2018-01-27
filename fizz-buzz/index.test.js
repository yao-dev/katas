import { printIt } from './index';

describe('printIt', () => {
  it('should print the integer 1 as a string "1"', () => {
    expect(printIt(1)).toEqual('1');
  });

  it('should print the integer 2 as a string "2"', () => {
    expect(printIt(2)).toEqual('2');
  });

  it('should print the integer 3 as a string "Fizz"', () => {
    expect(printIt(3)).toEqual('Fizz');
  });

  it('should print the integer 6 as a string "Fizz"', () => {
    expect(printIt(6)).toEqual('Fizz');
  });

  it('should print the integer 5 as a string "Buzz"', () => {
    expect(printIt(5)).toEqual('Buzz');
  });

  it('should print the integer 10 as a string "Buzz"', () => {
    expect(printIt(10)).toEqual('Buzz');
  });

  it('should print the integer 15 as a string "FizzBuzz"', () => {
    expect(printIt(15)).toEqual('FizzBuzz');
  });
});
