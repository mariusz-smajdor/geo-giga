const getRandomIndex = array => Math.floor(Math.random() * (array.length))

export const draw = array => array[getRandomIndex(array)]
