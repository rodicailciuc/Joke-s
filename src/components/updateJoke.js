const updateJoke = (jokeDom, jokeData) => {
    jokeDom.querySelector('.category').innerText = jokeData.category;
    jokeDom.querySelector('.type').innerText = jokeData.type;

    if (jokeData.type === 'twopart') {
        jokeDom.querySelector('.setup').innerHtml = jokeData.setup;
        if (jokeDom.querySelector('.setup').classList.contains('hide')) {
            jokeDom.querySelector('.setup').classList.remove('hide');
        }

        jokeDom.querySelector('.delivery').innerHtml = jokeData.delivery;
        if (jokeDom.querySelector('.delivery').classList.contains('hide')) {
            jokeDom.querySelector('.delivery').classList.remove('hide');
        }

        if (!jokeDom.querySelector('.joke').classList.contains('hide')) {
            jokeDom.querySelector('.joke').classList.add('hide');
        }
    } else {
        jokeDom.querySelector('.joke').innerHtml = jokeData.joke;
        if (jokeDom.querySelector('.joke').classList.contains('hide')) {
            jokeDom.querySelector('.joke').classList.remove('hide');
        }

        if (jokeDom.querySelector('.setup').classList.contains('hide')) {
            jokeDom.querySelector('.setup').classList.add('hide');
        }

        if (jokeDom.querySelector('.delivery').classList.contains('hide')) {
            jokeDom.querySelector('.delivery').classList.add('hide');
        }
    }

    const flags = jokeDom.querySelector('.flags');
    for (const flag in jokeData.flags) {
        const flagDom = flags.querySelector(`.${flag}`);
        flagDom.className = '';
        flagDom.classList.add(flag, jokeData.flags[flag]);
    }
    jokeDom.querySelector('.lang').innerText = jokeData.lang;
    if (jokeData.safe) {
        jokeDom.querySelector('#safe').className = 'safe';
    } else {
        jokeDom.querySelector('#safe').className = 'unsafe';
    }
};

export default updateJoke;
