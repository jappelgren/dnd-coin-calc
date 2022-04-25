const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompts = require('./utils/inquirer');
const subTractOrAddCoins = require('./utils/index');
const previousResponses = require('./utils/previousAnswers');

clear();

console.log(
  chalk.cyan(
    figlet.textSync('D&D Coin Calculator\n', {
      horizontalLayout: 'full',
      font: 'Gothic',
    })
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
  
  const newCoinValues = subTractOrAddCoins(
    addOrSubtract.toLowerCase(),
    [+platinum, +gold, +electrum, +silver, +copper],
    coinDifference,
    coinType
  );

  console.log(`New balance is: \n${newCoinValues.msg}`);

  const runAgain = await prompts.convertMore();
  if (runAgain.convertMore === 'No') {
    process.exit();
  }

  const sameCharacter = await prompts.sameCharacter();
  if (sameCharacter.sameCharacter === 'Yes') {
    previousResponses.set(
      true,
      newCoinValues.platinum,
      newCoinValues.gold,
      newCoinValues.electrum,
      newCoinValues.silver,
      newCoinValues.copper
    );
  } else {
    previousResponses.set(false, 0, 0, 0, 0, 0);
  }
  run();
};

run();
