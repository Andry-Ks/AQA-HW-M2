//npx cypress open

// Тест №1
describe("Login and Logout Test 1", () => {
  it("should login and logout for user 1", () => {
    // Відкрити сторінку
    cy.visit("https://www.edu.goit.global/account/login");

    // Використовуємо команду login для входу
    cy.login("user888@gmail.com", "1234567890");

    // Знаходимо та клікаємо на кнопку для відкриття меню сайту
    cy.get("#open-navigation-menu-mobile").click();

    // Знаходимо кнопку "Log out" в меню та клікаємо на неї
    cy.contains("Log out").click();

    // Перевіряємо, що повернулися на сторінку
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});

// Тест №2
describe("Login and Logout Test 2", () => {
  it("should login and logout for user 2", () => {
    // Відкрити сторінку
    cy.visit("https://www.edu.goit.global/account/login");

    // Використовуємо команду login для входу
    cy.login("testowyqa@qa.team", "QA!automation-1");

    // Знаходимо та клікаємо на кнопку для відкриття меню сайту
    cy.get("#open-navigation-menu-mobile").click();

    // Знаходимо кнопку "Log out" в меню та клікаємо на неї
    cy.contains("Log out").click();

    // Перевіряємо, що повернулися на сторінку
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});
