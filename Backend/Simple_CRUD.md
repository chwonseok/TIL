# Node.js

- Chrome V8 JavaScript 엔진으로 빌드된 JavaScript를 브라우저 밖 Local PC에서도 사용할 수 있게 해줌

## Node.js 특징

- 보통 서버를 구축할 때 사용되는 언어 중 하나
- Non-Blocking의 특징으로 한꺼번에 많은 요청을 처리하는 서비스의 서버에 사용
- ex: 채팅서비스, SNS
- 힘든 수학적 연산이 필요한 곳에는 사용이 지양됨
- 스타트업, 프로토타입 만들기에도 종종 사용됨
- Node.js는 REPL(Read, Eval, Print, Loop)을 통해 런타임 제공

  1. READ: 사용자가 입력한 값을 받아 메모리에 저장
  2. EVAL: 입력된 값의 평가 및 실행
  3. PRINT: EVAL이 리턴한 값 출력
  4. LOOP: 위 1~3(read, eval, print)를 반복

# Express?

- Node.js 사용을 쉽게 도와줌
  `Express 관련은 다른 페이지에서 더 정리 후 개별 link 예정`

# Nodemon

- 서버 재실행을 자동화 시켜주는 라이브러리
- 쉽게 말해, 내가 일일이 `node server.js`를 껐다 켰다 할 필요 없도록 도와줌

## Nodemon 사용법

1. 설치 `npm install -g nodemon`
2. 실행 `nodemon server.js`
