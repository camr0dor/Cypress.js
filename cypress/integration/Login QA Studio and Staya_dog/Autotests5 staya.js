describe('Тестирование авторизации на сайте staya.dog', function () {

    it('Автотест для формы логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('camr0dor@gmail.com');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('qwerty12345');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
        cy.contains('Список пока пуст.');
    })
})
