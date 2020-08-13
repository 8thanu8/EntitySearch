/// <reference types="cypress" />


/*context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })*/

  // https://on.cypress.io/interacting-with-elements

  describe('ES Testing', () => {
    
  it('URL Test', () => {
    // const srch_txt = 'DFS'
    cy.log('Going on the URL, and making sure the destination page is correct.')
     cy.visit('http://localhost:3000/#!/justifications')
     cy.url().should('include', 'localhost:3000') //checks if the url includes 'localhost:3000'
      cy.url().should('include', 'justifications') //checks if the url includes 'justification'
  })

//do the checkbox check for incial checck on justfication pagw
//regression main most important functionalities 
//thihnk oabout how to report the tests and how to show many testrs have been dpne, and on what and when and how many passed and how many didnt etc.
//see if you can do testing the networking diagram 
//Why you need to access ES page

it('Name Test Within People', () => {
cy.get('#P').click() //Search and click on 
cy.get('#submit').click() //Find and click the submit button 



//Testing The People Category


cy.get('#es-condition-name').type('People') //Searches for the  text field and types 'people'.
cy.get('#primary-input').type('Ali') //Searches for the next text field and types 'ali'.
cy.get('.es-query-builder__button--search').click() //Searches and clicks the 'search' button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('Ali') //checks if the output is related to 'ali'
//cy.get('thead > tr > :nth-child(1) > .ng-scope').click()
//cy.get('.es-results-table__tr-no-border > :nth-child(1)').click()

//cy.get('.button').click()
//cy.get('#graph').rightclick()

cy.get('.es-query-builder-summary-link > a').click() //Finds and clicks 'new search' button 
})
it('Different Name Test Within People', () => {
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.


cy.wait(10000)
cy.get('.es-query-builder-summary-link > a').click() //Finds and clicks the search button.
cy.get('#primary-input').clear()  //Finds the text field and clears any values within it.
cy.get('#primary-input').type('Max') //Finds the text field and types Max'
cy.get('.es-query-builder__button--search').click() //Searches and clicks the 'search' button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('Max')  //checks if the output is related to 'max'
cy.get('.es-query-builder-summary-link > a').click()//Finds and clicks 'new search' button 
//cy.get('.es-multi__search__link').click()

})
it('Star Function Test Within Organisation', () => {

//Apply:
//-source filter testing
//-Gender filter testing
//-nationality filter testing
//-age filter testing

//attempt network testing 


//Testing The Organisations Category 

//cy.get('.es-query-builder-summary-link > a').click() //Finds and clicks 'new search' button 
//cy.get('#es-condition-name').click()
cy.get('#es-condition-name').clear() //cy.get('#es-condition-name').clear
cy.get('#es-condition-name').type('Organisations')//Searches for the text field and types 'Organisations'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
})
it('Test Search Field Within Organisation', () => {
cy.get('.es-query-builder-summary-link > a').click()//Finds and clicks 'new search' button 
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('Peartree') //Finds the text field and types 'Peartree'
cy.get('.es-query-builder__button--search').click()  //Finds and clicks the search button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('Peartree') //checks if the output is related to 'Peartree'
})
it('', () => {


//Apply:
//-source filter testing



//Testing The Addresses Category 
cy.get('.es-query-builder-summary-link > a').click() //Finds and clicks 'new search' button 
cy.get('#es-condition-name').clear() //cy.get('#es-condition-name').clear
cy.get('#es-condition-name').type('Addresses') //Searches for the text field and types 'Addresses'.
cy.get('#primary-input').clear()

})
it('FOUND ERROR HERE FOR POSTCODE NO SPACE', () => {
cy.get('#primary-input').type('DD11DD') //testing with capital letters.
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__details__btn').click()
cy.get('.column-three-quarters').contains('DD1 1DD') //checks if the output is related to 'max'
cy.get('.es-app-header__title-text').click()
cy.get('#es-condition-name').clear() //cy.get('#es-condition-name').clear
cy.get('#es-condition-name').type('Addresses') //Searches for the text field and types 'Addresses'.
cy.get('#primary-input').clear()
cy.get('#primary-input').type('EDWARD LODGE') //testing with capital letters.
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__details__btn').click()
})
it('Test Within Address Contains Correct First Name', () => {
cy.get('.column-three-quarters').contains('Max') //checks if the output is related to 'max'
})
it('Test Within Address Contains Correct Second Name', () => {
cy.get('.column-three-quarters').contains('Edward') //checks if the output is related to 'edward'
})
it('Test Within Address Contains Correct Location', () => {
cy.get('.column-three-quarters').contains('Lodge') //checks if the output is related to 'lodge'
})
it('Test Within Address, If Address Links To Correct Person - Also Testing Multiple Entity Search', () => {


cy.get('.es-app-header__title-text').click()


cy.get('#es-condition-name').clear() //cy.get('#es-condition-name').clear
cy.get('#es-condition-name').type('People') //Searches for the text field and types 'Addresses'.
cy.get('#primary-input').clear()
cy.get('#primary-input').type('Miller')
cy.get('.es-multi__search__link').click()

cy.get('#es-condition-name2').type('Address')
cy.get('.animate-if > .es-multi__search__controls > .es-multi__search__controls__items--expand > .es-multi__search__input-string').type('Josue Camp')
cy.get('.es-query-builder__button--search').click()

cy.get('.column-three-quarters').contains('Miller')
})
it('Testing Location is correct, With Multiple Entity Search', () => {
cy.get('.column-three-quarters').contains('Josue Camp') //Double catogory search peformed here
})
it('Test Within Contact Numbers If Search Feature Works', () => {





 
//Testing The Contact Numbers Category 

cy.get('.es-app-header__title-text').click()
//cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Contact numbers') //Searches for the text field and types 'Contact Numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.

})
it('Test Within Email Address If Search Feature Works', () => {


//Apply:
//-source filter testing


//Testing The Email Addresses Category 
cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Email addresses') //Searches for the text field and types 'Email Address'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*')//Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.

cy.get('.es-app-header__title-text').click() //Finds and clicks the homepage/logo
})
it('Test Within Internet Locations, If Search Feature Works', () => {

//no data here

//Testing The Internet Locations Category 


cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Internet locations') //Searches for the text field and types 'Internet Locations'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('192.168.17.2') //Finds the text field and types '192.168.17.2'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
//cant gert next 2 ;ines to work
cy.get(':nth-child(4) > .es-results-table__cell > #entity\.objectId > .es-results-table__details__btn').dblclick()
cy.get('.column-three-quarters').contains('Piper')

cy.get('.es-app-header__title-text').click()
})
it('Test Within Docu', () => {
//Apply:
//-source filter testing
//-internet type testing


//Testing The Document Numbers Category 
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Document numbers') //Searches for the text field and types 'Document numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('BLOCK160574979684') //Finds the text field and types 'BLOCK160574979684'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__details__btn').click()
cy.get('.column-three-quarters').contains('Max') //checks if the output is related to 'max'
})
it('', () => {
cy.get('.es-app-header__title-text').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Document numbers') //Searches for the text field and types 'Document numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.


//cy.get('.es-app-header__title-text').click()
cy.get('#primary-input').type('METZ*') //Finds the text field and types 'METZ...' USED wildcard after word
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('tbody > :nth-child(3) > :nth-child(2) > .ng-binding').contains('METZ') //checks if the output is related to 'max'
})
it('', () => {


cy.get('.es-app-header__title-text').click()

//Apply:
//-source filter testing
//-type filter testing 

//Testing The Reference Numbers Category 
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Reference numbers') //Searches for the text field and types 'reference numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Searches for the text field and types '*'.
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Reference numbers') //Searches for the text field and types 'reference numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('176_2222000007') //Searches for the text field and types '176_2222000007'.
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.



//cy.get('.es-app-header__title-text').click()


})
it('', () => {
//Testing The Registration Numbers Category 

cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Registration numbers') //Searches for the text field and types 'Registration numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.


cy.get('.es-query-builder-summary-link > a').click()
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('P911CV?') //Finds the text field and types 'P911CV.'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('P911CV') //checks if the output is related to 'P911CVN'
})
it('', () => {

cy.get('.es-query-builder-summary-link > a').click()
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('P911CVN') //Finds the text field and types 'P911CVN'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('P911CVN') //checks if the output is related to 'P911CVN'
//cy.get('.es-app-header__title-text').click()


})
it('', () => {
//Testing The Consignment Numbers Category 

cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Consignment numbers') //Searches for the text field and types 'consignment numbers'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
//cy.get('.es-app-header__title-text').click()
})
it('', () => {


//Testing The Applications Category
cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Applications') //Searches for the text field and types 'applications'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-app-header__title-text').click()
cy.get('#es-condition-name').type('Applications') //Searches for the text field and types 'applications'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('AVR-VARRP 2009') //Finds the text field and types 'AVR-VARRP 2009'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('AVR-VARRP 2009') //checks if the output is related to 'AVR-VARRP 2009'
})
it('', () => {
cy.get('.es-app-header__title-text').click()




//cy.get('#source-0-3')


//Testing The Suspected Offences Category
//cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Suspected offences')  //Searches for the text field and types 'suspected offences'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-app-header__title-text').click()
cy.get('#es-condition-name').type('Suspected offences')  //Searches for the text field and types 'suspected offences'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('NOD Visit') //Finds the text field and types 'NOD Visit'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__tr-no-border > :nth-child(2) > .ng-binding').contains('NOD Visit')  //checks if the output is related to 'NOD Visit'
})
it('', () => {
cy.get('.es-app-header__title-text').click()



//Testing The Offences Category

//cy.get('.es-query-builder-summary-link > a').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Offences') //Searches for the text field and types 'offences'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('*') //Finds the text field and types '*'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.


})
it('', () => {
//Testing The Travel Category
cy.get('.es-app-header__title-text').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Travel') //Searches for the text field and types 'travel'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('GJFBL~') //Finds the text field and types 'GJFIBL' used the +1 -1 
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__details__btn').click()
cy.get('.column-three-quarters').contains('GJFIBL') 
})
it('', () => {
cy.get('.es-app-header__title-text').click()
cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Travel') //Searches for the text field and types 'travel'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('GJFIBL') //Finds the text field and types 'GJFIBL'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__details__btn').click()
cy.get('.column-three-quarters').contains('Max') 
})
it('', () => {

cy.get('.column-three-quarters').contains('BLOCK160574979684') //checks if the output is related to 'BLOCK160574979684'
})
it('', () => {
cy.get('.es-results-table__tr-no-border > :nth-child(3)').contains('LGA') //checks if the output is related to 'LGA'
})
it('', () => {
cy.get('.es-results-table__tr-no-border > :nth-child(4)').contains('BWI') //checks if the output is related to 'BWI'
})
it('', () => {


//UNSURE IF THE OR STATMENT WORKS
// cy.get('.es-app-header__title-text').click()
// cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
// cy.get('#es-condition-name').type('Travel') //Searches for the text field and types 'travel'.
// cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
// cy.get('#primary-input').type('GJIFBL OR PK733') //Finds the text field and types 'GJFIBL' used the +1 -1 
// cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
// cy.get('.es-results-table__details__btn').click()
// cy.get('.column-three-quarters').contains('GJFIBL') 
// cy.get('.column-three-quarters').contains('PK733') 
//cy.get('.es-app-header__title-text').click()



cy.get('.es-app-header__title-text').click()



cy.get('#es-condition-name').clear() //Finds the text field and clears any values within it.
cy.get('#es-condition-name').type('Travel') //Searches for the text field and types 'travel'.
cy.get('#primary-input').clear() //Finds the text field and clears any values within it.
cy.get('#primary-input').type('PK733') //Finds the text field and types 'PK733'
cy.get('.es-query-builder__button--search').click() //Finds and clicks the search button.
cy.get('.es-results-table__details__btn').click()
cy.get('.column-three-quarters').contains('STRANGE') //checks if the output is related to 'STRANGE'
})
it('', () => {
cy.get(':nth-child(6) > .ng-binding').contains('Air') //checks if the output is related to 'Air'
})

//
//
//
//




//code below need to work on
/*

//Check box filter checking

cy.get('#source-0-0').click()
//check if its been checked, need to do
cy.get('.button-secondary').click()
cy.get(':nth-child(3) > :nth-child(7) > .ng-binding').contains('API')
cy.get(':nth-child(11) > :nth-child(7) > .ng-binding > span').contains('API')
cy.get(':nth-child(15) > :nth-child(7) > .ng-binding > span').contains('API')
//
cy.get('#gender--0').click()
//check if its been checked, need to do
cy.get('.button-secondary').click()

cy.get(':nth-child(3) > :nth-child(5) > .ng-binding > span').contains('M')
cy.get(':nth-child(7) > :nth-child(5) > .ng-binding > span').contains('M')
cy.get(':nth-child(11) > :nth-child(5) > .ng-binding > span').contains('M')
//check if its been checked, need to do
*/













/*
    // https://on.cypress.io/type
    cy.get('#site-search-text')
      .type(srch_txt).should('have.value', srch_txt)


    cy.get('#search-submit').click()
 // cy.get('#results')


  cy.url().should('include', 'companieshouse.gov.uk/search?q=')
   cy.contains(srch_txt).click()

   cy.get('#sic-title')
   cy.get('#content-container').contains('furniture')

   cy.contains('People').click()

   cy.get('.block-label [type="checkbox"]').not('[disabled]')
     .check().should('be.checked')


     cy.get('.block-label [type="checkbox"]')
       .not('[disabled]')
       .uncheck().should('not.be.checked')


     //multiple checkbox
       //cy.contains('Filing history').click()
  // cy.get('.filing-history-filter [type="checkbox"]')
  //.check(['filter-category-accounts', 'checkbox2']).should('be.checked')


cy.get('strong').should('be.visible')
  // calls the 'length' property returning that value
  //.its('length')
  //.should('eq', 8)


cy.get('.heading-xlarge')
.should('be.visible')
.should('have.css', 'font-family')
  .and('match', /serif/)


  cy.get('#filing-history-tab').click()

  cy.url().should('include', 'history')

  cy.get('#people-tab').click()

  cy.url().should('include', 'officers')

  cy.get('#more-tab').click()

  cy.url().should('include', 'more')


  cy.get('#user-signin').click()
  cy.get('#register').click()
  cy.get('#email').type('example@hotmail.com')
  cy.get('#confirm_email').type('example@hotmail.com')
  cy.get('#submit').click()
  cy.get('#page-container').contains('activation')

  cy.visit('https://beta.companieshouse.gov.uk/company/04132607/more')
  cy.get('#user-signin').click()
  cy.get('#register').click()
  cy.get('#email').type('right@hotmail.com')
  cy.get('#confirm_email').type('wrong@hotmail.com')
  cy.get('#submit').click()
  cy.get('#page-container').contains('Registration Failed')


  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('!')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '!')
  
  
  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('@')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '@')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('£')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '£')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('$')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '$')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type('%')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '%')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('^')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '^')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type('&')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '&')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('*')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '*')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  // cy.get('#site-search-text').type('(')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', '(')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  // cy.get('#site-search-text').type(')')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', ')')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type('-')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '-')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type('_')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '_')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('=')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '=')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('+')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '+')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  //  cy.get('#site-search-text').type('[')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', '[')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  // cy.get('#site-search-text').type(']')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', ']')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('{')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '{')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  // cy.get('#site-search-text').type('}')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', '}')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type(':')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', ':')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type(';')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', ';')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  // cy.get('#site-search-text').type('"')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', '"')

 

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('|')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '|')

  // cy.visit('https://beta.companieshouse.gov.uk/')
  // cy.get('#site-search-text').type('<')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', '<')


  // cy.visit('https://beta.companieshouse.gov.uk/')
  //  cy.get('#site-search-text').type('>')
  // cy.get('#search-submit').click()
  // cy.get('.grid-row').should('include.text', '>')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('/')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '/')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('?')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '?')

  cy.visit('https://beta.companieshouse.gov.uk/')
   cy.get('#site-search-text').type(',')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', ',')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('.')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '.')

  cy.visit('https://beta.companieshouse.gov.uk/')
  cy.get('#site-search-text').type('~')
  cy.get('#search-submit').click()
  cy.get('.grid-row').should('include.text', '~')




cy.visit('https://beta.companieshouse.gov.uk')

     cy.url().should('include', 'https://beta.companieshouse.gov.uk')

    // https://on.cypress.io/type
    cy.get('#site-search-text')
      .type(srch_txt).should('have.value', srch_txt)

    cy.get('#search-submit').click()


    const email = 'copawoh325@etoymail.com'
    cy.visit('https://beta.companieshouse.gov.uk')
    

    // https://on.cypress.io/type
    cy.get('#site-search-text')
      .type(srch_txt).should('have.value', srch_txt)

    cy.get('#search-submit').click()
    cy.contains(srch_txt).click()
    cy.get('#user-signin').click()
    cy.get('#signin_email').type(email)
    cy.get('#password').type('Password1')
    cy.get('#submit').click()
    cy.get('#password-remaining_attempts-error').should('include.text', 'Invalid email address or password')

    cy.visit('https://beta.companieshouse.gov.uk')
   

   cy.get('#user-signin').click()
   cy.get('#signin_email').type(email)
   cy.get('#password').type('Password1!')
   cy.get('#submit').click()
   cy.get('#signed-in-user').should('include.text', email)

   cy.get('#navigation > :nth-child(2) > a').click()

   cy.url().should('include', 'account.companieshouse.gov.uk/user/account')
   cy.get('#recent_filings').click()
   cy.url().should('include', 'beta.companieshouse.gov.uk/user/transactions')
   cy.get('#following').click()

     cy.url().should('include', 'follow.companieshouse.gov.uk')


     cy.visit('https://beta.companieshouse.gov.uk')
     cy.get('#site-search-text')
      .type(srch_txt).should('have.value', srch_txt)
      cy.get('#search-submit').click()
      cy.contains(srch_txt).click()
      cy.get('#follow-this-company').click()
      cy.url().should('include', 'confirm-follow')
      cy.get('#follow-company-confirmed').click()

      
      //cy.get('#following').click() un comment when bekow done 
     

    //  cy.get('.company-header').should('include', 'unfollow')  check if there is unfollow button

    cy.get('#unfollow-this-company').click()
    cy.url().should('include', 'confirm-unfollow')
    cy.get('#unfollow-company-confirmed').click*/

    
    //check if has been unfollowed
  //should('SPECSAVERS')

   //contains('SPECSAVERS')


  //  cy.contains('specsavers')

    /*  // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('slow.typing@email.com', { delay: 100 })
      .should('have.value', 'slow.typing@email.com')
*/
    /*cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')*/
  })

/*  })*/

  /*
  it('.focus() - focus on a DOM element', () => {
    // https://on.cypress.io/focus
    cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')
  })

  it('.blur() - blur off a DOM element', () => {
    // https://on.cypress.io/blur
    cy.get('.action-blur').type('About to blur').blur()
      .should('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')
  })

  it('.clear() - clears an input or textarea element', () => {
    // https://on.cypress.io/clear
    cy.get('.action-clear').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it('.submit() - submit a form', () => {
    // https://on.cypress.io/submit
    cy.get('.action-form')
      .find('[type="text"]').type('HALFOFF')
    cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
  })

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.action-btn').click()

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.get('#action-canvas').click()

    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    cy.get('#action-canvas')
      .click(80, 75) // click 80px on x coord and 75px on y coord
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165)

    // click multiple elements by passing multiple: true
    cy.get('.action-labels>.label').click({ multiple: true })

    // Ignore error checking prior to clicking
    cy.get('.action-opacity>.btn').click({ force: true })
  })

  it('.dblclick() - double click on a DOM element', () => {
    // https://on.cypress.io/dblclick

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('.rightclick() - right click on a DOM element', () => {
    // https://on.cypress.io/rightclick

    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('.check() - check a checkbox or radio element', () => {
    // https://on.cypress.io/check

    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
      .check().should('be.checked')

    cy.get('.action-radios [type="radio"]').not('[disabled]')
      .check().should('be.checked')

    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]')
      .check('radio1').should('be.checked')

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(['checkbox1', 'checkbox2']).should('be.checked')

    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]')
      .check({ force: true }).should('be.checked')

    cy.get('.action-radios [type="radio"]')
      .check('radio3', { force: true }).should('be.checked')
  })

  it('.uncheck() - uncheck a checkbox element', () => {
    // https://on.cypress.io/uncheck

    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]')
      .not('[disabled]')
      .uncheck().should('not.be.checked')

    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]')
      .check('checkbox1')
      .uncheck('checkbox1').should('not.be.checked')

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]')
      .check(['checkbox1', 'checkbox3'])
      .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')

    // Ignore error checking prior to unchecking
    cy.get('.action-check [disabled]')
      .uncheck({ force: true }).should('not.be.checked')
  })

  it('.select() - select an option in a <select> element', () => {
    // https://on.cypress.io/select

    // at first, no option should be selected
    cy.get('.action-select')
      .should('have.value', '--Select a fruit--')

    // Select option(s) with matching text content
    cy.get('.action-select').select('apples')
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    cy.get('.action-select').should('have.value', 'fr-apples')

    cy.get('.action-select-multiple')
      .select(['apples', 'oranges', 'bananas'])
      // when getting multiple values, invoke "val" method first
      .invoke('val')
      .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

    // Select option(s) with matching value
    cy.get('.action-select').select('fr-bananas')
      // can attach an assertion right away to the element
      .should('have.value', 'fr-bananas')

    cy.get('.action-select-multiple')
      .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
      .invoke('val')
      .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
    // assert the selected values include oranges
    cy.get('.action-select-multiple')
      .invoke('val').should('include', 'fr-oranges')
  })

  it('.scrollIntoView() - scroll an element into view', () => {
    // https://on.cypress.io/scrollintoview

    // normally all of these buttons are hidden,
    // because they're not within
    // the viewable area of their parent
    // (we need to scroll to see them)
    cy.get('#scroll-horizontal button')
      .should('not.be.visible')

    // scroll the button into view, as if the user had scrolled
    cy.get('#scroll-horizontal button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-vertical button')
      .should('not.be.visible')

    // Cypress handles the scroll direction needed
    cy.get('#scroll-vertical button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-both button')
      .should('not.be.visible')

    // Cypress knows to scroll to the right and down
    cy.get('#scroll-both button').scrollIntoView()
      .should('be.visible')
  })

  it('.trigger() - trigger an event on a DOM element', () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get('.trigger-input-range')
      .invoke('val', 25)
      .trigger('change')
      .get('input[type=range]').siblings('p')
      .should('have.text', '25')
  })

  it('cy.scrollTo() - scroll the window or element to a position', () => {

    // https://on.cypress.io/scrollTo

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo('bottom')

    cy.get('#scrollable-horizontal').scrollTo('right')

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    cy.get('#scrollable-vertical').scrollTo(250, 250)

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get('#scrollable-both').scrollTo('75%', '25%')

    // control the easing of the scroll (default is 'swing')
    cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

    // control the duration of the scroll (in ms)
    cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
  })
})
*/


