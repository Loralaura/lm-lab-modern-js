// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return total;
}

add(1, 2, 3, 4, 5);
