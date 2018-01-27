export const printIt = (number) => {
  let result = "";

  const divisibleBy3 = number % 3 === 0;
  const divisibleBy5 = number % 5 === 0;

  if (divisibleBy3) {
    result += "Fizz";
  }

  if (divisibleBy5) {
    result += "Buzz";
  }

  return result !== "" ? result : number.toString();
};
