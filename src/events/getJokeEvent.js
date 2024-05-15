import dom from '../dom.js';
import getJokeHandler from '../handlers/getJokeHandler.js';

const getJoke = () => {
    dom.btn.addEventListener('click', getJokeHandler);
};

export default getJoke;
