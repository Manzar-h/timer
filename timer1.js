const inputArgs = process.argv.slice(2);

const timer1 = () => {
  for (let value of inputArgs) {
    const input = value;

    if (isNaN(input)) continue; // if input is not a number
    if (input < 0) continue; // if input is a negative number
    if (input.length === 0) continue; // if empty string

    setTimeout(() => {
      console.log(`Beep at ${input} seconds!`);
      process.stdout.write('\x07');
    }, input * 1000);
  }

};
timer1(inputArgs);
