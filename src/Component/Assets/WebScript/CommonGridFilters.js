var gblSetFunName = "";
var gblQueryParam = "";
var tmpObjectType = "";   //ObjectType and ObjectDocTypeId added for Item Grid IF Showing Only Allowed Group List
var tmpObjectDocTypeId = "";
var tmpObjectTransType = "";

function mstItemGrid(ListAction, Controller, ObjectType, SetFunName, DivName,ReqAll) {
    gblSetFunName = SetFunName;
    $(DivName).jtable({
        paging: true,
        pageSize: 10,
        sorting: true,
        selecting: true,
        multiSelect: false,
        selectOnRowClick: true,
        defaultSorting: "ItemName Asc",
        actions: {
            listAction: ITX3ResolveURL('Admin/' + Controller + '/' + ListAction + '?ReqAllItem=' + ReqAll)
        },
        fields: {
            ItemName: {
                title: "Item Name",
                width: '25%'
            },
            GroupName: {
                title: "Item Group Name",
                width: '25%'
            },
            ShortName: {
                title: "Short Name",
                width: '25%'
            },
            ProductName: {
                title: "Product Name",
                width: '25%'
            }
        },
        selectionChanged: function () {
            var $selectedRow = $(DivName).jtable('selectedRows');
            if ($selectedRow.length > 0) {
                $selectedRow.each(function () {
                    var record = $(this).data('record');
                    $('.jtable-row-selected').removeClass('jtable-row-selected');
                    setItem(record.ItemID.toString(), record.ItemName.toString());
                });
            }
        }
    });
    $(DivName).jtable('load');
}

function mstVendorGrid(ListAction, Controller, ObjectType, SetFunName, DivName) {
    gblSetFunName = SetFunName;
    $(DivName).jtable({
        paging: true,
        pageSize: 10,
        sorting: true,
        selecting: true,
        multiSelect: false,
        selectOnRowClick: true,
        defaultSorting: "VendorName Asc",
        actions: {
            listAction: ITX3ResolveURL('Admin/' + Controller + '/' + ListAction + '?ObjectType=' + ObjectType)
        },
        fields: {
            vendorName: {
                title: "Vendor Name",
                width: '15%'
            },
            AreaName: {
                title: "Area"
            },
            CityName: {
                title: "City"
            },
            StateName: {
                title: "State"
            },
            OwnerName: {
                title: "Owner Name"
            },
            GSTNo: {
                title: "GST No"
            }
        },
        selectionChanged: function () {
            var $selectedRow = $(DivName).jtable('selectedRows');
            if ($selectedRow.length > 0) {
                $selectedRow.each(function () {
                    var record = $(this).data('record');
                    $('.jtable-row-selected').removeClass('jtable-row-selected');
                    setVendor(record.VendorID.toString(), record.vendorName.toString());
                });
            }
        }
    });
    $(DivName).jtable('load');
}

function mstCustomerGrid(ListAction, Controller, ObjectType, SetFunName, DivName) {
    gblSetFunName = SetFunName;
    $(DivName).jtable({
        paging: true,
        pageSize: 10,
        sorting: true,
        selecting: true,
        multiSelect: false,
        selectOnRowClick: true,
        defaultSorting: "ContactPerson Asc",
        actions: {
            listAction: ITX3ResolveURL('Admin/' + Controller + '/' + ListAction + '?ObjectType=' + ObjectType)
        },
        fields: {
            ContactPerson: {
                title: "Customer Name",
                width: '15%'
            },
            AccountName: {
                title: "Account Name"
            },
            Mobile1: {
                title: "Mobile"
            },
            Email: {
                title: "Email"
            },
            GSTNo: {
                title: "GST No"
            }
        },
        selectionChanged: function () {
            var $selectedRow = $(DivName).jtable('selectedRows');
            if ($selectedRow.length > 0) {
                $selectedRow.each(function () {
                    var record = $(this).data('record');
                    $('.jtable-row-selected').removeClass('jtable-row-selected');
                    setCustomer(record.ID.toString(), record.ContactPerson.toString());
                });
            }
        }
    });
    $(DivName).jtable('load');
}

function trnSKUGrid(ListAction, Controller, ObjectType, SetFunName, DivName) {
    gblSetFunName = SetFunName;
    $(DivName).jtable({
        paging: true,
        pageSize: 10,
        sorting: true,
        selecting: true,
        multiSelect: false,
        selectOnRowClick: true,
        defaultSorting: "SKUNo Asc",
        actions: {
            listAction: ITX3ResolveURL('Admin/' + Controller + '/' + ListAction + '?ObjectType=' + ObjectType)
        },
        fields: {
            SKUNo: {
                title: "Product Code"
            },
            SKUName: {
                title: "Product Name"
            },
            ItemName: {
                title: "Item Name"
            },
            ItemSubName: {
                title: "Item Sub Name"
            }
        },
        selectionChanged: function () {
            var $selectedRow = $(DivName).jtable('selectedRows');
            if ($selectedRow.length > 0) {
                $selectedRow.each(function () {
                    var record = $(this).data('record');
                    $('.jtable-row-selected').removeClass('jtable-row-selected');
                    setSKU(record.SKUID.toString(), record.SKUName.toString());
                });
            }
        }
    });
    $(DivName).jtable('load');
}

function mstAddressBookGrid(ListAction, Controller, ObjectType, SetFunName, DivName, ReqAll) {
    gblSetFunName = SetFunName;
    $(DivName).jtable({
        paging: true,
        pageSize: 10,
        sorting: true,
        selecting: true,
        multiSelect: false,
        selectOnRowClick: true,
        defaultSorting: "AccountName Asc",
        actions: {
            listAction: ITX3ResolveURL('Admin/' + Controller + '/' + ListAction + '?ReqAllItem=' + ReqAll)
        },
        fields: {
            AccountName: {
                title: "Account Name",
                width: '35%'
            },
            CityName: {
                title: "City Name",
                width: '20%'
            },
            Phone1: {
                title: "Phone No",
                width: '20%'
            },
            Address1: {
                title: "Address",
                width: '35%'
            }
        },
        selectionChanged: function () {
            var $selectedRow = $(DivName).jtable('selectedRows');
            if ($selectedRow.length > 0) {
                $selectedRow.each(function () {
                    var record = $(this).data('record');
                    $('.jtable-row-selected').removeClass('jtable-row-selected');
                    setAddressBook(record.AddressBookID.toString(), record.AccountName.toString());
                });
            }
        }
    });
    $(DivName).jtable('load');
}

function GetFilterDatamstItem() {
    var Filter = "" + $('#filtItemName').val() + "";
    $('#tblmstItemPopUpGrid').jtable('load', {
        Filters: Filter
    });
}

function GetFilterDatamstVendor() {
    var Filter = "" + $('#filtVendorName').val() + "";
    $('#tblmstVendorPopUpGrid').jtable('load', {
        Filters: Filter
    });
}

function GetFilterDatamstCustomer() {
    var Filter = "" + $('#filtCustomerName').val() + "";
    $('#tblmstCustomerPopUpGrid').jtable('load', {
        Filters: Filter
    });
}

function GetFilterDatatrnSKU() {
    var Filter = "" + $('#filtSKUName').val() + "";
    $('#tbltrnSKUPopUpGrid').jtable('load', {
        Filters: Filter
    });
}

function GetFilterDatamstAddressBook() {
    var Filter = "" + $('#filtAddressName').val() + "";
    $('#tblmstAddressBookPopUpGrid').jtable('load', {
        Filters: Filter
    });
}

$.fn.onTypeFinished = function (func) {
    var T = undefined, S = 0, D = 1000;
    $(this).bind("keyup", onKeyPress);//.bind("focusout", onTimeOut);
    function onKeyPress() {
        clearTimeout(T);
        if (S === 0) { S = new Date().getTime(); D = 1000; T = setTimeout(onTimeOut, 1000); return; }
        var t = new Date().getTime();
        D = (D + (t - S)) / 2; S = t; T = setTimeout(onTimeOut, D * 2);
    }

    function onTimeOut() {
        func.apply(); S = 0;
    }
    return this;
};

$("#filtItemName").onTypeFinished(GetFilterDatamstItem);
$("#filtVendorName").onTypeFinished(GetFilterDatamstVendor);
$("#filtCustomerName").onTypeFinished(GetFilterDatamstCustomer);
$("#filtSKUName").onTypeFinished(GetFilterDatatrnSKU);
$("#filtAddressName").onTypeFinished(GetFilterDatamstAddressBook);

