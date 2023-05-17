class Customer {
  order(menuName, menu, barista) {
    const menuItem = menu.choose(menuName);
    const coffee = barista.makeCoffee(menuItem);
    console.log(
      `주문한 ${menuItem.name}가 나왔다. 가격은 ${menuItem.price}원이다.`,
    );
  }
}

class Menu {
  #list = [];

  constructor(list) {
    this.#list = list.map((item) => new MenuItem(item));
  }

  choose(name) {
    return this.#list.find((item) => item.name === name) ?? null;
  }
}

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

class Barista {
  makeCoffee(menuItem) {
    return new Coffee(menuItem);
  }
}

class Coffee {
  #name = "";
  #price = 0;

  constructor(menuItem) {
    this.#name = menuItem.name;
    this.#price = menuItem.price;
  }
}

const MENU_LIST = [
  { name: "아메리카노", price: 1500 },
  { name: "카푸치노", price: 2000 },
  { name: "캐러멜 마키아토", price: 2500 },
  { name: "에스프레소", price: 2500 },
];

class App {
  #menu = new Menu(MENU_LIST);
  #barista = new Barista();
  #customer = new Customer();

  init() {
    this.#customer.order("아메리카노", this.#menu, this.#barista);
    this.#customer.order("카푸치노", this.#menu, this.#barista);
    this.#customer.order("캐러멜 마키아토", this.#menu, this.#barista);
    this.#customer.order("에스프레소", this.#menu, this.#barista);
  }
}

const app = new App();
app.init();
