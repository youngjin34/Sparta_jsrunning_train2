// 1.
//배열 API map 활용
var arr = [10, 20, 30]
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
var newArr = arr.map(x => x * 10);
// 결과 값: [100, 200, 300]을 출력해주세요
console.log(newArr);


// 2.
//배열 API filter 활용
var arr = [10, 22, 33]
// 5의 배수를 찾아 반환해주세요
var filteredArr = arr.filter(x => x % 5 === 0);
// 결과값 [10]을 출력해주세요
console.log(filteredArr);

// 3.
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
const greaterFifteen = numbers.filter(x => x > 15);
// 출력값 [20, 25]
console.log(greaterFifteen);

// 4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
var lengthString = arr.filter(x => x.lengthString >= 4);
console.log(lengthString);

// 5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
var oddLength = arr.filter(x => x % 2 !== 0);
console.log(oddLength);

// 6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
var sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);

// 7.
var student = [
  { name: "이재상", age: 25 },
  { name: "정윤오", age: 30 },
  { name: "김준현", age: 12312 }
];

// age를 이용하여 내림차순으로 정렬하고 출력해주세요
var sortedStudent = student.sort((a, b) => b.age - a.age);
console.log(sortedStudent);

// 8.
var student = [
  { id: 1, name: "이재상" },
  { id: 2, name: null },
  { id: 3, name: "김준현" }
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
var hasNull = student.filter(s => s.name === null);
var hasNullSome = student.some(s => s.name === null);
console.log(hasNull);
console.log(hasNullSome); // true

// 9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
var lengthFive = arr.filter(x => x.length > 5);
var lengthFiveSome = arr.some(x => x.length > 5);
console.log(lengthFive);
console.log(lengthFiveSome); // true

// 10.
var arr = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
arr.splice(2, 0, "newFruit")
console.log(arr);

// 11.
var arr = [1, 5, -3, 10, 0, 8];

// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
var isNagative = arr.filter(x => x < 0);
var isNagativeSome = arr.some(x => x < 0);
console.log(isNagative); // [-3]
console.log(isNagativeSome); //true

// 12.
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
var isAllNagative = arr.every(x => x < 0)
console.log(isAllNagative); // false
