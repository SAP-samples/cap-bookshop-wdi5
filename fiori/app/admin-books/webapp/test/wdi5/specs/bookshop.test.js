const ManageBooksPage = require("../pageobjects/manageBooks.page");
const NewBookPage = require("../pageobjects/newBook.page");

describe("Manage bookshop", () => {
  let bookTitle = "How to cook Pancakes";
  it("create a new book", async () => {
    //await browser.pause(5000)
    //await browser.saveScreenshot("./target/createBook.png")
    await ManageBooksPage.iClickOnCreateNewBook();
    await NewBookPage.iEnterTitle(bookTitle);
    await NewBookPage.iSelectGenre();
    await NewBookPage.iSelectAuthor();
    await NewBookPage.iClickOnCreateButton();
    await NewBookPage.iSeeEditButton();
  });

  it("should check book is added", async () => {
    await NewBookPage.iNavigateBack();
    await ManageBooksPage.theBookListContains(bookTitle);
  });

});

// require("./pages/manageBooksPage");
// require("./pages/newBookPage");

// describe("teched", function () {
//   let bookTitle = "How to cook Pancakes";
//   it("create a new book", function () {
//     When.onTheManageBooksPage.iClickOnCreateNewBook();
//     When.onTheNewBookPage.iEnterTitle(bookTitle);
//     When.onTheNewBookPage.iSelectGenre();
//     When.onTheNewBookPage.iSelectAuthor();
//     When.onTheNewBookPage.iClickOnSaveButton();
//     Then.onTheNewBookPage.iSeeEditButton();
//   });

//   it("should check book is added", function () {
//     When.onTheNewBookPage.iNavigateBack();
//     Then.onTheManageBooksPage.theBookListContains(bookTitle);
//   });
// });