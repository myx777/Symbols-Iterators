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
        const result = {
          value: undefined,
          done: true,
        };

        if (index < arrayCharacters.length) {
          result.value = arrayCharacters[index];
          result.done = false;
          index += 1;
        }
        return result;
      },
    };
  }
}
