describe("Register form", ()=>{
    it("enter some value", ()=>{
        //Visit Login Portal
        cy.visit("https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/");

        //Verify address
        cy.url().should("include", "/signIn");
        
        //Login
        cy.get("input[placeholder='Username']").type("devanliang@iii.org.tw");
        cy.get("input[placeholder='Password']").type("Abcd1234#");
        cy.get(".jss55").click();
    })
})