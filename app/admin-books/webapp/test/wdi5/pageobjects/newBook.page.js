const { expect } = require("chai");

module.exports = {
        iEnterTitle: async (sBook) => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
                        interaction: {
                                idSuffix: "inner"
                        }
                }}).enterText(sBook);
            },
        iSelectGenre: async () => {
        await browser.asControl({
                selector: {
                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner-vhi"
        }}).press();
        await browser.asControl({
                selector: {
                controlType: "sap.m.Text",
                viewId: "books::BooksDetailsList",
                bindingPath: {
                        path: "/Genres(10)",
                        propertyPath: "name"
                },
                searchOpenDialogs: true
        }}).press();
        },
        iSelectAuthor: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-edit-inner-vhi"
                }}).press();
                await browser.asControl({
    	selector: {
            controlType: "sap.m.Text",
            viewId: "books::BooksDetailsList",
            bindingPath: {
                    path: "/Authors(101)",
                    propertyPath: "name"
            },
            searchOpenDialogs: true
                }}).press();
            },
            iPressCreate: async () => {
                await browser.asControl({
                        selector: {
                        id: "fe::FooterBar::StandardAction::Save",
                        viewId:"books::BooksDetailsList",
                        interaction: {
                                idSuffix: "BDI-content"
                        }
                }}).press();
            },
            iSeeEditButton: async () => {
                const enabled = await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::StandardAction::Edit"
                }}).getEnabled();
                expect(enabled).toBeTruthy();
            },
            iNavigateBack: async () => {
                await browser.asControl({
                        selector: {
                        id: "backBtn"
                }}).press();
            }

};