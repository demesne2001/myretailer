function ShowSearchItemPopUp(ClickButtonID, ListAction, Controller, ObjectType, SetFuncName, DivName, ShowPopUpDivId, PopUpTitle, FocusTableId, ReqAll) {
    $("#" + ClickButtonID).click(function () {
        ClearAllPopUpControls('mstItem');
        mstItemGrid(ListAction, Controller, ObjectType, SetFuncName, DivName, ReqAll);
        $("#" + ShowPopUpDivId).dialog({
            title: PopUpTitle,
            resizable: false,
            modal: true,
            height: 470,
            width: 900
        });
        $("#" + FocusTableId).focus();
    });
}

function ShowSearchVendorPopUp(ClickButtonID, ListAction, Controller, ObjectType, SetFuncName, DivName, ShowPopUpDivId, PopUpTitle, FocusTableId) {
    $("#" + ClickButtonID).click(function () {
        ClearAllPopUpControls('mstVendor');
        mstVendorGrid(ListAction, Controller, ObjectType, SetFuncName, DivName);
        $("#" + ShowPopUpDivId).dialog({
            title: PopUpTitle,
            resizable: false,
            modal: true,
            height: 470,
            width: 900
        });
        $("#" + FocusTableId).focus();
    });
}

function ShowSearchCustomerPopUp(ClickButtonID, ListAction, Controller, ObjectType, SetFuncName, DivName, ShowPopUpDivId, PopUpTitle, FocusTableId) {
    $("#" + ClickButtonID).click(function () {
        ClearAllPopUpControls('mstCustomer');
        mstCustomerGrid(ListAction, Controller, ObjectType, SetFuncName, DivName);
        $("#" + ShowPopUpDivId).dialog({
            title: PopUpTitle,
            resizable: false,
            modal: true,
            height: 470,
            width: 900
        });
        $("#" + FocusTableId).focus();
    });
}

function ShowSearchSKUPopUp(ClickButtonID, ListAction, Controller, ObjectType, SetFuncName, DivName, ShowPopUpDivId, PopUpTitle, FocusTableId) {
    $("#" + ClickButtonID).click(function () {
        ClearAllPopUpControls('trnSKU');
        trnSKUGrid(ListAction, Controller, ObjectType, SetFuncName, DivName);
        $("#" + ShowPopUpDivId).dialog({
            title: PopUpTitle,
            resizable: false,
            modal: true,
            height: 470,
            width: 900
        });
        $("#" + FocusTableId).focus();
    });
}

function ShowSearchAddressBookPopUp(ClickButtonID, ListAction, Controller, ObjectType, SetFuncName, DivName, ShowPopUpDivId, PopUpTitle, FocusTableId, ReqAll) {
    $("#" + ClickButtonID).click(function () {
        ClearAllPopUpControls('mstAddressBook');
        mstAddressBookGrid(ListAction, Controller, ObjectType, SetFuncName, DivName, ReqAll);
        $("#" + ShowPopUpDivId).dialog({
            title: PopUpTitle,
            resizable: false,
            modal: true,
            height: 470,
            width: 900
        });
        $("#" + FocusTableId).focus();
    });
}

function ClearAllPopUpControls(DivObjectName) {
    if (DivObjectName === "mstItem") {
        $("#filtItemName").val('');
    }
    if (DivObjectName === "mstVendor") {
        $("#filtVendorName").val('');
    }
    if (DivObjectName === "mstCustomer") {
        $("#filtCustomerName").val('');
    }
    if (DivObjectName === "trnSKU") {
        $("#filtproductName").val('');
    }
    if (DivObjectName === "mstAddressBook") {
        $("#filtAddressName").val('');
    }
}