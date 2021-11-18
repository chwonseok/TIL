# Virtual DOM?

간단히 가상화된 DOM

# 그럼 DOM이 뭐임?

## DOM(Document Object Model)

- 브라우저에서 다룰 html 문서의 구성요소를 객체로 구조화한 것
- 이 객체들을 통해 웹페이지의 구성요소를 제어함

## 왜 Virtual DOM이 필요한지?

- DOM 조작에 의한 렌더링의 비효율성
  - DOM을 조작하면(DOM에 변화 발생) 렌더트리 재생성하고 레이아웃을 만들고 페이팅을 다시 함([브라우저 렌더링 과정](https://github.com/chwonseok/TIL/blob/master/Web/How_Browser_Works.md))
- SPA(Single Page Application)의 DOM 복잡성 증가에 의한 최적화·자원소모 문제

## 어떤 식으로 해결?

- DOM을 추상화한 가상의 객체를 메모리에 만듦 (물론, DOM도 메모리에서 존재)
- 이 때, 변경사항을 DOM에 직접 수정하는 것이 아닌 Virtual-DOM을 통해 DOM 수정
- Virtual-DOM에 변경내역을 모은 후(버퍼링), 실제 DOM과 변경된 Virtual DOM의 차이 판단 후, 변경된 구성요소만 찾아 변경하고 그에 따른 렌더링 한 번만 하는 것

## 사실은..

- 사실 위 과정은 Virtual-DOM 없이도 가능
  - 예를 들어, 변화가 발생 -> 그 변화 모은 후 -> DOM fragment에 적용 -> DOM에 변화 적용
- 다만 위는 우리가 수동으로 조작하는 예시이기에, 이 문제를 Virtual-DOM이 자동화·추상화한 것

## 한계

- Virtual-DOM은 메모리에 존재 -> DOM에 준하는 무거운 객체가 메모리에 있는 것이기에 메모리 사용량이 큼
- 수많은 컴포넌트의 조작을 Virtual-DOM을 통해 하는 것 또한 오버헤드가 생길 수밖에 없음. 결국 직접적 DOM 제어에 비해 상대적으로 비용이 적은 것일 뿐
