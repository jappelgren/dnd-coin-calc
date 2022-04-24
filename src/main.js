const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompts = require('./utils/inquirer');
const subTractOrAddCoins = require('./utils/index');
// let previousResponses = require('./utils/previousAnswers');

clear();

console.log(
  chalk.red.bgYellow(
    figlet.textSync('D&D Coin Calc', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const promptMenu = await prompts.promptUser();
  const {
    platinum,
    gold,
    electrum,
    silver,
    copper,
    addOrSubtract,
    coinType,
    coinDifference,
  } = promptMenu;

  console.log(
    `${addOrSubtract}ing ${coinDifference} ${coinType} ${
      addOrSubtract === 'Add' ? 'to' : 'from'
    } coin purse.`
  );
  console.log(
    `New balance is: \n${subTractOrAddCoins(
      addOrSubtract.toLowerCase(),
      [+platinum, +gold, +electrum, +silver, +copper],
      coinDifference,
      coinType
    )}`
  );
  const runAgain = await prompts.convertMore();
  if (runAgain.convertMore === 'No') {
    process.exit();
  }
// This doesn't work yet.  Maybe next weekend it will.

//   const sameCharacter = await prompts.sameCharacter();
//   if (sameCharacter.sameCharacter === 'Yes') {
//     previousResponses.assignPreviousValue(
//       true,
//       platinum,
//       gold,
//       electrum,
//       silver,
//       copper
//     );
//     previousResponses.logValues();
//   } else {
//     previousResponses.assignPreviousValue(false, 0, 0, 0, 0, 0);
//     previousResponses.logValues();
//   }
  run();
};

run();
