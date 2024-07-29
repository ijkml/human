type SplitReturnType = [
  Array<Array<{ char: string; pos: number }>>,
  number,
];

function split(str: MaybeRef<string>): SplitReturnType {
  let id = 0;
  const text = toValue(str);

  function getId() {
    try {
      return id;
    }
    finally {
      id++;
    }
  }

  const result = text.trim().split(' ').map((word, wordPos, wordArray) => {
    return word.split('').flatMap((char, charPos, charArray) => {
      const character = { char, pos: getId() };

      // not last character
      if (charArray.length - 1 !== charPos)
        return character;

      // is last word
      if (wordArray.length - 1 === wordPos)
        return character;

      // finally, add space to end of word
      return [character, { char: ' ', pos: getId() }];
    });
  });

  return [result, id];
}

export { split };
