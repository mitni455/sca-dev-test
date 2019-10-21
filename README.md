# SCA Dev Test 
[![CircleCI](https://circleci.com/gh/cypress-io/cypress-and-jest-typescript-example.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-and-jest-typescript-example)
> Example using Jest and Cypress with TypeScript in a single repo


# Quick Start 
### Quick Links 
| 🦄 | URL |
| --- | --- |
| `Staging` | https://todo.com |
| `Storybook` | https://sca-story.surge.sh |


### Running locally
* Run with Docker 
```bash
docker-compose up  
```

* Run without Docker 
```bash
# with yarn
yarn 
yarn run start:dev

# or with npm
npm i 
npm run start:dev
```

> be sure to edit the `.env` if you run locally 

### Testing
Run all tests 
```bash
# with yarn
yarn test

# or with npm
npm test
```

### Storybook
Checkout the Storybook
```bash
# with yarn
yarn run story

# or with npm
npm run story
```




# Architecture
### AWS Environments
![AwsArchitecture](https://i.ibb.co/z2P0rZy/aws-architecture.jpg)

We will use AWS for our stack, and only implement a staging environment to save on cost. By using `AWS Cloudformation` we have the ability to easily spin up and tear down complete stacks at will both from the developer's cli or from out CICD pipeline. 

| IaaS | Description |
| --- | --- |
| `Elastic Container Registry (ECR)` | We will use this for our Docker container registry |
| `Elastic Container Service (ECS)` | This is the cluster where our Dockerized containers will run. We could also use EKS (Kubernetes) but man, is it overkill |
| `LoadBalancer` | Poke a whole in the private network into our VPC and expose the Dockerized Node and/or React app. This helps us scale up and down with multiple containers as our scale grows. |


### Docker Multi Stage Build
We have Dockerfiles optimised for the `dev` local docker machine and `prod` which will be deployed to `AWS` environment for ```QA, UAT, Staging/PreProd and Prod```. Ideally I want one Dockerfile but Docker multi build doesn't support if/else logic yet. 

![Docker Mutli Stage Build](https://i.ibb.co/g93MfFk/docker-multi-stage-build.png)

| Stage | Description |
| --- | --- |
| `Build` |  Universal build |
| `Build4Prod` |  Build for Production |
| `Quality` | `optional` Code Quality and Security | 
| `Test` |  Lint, Test and Code Coverage  |
| `Dev` |  Docker optimised for Dev environment with nodemon, used for Developers desktop with hot loading et al  |
| `Prod` |  Production ready minified and optimised and SSR for `nginx`   |



# Project Plan 
Let's plan our sprint. We'll use Github project board available here [https://github.com/mitni455/sca-dev-test/projects/1](https://github.com/mitni455/sca-dev-test/projects/1)
and the [milestones](https://github.com/mitni455/sca-dev-test/milestones)

![Project Plan](https://i.ibb.co/X3N1SxB/Screen-Shot-2019-10-22-at-4-22-56-AM.png)

### User Stories 
So the way I translate the wireframes to User Stories, and User Stories to code is as follows. 

![Semantic Commit Workflow](https://i.ibb.co/9sy2spT/smart-commits.png)
> a similar pattern with Jira 

* Break the UI up into components. These include Layouts (Pages), components/containers and state management/services
* A User Story is the smallest thing you can ship to the end user that isnt weirdly out of place or doesn't work. e.g. if you put a button in prod with no handler the User would think it's broken. I typically try strip all the stuff out and say "would this add any value to end user?" 
* Definition of Done (DoD) is the Acceptance Criteria (AC). AC is written in Gherkin syntax (`GIVEN/WHEN/THEN`) so it can be converted immediately into code stubs (`cucumber` with `Cypress` for e2e and `Jest` for Unit Tests). 
* Features and User Stories are the same thing. I dont try differentiaite the two. Does a feature have multiple stories or Stories multiple features... Dont waste your brain cycles. It just depends. 
* That said I always branch for each User Story, hence the `feat(feature id): User Story`
* Use `semantic commits` with the following syntax: 
```
git checkout -b feature/{user story}
git commit -am "feat(sub task): add (not added) feature here" 
```
How to: [Semantic Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)



### Epics
---
#### Epic: As a DEV, I want to setup my project
##### feat(setup): As a DEV, I want to setup with NextJs, so I can have a next gen platform
- [ ] `NextJs with Typescript`
- [ ] `Setup storybook`
- [ ] `Setup linting`
- [ ] `Setup semantic commits cli`
- [ ] `Setup semantic release cli`
- [ ] `Install Material UI`

##### feat(tdd): As a DEV, I want to setup my test suite, so I can TDD with Jest and UI test with Enzyme 

- [ ] `Jest with Typescript`
- [ ] `install Enzyme for UI test`
- [ ] `install nyc for test coverage`

##### feat(bdd): As a DEV, I want to setup Cucumber and Cypress.io, so that I have integration and e2e tests

- [ ] `install Cucumber `
- [ ] `install Cypress `
- [ ] `install Cucumber with Jest`
- [ ] `install Cucumber with Cypress `

##### feat(aws): As a DEV, I want my environments setup on AWS, so that I can have a scalable cloud with different environments

- [ ] `We will use AWS Cloudformation to CRUD the Infrastructire`
- [ ] `Create an ECR stack script and yaml`
- [ ] `Update ECR stack script and yaml`
- [ ] `Delete the ECR stack`
- [ ] `Create an Loadbalancer stack script and yaml`
- [ ] `Update Loadbalancer stack script and yaml`
- [ ] `Delete the Loadbalancer stack script and yaml`
- [ ] `scripts for TravisCI to share AWS credentials`



##### feat(cicd): As a DEV, I want a CICD pipeline setup, so that I can auto deploy to environment

- [ ] `Setup CircleCI`
- [ ] `init circle ci config`
- [ ] `Multibuild Docker for Production`
- [ ] `build deploy master branch to Heroku`
- [ ] `semantic release`


---

#### Epic: As a User, I want some pages
##### feat(SubmissionPage): As a USER, I want a Subscription confirmation page, so that I can make sure I filled in the page correctly
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Routing`

###### Acceptance Criteria 
```
Feature: Submission Page 

Scenario: Go to the Submission Page
  Given I am on the Submission Page
  Then I should see confirmation message 
```

---


##### feat(Homepage): As USER, I want a Homepage, so that I can mount the form 
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Routing`

###### Acceptance Criteria 
```
Feature: Homepage

Scenario: Go to the Homepage
  Given I am on the Homepage
  Then I should see the form loaded
  And I should see the header 
```


---

#### Epic: As a User, I want a  Register form


##### feat(FormLayout): As USER, I want a responsive register form layout, so that I can use it on all devices
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `install Material UI`
- [ ] `Install Formik`

###### Acceptance Criteria 
```
Feature: Register Form Layout

Scenario: Responsive layout for full screen
  Given I am on the Homepage
  When the window is full width 
  Then I should see the form visible

Scenario: Responsive layout for full screen
  Given I am on the Homepage
  When the window is laptop mode 
  Then I should see the form visible

Scenario: Responsive layout for tablet
  Given I am on the Homepage
  When the window is in tablet landscape mode
  Then I should see the form visible

Scenario: Responsive layout for tablet
  Given I am on the Homepage
  When the window is in tablet portrait mode
  Then I should see the form visible

Scenario: Responsive layout for full screen
  Given I am on the Homepage
  When the window is mobile landscape screen 
  Then I should see the form visible

Scenario: Responsive layout for full screen
  Given I am on the Homepage
  When the window is mobile tablet screen 
  Then I should see the form visible

```

##### feat(firstname): As USER, I want a first name field, so that I can fill it in
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Material Textfield`
- [ ] `Formik Textfield` 

###### Acceptance Criteria 
```
Feature: Register form firstname

Scenario: Firstname field mounted
  Given I am on the Homepage
  When the page is loaded  
  Then I should see the firstname field

Scenario: Valid Firstname field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see no validation error 

Scenario: InValid Firstname field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see a validation error
```

##### feat(lastname): As USER, I want a last name field, so that I can fill it in
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Material Textfield`
- [ ] `Formik Textfield` 

###### Acceptance Criteria 
```
Feature: Register form lastname

Scenario: lastname field mounted
  Given I am on the Homepage
  When the page is loaded  
  Then I should see the lastname field

Scenario: Valid lastname field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see no validation error 

Scenario: InValid lastname field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see a validation error
```

##### feat(email): As USER, I want an email field, so that I can fill it in
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Material Textfield`
- [ ] `Formik Textfield` 

###### Acceptance Criteria 
```
Feature: Register form email

Scenario: email field mounted
  Given I am on the Homepage
  When the page is loaded  
  Then I should see the email field

Scenario: Valid email field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see no validation error 

Scenario: InValid email field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see a validation error
```

##### feat(phone): As USER, I want a Mobile phone field, so that I can fill it in
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Material Textfield`
- [ ] `Formik Textfield` 

###### Acceptance Criteria 
```
Feature: Register form phone

Scenario: Mobile phone field mounted
  Given I am on the Homepage
  When the page is loaded  
  Then I should see the phone field

Scenario: Valid Mobile phone field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see no validation error 

Scenario: InValid Mobile phone field input
  Given I am on the Homepage
  When the input field has valid input 
  Then I should see a validation error
```

##### feat(RegisterService): As USER, I want a Form API, so that I can submit the form or show any server side errors 
###### Todo 
- [ ] `BDD acceptance criteria gherkins`
- [ ] `BDD Cucumber steps`
- [ ] `TDD UI tests with Enzyme`
- [ ] `TDD Unit tests with Jest`
- [ ] `Install axios`
- [ ] `Handle Validation Errors from Server`
- [ ] `Handle 400 errors from server`
- [ ] `Handle 500 errors from Server`

###### Acceptance Criteria 
```
Feature: Register form API service

Scenario: Register API successfully
  Given I am on the Homepage
  When I submit the form correctly 
  Then I should get 200 

Scenario: Handle Validation errors
  Given I am on the Homepage
  When I submit the form incorrectly
  Then I should see validation error 

```


---
## Runtime setup
- `Next.Js`: used for modern react 
- `Docker`: container for consistent dev and prod environments 


## test setup
- `jest.config.js`: use `ts-jest` to test TypeScript files; use mocks for imported CSS/LESS files; use TypeScript compiler to handle both TS/JS files
- `jest.setup.js`: use `enzyme` to test the rendered component 
- `tsconfig.jest.json`: allow JavaScript files (e.g., `jest.setup.js`) during the test
- `next.config.js`: just an ordinary Next.js config (with TypeScript and CSS support)

