describe.only("Open Google Form", function () {
    it("Visit Form", function () {
        cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSdGtCq9VnNmX9hlZoSxWO6OIDLd7i3gFmpDhjhNRzFfB46Mzg/viewform?vc=0&c=0&w=1")
        cy.wait(2000)

        const emailPassword = "Gktdfnmvyt1";
        
        cy.get('[id=Email]').as("emailInput")
        
        cy.get('@emailInput')
            .type('cypresstester2020')


        cy.get('[name=signIn]').should('have.class', "rc-button rc-button-submit").as("signInButton")
        cy.wait(1000)
        cy.get("@signInButton").click()
        cy.wait(1000)
        cy.get("[id=password]").type(emailPassword)
        
        cy.get("[id=submit]").click()
        cy.wait(1000)
        
    })
})