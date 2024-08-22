# Law of Demeter

The Law of Demeter has three core ideas:

- A unit should have only limited knowledge about other units
- A unit should only talk to its immediate friends
- A unit should not talk to strangers

This is a very useful and simple law to learn and then apply to all our programming, whether we're writing an individual line of code or designing an entire architecture. It is, however, often forgotten or ignored. Let's analyse the following interaction between **Customer** , **CustomerWallet** and **Shopekeeper** abstractions:

```
class Customer {
 constructor() {
 this.wallet = new CustomerWallet();
 }
}
class CustomerWallet {
 constructor() {
 this.amount = 0;
 }
 addMoney(deposit) {
 this.amount += deposit;
 }
 takeMoney(debit) {
 this.amount -= debit;
 }
}
```

A simplified version of interaction between **Shopekeeper** and **Customer** is presented below:

```
class Shopkeeper {
 processPurchase(product, customer) {
 const price = product.price();
 customer.wallet.takeMoney(price);
 // ...
 }
}

```

This may look okay, but let's consider a real-life analogy of this interaction. The shopkeeper takes the wallet from the customer's pocket and then proceeds to open the wallet and take the desired amount without in any way interacting with the customer directly. It's immediately obvious that this would never be a socially appropriate interaction in real life.

**Taking this learnings on board, we can program a cleaner abstraction as follows:**

```
class Shopkeeper {
 processPurchase(product, customer) {
 const price = product.price();
 customer.requestPayment(price);
 // ...
 }
}

```

The Shopkeeper is talking to the Customer directly. The customer, in turn, will talk to their CustomerWallet instance, retrieving the desired amount and then handing it to the shopkeeper.
