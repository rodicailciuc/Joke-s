import getJokeApi from '../../apis/getJokeApi.js';
import dom from '../dom.js';
import createJoke from '../components/createJoke.js';
// import updateJoke from '../components/updateJoke.js';

const getJokeHandler = async () => {
    const jokeData = await getJokeApi();
    const jokeDom = createJoke(jokeData);
    dom.root.innerHTML = '';
    dom.root.append(jokeDom);
    // const jokeDomExist = document.getElementById('joke-container');
    // if (jokeDomExist) {
    //     updateJoke(jokeDomExist, jokeData);
    // } else {
    //     const jokeDom = createJoke(jokeData);
    //     dom.root.append(jokeDom);
    // }
};

export default getJokeHandler;
