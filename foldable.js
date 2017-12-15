const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum(${x})`
});

const res = [Sum(1), Sum(2)];               