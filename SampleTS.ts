describe("Register form", ()=>{
    it("enter some value", ()=>{
        cy.visit("https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/");
        cy.get("input[placeholder='Username']").type("devanliang@iii.org.tw");
        cy.get("input[placeholder='Password']").type("Abcd1234#");
        cy.get(".jss55").click();
    })
})