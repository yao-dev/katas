// http://codingdojo.org/kata/BankOCR/
export const dico = {
  0: ' _ | ||_|',
  1: '     |  |',
  2: ' _  _||_ ',
  3: ' _  _| _|',
  4: '   |_|  |',
  5: ' _ |_  _|',
  6: ' _ |_ |_|',
  7: ' _   |  |',
  8: ' _ |_||_|',
  9: ' _ |_| _|',
};

export const decode = (ocr) => {
  const ocrCode = ocr.join('');
  return parseInt(Object.keys(dico).find(key => dico[key] === ocrCode), 10);
};

export const encode = (number) => {
  const ocrCode = dico[number];
  const encodedNumber = [
    `${ocrCode.slice(0, 3)}\n`,
    `${ocrCode.slice(3, 6)}\n`,
    `${ocrCode.slice(6)}`
  ];

  return encodedNumber.join('');
};

export const encodeNumbers = (numbers) => {
  const linesNumber = 3;
  let start = 0;
  let end = 3;
  let result = '';

  Array.from(Array(linesNumber)).forEach((value, index) => {
    numbers.map((number) => {
      result += dico[number].slice(start, end);
    });

    result = (index + 1) === linesNumber ? result : result + '\n';
    start += 3;
    end += 3;
  });

  return result;
};

export const encodeStringToOcr = (string) => {
  const numbers = string.split('');
  return encodeNumbers(numbers);
}
