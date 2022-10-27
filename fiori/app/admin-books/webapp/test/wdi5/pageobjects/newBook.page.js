class NewBook {

        /**
         * define actions for the page object
         */

        async iEnterTitle(sBook) {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
                                interaction: {
                                        idSuffix: "inner"
                                }
                        }
                }).enterText(sBook);
        }

        async iSelectGenre() {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner-vhi"
                        }
                }).press();
                await browser.asControl({
                        selector: {
                                controlType: "sap.fe.core.controls.FieldWrapper",
                                viewId: "admin::BooksDetailsList",
                                searchOpenDialogs: true,
                                descendant: {
                                        controlType: "sap.m.Text",
                                        viewId: "admin::BooksDetailsList",
                                        bindingPath: {
                                                path: "/Genres(10)",
                                                propertyPath: "ID"
                                        },
                                        searchOpenDialogs: true
                                }
                        }
                }).press();
        }

        async iSelectAuthor() {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-edit-inner-vhi"
                        }
                }).press();
                await browser.asControl({
                        selector: {
                                controlType: "sap.m.Text",
                                viewId: "books::BooksDetailsList",
                                bindingPath: {
                                        path: "/Authors(ID=107,IsActiveEntity=true)",
                                        propertyPath: "name"
                                },
                                searchOpenDialogs: true
                        }
                }).press();
        }

        async iClickOnCreateButton() {
                await browser.asControl({
                        selector: {
                                id: "fe::FooterBar::StandardAction::Save",
                                viewId: "books::BooksDetailsList",
                                interaction: {
                                        idSuffix: "BDI-content"
                                }
                        }
                }).press();
        }

        async iNavigateBack() {
                await browser.asControl({
                        selector: {
                                id: "backBtn"
                        }
                }).press();
        }

        /**
         * define assertions for the page object
         */

        async iSeeEditButton() {
                const editButton = await browser.asControl({
                        selector: {
                                id: "fe::StandardAction::Edit",
                                viewId: "books::BooksDetailsList",
                                interaction: {
                                        idSuffix: "BDI-content"
                                }
                        }
                });
                expect(editButton.isInitialized()).toBeTruthy()
        }
}


module.exports = new NewBook();