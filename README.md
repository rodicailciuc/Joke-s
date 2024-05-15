# Joke's Generator

> A simple Joke generator

## Table of contents

- [Joke's Generator](#jokes-generator)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Status](#status)
  - [Contact](#contact)

## General info

> The objective of the project is to practice .

## Screenshots

![Example screenshot](./assets/Capture%20d’écran%202024-05-15%20123906.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the stop watch.

## Code Examples

```js
const getJokeApi = async () => {
	try {
		const res = await fetch('https://v2.jokeapi.dev/joke/Any');
		if (res.ok) {
			const data = await res.json();
			return data;
		} else {
			throw new Error('failed to fetch');
		}
	} catch (err) {
		console.error(err);
	}
};
```

## Status

Project is: _in progress_

## Contact

- [Rodica](https://github.com/rodicailciuc)
