var lstTableData = [];
var table;
function setDataTable(TableID, LayoutName, ColumnCount, Fixed = false, Export = false, RemoveDataTableFilter = false) {
    if (Fixed === false) {
        //GetLayoutChanges(LayoutName);

        //var someSession = Session["VendorID"].ToString();
        var sessionValue = localStorage.getItem("RemoveDataTableFilter");

        if (sessionValue === "1")
            RemoveDataTableFilter = true; 


        if (RemoveDataTableFilter === true) {
            if (lstTableData.length > 0) {
                var Width = "[";
                for (var j = 0; j < lstTableData.length; j++) {
                    if (j === 0)
                        Width += "{ width: '" + lstTableData[j].width + "', targets:" + j + "}";
                    else
                        Width += ",{ width: '" + lstTableData[j].width + "', targets:" + j + "}";
                }
                Width += "]";

                table = $("#" + TableID).DataTable({
                    "responsive": true,
                    "autoWidth": true,
                    dom: 'Blfrtip',
                    //"bDestroy": true,
                    colReorder: true,
                    "scrollX": true,
                    buttons: [
                        'colvis'
                    ],
                    "stateSave": false,
                    "order": [],
                    columnDefs: Width
                });
            }
            else {

                if (Export) {

                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,

                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [

                            {
                                extend: 'excelHtml5',
                                autoFilter: true,
                                sheetName: 'Exported data',
                                text: 'Export To Excel',
                                className: 'Excel_CSS',
                                exclude_img: true
                            },

                            'colvis'
                        ],
                        "stateSave": false,
                        "order": []
                    });
                }
                else {
                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,
                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [
                            'colvis'
                        ],

                        "stateSave": false,
                        "order": []
                    });
                }


            }
        }
        else {
            if (lstTableData.length > 0) {
                var Width1 = "[";
                for (var jj = 0; j < lstTableData.length; j++) {
                    if (jj === 0)
                        Width1 += "{ width: '" + lstTableData[jj].width + "', targets:" + jj + "}";
                    else
                        Width1 += ",{ width: '" + lstTableData[jj].width + "', targets:" + jj + "}";
                }
                Width1 += "]";

                table = $("#" + TableID).DataTable({
                    "responsive": true,
                    "autoWidth": true,
                    dom: 'Blfrtip',
                    //"bDestroy": true,
                    colReorder: true,
                    "scrollX": true,
                    buttons: [
                        'colvis'
                    ],
                    "stateSave": true,
                    "order": [],
                    columnDefs: Width1
                });
            }
            else {
                if (Export) {

                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,

                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [

                            {
                                extend: 'excelHtml5',
                                autoFilter: true,
                                sheetName: 'Exported data',
                                text: 'Export To Excel',
                                className: 'Excel_CSS',
                                exclude_img: true
                            },

                            'colvis'
                        ],
                        "stateSave": true,
                        "order": []
                    });
                }
                else {
                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,
                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [
                            'colvis'
                        ],

                        "stateSave": true,
                        "order": []
                    });
                }


            }
        }

        GetLayoutChanges(LayoutName);

        if (lstTableData.length !== ColumnCount) {          
            lstTableData = [];
            table.columns().every(function (fn) {              
                var title = table.column(fn).header();
                var model = {
                    Index: fn,
                    Visibility: table.column(fn).visible(),
                    ColID: title.id,                   
                    ColName: $(title).html(), 
                    width: '0px'
                };
                lstTableData.push(model);
            });
             GetColumnWidth(TableID);
            SaveLayoutChanges(LayoutName);
        }
        for (var i = 0; i < lstTableData.length; i++) {
            table.column(i).visible(lstTableData[i].Visibility);
        }

        $("#" + TableID).on('column-visibility.dt', function () {
            i = 0;
            table.columns().every(function (fn) {
                var title = table.column(fn).header();
                lstTableData[i].Visibility = table.column(fn).visible();
                lstTableData[i].ColID = title.id;
                lstTableData[i].ColName = $(title).html();
                i++;
            });
            SaveLayoutChanges(LayoutName);
        });

        $("#" + TableID).on('column-reorder.dt', function () {
            i = 0;
            table.columns().every(function (fn) {
                var title = table.column(fn).header();
                lstTableData[i].Visibility = table.column(fn).visible();
                lstTableData[i].ColID = title.id;
                lstTableData[i].ColName = $(title).html();
                i++;
            });
            SaveLayoutChanges(LayoutName);
        });

        $("#" + TableID).on('column-sizing.dt', function () {
            GetColumnWidth(TableID);
            SaveLayoutChanges(LayoutName);
        });

        $("#" + TableID).dataTable().on('stateSaveParams.dt', function (e, settings, data) {
                data.search.search = "";
            });
    }
    else {     
        table = $("#" + TableID).DataTable({
            "responsive": true,
            "autoWidth": true,
            "stateSave": true,
            "scrollX": true,
            "scrollY": 350,
            dom: 'Blfrtip'
        });  

        $("#" + TableID).dataTable().on('stateSaveParams.dt', function (e, settings, data) {
            data.search.search = "";
        });
    }
    $('.dataTables_filter input').on('keyup', function () {
        var searchTerm = $(this).val();

        // Check if the search term length is at least 5 characters
        if (searchTerm.length >= 4) {
            // Perform the search
            table.search(searchTerm).draw();
        } else {
            // Clear the search results if fewer than 5 characters are entered
            table.search('').draw();
        }
    });
    return table;
}

function SetDataTableReports(TableName, AllowExport) {    
    if (AllowExport === true) {
         $("#" + TableName).DataTable({
            "responsive": true,
            "autoWidth": true,
            "stateSave": true,
            "scrollX": true,
            "scrollY": 350,
             dom: 'Blfrtip',
             buttons: ['copyHtml5', 'csvHtml5', 'pdfHtml5']
            //buttons: [{
            //    extend: 'excelHtml5',
            //    autoFilter: true,
            //    sheetName: 'Exported data',
            //    text: 'Export To Excel',
            //    className: 'Excel_CSS'
            //}]
        });
    }
    else {
        $("#" + TableName).DataTable({
            "responsive": true,
            "autoWidth": true,
            "stateSave": true,
            "scrollX": true,
            "scrollY": 350,
            dom: 'lfrtip'
        });
    }
}

function GetColumnWidth(TableID) {
    if (lstTableData.length > 0) {
        var i = 0;
        $("#" + TableID + " th").each(function () {
            lstTableData[i].width = $(this).width() + 'px';
            i++;
        });
    }
}

function SaveLayoutChanges(LayoutName) {

    if (lstTableData.length > 0) {
        var LayoutJson = JSON.stringify(lstTableData);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: ITX3ResolveURL("~/Admin/Common/SaveLayoutChanges"),
            data: { Layout: LayoutJson, LayoutName: LayoutName },
            async: false,
            success:
                function (response) {

                },
            error:
                function (response) {
                    alert("Error: " + response);
                }
        });
    }
}

function GetLayoutChanges(LayoutName) {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: ITX3ResolveURL("~/Admin/Common/GetLayoutChanges"),
        data: { LayoutName: LayoutName },
        async: false,
        success:
            function (response) {
                lstTableData = response;
            },
        error:
            function (response) {
                alert("Error: " + response);
            }
    });
}
var lstTableData = [];
var table;
function setDataTable(TableID, LayoutName, ColumnCount, Fixed = false, Export = false, RemoveDataTableFilter = false) {
    if (Fixed === false) {
        //GetLayoutChanges(LayoutName);

        //var someSession = Session["VendorID"].ToString();
        var sessionValue = localStorage.getItem("RemoveDataTableFilter");

        if (sessionValue === "1")
            RemoveDataTableFilter = true; 


        if (RemoveDataTableFilter === true) {
            if (lstTableData.length > 0) {
                var Width = "[";
                for (var j = 0; j < lstTableData.length; j++) {
                    if (j === 0)
                        Width += "{ width: '" + lstTableData[j].width + "', targets:" + j + "}";
                    else
                        Width += ",{ width: '" + lstTableData[j].width + "', targets:" + j + "}";
                }
                Width += "]";

                table = $("#" + TableID).DataTable({
                    "responsive": true,
                    "autoWidth": true,
                    dom: 'Blfrtip',
                    //"bDestroy": true,
                    colReorder: true,
                    "scrollX": true,
                    buttons: [
                        'colvis'
                    ],
                    "stateSave": false,
                    "order": [],
                    columnDefs: Width
                });
            }
            else {

                if (Export) {

                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,

                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [

                            {
                                extend: 'excelHtml5',
                                autoFilter: true,
                                sheetName: 'Exported data',
                                text: 'Export To Excel',
                                className: 'Excel_CSS',
                                exclude_img: true
                            },

                            'colvis'
                        ],
                        "stateSave": false,
                        "order": []
                    });
                }
                else {
                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,
                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [
                            'colvis'
                        ],

                        "stateSave": false,
                        "order": []
                    });
                }


            }
        }
        else {
            if (lstTableData.length > 0) {
                var Width1 = "[";
                for (var jj = 0; j < lstTableData.length; j++) {
                    if (jj === 0)
                        Width1 += "{ width: '" + lstTableData[jj].width + "', targets:" + jj + "}";
                    else
                        Width1 += ",{ width: '" + lstTableData[jj].width + "', targets:" + jj + "}";
                }
                Width1 += "]";

                table = $("#" + TableID).DataTable({
                    "responsive": true,
                    "autoWidth": true,
                    dom: 'Blfrtip',
                    //"bDestroy": true,
                    colReorder: true,
                    "scrollX": true,
                    buttons: [
                        'colvis'
                    ],
                    "stateSave": true,
                    "order": [],
                    columnDefs: Width1
                });
            }
            else {
                if (Export) {

                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,

                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [

                            {
                                extend: 'excelHtml5',
                                autoFilter: true,
                                sheetName: 'Exported data',
                                text: 'Export To Excel',
                                className: 'Excel_CSS',
                                exclude_img: true
                            },

                            'colvis'
                        ],
                        "stateSave": true,
                        "order": []
                    });
                }
                else {
                    table = $("#" + TableID).DataTable({
                        "responsive": true,
                        "autoWidth": false,
                        dom: 'Blfrtip',
                        //"bDestroy": true,
                        colReorder: true,
                        "scrollX": true,
                        buttons: [
                            'colvis'
                        ],

                        "stateSave": true,
                        "order": []
                    });
                }


            }
        }

        GetLayoutChanges(LayoutName);

        if (lstTableData.length !== ColumnCount) {          
            lstTableData = [];
            table.columns().every(function (fn) {              
                var title = table.column(fn).header();
                var model = {
                    Index: fn,
                    Visibility: table.column(fn).visible(),
                    ColID: title.id,                   
                    ColName: $(title).html(), 
                    width: '0px'
                };
                lstTableData.push(model);
            });
             GetColumnWidth(TableID);
            SaveLayoutChanges(LayoutName);
        }
        for (var i = 0; i < lstTableData.length; i++) {
            table.column(i).visible(lstTableData[i].Visibility);
        }

        $("#" + TableID).on('column-visibility.dt', function () {
            i = 0;
            table.columns().every(function (fn) {
                var title = table.column(fn).header();
                lstTableData[i].Visibility = table.column(fn).visible();
                lstTableData[i].ColID = title.id;
                lstTableData[i].ColName = $(title).html();
                i++;
            });
            SaveLayoutChanges(LayoutName);
        });

        $("#" + TableID).on('column-reorder.dt', function () {
            i = 0;
            table.columns().every(function (fn) {
                var title = table.column(fn).header();
                lstTableData[i].Visibility = table.column(fn).visible();
                lstTableData[i].ColID = title.id;
                lstTableData[i].ColName = $(title).html();
                i++;
            });
            SaveLayoutChanges(LayoutName);
        });

        $("#" + TableID).on('column-sizing.dt', function () {
            GetColumnWidth(TableID);
            SaveLayoutChanges(LayoutName);
        });

        $("#" + TableID).dataTable().on('stateSaveParams.dt', function (e, settings, data) {
                data.search.search = "";
            });
    }
    else {     
        table = $("#" + TableID).DataTable({
            "responsive": true,
            "autoWidth": true,
            "stateSave": true,
            "scrollX": true,
            "scrollY": 350,
            dom: 'Blfrtip'
        });  

        $("#" + TableID).dataTable().on('stateSaveParams.dt', function (e, settings, data) {
            data.search.search = "";
        });
    }
    $('.dataTables_filter input').on('keyup', function () {
        var searchTerm = $(this).val();

        // Check if the search term length is at least 5 characters
        if (searchTerm.length >= 4) {
            // Perform the search
            table.search(searchTerm).draw();
        } else {
            // Clear the search results if fewer than 5 characters are entered
            table.search('').draw();
        }
    });
    return table;
}

function SetDataTableReports(TableName, AllowExport) {    
    if (AllowExport === true) {
         $("#" + TableName).DataTable({
            "responsive": true,
            "autoWidth": true,
            "stateSave": true,
            "scrollX": true,
            "scrollY": 350,
             dom: 'Blfrtip',
             buttons: ['copyHtml5', 'csvHtml5', 'pdfHtml5']
            //buttons: [{
            //    extend: 'excelHtml5',
            //    autoFilter: true,
            //    sheetName: 'Exported data',
            //    text: 'Export To Excel',
            //    className: 'Excel_CSS'
            //}]
        });
    }
    else {
        $("#" + TableName).DataTable({
            "responsive": true,
            "autoWidth": true,
            "stateSave": true,
            "scrollX": true,
            "scrollY": 350,
            dom: 'lfrtip'
        });
    }
}

function GetColumnWidth(TableID) {
    if (lstTableData.length > 0) {
        var i = 0;
        $("#" + TableID + " th").each(function () {
            lstTableData[i].width = $(this).width() + 'px';
            i++;
        });
    }
}

function SaveLayoutChanges(LayoutName) {

    if (lstTableData.length > 0) {
        var LayoutJson = JSON.stringify(lstTableData);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: ITX3ResolveURL("~/Admin/Common/SaveLayoutChanges"),
            data: { Layout: LayoutJson, LayoutName: LayoutName },
            async: false,
            success:
                function (response) {

                },
            error:
                function (response) {
                    alert("Error: " + response);
                }
        });
    }
}

function GetLayoutChanges(LayoutName) {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: ITX3ResolveURL("~/Admin/Common/GetLayoutChanges"),
        data: { LayoutName: LayoutName },
        async: false,
        success:
            function (response) {
                lstTableData = response;
            },
        error:
            function (response) {
                alert("Error: " + response);
            }
    });
}
