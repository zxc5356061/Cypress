# Cypress
Cypress Learning

## Install Cypress
```
1. 安裝node.js
2. 安裝nvm, 版本切換至14.16.0(for MOM project)
3. cd C:\Users\P22029\source\repos
4. git clone https://github.com/EI-Stack/IFactory-MOM-UI.git
5. cd C:\Users\P22029\source\repos\IFactory-MOM-UI
6. npm init (Run this command only if package.jason hasn't been created.)
7. npm install(自動根據package.jason安裝套件)
8. npm install cypress
9. npm install touch-cli -g
10. npx cypress open
```
## Install Typescript
```
1. cd C:\Users\P22029\source\repos\IFactory-MOM-UI
2. npm node --version
3. npm install -g ts-node
4. npm install --save-dev typescript
5. Create "tsconfig.json" at "C:\Users\P22029\source\repos\IFactory-MOM-UI"
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": ["**/*.ts"]
}
6. Create new "SampleTS.ts" file at "C:\Users\P22029\source\repos\IFactory-MOM-UI\cypress\integration"
7. npx cypress run and test "SampleTS.ts"
```

## Run Test
```
npx cypress run --spec path/fileName.js  // 跑在 terminal
EX: npx cypress run --spec C:\Users\P22029\source\repos\IFactory-MOM-UI\cypress\integration\ProductionArea/production_area.spec.js
```
![runTestFile](https://user-images.githubusercontent.com/96610052/166856299-8827cc9f-35de-4837-b7b4-2160cffa9127.png)


## Create a Test File
```
touch {your_project}/cypress/integration/sample_spec.js
EX: touch C:\Users\P22029\source\repos\IFactory-MOM-UI\cypress\integration\Samples/sample_spec.js
```

[[Cypress 1] E2E Testing 初探](https://medium.com/hannah-lin/cypress-e2e-testing-%E5%88%9D%E6%8E%A2-a10eca3c0cf7)</br>
[Getting started with Cypress in TypeScript & it's features](https://www.youtube.com/watch?v=j1YNpo8gG1c)</br>
