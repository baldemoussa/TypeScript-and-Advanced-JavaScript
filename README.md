# Reflection: SBA 6 TypeScript and Advanced JavaScript
### By Mamadou Moussa Balde
## How you implemented TypeScript features and OOP principles.
In building this E-Commerce System, I applied TypeScript and OOP principles to create a robust architecture. Using a `Product` class, I encapsulated data attributes and behaviors, keeping the code modular. TypeScript’s strict type annotations provided immediate feedback, preventing runtime errors related to dynamic typing.

## The challenges you encountered and how you overcame them.
A major challenge was managing DOM manipulation timing alongside asynchronous data fetching. Initially, the app tried rendering product cards before the API populated the array, resulting in a blank screen. I solved this race condition by chaining a `.then()` to the initialization function, ensuring `loadProductsWebsite()` executed only after the data was fully loaded.

## How you handled asynchronous operations and error management.
Managing asynchronous operations and errors was critical. I used `async/await` within a `try/catch` block to fetch API data reliably. To enhance resilience, I implemented custom `NetworkError` and `DataError` classes. This allowed the app to catch, differentiate, and gracefully log specific failures, ensuring predictable behavior and meaningful diagnostic feedback rather than crashing when the network or data failed.