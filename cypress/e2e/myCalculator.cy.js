// describe("Static page load tests", () => {
//   beforeEach(() => {
//     cy.visit('https://sxp0229.github.io/calculator/')
//   });

//   it("button is displayed on page load", () => {
//     cy.get(".calculator__number--eight").should("have.text", "8");
//   });
// });

describe("Basic Calculations", () => {
  // Triple A method
  // Arrange where we need to visit
  beforeEach(() => {
    cy.visit('https://sxp0229.github.io/calculator/')
  });

  //Test Addition
  it("7 added to 8 equals 15", () => {
    // Act
    cy.get(".number").contains('7').click();
    cy.get(".operator").contains('+').click();
    cy.get(".number").contains('8').click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "15");
  });
  //Test Subtraction
  it("100 subtracted by 9 equal to 98", () => {
    // Act
    cy.get(".number").contains('1').click();
    cy.get(".number").contains('0').click();
    cy.get(".number").contains('0').click();
    cy.get(".operator").contains('-').click();
    cy.get(".number").contains('2').click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "98");
  });
  //Test Multiplication
  it("7 multiplied by -8 equal to -56", () => {
    // Act
    cy.get(".number").contains('7').click();
    cy.get(".operator").contains('x').click();
    cy.get(".number").contains('8').click();
    cy.get("#plusMinus").click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "-56");
  });
  //TestVanilla Division
  it("100 divided by 50 equal to 2", () => {
    // Act
    cy.get(".number").contains('1').click();
    cy.get(".number").contains('0').click();
    cy.get(".number").contains('0').click();
    cy.get(".operator").contains('÷').click();
    cy.get(".number").contains('2').click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "50");
  });
  //Test Division
  it("Division by 0: 100 divided by 0 returns ERROR!", () => {
    // Act
    cy.get(".number").contains('1').click();
    cy.get(".number").contains('0').click();
    cy.get(".number").contains('0').click();
    cy.get(".operator").contains('÷').click();
    cy.get(".number").contains('0').click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "ERROR! Can't ÷ by 0!");
  });
  
  //Test Percentage
  it("25 % of 80 equals 20", () => {
    // Act
    cy.get(".number").contains('2').click();
    cy.get(".number").contains('5').click();
    cy.get(".operator").contains('%').click();
    cy.get(".number").contains('8').click();
    cy.get(".number").contains('0').click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "20");
  });
  //Test SquareRoot
  it("Squareroot of 144 should equal 12", () => {
    // Act
    cy.get(".number").contains('1').click();
    cy.get(".number").contains('4').click();
    cy.get(".number").contains('4').click();
    cy.get(".operator").contains('√').click();
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "12");
  });
  //Test Clear
  it("C button should reset values of display", () => {
    // Act
    cy.get("#equals").click();

    //Assert
    cy.get(".input").should("have.text", "0");
    cy.get(".equation").should("have.text", "0");

  });

});