const createJoke = (jokeData) => {
    const container = document.createElement('div');
    container.id = 'joke-container';
    container.classList.add('joke');

    const category = document.createElement('h2');
    category.id = 'category';
    category.classList.add('category');
    category.innerText = jokeData.category;

    const type = document.createElement('p');
    type.id = 'type';
    type.classList.add('type');
    type.innerText = jokeData.type;

    const setup = document.createElement('p');
    setup.id = 'setup';
    setup.classList.add('setup');
    setup.innerHTML = jokeData.setup;

    const delivery = document.createElement('p');
    delivery.id = 'delivery';
    delivery.classList.add('delivery');
    delivery.innerHTML = jokeData.delivery;

    const joke = document.createElement('p');
    joke.id = 'joke';
    joke.classList.add('joke');
    joke.innerHTML = jokeData.joke;

    if (jokeData.type === 'twopart') {
        joke.classList.add('hide');
        setup.classList.remove('hide');
        delivery.classList.remove('hide');
    } else {
        setup.classList.add('hide');
        delivery.classList.add('hide');
        joke.classList.remove('hide');
    }

    const flags = document.createElement('ul');
    flags.id = 'flags';
    flags.classList.add('flags');
    for (const flag in jokeData.flags) {
        const li = document.createElement('li');
        li.classList.add(flag, String(jokeData.flags[flag]));
        li.innerText = flag;
        flags.append(li);
    }

    const lang = document.createElement('p');
    lang.id = 'lang';
    lang.classList.add('lang');
    lang.innerText = jokeData.lang;

    const safe = document.createElement('p');
    safe.id = 'safe';
    if (jokeData.safe === true) {
        safe.classList.add('safe');
        // safe.innerText = 'Safe for Everyone';
    } else {
        safe.classList.add('unsafe');
        // safe.innerText = 'Warning: Explicit Content';
    }

    container.append(category, type, setup, delivery, joke, flags, lang, safe);
    return container;
};

export default createJoke;
