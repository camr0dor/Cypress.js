describe('Тестирование сайта login.qa.studio', function () {

    it('Проверка логики восстановления пароля, позитивный тест кейс', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > img').click();
    })
})

