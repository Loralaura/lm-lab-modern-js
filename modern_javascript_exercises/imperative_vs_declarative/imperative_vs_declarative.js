// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  const longPasswords = passwords.filter((password) => {
    return password.length >= 9;
  });

  return longPasswords;
}
