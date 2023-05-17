<p align="middle">
  <img width="400px;" src="https://velog.velcdn.com/images/yan9woojin/post/7ba3d67b-38a4-4275-b725-a4b29b87a17f/image.png"/>
</p>
<h1 align="middle">객체지향의 사실과 오해</h1>

<p align="middle">
객체지향의 사실과 오해 7장 '함께 모으기'의 커피 전문점 구현하기에 자바로 작성된 코드를 자바스크립트로 구현했습니다.
</p>

---

## Customer

```js
class Customer {
  order(menuName, menu, barista) {
    const menuItem = menu.choose(menuName);
    const coffee = barista.makeCoffee(menuItem);
    console.log(
      `주문한 ${menuItem.name}가 나왔다. 가격은 ${menuItem.price}원이다.`,
    );
  }
}
```

- `order()`는 Menu와 Barista 객체를 참조하기 위해 menu와 barista를 인자로 받는다.

## Menu

```js
class Menu {
  #list = [];

  constructor(list) {
    this.#list = list.map((item) => new MenuItem(item));
  }

  choose(name) {
    return this.#list.find((item) => item.name === name) ?? null;
  }
}
```

- list는 외부에서 조작하지 못하도록 *private class field*로 선언하였다.
- `constructor()`로 list를 초기화한다. list는 MenuItem 배열을 저장한다.
- `choose()`는 list에서 name과 일치하는 MenuItem을 찾으면 MenuItem을 반환하고, 찾지 못하면 `null`을 반환한다.

## MenuItem

```js
class MenuItem {
  #name = "";
  #price = 0;

  constructor(item) {
    this.#name = item.name;
    this.#price = item.price;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }
}
```

- name과 price는 외부에서 조작하지 못하도록 *private class field*로 선언하였다.
- `constructor()`로 name과 price를 초기화한다.
- name과 price는 _getter_ 메서드로 접근할 수 있다.

## Barista

```js
class Barista {
  makeCoffee(menuItem) {
    return new Coffee(menuItem);
  }
}
```

- `makeCoffee()`는 전달받은 menuItem으로 Coffee를 생성하여 반환한다.

## Coffee

```js
class Coffee {
  #name = "";
  #price = 0;

  constructor(menuItem) {
    this.#name = menuItem.name;
    this.#price = menuItem.price;
  }
}
```

- name과 price는 외부에서 조작하지 못하도록 *private class field*로 선언하였다.
- `constructor()`로 name과 price를 초기화한다.
