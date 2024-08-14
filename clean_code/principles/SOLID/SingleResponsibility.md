# S - Single Responsibility Principle (SRP)

## Single-responsibility Principle (SRP) states:

A class should have one and only one reason to change, meaning that a class should have only one job. Responsibility, in this context, refers to the purpose and area of concern that abstraction covers. A function that validates phone numbers can be said to have a singular responsibility. A function that both validates and normalizes those numbers with their country codes, however, can be said to have two responsibilities. The SRP would tell us that we need to split that abstraction into two separate ones.

[Good Example](https://github.com/Andrey-Valciuc/clean_code/tree/main/clean_code/examples/SingleResponsibility/good) / [Bad Example](https://github.com/Andrey-Valciuc/clean_code/tree/main/clean_code/examples/SingleResponsibility/bad)
