describe("Open Google Form", function () {
    it("Visit Form", function () {
        cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSdGtCq9VnNmX9hlZoSxWO6OIDLd7i3gFmpDhjhNRzFfB46Mzg/viewform?vc=0&c=0&w=1")
        cy.wait(2000)

        const emailPassword = "Gktdfnmvyt1";
        
        cy.get('[type=email]').as("emailInput")
       // cy.get('[[jscontroller="mOzJ1b"] > .rFrNMe > .aCsJod > .aXBtI > .OabDMe]').as("emailInput")
        
        cy.get('@emailInput')
            .type('cypresstester2020')
        
        cy.get('[name=signIn]').should('have.class', "rc-button rc-button-submit").as("signInButton")
        cy.wait(1000)
        cy.get("@signInButton").click({multiple:true, timeout:1000})
        cy.wait(1000)
        cy.get("[id=password]").type(emailPassword)
        
        cy.get("[id=submit]").click()
        cy.wait(1000)


        cy.get(":nth-child(1) > .freebirdFormviewerViewItemsItemItem > [jscontroller=\"eFy6Rc\"] > .appsMaterialWizToggleRadiogroupGroupContainer > .appsMaterialWizToggleRadiogroupGroupContent > .freebirdFormviewerViewItemsRadioChoicesContainer > :nth-child(1) > .docssharedWizToggleLabeledContainer > .docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > .appsMaterialWizToggleRadiogroupEl > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio").click()
        cy.wait(1000)
        cy.get(":nth-child(2) > .freebirdFormviewerViewItemsItemItem > [jscontroller=\"eFy6Rc\"] > .appsMaterialWizToggleRadiogroupGroupContainer > .appsMaterialWizToggleRadiogroupGroupContent > .freebirdFormviewerViewItemsRadioChoicesContainer > :nth-child(2) > .docssharedWizToggleLabeledContainer > .docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > .appsMaterialWizToggleRadiogroupEl > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio").click()
        cy.wait(1000)
        cy.get(":nth-child(3) > .freebirdFormviewerViewItemsItemItem > .freebirdFormviewerViewItemsTextItemWrapper > .quantumWizTextinputPaperinputEl > .quantumWizTextinputPaperinputMainContent > .quantumWizTextinputPaperinputContentArea > .quantumWizTextinputPaperinputInputArea > .quantumWizTextinputPaperinputInput").type("cypresstester2020")
        cy.wait(1000)
        cy.get(":nth-child(4) > .freebirdFormviewerViewItemsItemItem > .freebirdFormviewerViewItemsTextItemWrapper > .quantumWizTextinputPaperinputEl > .quantumWizTextinputPaperinputMainContent > .quantumWizTextinputPaperinputContentArea > .quantumWizTextinputPaperinputInputArea > .quantumWizTextinputPaperinputInput").type("cypresstester2020@gmail.com")
        cy.wait(1000)
        cy.get("[data-value=\"Instagram Ads\"] > .freebirdFormviewerViewItemsCheckboxChoice > .docssharedWizToggleLabeledContainer > .docssharedWizToggleLabeledLabelWrapper > .quantumWizTogglePapercheckboxEl > .quantumWizTogglePapercheckboxInnerBox").click()
        cy.wait(1000)
       
        //cy.get(".freebirdFormviewerViewItemsItemItem > .quantumWizMenuPaperselectEl > [jsname=\"LgbsSe\"] > .quantumWizMenuPaperselectDropDown").click().select("10-100")
        cy.get("[role=listbox]").click()

        cy.get('md-option').contains('Country seven').then(option => {

            // Confirm have correct option
            cy.wrap(option).contains('Country seven');

            option[0].click();  // this is jquery click() not cypress click()

            // After click, md-select should hold the text of the selected option
            cy.get('[name="countries"]').contains('Country seven')
        });
        
        cy.get("[role=listbox]").select("10-100", {timeout:4000})
        
        //cy.get(".freebirdFormviewerViewItemsItemItem > .quantumWizMenuPaperselectEl > [jsname=\"LgbsSe\"] > .quantumWizMenuPaperselectDropDown").select("10-100")
        cy.wait(1000)
       
        cy.get(":nth-child(6) > .freebirdMaterialScalecontentInput > .appsMaterialWizToggleRadiogroupElContainer > .appsMaterialWizToggleRadiogroupEl > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio").click()
        cy.wait(1000)
        
        
    })
})


