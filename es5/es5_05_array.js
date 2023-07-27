const bookList = ["html", "css", "javascript"];

console.log("length = " + bookList.length);
console.log("bookList[0] = "+ bookList[0]);
console.log("bookList[1] = "+bookList[1]);
console.log("bookList[2] = "+bookList[2] +"\n");

//for문을 이용한 출력
for(book of bookList) console.log("book = " + book );

//배열 마지막에 새로운 값 추가
bookList.push("react");
console.log(bookList);

//배열 마지막 값 삭제
bookList.pop();
console.log(bookList);

//배열 시작값에서 하나를 삭제
bookList.shift();
console.log(bookList);


