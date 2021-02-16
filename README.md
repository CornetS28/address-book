# AddressBook

The web source code of AddressBook - React

# Table of Contents

- [AddressBook](#addressbook)
  - [Screenshots](#screenshots)
  - [Requirements](#requirements)
  - [Usage](#usage)
    - [My Git Branching Model](#my-git-branching-model)
    - [Code linting and formatting](#code-linting-and-formatting)
    - [Getting Started on a Task](#getting-started-on-a-task)
  - [Publishing for Demoing](#publishing-for-staging-demoing)
  - [Building for Production](#building-for-production)
  - [Unit Testing with jest](#unit-testing-with-jest)
  - [Run Github Action](#run-github-action)

## Screenshots

![Address Book](https://github.com/CornetS28/address-book/blob/develop/src/utils/images/screenShot.png)

## Requirements

For development, you will need Node.js installed



## Usage

- Clone the repo and enter the project folder

```
git clone https://github.com/CornetS28/address-book 
cd AddressBook
```

- Install dependencies: `npm i`

- Run:
 
    ```
      npm start
    ```
  

That should be enough for UI related tasks.


### My Git Branching Model

I have followed a modified version of [Nvie's widely used Git branching model](https://nvie.com/posts/a-successful-git-branching-model/). Basically:

- I have two primary branches:

  1. `main`: For production releases
  2. `develop`: For development work

- For new features, I have created a new branch based on `develop` that I have merged back into `develop` on completion. I have named it anything, except for the followings:
  - main
  - develop


### Code linting and formatting

I took great pride in providing quality software. To be able to do so, I have started with the code formatting using Prettier. Since my code will be read by other humans, so have used the ESLint linter.

My code did not approved until it passed the automated linting tests.

To get started, I have installed those two extensions within VSCode:

1. [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


This was enough for my editor to automatically format my code or/and point out errors in my whole codebase that I need to handle manually.

### Getting Started on the Tasks

With that said, to quickly started working on a task, I have followed those steps

1. Cloned the project locally

```
git clone https://github.com/CornetS28/address-book/
cd AddressBook
```

2. Created a new branch for the feature I am  working on. Always branched out from `develop` for creating a new branch

```
git checkout -b [NEW-BRANCH-NAME] develop
```

3. Done the work and write succinct commit messages.
4. Pushed to `origin` on the new branch I created in step 2
5. Created a new Pull Request on GitHub. (from my branch to the `develop` branch. NOT `main`)


## Publishing for Demoing

TBD

## Building for Production

TBD


## Run Github Action
TBD
