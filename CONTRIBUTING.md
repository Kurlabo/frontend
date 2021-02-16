# Kurlabo FrontEnd team



## - Coding Convention

### 1. 컴포넌트 네이밍

- pascal case
- .jsx 사용

```code
// ex) ItemList.jsx , LoginId.jsx
```



### 2. 컴포넌트내 함수

- function 키워드 사용(호이스팅 사용)

```jsx
// example code
import React from 'react';

const Example = ()=>{
    const [id, setId] = useState('');
    return (
    	<button onClick={onClick}>
        	Hello Kurlabo!
        </button>
    )
    
    function onClick(){
        //...
    }
}

export default Example;
```



### 3. 변수명

- camel case 사용

```jsx
// example code
const [camelCase, setCamel] = useState();

const example = 'Hello React';
let marketKurly = 'Hello Kurly'
```

- props는 카멜케이스로 작성한다.

```jsx
// example code
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

- props의 truthy 값을 전달할 때는 생략한다.

```jsx
// example code
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```



### 4. tailwind.config.js

- 기준 `font-size: 10px`
- **rem 단위를 사용하도록 한다.**
- percent 단위 customizing 할 떈 `per` prefix를 사용한다

```js
// spacing
spacing : {
    'r-1.1': '1.1rem',
    'r- 10' : '10rem',
}
// border-radius
borderRadius : {
	'per-50' : '50%',
}
```



### 5. img 태그

- img 태그의 alt 어트리뷰트의 값은 꼭 포함시킨다.
- 웹 접근성을 준수하여 꼭 작성한다.

```html
// example code

// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// bad
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```



### 6. map 함수

- map 함수를 사용할 때 `key`값에 index값은 사용불가한다.
- 반드시 key값으로는 id 값을 할당한다.

```jsx
// example code
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```



### 7.  컴포넌트 return

- 컴포넌트내에서 return 키워드를 사용할 때 소괄호를 반드시 사용한다.

```jsx
// example code

const React = () =>{
    return (
    	<div>
        	Hello Market Kurly!
        </div>
    )
}
```



### 8. self closing tag

- chidren이 없으면 항상 닫힌(self-closing tag)태그를 사용한다.

```jsx
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

- 컴포넌트의 props가 여러개라면 닫힘 태그는 새로운 줄에 작성한다.

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```



### 9, 리덕스 네임스페이스

- 리덕스의 액션을 작성할 때 type값으로 네임스페이스를 꼭 작성한다.
- snake case와 대문자로 작성한다.

```javascript
// exmaple code

const SET_CAROUSEL = ‘main/SET_INCREASE’;
const SET_CAROUSEL_MIN = ‘main/SET_CAROUSEL_MIN’;
const SET_CAROUSEL_MAX = ‘main/SET_CAROUSEL_MAX’;
```



## - git convention



### 1. commit convention

- prefix는 반드시 영문 네글자 이하로 통일한다. 
  - feat, fix, docs, test, style...
- prefix와 제목과 내용사이는 꼭 한줄을 띄어준다.

```code
// exmaple

feat : main 케러셀 왼쪽 UI 구현

img, svg 태그를 사용했다.
리덕스를 사용해 상태관리를 했다.
...
```



### 2. resolved

- 본인 이슈가 끝났을 때 마지막 커밋에 사용한다.
- 내용 끝날 때 반드시 마침표를 사용한다.

```code
// example

feat : main 페이지 UI 구현

resolved : #6
회원가입 form 태그 구성 및 디자인 완료.
id, email validation regex 체크.
```