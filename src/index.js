module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 10) {
    return ones[number];
  }
  if (number >= 10 && number < 20) {
    return teens[number - 10];
  }
  if (number < 100) {
    const ten = Math.floor(number / 10);
    const one = number % 10;
    return one === 0 ? tens[ten] : `${tens[ten]} ${ones[one]}`;
  }
  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const rest = number % 100;
    if (rest === 0) {
      return `${ones[hundred]} hundred`;
    }
    return `${ones[hundred]} hundred ${toReadable(rest)}`;
  }

  const numberToString = Math.abs(number).toString();
  const arr = numberToString.split('');
  let reverse = '';
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reverse += arr[i];
  }
  const finalNum = parseInt(reverse, 10);

  return Math.sign(number) * finalNum;
};
