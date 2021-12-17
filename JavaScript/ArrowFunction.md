> 아래의 내용은 [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%EB%B0%94%EC%9D%B8%EB%94%A9_%EB%90%98%EC%A7%80_%EC%95%8A%EC%9D%80_this)에서 필요한 부분만 의역 및 참고한 내용

# Arrow Function?

- 정확하게는 Arrow Function Expressio으로 함수 표현식의 축약, 간편화 된 대안적인 형태
- 그만큼 편하지만 약간 제한적이며 모든 상황에서는 사용될 수 없음

## 그래서 차이점은?

- 바인딩된 this나 super 가지지 않으며 메소드로 사용될 수 없음
- new.target 키워드를 가지지 않음
- 스코프에 의존하게 되는 call, apply 그리고 bind 메소드 사용에 적합하지 않음
- 생성자로 사용될 수 없음
- yeild를 사용할 수 없음

### 메소드로 사용되지 못함에 대하여

- arrow function은 non-method functions으로 사용되는 것이 가장 바람직함
- 이유: 얘네들 만의 this를 가지지 않기 때문
- 예를 들자면...아래처럼

  ```javascript
  'use strict';

  const obj = {
    // 새로운 스코프를 만들지 않음
    a: 100,
    b: () => console.log(this.a, this),
    c: function () {
      console.log(this.a, this);
    },
  };

  obj.b(); // 결과: undefined, Window {...}
  obj.c(); // 결과: 10, Object {...}
  ```

### 메소드 call, apply 그리고 bind와 궁합이 좋지 않음에 대하여

- 위 세 친구들은 내가 짝지어준 메소드가 다른 스코프에서 사용되도록 해주는 역할
- 하지만 arrow function은 this를 arrow function이 만들어진 스코프에서만 가지기 때문에
- 아래는 예시!

  ```javascript
  /*** 일반적인 방법 ***/
  const obj = {
    num: 100,
  };
  // 그리고 이렇게 전역변수로 num을 넣어두고..
  window.num = 2022;

  // 가장 일반적인 this를 사용하는 함수 표현식
  const add = function (a, b, c) {
    return this.num + a + b + c;
  };

  // call
  const result1 = add.call(obj, 1, 2, 3); // call 덕분에 스코프는 obj와 연결
  console.log(result1); // 106

  // apply
  const arr = [1, 2, 3];
  const result2 = add.apply(obj, arr); // apply 덕분에 스코프는 obj와 연결
  console.log(result2); // 106

  // bind
  const result3 = add.bind(obj); // bind 덕분에 스코프는 obj와 연결
  console.log(result3(1, 2, 3)); // 106

  /* ----- 하지만 ----- 
  아래 arrow function으로 add를 바꾼다면 add()는
  window 스코프 즉, 전역 스코프에 속하게 되기 때문에
  this는 window를 가르키게 됨
  -------------------- */

  const arrowAdd = (a, b, c) => this.num + a + b + c;

  // call
  console.log(arrowAdd.call(obj, 1, 2, 3)); // 2026

  // apply
  const arr = [1, 2, 3];
  console.log(arrowAdd.apply(obj, arr)); // 2026

  // bind
  const bound = arrowAdd.bind(obj);
  console.log(bound(1, 2, 3)); // 2026
  ```
