const chalk = require('chalk');

const totalInCopper = (
  platinum = 0,
  gold = 0,
  electrum = 0,
  silver = 0,
  copper = 0
) => {
  platinum *= 1000;
  gold *= 100;
  electrum *= 50;
  silver *= 10;

  return platinum + gold + electrum + silver + copper;
};

const convertCopperToLeastCoins = (copper) => {
  const platinum = Math.floor(copper / 1000);
  copper = copper % 1000;
  const gold = Math.floor(copper / 100);
  copper = copper % 100;
  const electrum = Math.floor(copper / 50);
  copper = copper % 50;
  const silver = Math.floor(copper / 10);
  copper = copper % 10;

  return {
    msg: `\n${chalk.white.bgBlue.inverse(
      `Platinum:  ${platinum}`
    )} \n${chalk.yellowBright.bgBlue.inverse(
      `Gold: ${gold}`
    )} \n${chalk.yellow.bgBlue.inverse(
      `Electrum: ${electrum}`
    )} \n${chalk.grey.bgBlue.inverse(
      `Silver: ${silver}`
    )} \n${chalk.red.bgBlue.inverse(`Copper: ${copper}`)}`,
    platinum,
    gold,
    electrum,
    silver,
    copper
  };
};

const subTractOrAddCoins = (operator, coinCount, coinDifference, coinType) => {
  let coinsInCopper = totalInCopper(
    coinCount[0],
    coinCount[1],
    coinCount[2],
    coinCount[3],
    coinCount[4]
  );

  switch (coinType) {
    case 'Platinum':
      operator === 'add'
        ? (coinsInCopper += coinDifference * 1000)
        : (coinsInCopper -= coinDifference * 1000);
      break;
    case 'Gold':
      operator === 'add'
        ? (coinsInCopper += coinDifference * 100)
        : (coinsInCopper -= coinDifference * 100);
      break;
    case 'Electrum':
      operator === 'add'
        ? (coinsInCopper += coinDifference * 50)
        : (coinsInCopper -= coinDifference * 50);
      break;
    case 'Silver':
      operator === 'add'
        ? (coinsInCopper += coinDifference * 10)
        : (coinsInCopper -= coinDifference * 10);
      break;
    case 'Copper':
      operator === 'add'
        ? (coinsInCopper += coinDifference * 1)
        : (coinsInCopper -= coinDifference * 1);
      break;
    default:
      break;
  }

  return convertCopperToLeastCoins(coinsInCopper);
};

module.exports = subTractOrAddCoins;
