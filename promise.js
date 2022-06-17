const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (mood) => {
  return new Promise((resolve, reject) => {
    if (mood === "merajuk") {
      (async () => {
        const sumIIX = count(await promiseTheaterIXX(), mood);
        const sumVGC = count(await promiseTheaterVGC(), mood);
        resolve(sumIIX + sumVGC);
      })();
    } else if (mood === "tidak merajuk") {
      (async () => {
        const sumIIX = count(await promiseTheaterIXX(), mood);
        const sumVGC = count(await promiseTheaterVGC(), mood);
        resolve(sumIIX + sumVGC);
      })();
    } else {
      reject("Mood tidak valid");
    }
  });
}

const count = (data, mood) => {
  let counter = 0;

  if (mood == "merajuk") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "merajuk") {
        counter++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak merajuk") {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  promiseOutput,
};
