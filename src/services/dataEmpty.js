const dataEmpty = (data) =>
  !data || (!Object.keys(data).length && !data.length);

const DATA1 = { a: 100, b: 200 };
const DATA2 = { hey: "a", hi: "b", bye: "c" };
const DATA3 = {};
const DATA4 = [1, 2, 3, 4, 5];
const DATA5 = [];
const DATA6 = null;
const DATA7 = undefined;

const DATA = [DATA1, DATA2, DATA3, DATA4, DATA5, DATA6, DATA7];

for (let i = 0; i < DATA.length; i++) {
  console.log(dataEmpty(DATA[i]));
}
