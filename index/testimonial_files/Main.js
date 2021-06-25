$(document).ready(function () {
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
        $(".responseMessage").hide();
    }
    DisposeResponseMessage();
    SetActiveMenu();
    startTime();
});
var jsUrls = new Object();
var jsVaribles = new Object();

function GetDateFormat(date) {
    debugger;
    var parsedDate = new Date(parseInt(date.substr(6)));
    var castDate = new Date(parsedDate); //Date object

    var day = castDate.getDate();
    day = (String(day).length > 1 ? day : "0" + day);

    var month = castDate.getMonth() + 1;
    //  month = (String(month)).length > 1 ? month : "0" + month;

    var year = castDate.getFullYear();
    var monthstr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    return day + " " + monthstr[month] + " " + year + "<br />" + castDate.getHours() + ":" + castDate.getMinutes();
}


function startTime() {
    var today = new Date();
    var day = today.getDate();
    day = (String(day).length > 1 ? day : "0" + day);

    var month = today.getMonth();
    //  month = (String(month)).length > 1 ? month : "0" + month;

    var year = today.getFullYear();
    var monthstr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;

    m = checkTime(m);
    s = checkTime(s);

    var date = day + " " + monthstr[month] + " " + year + ", " + h + ":" + m + " " + ampm;



    $("#dateTimeTag").text(date);
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

var GetFormattedDate = function (input_date) {
    input_date = new Date(input_date);
    if (input_date != null && input_date != undefined) {
        return ('0' + (input_date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + input_date.getDate()).slice(-2) + '-'
            + input_date.getFullYear();
    }
    return "";
}
function HandleBackFunctionality() {
    if (window.event) {
        if (window.event.clientX < 40 && window.event.clientY < 0) {
            alert("Browser back button is clicked...");
        }
        else {
            alert("Browser refresh button is clicked...");
        }
    }
    else {
        if (event.currentTarget.performance.navigation.type == 1) {
            alert("Browser refresh button is clicked...");
        }
        if (event.currentTarget.performance.navigation.type == 2) {
            alert("Browser back button is clicked...");
        }
    }
}
function DisposeResponseMessage() {
    setTimeout(function () { $('.responseMessage').fadeOut('slow'); }, 6000);


}
$(window).bind("pageshow", function (event) {
    if (event.originalEvent.persisted) {
        alert("User clicked on back button!");
    }
});
function Call() { }
function ConfirmBox(title, text, ConfirmButtonText, CancelButtonText, callback) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
        allowOutsideClick: false,
        buttonsStyling: false
    })
    const swalWithSingleButtonBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success btn-single-alert',
            cancelButton: 'btn btn-danger btn-single-alert'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })

    swalWithBootstrapButtons.fire({
        title: title,
        text: text,
        imageUrl: '/fonts/icomoon/question-mark.svg',
        showCancelButton: true,
        confirmButtonText: ConfirmButtonText,
        cancelButtonText: CancelButtonText,
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithSingleButtonBootstrapButtons.fire(
                'Cancelled',
                '',
                'error'
            )
        }
    });
}
function ConfirmBoxForCheckBox(title, text, ConfirmButtonText, CancelButtonText, callback, cancelcallback) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })
    const swalWithSingleButtonBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success btn-single-alert',
            cancelButton: 'btn btn-danger btn-single-alert'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })



    //$(".swal2-header").appendTo('<div class="swal2-icon swal2-alert swal2-icon-show" style="display:flex"><i class="fa fa-exclamation-triangle"></i></div>');

    swalWithBootstrapButtons.fire({
        html: '<div id="swal2-content" class="swal2-html-container" style="display: block;">Do you want to <br><span style="color:#41B56C;">' + title + '</span> <br>' + text + '?</div>',
        imageUrl: '/fonts/icomoon/question-mark.svg',
        //title: title,
        //text: text,
        //imageUrl: "~/icon/Alert.png",
        // icon: 'alert',

        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: ConfirmButtonText,
        cancelButtonText: CancelButtonText,
        reverseButtons: true


    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithSingleButtonBootstrapButtons.fire(
                'Cancelled',
                '',
                'error'

            )
            cancelcallback();
        }
    });
}
function ConfirmBoxForBank(text1, text2, text3, ConfirmButtonText, CancelButtonText, callback, cancelcallback) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })

    const swalWithSingleButtonBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success btn-single-alert',
            cancelButton: 'btn btn-danger btn-single-alert'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })

    //$(".swal2-header").appendTo('<div class="swal2-icon swal2-alert swal2-icon-show" style="display:flex"><i class="fa fa-exclamation-triangle"></i></div>');

    swalWithBootstrapButtons.fire({
        html: '<div id="swal2-content" class="swal2-html-container" style="display: block;">' + text1 + ' <br>' + text2 + '<br><span style="color:#41B56C;">' + text3 + '?</span></div>',
        imageUrl: '/fonts/icomoon/question-mark.svg',
        //title: title,
        //text: text,
        //imageUrl: "~/icon/Alert.png",
        // icon: 'alert',

        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: ConfirmButtonText,
        cancelButtonText: CancelButtonText,
        reverseButtons: true


    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithSingleButtonBootstrapButtons.fire(
                'Cancelled',
                '',
                'error'

            )
            cancelcallback();
        }
    });
}
var MakeAjaxCall = function (type, url, data, callback) {
    if (data == undefined || data == null) {
        data = {};
    }
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: function (data) {
            callback(true, data);
        },
        error(a, b, c) {
            callback(false, a);
        }
    });
}
var MakeAjaxCallWithData = function (type, url, data, callback, Id) {
    if (data == undefined || data == null) {
        data = {};
    }
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: function (data) {
            callback(true, data, Id);
        },
        error(a, b, c) {
            callback(false, a);
        }
    });
}

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
function formatJsonDate(dateVal) {

    if (dateVal != null) {
        var parsedDate = new Date(parseInt(dateVal.substr(6)));
        var newDate = new Date(parsedDate);

        // var sMonth = padValue(newDate.getMonth() + 1);

        var ssmonth = dateFormat2(newDate);//newDate.getMonth();
        var sDay = padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = padValue(newDate.getMinutes());
        var sAMPM = "AM";

        var iHourCheck = parseInt(sHour);

        if (iHourCheck >= 12) {
            sAMPM = "PM";
            sHour = iHourCheck - 12;
        }
        else if (iHourCheck === 0) {
            sHour = "12";
        }
        else if (iHourCheck==12) {
            sAMPM = "PM";
        }

        sHour = padValue(sHour);

        return sDay + " " + ssmonth + " " + sYear + "<br />  <span style = 'color:#B1B6BB'>" + sHour + ":" + sMinute + " " + sAMPM + "</span>";
    }
    else {
        return "";
    }
}

function dateFormat2(d) {
    var t = new Date(d);
    return monthShortNames[t.getMonth()];
}

function padValue(value) {
    return (value < 10) ? "0" + value : value;
}
function SetActiveMenu() {
    var path = window.location.pathname + window.location.search;
    //  debugger;
    var arrPath = path.split('/');
    var searchURL = arrPath.join('/');
    $('.pcoded-navbar').find('.pcoded-item').find('li').removeClass('active');
    var item = $('a[href="' + searchURL + '"]');
    item.parent().addClass('active');
}

function GetYear(dateVal) {
    if (dateVal != null) {
        var parsedDate = new Date(parseInt(dateVal.substr(6)));
        var newDate = new Date(parsedDate);
        return newDate.getFullYear();
    }
    else {
        return "";
    }
}

function formatDate(dateVal) {

    if (dateVal != null) {
        var parsedDate = new Date(parseInt(dateVal.substr(6)));
        var newDate = new Date(parsedDate);

        // var sMonth = padValue(newDate.getMonth() + 1);

        var ssmonth = dateFormat2(newDate);//newDate.getMonth();
        var sDay = padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = padValue(newDate.getMinutes());
        var sAMPM = "AM";

        var iHourCheck = parseInt(sHour);

        if (iHourCheck > 12) {
            sAMPM = "PM";
            sHour = iHourCheck - 12;
        }
        else if (iHourCheck === 0) {
            sHour = "12";
        }

        sHour = padValue(sHour);

        return sDay + " " + ssmonth + " " + sYear;
    }
    else {
        return "";
    }
}

function round(value, precision) {
    var aPrecision = Math.pow(10, precision);
    return Math.round(value * aPrecision) / aPrecision;
}

function isEmpty(value) {
    return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
}
function CommasWithNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function MaxFileSizeValidation(FileId, MaxFileSize, MaxFileSizeErrorMessage) {
    //$('#' + FileId).bind('change', function () {
    debugger;
    //if ($('#' + FileId).val()) {
    console.log($('#' + FileId)[0].files[0].size);
    if ($('#' + FileId)[0].files[0].size > MaxFileSize) {
        if ($("#" + FileId).valid()) {
            $("#spn" + FileId).show();
        }





        return false;

    }
    else {

        return true;

    }
    //}
    //return false;

    //});
}

function AlertForSuccess(Text1, Text2) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success btn-single-alert ',

        },
        buttonsStyling: false,
        allowOutsideClick: false
    });
    //swalWithBootstrapButtons.fire('Error', data, 'error');
    swalWithBootstrapButtons.fire(Text1, Text2, 'success');

}


function ConfirmBoxForTwoSampleTextwithoutCancelProp(text1, text2, ConfirmButtonText, CancelButtonText, callback) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })



    //$(".swal2-header").appendTo('<div class="swal2-icon swal2-alert swal2-icon-show" style="display:flex"><i class="fa fa-exclamation-triangle"></i></div>');

    swalWithBootstrapButtons.fire({
        html: '<div id="swal2-content" class="swal2-html-container" style="display: block;">' + text1 + '<br><span style="color:#41B56C;">' + text2 + '</span></div>',
        imageUrl: '/fonts/icomoon/question-mark.svg',
        //title: title,
        //text: text,
        //imageUrl: "~/icon/Alert.png",
        // icon: 'alert',

        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: ConfirmButtonText,
        cancelButtonText: CancelButtonText,
        reverseButtons: true


    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    });
}

function formatDate(dateVal) {

    if (dateVal != null) {
        var parsedDate = new Date(parseInt(dateVal.substr(6)));
        var newDate = new Date(parsedDate);

        // var sMonth = padValue(newDate.getMonth() + 1);

        var ssmonth = dateFormat2(newDate);//newDate.getMonth();
        var sDay = padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = padValue(newDate.getMinutes());
        var sAMPM = "AM";

        var iHourCheck = parseInt(sHour);

        if (iHourCheck > 12) {
            sAMPM = "PM";
            sHour = iHourCheck - 12;
        }
        else if (iHourCheck === 0) {
            sHour = "12";
        }

        sHour = padValue(sHour);

        return sDay + " " + ssmonth + " " + sYear;
    }
    else {
        return "";
    }
}
function formatDateTime(dateVal) {

    if (dateVal != null) {
        var parsedDate = new Date(parseInt(dateVal.substr(6)));
        var newDate = new Date(parsedDate);

        // var sMonth = padValue(newDate.getMonth() + 1);

        var ssmonth = dateFormat2(newDate);//newDate.getMonth();
        var sDay = padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = padValue(newDate.getMinutes());
        var sAMPM = "AM";

        var iHourCheck = parseInt(sHour);

        if (iHourCheck > 12) {
            sAMPM = "PM";
            sHour = iHourCheck - 12;
        }
        else if (iHourCheck === 0) {
            sHour = "12";
        }

        sHour = padValue(sHour);

        return sDay + " " + ssmonth + " " + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
    }
    else {
        return "";
    }
}
function AlertBoxForDropDownWithTextArea() {
    //const swal = Swal.mixin({
    //    customClass: {
    //        confirmButton: 'btn btn-success',
    //        cancelButton: 'btn btn-danger'
    //    },
    //    buttonsStyling: false,
    //    allowOutsideClick: false
    //})
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false,
        allowOutsideClick: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Select Reason',
        input: 'select',
        inputOptions: {
            'apples': 'Apples',
            'bananas': 'Bananas',
            'grapes': 'Grapes',
            'Others': 'Others'
        },
        html:
            '<input type="text" id="fruit-text" class="swal2-input" style="display: none;">',

        onBeforeOpen: (dom) => {
            swal.getInput().onchange = function (event) {
                if (event.target.value === "Others") {
                    dom.querySelector('#fruit-text').style.display = 'initial'
                } else {
                    dom.querySelector('#fruit-text').style.display = 'none'
                }
            }
        },
        preConfirm: (value) => {
            if (value === 'Others') {
                return swal.getContent().querySelector('#fruit-text').value
            }
        }
    }).then((result) => {
        if (result.value) {
            alert('You selected ' + result.value)
        }
    })
}