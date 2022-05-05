# Cypress
Cypress Learning

## Install Cypress
```
1. 安裝node.js
2. 安裝nvm, 版本切換至14.16.0(for MOM project)
3. cd C:\Users\P22029\source\repos
4. git clone https://github.com/EI-Stack/IFactory-MOM-UI.git
5. cd C:\Users\P22029\source\repos\IFactory-MOM-UI
6. npm install(自動根據package.jason安裝套件)
7. npm install cypress
8. npx cypress open
```

## Run Test
```
npx cypress run --spec path/fileName.js  // 跑在 terminal
EX: npx cypress run --spec C:\Users\P22029\source\repos\IFactory-MOM-UI\cypress\integration\ProductionArea/production_area.spec.js
![runTestFile](https://user-images.githubusercontent.com/96610052/166855857-834418aa-908f-4ef4-a249-68d058e7f37e.png)
```


[[Cypress 1] E2E Testing 初探](https://medium.com/hannah-lin/cypress-e2e-testing-%E5%88%9D%E6%8E%A2-a10eca3c0cf7)<br/>
