import { runGameEngine, generateRandomNumber } from '../index.js';

const getResultOfMathExpression = (num1, num2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator: ${randomOperator}`);
  }
};

const generateGameLogic = () => {
  const operators = ['+', '-', '*'];
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const randomQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = getResultOfMathExpression(
    randomNumber1,
    randomNumber2,
    randomOperator,
  ).toString();
  return [randomQuestion, correctAnswer];
};

const runCalculateMathExpressionGame = () => {
  const gameInstruction = 'What is the result of the expression?';

  runGameEngine(generateGameLogic, gameInstruction);
};

export default runCalculateMathExpressionGame;
