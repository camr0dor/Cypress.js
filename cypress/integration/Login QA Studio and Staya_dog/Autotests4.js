describe('Тестирование сайта login.qa.studio', function () {

    it('Проверка на негативный кейс авторизации с неправильным e-mail', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > img').click();
    })
})
