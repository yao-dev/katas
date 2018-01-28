// http://codingdojo.org/kata/BankOCR/
import * as bankOcr from './index';

describe('bankOcr', () => {
  describe('decode', () => {
    it('should decode code 0', () => {
      const zero = [
        ' _ ',
        '| |',
        '|_|',
      ];
      expect(bankOcr.decode(zero)).toEqual(0);
    });
    it('should decode code 1', () => {
      const one = [
        '   ',
        '  |',
        '  |',
      ];
      expect(bankOcr.decode(one)).toEqual(1);
    });
    it('should decode code 2', () => {
      const two = [
        ' _ ',
        ' _|',
        '|_ ',
      ];
      expect(bankOcr.decode(two)).toEqual(2);
    });
    it('should decode code 3', () => {
      const three = [
        ' _ ',
        ' _|',
        ' _|',
      ];
      expect(bankOcr.decode(three)).toEqual(3);
    });
    it('should decode code 4', () => {
      const four = [
        '   ',
        '|_|',
        '  |',
      ];
      expect(bankOcr.decode(four)).toEqual(4);
    });
    it('should decode code 5', () => {
      const five = [
        ' _ ',
        '|_ ',
        ' _|',
      ];
      expect(bankOcr.decode(five)).toEqual(5);
    });
    it('should decode code 6', () => {
      const six = [
        ' _ ',
        '|_ ',
        '|_|',
      ];
      expect(bankOcr.decode(six)).toEqual(6);
    });
    it('should decode code 7', () => {
      const seven = [
        ' _ ',
        '  |',
        '  |',
      ];
      expect(bankOcr.decode(seven)).toEqual(7);
    });
    it('should decode code 8', () => {
      const eight = [
        ' _ ',
        '|_|',
        '|_|',
      ];
      expect(bankOcr.decode(eight)).toEqual(8);
    });
    it('should decode code 9', () => {
      const nine = [
        ' _ ',
        '|_|',
        ' _|',
      ];
      expect(bankOcr.decode(nine)).toEqual(9);
    });
  });

  describe('encode', () => {
    it('should encode number', () => {
      let ocr = [
        ' _ ',
        '|_|',
        ' _|',
      ].join('\n');

      expect(bankOcr.encode(9)).toEqual(ocr);
    });
  });

  describe('encodeNumbers', () => {
    it('should encode numbers', () => {
      let ocr = '';

      ocr += '    _  _     _  _  _  _  _ \n';
      ocr += '  | _| _||_||_ |_   ||_||_|\n';
      ocr += '  ||_  _|  | _||_|  ||_| _|';

      expect(bankOcr.encodeNumbers([1,2,3,4,5,6,7,8,9])).toEqual(ocr);
    });
  });

  describe('encodeStringToOcr', () => {
    it('should encode string into ocr code', () => {
      let ocr = '';

      ocr += '    _  _     _  _  _  _  _ \n';
      ocr += '  | _| _||_||_ |_   ||_||_|\n';
      ocr += '  ||_  _|  | _||_|  ||_| _|';

      expect(bankOcr.encodeStringToOcr('123456789')).toEqual(ocr);
    });
  });
});
