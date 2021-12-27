# 기본

캐스팅을 제외한 기본적 수학 규칙은 자바스크립트와 대부분 유사

- +, -, \*, / 등의 연산자를 사용하여 기본 수학 연산을 수행
- % 연산자를 사용하여 나누기 후의 나머지를 가져옴
- 연산 순서는 머리글자어 PEMDAS의 규칙 적용
  - P(Parentheses, 괄호): 괄호 안의 내용을 먼저 계산
  - E(Exponents, 지수)
    C#에서는 지수연산자가 없지만, .NET 클래스 라이브러리에서 제공되는 `System.Math.Pow()` 메서드 사용 가능
  - M(Multiplication, 곱하기) 및 D(Division, 나누기): 왼쪽에서 오른쪽으로 계산
  - A(Addition, 더하기) 및 S(Subtraction, 빼기): 왼쪽에서 오른쪽으로 계산

# 캐스팅(Casting)

- 두 개의 int 값을 나누면 소수점 뒤의 값이 잘리는데, 소수점 뒤의 값을 유지하려면 제수 또는 피제수 중 하나(또는 둘 다)를 int에서 decimal 등의 부동 소수점 숫자로 먼저 캐스트한 후, 잘림을 방지하기 위해 몫도 동일한 부동 소수점 형식이어야 함
- 이 때, 캐스트 연산을 통해 일시적으로 값을 다른 데이터 형식인 것처럼 처리할 수 있음

```C#
int firstNum = 33;
int secondNum = 10;
Console.WriteLine(firstNum / secondNum); // 3 출력 (.3이 잘림)
decimal calculate = (decimal)firstNum / (decimal)secondNum;
Console.WriteLine(calculate); // 3.3 출력
```
