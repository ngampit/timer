const args = process.argv.slice(2);
const timeSet = args;
console.log(args)

for (let i = 0; i < timeSet.length; i++) {
//   console.log(timeSet[i]);
 
  /*No numbers are provided: Easy. It should just not beep at all 
    and end immediately since no beeps should get scheduled.*/
 if (timeSet.length === 0) {
      break; 
  }
 
  /*An input is a negative number: Ignore/skip any numbers that 
    are negative. We can't schedule anything in the past.  */
  /*An input is not a number: Ignore/skip these as well, instead 
    of attempting to call setTimeout with a non-number.  */
  
  if ((timeSet[i] < 0)|| isNaN(timeSet[i])) {
//    console.log(timeSet[i]);
      continue; 
  }

  setTimeout(() => {
    process.stdout.write("hello");
  }, timeSet[i]*1000);

}