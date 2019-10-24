import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./cypress/integration/RegisterFormLayout.feature');

/** 
 * Scenario: Responsive layout for full screen
 * Given I am on the Homepage
 * When the window is full width 
 * Then I should see the form visible
 */
defineFeature(feature, test => {

    test('Responsive layout for full screen', ({ given, when, then, pending }) => {
        given('I am on the Homepage', () => {
            pending();
        });

        when('the window is full width', () => {
            pending();
        });

        then('I should see the form visible', () => {
            pending();
        });
    });

    test('Responsive layout for laptop mode', ({ given, when, then }) => {
        given('I am on the Homepage', () => {
            pending();
        });

        when('the window is laptop mode', () => {
            pending();
        });

        then('I should see the form visible', () => {
            pending();
        });
    });

    
    test('Responsive layout for tablet landscape mode', ({ given, when, then }) => {
	
        given('I am on the Homepage', ()=>{
            pending();
        })
        when('the window is in tablet landscape mode', ()=>{
            pending();
        })
        then('I should see the form visible', ()=>{
            pending();
        })

    })
    
    test('Responsive layout for tablet portrait mode', ({ given, when, then })=>{
        
        given('I am on the Homepage', ()=>{
            pending();
        })
        when('the window is in tablet portrait mode', ()=>{
            pending();
        })
        then('I should see the form visible', ()=>{
            pending();
        })
    })
    
    test('Responsive layout for mobile landscape screen', ({ given, when, then })=>{
        
        given ('I am on the Homepage', ()=>{
            pending();
        })
        when('the window is mobile landscape screen', ()=>{
            pending();
        })
        then('I should see the form visible', ()=>{
            pending();
        })
    })
    
    test('Responsive layout for mobile tablet screen', ({ given, when, then })=>{
        
        given('I am on the Homepage', ()=>{
            pending();
        })
        when('the window is mobile tablet screen', ()=>{
            pending();
        })
        then('I should see the form visible', ()=>{
            pending();
        })
    })

});