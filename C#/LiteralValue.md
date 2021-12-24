> 해당 내용은 Microsoft Docs를 통해 기본을 배우고 정리한 것

# 여러가지 형식의 Literal Data

- 먼저 리터럴(Literal)은 '문자 그대로' 하드 코드된 값을 가리킴

1. char (Character)

- 단일 영숫자 문자만 출력하려는 경우 작은 따옴표로 묶어 Char 리터럴 사용
- 계산이 아닌 프레젠테이션용 단어, 문구, 영숫자 데이터에 사용됨 (+ string)
- `Console.WriteLine('a')`
- `Console.WriteLine('abc')` -> 에러: `(1,19): error CS1012: Too many characters in character literal`

2. int (Integer)

- 소수가 없는 정수 값을 출력하려는 경우 int 리터럴 사용
- string이나 char와 달리 int 리터럴에서는 추가 연산자가 필요하지 않음
- `Console.WriteLine(123);`

3. decimal

- 숫자에 소수를 붙이기 위해 사용
- 기입한 숫자 뒤 m을 추가함, 이 때 m을 리터럴 접미사라고 함(decimal 형식의 사용을 컴파일러에게 알리는 역할)
- m 대신에 M도 가능
- `Console.WriteLine(3.14159265358979323846264338327m);`

4. bool

- boolean의 약식 표현, true 또는 false 나타내기 위해 사용
- `Console.Write(true); Console.Write(false);`

# C#에서 데이터 형식이 중요성

- Python, JavaScript 등 다른 언어와 C#을 차별화하는 주요 기능 중 하나
- C# 디자이너는 이런 데이터 형식을 적용하여 일반적 버그를 방지할 수 있다고 생각함
- 많은 데이터 형식이 존재하며, 위의 4가지는 일반적으로 많이 사용되는 데이터 형식
