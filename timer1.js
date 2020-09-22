const input = process.argv.slice(2);

for (let number of input) {
  number = Number(number)
  if ((typeof number) == 'number' && number >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  };
};