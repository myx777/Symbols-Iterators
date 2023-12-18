export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  [Symbol.iterator]() {
    const arrayCharacters = Array.from(this.members);
    let index = -1; 
    return {
      next() {
        index += 1; // вызов; индекс увеличивается до 0 и вывод первого чара
        return {
          value: arrayCharacters[index],
          done: index >= arrayCharacters.length, // пока это утверждение верно
        };
      },
    };
  }
}
