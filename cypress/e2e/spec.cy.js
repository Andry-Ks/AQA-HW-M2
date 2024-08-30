"use strict";
const user1 = Cypress.env('user1');
const password1 = Cypress.env('password1');
const user2 = Cypress.env('user2');
const password2 = Cypress.env('password2');

describe("Login and Logout Test 1", () => {
  it("should login and logout for user 1", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login(user1, password1);
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
    // Перевіряємо, що повернулися на сторінку
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});

describe("Login and Logout Test 2", () => {
  it("should login and logout for user 2", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login(user2, password2);
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});