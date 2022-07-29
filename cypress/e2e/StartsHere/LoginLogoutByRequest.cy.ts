
describe('Login&Logout', () => {
  it('Login&Logout', () => {
    let userName = "devanliang"
    let userAccount = `${userName}@iii.org.tw`    
    let passWord = "Abcd1234#"
    let data = JSON.stringify([
      {
        "operationName": "signIn",
        "variables": {
          "input": {
            "username": "devanliang@iii.org.tw",
            "password": "Abcd1234#"
          }
        },
        "query": "mutation signIn($input: SignInInput!) {\n  signIn(input: $input) {\n    user {\n      name\n      __typename\n    }\n    __typename\n  }\n}\n"
      }
    ]);
    
    let config = {
      method: 'post',
      url: 'https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/graphql',
      headers: { 
        'authority': 'ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com', 
        'accept': '*/*', 
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,zh-TW;q=0.7,zh;q=0.6', 
        'content-type': 'application/json', 
        'origin': 'https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com', 
        'referer': 'https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/', 
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
      },
      body: data
    }

    //Clean cookies and local storage
    cy.clearLocalStorage().clearCookies()

    //Login
    cy.request(config)
    cy.visit("https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/")
      .url()
      .should("include", "eks005")

    // //Check Account Name
    cy.get(".jss55 > .MuiTypography-root").click()
    cy.get('.jss30')
      .contains(userAccount)

    // //Logout
    cy.get('#user-menu > .MuiPaper-root > .MuiList-root > li.MuiButtonBase-root')
      .click()
      .url()
      .should("include","signIn");//confirm whether logout successfully
})
})