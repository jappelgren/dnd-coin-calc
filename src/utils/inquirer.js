const inquirer = require('inquirer');
const previousResponses = require('./previousAnswers');

const validateNumber = (value) => {
  value = +value;
  if (value === 0) {
    return true;
  }
  if (!value) {
    return `Please enter a valid number.`;
  }
  return true;
};

const prompts = {
  promptUser: () => {
    const questions = [
      {
        name: 'platinum',
        type: 'input',
        message: 'How many platinum coins do you currently posses?',
        default: `${
          previousResponses.usePrevious ? previousResponses.platinum : 0
        }`,
        validate: (value) => validateNumber(value),
      },
      {
        name: 'gold',
        type: 'input',
        message: 'How many gold coins do you currently posses?',
        default: `${
            previousResponses.usePrevious ? previousResponses.gold : 0
          }`,
        validate: (value) => validateNumber(value),
      },
      {
        name: 'electrum',
        type: 'input',
        message: 'How many electrum coins do you currently posses?',
        default: `${
            previousResponses.usePrevious ? previousResponses.electrum : 0
          }`,
        validate: (value) => validateNumber(value),
      },
      {
        name: 'silver',
        type: 'input',
        message: 'How many silver coins do you currently posses?',
        default: `${
            previousResponses.usePrevious ? previousResponses.silver : 0
          }`,
        validate: (value) => validateNumber(value),
      },
      {
        name: 'copper',
        type: 'input',
        message: 'How many copper coins do you currently posses?',
        default: `${
            previousResponses.usePrevious ? previousResponses.copper : 0
          }`,
        validate: (value) => validateNumber(value),
      },
      {
        name: 'addOrSubtract',
        type: 'list',
        message: 'Are you adding or subtracting currency?',
        choices: ['Add', 'Subtract'],
        default: 'Add',
      },
      {
        name: 'coinType',
        type: 'list',
        message: `Which type of coin are you adding/subtracting?`,
        choices: ['Platinum', 'Gold', 'Electrum', 'Silver', 'Copper'],
        default: 'Platinum',
      },
      {
        name: 'coinDifference',
        type: 'input',
        message: 'How many coins are you adding/subtracting?',
        validate: (value) => validateNumber(value),
      },
    ];
    return inquirer.prompt(questions);
  },
  convertMore: () => {
    const questions = [
      {
        name: 'convertMore',
        type: 'list',
        message: 'Would you like to make another transaction?',
        choices: ['Yes', 'No'],
        default: 'Yes',
      },
    ];
    return inquirer.prompt(questions);
  },
  sameCharacter: () => {
    const questions = [
      {
        name: 'sameCharacter',
        type: 'list',
        message:
          'Is this transaction for the same character? (If yes coin quantities will be populated as defaults to coin quantity questions. Hit enter to use default values.)',
        choices: ['Yes', 'No'],
      },
    ];
    return inquirer.prompt(questions);
  },
};

module.exports = prompts;
