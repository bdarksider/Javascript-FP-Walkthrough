const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum(${x})`
});

const All = x => ({
    x,
    concat: ({ x: y }) => All(x && y),
    inspect: () => `All(${x})`
});

const First = x => ({
    x,
    concat: ({ x: y }) => First(x && y),
    inspect: () => `First(${x})`
});

const Max = x => ({
    x,
    concat: ({ x: y }) => Max(x > y ? x : y),
    inspect: () => `Max(${x})`
});

Max.empty = () => Max(-Infinity);

const res = Max.empty().concat(Max(3)).concat(Max(4)).concat(Max(1))