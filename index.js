#!/usr/bin/env node

// https://dev.to/matheusg18/como-criar-um-npx-2il4

console.log('Meu primeiro npx!')

const fetch = require('node-fetch')

const getRandomFact = async () => {
  const ENDPOINT = 'https://uselessfacts.jsph.pl/random.json?language=en'
  const randomFact = await fetch(ENDPOINT).then((response) => response.json())

  return randomFact.text
}

getRandomFact().then((randomFact) => console.log(randomFact))

// Próximo passo: print da pasta root
