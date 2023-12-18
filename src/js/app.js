export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  [Symbol.iterator]() {
    const arrayCharacters = Array.from(this.members);
    let index = 0;
    return {
      next() {
        if (index < arrayCharacters.length) {
          return {
            value: arrayCharacters[index++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
