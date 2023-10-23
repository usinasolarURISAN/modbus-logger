export const addressesNumberTypeGenerator = (
  letter: string,
  number: number
) => {
  var i = 0;
  while (i < number) {
    console.log(`| "${letter}${i + 1}"`);
    i++;
  }
};

export const addressNumberOperationTypeGenerator = (
  letter: string,
  number: number,
  opType: string
) => {
  var i = 0;
  while (i < number) {
    console.log(`${letter}${i + 1}: '${opType}',`);
    i++;
  }
};
