import data from './data';

const shuffledQuestions = data.sort(() => 0.5 - Math.random());
const selectedQuestions = shuffledQuestions.slice(0, 5);

export default selectedQuestions;