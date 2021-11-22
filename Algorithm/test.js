function solution(s) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  numbers.map((el, i) => {
    s = s.replace(el, i).replace(el, i);
  });

  var answer = 0;
  answer = s;
  console.log(+answer);
}

solution('one4seveneight');
solution('23four5six7');
solution('2three45sixseven');
solution('123');
