import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const Scenario = (title, fn) => {

}

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
})
Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})

Scenario('Responsive layout for full screen', () => {

})
Given('I am on the Homepage', () => {

})
When('the window is full width', () => {

})
Then('I should see the form visible', () => {

})

Scenario('Responsive layout for laptop mode', () => {

})
Given('I am on the Homepage', () => {

})
When('the window is laptop mode', () => {

})
Then('I should see the form visible', () => {

})





Scenario('Responsive layout for tablet landscape mode', () => {

})
Given('I am on the Homepage', () => {

})
When('the window is in tablet landscape mode', () => {

})
Then('I should see the form visible', () => {

})

Scenario('Responsive layout for tablet portrait mode', () => {

})
Given('I am on the Homepage', () => {

})
When('the window is in tablet portrait mode', () => {

})
Then('I should see the form visible', () => {

})

Scenario('Responsive layout for mobile landscape screen', () => {

})
Given('I am on the Homepage', () => {

})
When('the window is mobile landscape screen', () => {

})
Then('I should see the form visible', () => {

})

Scenario('Responsive layout for mobile tablet screen', () => {

})
Given('I am on the Homepage', () => {

})
When('the window is mobile tablet screen', () => {

})
Then(' I should see the form visible', () => {

})