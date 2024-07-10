// key == 190 for (.)
// key == 188 for (,)
// key == 189 for (-)
// Code By Webdevtrick ( https://webdevtrick.com )
//btn.addEventListener('click', addNewItem);

$.fn.forceNumeric = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.which || e.keyCode;

            //if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            if (!e.shiftKey && !e.altKey &&
                // numbers   
                key >= 48 && key <= 57 ||
                // Numeric keypad
                key >= 96 && key <= 105 ||
                // comma, period and minus, . on keypad
                key == 109 || key == 110 ||
                // Backspace and Tab and Enter
                key == 8 || key == 9 || key == 13 ||
                // Home and End
                key == 35 || key == 36 ||
                // left and right arrows
                key == 37 || key == 39 ||
                // Del and Ins
                key == 46 || key == 45)
                return true;
            else if (e.ctrlKey && key == 86)
                return true;
            return false;
        });

        $(this).blur(function () {
            for (var i = 0; i < $(this).val().length; i++) {
                if (!($(this).val()[i] >= 0)) {
                    $(this).val("");
                    break;
                }
            }
        });
    });
}

$.fn.forceNumeric_ = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.which || e.keyCode;

            //if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            if (!e.shiftKey && !e.altKey &&
                // numbers   
                key >= 48 && key <= 57 || key == 17 ||
                // Numeric keypad
                key >= 96 && key <= 105 ||
                // comma, period and minus, . on keypad
                key == 189 || key == 109 || key == 110 || key == 190 ||
                // Backspace and Tab and Enter
                key == 8 || key == 9 || key == 13 ||
                // Home and End
                key == 35 || key == 36 ||
                // left and right arrows
                key == 37 || key == 39 ||
                // Del and Ins
                key == 46 || key == 45)
                return true;
            else if (e.ctrlKey && key == 86)
                return true;
            return false;
        });

        $(this).blur(function () {
            for (var i = 0; i < $(this).val().length; i++) {
                if ($(this).val()[i] != "-" && $(this).val()[i] != "_" && $(this).val()[i] != ".") {
                    if (!($(this).val()[i] >= 0)) {
                        $(this).val("");
                        break;
                    }
                }
            }
        });
    });
}

$.fn.forceUpperCase = function () {
    return this.each(function () {
        $(this).blur(function (e) {
            $(this).val($(this).val().toUpperCase());
        });
    });
}

function CheckExist(TableName, SelectColumn, ColumnName1, Value1, ctrlID, Message, ColumnName2, Value2, ColumnNotMatch, ValueNotMatch, IsVendorReq, VendorID, IsInventory, LeftJoinTable='', JoinColumnCondition='') {
    var Result = false;
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: ITX3ResolveURL('~/Admin/Common/CheckExist'),
        data: {
            TableName: TableName,
            SelectColumn: SelectColumn,
            ColumnName1: ColumnName1,
            Value1: Value1,
            ColumnName2: ColumnName2,
            Value2: Value2,
            ColumnNotMatch: ColumnNotMatch,
            ValueNotMatch: ValueNotMatch,
            IsVendorReq: IsVendorReq,
            VendorID: VendorID,
            IsInventory: IsInventory,
            LeftJoinTable: LeftJoinTable,
            JoinColumnCondition: JoinColumnCondition
        },
        async: false,
        success:
            function (response) {
                if (response > 0)
                    Result = false;
                else
                    Result = true;
            },
        error:
            function (response) {
                alert("Error: " + response);
                return false;
            }
    });
    if (Result == false) {
        Toast.fire({
            icon: 'error',
            title: Message
        });
        $(ctrlID).focus();
    }
    return Result;
}

function CheckMendatoryField(ctrlId, Message, ctrlType, Timer = 3000) {
    if (ctrlType == "dropdown" || ctrlType == "Number") {
        if ($(ctrlId).val() == "" || $(ctrlId).val() == "0") {
            Toast.fire({
                icon: 'error',
                title: Message,
                timer: Timer
            });
            $(ctrlId).focus();
            return false;
        }
    }
    else {
        if ($(ctrlId).val() == "") {
            Toast.fire({
                icon: 'error',
                title: Message,
                timer: Timer
            });
            $(ctrlId).focus();
            return false;
        }
    }
    return true;
}

function AlertDialog(ctrlId, Message, Type, Timer = 3000) {
    if (Type == "Success") {
        Swal.fire({
            icon: 'success',
            title: Message,
            showConfirmButton: false,
            timer: Timer
        });
        $(ctrlId).focus();
    }
    else {
        Swal.fire({
            icon: 'error',
            title: Message,
            timer: Timer,
            showConfirmButton: false,
        });
        $(ctrlId).focus();
    }
}
function ConfirmDialog(Message) {
    Swal.fire({
        icon: 'question',
        title: Message,
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonColor: 'var(--themecolor)',
        cancelButtonColor: 'var(--themehovercolor)',
        confirmButtonText: 'Take Different image',
        cancelButtonText: 'No'
    });
}
function GetListFromJsonString(JsonString) {
    JsonString = JsonString.replace(/&quot;/g, '"');
    return $.parseJSON(JsonString);

}

function ITX3ResolveURL(pURL) {
    if (pURL) {
        if (pURL.substr(0, 2) == '~/') {
            pURL = pURL.substr(2, pURL.length - 2);
        }
    }
    var newUrl = '';
    //if (typeof HasPath != undefined && HasPath) {
    //    var pathArray = window.location.pathname.split("/");
    //    newUrl = location.protocol + '//' + location.host + '/' + pathArray[1] + ((pURL) ? '/' + pURL : '/');
    //}
    //else
    newUrl = location.protocol + '//' + location.host + '' + ((pURL) ? '/' + pURL : '/');
    return newUrl;
}

jQuery.fn.ForceDecimalWithMinus = function (value, precision) {
    return this.each(function () {
        $(this).keydown(function (event) {
            if (event.shiftKey) {
                event.preventDefault();
            }
            var key = event.charCode || event.keyCode || 0;
            if ((key == 189 || key == 109 || key == 173) && $(this).val() != '') {
                event.preventDefault();
            }

            if (
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105) || (key >= 35 && key <= 40) ||
                key == 8 || key == 9 || key == 37 ||
                key == 39 || key == 46 || key == 110 || key == 190 || key == 189 || key == 109 || key == 173) {
            }
            else if (event.ctrlKey && key == 86)
                return true;
            else {
                event.preventDefault();
            }

            if ($(this).val().indexOf('.') !== -1 && (key == 190 || key == 110))
                event.preventDefault();

            if ($(this).val().length > value + precision + 1) {
                if (key == 8 || key == 9 || key == 37 || key == 39 || key == 46) { }
                else { event.preventDefault(); }
            }
            if ((key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105)) {

                var split = ($(this).val().split("."));
                if (split[1] != null && split[1] != "") {
                    //if (split[1].length == precision)
                    //    event.preventDefault();
                }
                else {
                    if ($(this).val().length == value)
                        event.preventDefault();
                }
            }
        });

        $(this).blur(function () {
            if ($(this).val() != '') {
                $(this).val($(this).val().replace(",", ""));
                //$(this).val((parseFloat($(this).val()).toFixed(precision)).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
                $(this).val((parseFloat($(this).val()).toFixed(precision)));
            }
            else {
                $(this).val((0).toFixed(precision));
            }
            if ($(this).val() == "NaN") {
                $(this).val((0).toFixed(precision));
            }
        });
    });
}

//jQuery.fn.ForceNumericWithMinus = function () {
//    return this.each(function () {
//        $(this).keydown(function (event) {
//            if (event.shiftKey) {
//                event.preventDefault();
//            }
//            var key = event.charCode || event.keyCode || 0;
//            if ((key == 189 || key == 109 || key == 173) && $(this).val() != '') { event.preventDefault(); }

//            if (
//                (key >= 48 && key <= 57) ||
//                (key >= 96 && key <= 105) || (key >= 35 && key <= 40) ||
//                key == 8 || key == 9 || key == 37 ||
//                key == 39 || key == 46 || key == 110 || key == 190 || key == 189 || key == 109 || key == 173) {
//            } else {
//                event.preventDefault();
//            }

//            if ($(this).val().indexOf('.') == -1 && (key == 190 || key == 110))
//                event.preventDefault();
//        });

//    });
//}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

//jQuery.fn.ForceNumericOnly = function () {
//    return this.each(function () {
//        $(this).keydown(function (e) {
//            //if (e.shiftKey || e.ctrlKey || e.altKey) {
//            if (e.shiftKey || e.altKey) {
//                return (e.preventDefault());
//            }
//            var key = e.charCode || e.keyCode || 0;
//            if ($(this).val().indexOf('.') !== -1 && (key == 190 || key == 110))
//                return (e.preventDefault());

//            return (
//                key == 8 ||
//                key == 9 ||
//                key == 46 ||
//                key == 110 ||
//                key == 190 ||
//                (key >= 35 && key <= 40) ||
//                (key >= 48 && key <= 57) ||
//                (key >= 96 && key <= 105));
//        });
//    });
//}

jQuery.fn.ForceDecimalOnly = function (value, precision) {
    return this.each(function () {
        $(this).keydown(function (event) {
            if (event.shiftKey && event.keyCode != 9) {
                event.preventDefault();
            }
            var key = event.charCode || event.keyCode || 0;


            if (
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105) || (key >= 35 && key <= 40) ||
                key == 8 || key == 9 || key == 37 ||
                key == 39 || key == 46 || key == 110 || key == 190 || key == 115) {
            }
            else if (event.ctrlKey && key == 86)
                return true;
            else {
                event.preventDefault();
            }

            if ($(this).val().indexOf('.') !== -1 && (key == 190 || key == 110))
                event.preventDefault();

            if ($(this).val().length > value + precision + 1) {
                if (key == 8 || key == 9 || key == 37 || key == 39 || key == 46 || key == 115) { }
                else { event.preventDefault(); }
            }
            if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 115) {

                var split = ($(this).val().split("."));
                if (split[1] != null && split[1] != "") {
                    //if (split[1].length == precision)
                    //    event.preventDefault();
                }
                else {
                    if ($(this).val().length == value)
                        event.preventDefault();
                }
            }

        });

        $(this).blur(function () {
            if ($(this).val() != '') {
                $(this).val($(this).val().replace(",", ""));
                //$(this).val((parseFloat($(this).val()).toFixed(precision)).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
                $(this).val((parseFloat($(this).val()).toFixed(precision)));
            }
            else {
                $(this).val((0).toFixed(precision));
            }
            if ($(this).val() == "NaN") {
                $(this).val((0).toFixed(precision));
            }
        });
    });
}

//$("input[type='text']").each(function () {
//    if ($(this).hasClass("num2") || $(this).hasClass("numM2")) {
//        if ($(this).val() != '') {
//            $(this).val((parseFloat($(this).val()).toFixed(2)));
//        }
//        else {
//            $(this).val((0).toFixed(2));
//        }
//    }
//    else if ($(this).hasClass("num3") || $(this).hasClass("numM3")) {
//        if ($(this).val() != '') {
//            $(this).val((parseFloat($(this).val()).toFixed(3)));
//        }
//        else {
//            $(this).val((0).toFixed(3));
//        }
//    }
//    else if ($(this).hasClass("num4") || $(this).hasClass("numM4")) {
//        if ($(this).val() != '') {
//            $(this).val((parseFloat($(this).val()).toFixed(4)));
//        }
//        else {
//            $(this).val((0).toFixed(4));
//        }
//    }
//    else if ($(this).hasClass("num")) {
//        if ($(this).val() != '') {
//            $(this).val((parseFloat($(this).val()).toFixed(0)));
//        }
//        else {
//            $(this).val((0).toFixed(0));
//        }
//    }
//});
$("input[type='text']").each(function () {
    var $this = $(this);
    if ($this.hasClass("num2") || $this.hasClass("numM2")) {
        $this.on('input', function(e) {
            var val = $this.val();
            var decimalIndex = val.indexOf('.');
            if (decimalIndex !== -1 && val.length - decimalIndex > 3) {
                $this.val(val.substr(0, decimalIndex + 3)); // Restrict input after 2 decimal places
            }
        }).on('focusout', function() {
            $this.val(formatValue($this.val(), 2)); // Format value on focusout
        });
    } else if ($this.hasClass("num3") || $this.hasClass("numM3")) {
        $this.on('focusout', function() {
            $this.val(formatValue($this.val(), 3)); // Format value on focusout
        });
    } else if ($this.hasClass("num4") || $this.hasClass("numM4")) {
        $this.on('focusout', function() {
            $this.val(formatValue($this.val(), 4)); // Format value on focusout
        });
    } else if ($this.hasClass("num")) {
        $this.on('input', function (e) {
            // Get the current value of the input
            var val = $this.val();
            // Remove non-numeric characters using regular expression
            val = val.replace(/\D/g, '');
            // Update the input value with only numeric characters
            $this.val(val);
        }).on('focusout', function () {
            // Format value on focusout
            $this.val(formatValue($this.val(), 0));
        });
    }
});

function formatValue(value, decimalPlaces) {
    if (value !== '') {
        return parseFloat(value).toFixed(decimalPlaces); // Format value to specified decimal places
    } else {
        return (0).toFixed(decimalPlaces);
    }
}

$(document).on("focus", "input[type='text']", function (e) {
    $(this).select();
});

$(document).on("focus", ".numM2", function (e) {
    $(this).ForceDecimalWithMinus(18, 2);
});

$(document).on("focus", ".numM3", function (e) {
    $(this).ForceDecimalWithMinus(18, 3);
});

$(document).on("focus", ".numM4", function (e) {
    $(this).ForceDecimalWithMinus(18, 4);
});

$(document).on("focus", ".num0", function (e) {
    $(this).ForceDecimalOnly(18, 0);
});

$(document).on("focus", ".num2", function (e) {
    $(this).ForceDecimalOnly(18, 2);
});

$(document).on("focus", ".num3", function (e) {
    $(this).ForceDecimalOnly(18, 3);
});
$(document).on("focus", ".num4", function (e) {
    $(this).ForceDecimalOnly(18, 4);
});

$(document).on("input blur", ".UpperCase", function (e) {
    //$(this).forceUpperCase();
    $(this).val($(this).val().toUpperCase());
});

//$(document).on("focus", ".select2bs4", function (e) {
//    $('.select2bs4').select2({
//        theme: 'bootstrap4'
//    })
//});

function CheckDateWithFromToRange(FromDate, ToDate, MSG) {
    var From = $.trim($(FromDate).val()).split('/');
    var To = $.trim($(ToDate).val()).split('/');
    if (From != "" && To != "") {
        var DtFrom = new Date(Number(From[2].substr(0, 4)), (Number(From[1]) - 1), Number(From[0]));
        var DtTo = new Date(Number(To[2].substr(0, 4)), (Number(To[1]) - 1), Number(To[0]));

        if (DtFrom > DtTo) {
            AlertDialog(ToDate, MSG);
            return false;
        }
    }
    return true;
}

function CheckDateWithFromToRange_Byvalue(FromDate, ToDate, format, MSG) {
    var From = $.trim(FromDate).split('/');
    var To = $.trim(ToDate).split('/');
    if (format == "dd/MM/yyyy" && From != "" && To != "") {
        var DtFrom = new Date(Number(From[2].substr(0, 4)), (Number(From[1]) - 1), Number(From[0]));
        var DtTo = new Date(Number(To[2].substr(0, 4)), (Number(To[1]) - 1), Number(To[0]));

        if (DtFrom > DtTo) {
            AlertDialog(ToDate, MSG);
            return false;
        }

    }
    return true;
}

$('#file').change(function (e) {
    var files = [];
    for (var i = 0; i < $(this)[0].files.length; i++) {
        files.push($(this)[0].files[i].name);
    }
    $(this).next('#lblChoose').html(files.join(', '));
});

jQuery.fn.CheckValidDate = function (ControlId, Message) {
    return this.each(function () {
        $(this).focusout(function () {
            var isvalid = true;
            if ($(this).val() != '') {
                var date = $(this).val().split("/");
                if (date.length == 3) {
                    var $Day = date[0];
                    var $Month = date[1];
                    var $Year = date[2];
                    if ($Month.length == "2") { $Month = $Month.replace("0", ""); }

                    if (parseInt($Month) > 12) { isvalid = false; }
                    if (parseInt($Year.length) != 4) { isvalid = false; }
                    if (parseInt($Day.length) > 2) { isvalid = false; }
                    else {
                        if ($Month == "1" || $Month == "3" || $Month == "5" || $Month == "7" || $Month == "8" || $Month == "10" || $Month == "12") {
                            if (parseInt($Day) > 31) { isvalid = false; }
                        }
                        else if ($Month == "4" || $Month == "6" || $Month == "9" || $Month == "11") {
                            if (parseInt($Day) > 30) { isvalid = false; }
                        }
                        else if ($Month == "2") {
                            if ((parseInt($Year) % 4 == 0 && parseInt($Year) % 100 != 00) || parseInt($Year) % 400 == 0) {
                                if (parseInt($Day) > 29) { isvalid = false; }
                            }
                            else {
                                if (parseInt($Day) > 28) { isvalid = false; }
                            }
                        }
                    }
                }
                else
                    isvalid = false;
            }

            if (isvalid == false) {
                Toast.fire({
                    icon: 'error',
                    title: Message,
                });
                $(ControlId).focus();
            }
            return true;

        });
    });
}

function AddDaystoDate(Date1, Days, format) {
    var isvalid = true;
    var NewDate = "";
    if (Date1 != '') {
        if (format == "dd/MM/yyyy") {
            var date = Date1.split("/");
            if (date.length == 3) {
                var $Day = date[0];
                var $Month = date[1];
                var $Year = date[2];
                if ($Month.length == "2") { $Month = $Month.replace("0", ""); }

                if (parseInt($Month) > 12) { isvalid = false; }
                if (parseInt($Year.length) != 4) { isvalid = false; }
                if (parseInt($Day.length) > 2) { isvalid = false; }
                else {
                    if ($Month == "1" || $Month == "3" || $Month == "5" || $Month == "7" || $Month == "8" || $Month == "10" || $Month == "12") {
                        if (parseInt($Day) > 31) { isvalid = false; }
                    }
                    else if ($Month == "4" || $Month == "6" || $Month == "9" || $Month == "11") {
                        if (parseInt($Day) > 30) { isvalid = false; }
                    }
                    else if ($Month == "2") {
                        if ((parseInt($Year) % 4 == 0 && parseInt($Year) % 100 != 00) || parseInt($Year) % 400 == 0) {
                            if (parseInt($Day) > 29) { isvalid = false; }
                        }
                        else {
                            if (parseInt($Day) > 28) { isvalid = false; }
                        }
                    }
                }
            }
            else
                isvalid = false;
        }

    }
    if (isvalid == false) {
        return ""
        return false;
    }
    else {

        var SplitDate = (Date1).split('/');
        var dateformatdt = Number(SplitDate[1].substr(0, 2)) + '/' + Number(SplitDate[0].substr(0, 2)) + '/' + Number(SplitDate[2].substr(0, 4));
        var newdate = new Date(dateformatdt);
        newdate.setDate(newdate.getDate() + parseInt(Days));
        var dd = newdate.getDate();
        var mm = newdate.getMonth() + 1;
        var yy = newdate.getFullYear();
        var newdateobtained = (dd.toString().length == 2 ? dd : '0' + dd) + '/' + (mm.toString().length == 2 ? mm : '0' + mm) + '/' + yy;
        return newdateobtained;
    }
}

//function focusNextElement() {
//    var focussableElements = 'a:not([disabled]), button:not([disabled]),select:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
//    if (document.activeElement && document.activeElement.form) {
//        var focussable = Array.prototype.filter.call(document.activeElement.form.querySelectorAll(focussableElements),
//            function (element) {
//                return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
//            });
//        var index = focussable.indexOf(document.activeElement);
//        focussable[index + 1].focus();
//    }
//}

//window.addEventListener('keydown', function (e) {
//    if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
//        if ((e.target.nodeName === 'INPUT' || e.target.nodeName === 'SPAN' || e.target.nodeName === 'SELECT') && e.target.type !== 'textarea') {
//            e.preventDefault();
//            focusNextElement();
//            return false;
//        }
//    }
//}, true);

window.addEventListener('keydown', function (e) {
    var id = $("#BankDetail").attr('id');
    var id1 = $("#FAQ").attr('id');
    var id2 = $("#PrivacyPolicy").attr('id');
    var id3 = $("#ReturnPolicy").attr('id');
    var id4 = $("#CancellationPolicy").attr('id');
    var id5 = $("#ShippingPolicy").attr('id');
    var id6 = $("#TermsAndConditions").attr('id');

    if (window.location.pathname.toLowerCase() == "/admin" || this.window.location.pathname.toLowerCase().includes("login")) {

    }
    else if (id == "BankDetail" || id1 == "FAQ" || id2 == "PrivacyPolicy" || id3 == "ReturnPolicy" || id4 == "CancellationPolicy" || id5 == "ShippingPolicy" || id6 == "TermsAndConditions") {

    }
    else {
        if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    }
}, true);

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

$(document).on("keydown", ".IsReqFeild", function (e) {
    if (e.keyCode === 9) {
        if (CheckMendatoryField($(this), 'Please Enter ' + this.title, 'Text') == false)
            return false;
    }
});
