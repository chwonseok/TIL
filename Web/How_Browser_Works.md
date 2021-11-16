# 렌더링 과정

1. 브라우저는 html, css, javascript, image files 등 렌더링에 필요한 리소스를 서버에 요청

2. 서버는 그 요청에 응답

3. 렌더링 엔진은 그 응답으로 받은 html과 css를 파싱 후 DOM과 CSSOM 생성

   - 파싱(parsing): 문자열을 유의미한 토큰(token)으로 분해하여 문법적 의미와 구조를 반영하여 트리형태 자료구조인 파스 트리(parse tree)를 만드는 것

4. DOM과 CSSOM을 결합하여 렌더트리(Render Tree) 생성

5. 결합된 렌더트리를 기반으로 html 요소의 레이아웃을 계산하고 html 요소에 페인팅 함

# 더 자세하게

## 1. html 파싱 및 DOM 생성

1. 요청받은 서버는 메모리에 저장돼 있는 바이트(2진수 형태)로 브라우저에게 응답함

2. 응답받은 바이트 문서를 meta태그와 charset 속성에 설정한 인코딩방식(UTF-8)에 따라 문자열로 리턴함

3. 리턴된 html문서를 문법적 의미를 갖는 코드의 최소 단위인 토큰으로 분해

4. 토큰은 객체화 되어 노드로 생성

5. 이 노드들은 html 요소간 부자관계에 따라 DOM(Document Object Model)로 구성됨

## 2. css 파싱 및 CSSOM 생성

- 렌더링 엔진이 html 문서를 순차적으로 파싱하며 DOM 생성하다가 CSS를 로드하는 link 태그나 style 태그를 만나면 DOM 생성을 중지하고 CSSOM 생성하는 과정 시작함

- CSS 파싱 과정은 html 파싱 과정과 동일

## 3. 렌더트리 생성

- 렌더링 엔진이 생성한 DOM과 CSSOM은 렌더트리로 결합됨

- 이 과정에서 화면에 렌더링 되지 않을 노드들은 제외하고 보여줄 것만 렌더트리에 포함
  - 제외되는 노드들 예: html의 meta태그, script태그, css내 display: none

## 4. javascript parsing

css파싱과 마찬가지로, 렌더링 엔진이 html 문서를 한줄 한줄 읽어 내려가다가 script태그를 만날 때 자바스크립트 엔진에 제어권을 넘기며 시작됨

1. 자바스크립트 엔진은 cpu가 이해할 수 있는 저수준 언어로 자바스크립트 코드 파싱

2. DOM, CSSOM과 같은 AST(Abstract Syntax Tree)를 생성

3. AST를 기반으로 바이트코드 생성

4. 인터프리터 실행되도록 함
