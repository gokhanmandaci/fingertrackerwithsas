function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_Self_OnShow() {
    //Uncomment following block for navigationbar/actionbar sample
    /*
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Page1");
    header.setRightItem("Click");
    header.setLeftItem();
    /**/
}
var whereMI;
var tempMI;
var param = Pages.Page1.Container1.height;
var points = [];
var whereArr = [];
var mx, my, mx2, my2;
function Page1_Canvas1_OnTouchMove(e) {
    if (Device.touchX > 25 && Device.touchX < parseInt((param / 3) - 25)) {
        mx2 = param / 6;
        if (Device.touchY > 25 && Device.touchY < parseInt((param / 3) - 25)) {
            my2 = param / 6;
            tempMI = 1;
        } else if (Device.touchY > parseInt((param / 3) + 25) && Device.touchY < parseInt(((param / 3) * 2) - 25)) {
            my2 = param / 2;
            tempMI = 4;
        } else if (Device.touchY > parseInt(((param / 3) * 2) + 25) && Device.touchY < parseInt(param - 25)) {
            my2 = (param / 6) * 5;
            tempMI = 7;
        }
        if (whereArr.indexOf(tempMI) == -1) {
            points.push({
                x1 : mx,
                y1 : my,
                x2 : mx2,
                y2 : my2
            });
            whereMI = tempMI;
            whereArr.push(whereMI);
            mx = mx2;
            my = my2;
        }
    } else if (Device.touchX > parseInt((param / 3) + 25) && Device.touchX < parseInt(((param / 3) * 2) - 25)) {
        mx2 = param / 2;
        if (Device.touchY > 25 && Device.touchY < parseInt((param / 3) - 25)) {
            my2 = param / 6;
            tempMI = 2;
        } else if (Device.touchY > parseInt((param / 3) + 25) && Device.touchY < parseInt(((param / 3) * 2) - 25)) {
            my2 = param / 2;
            tempMI = 5;
        } else if (Device.touchY > parseInt(((param / 3) * 2) + 25) && Device.touchY < parseInt(param - 25)) {
            my2 = (param / 6) * 5;
            tempMI = 8;
        }
        if (whereArr.indexOf(tempMI) == -1) {
            points.push({
                x1 : mx,
                y1 : my,
                x2 : mx2,
                y2 : my2
            });
            whereMI = tempMI;
            whereArr.push(whereMI);
            mx = mx2;
            my = my2;
        }
    } else if (Device.touchX > parseInt(((param / 3) * 2) + 25) && Device.touchX < parseInt(param - 25)) {
        mx2 = (param / 6) * 5;
        if (Device.touchY > 25 && Device.touchY < parseInt((param / 3) - 25)) {
            my2 = param / 6;
            tempMI = 3;
        } else if (Device.touchY > parseInt((param / 3) + 25) && Device.touchY < parseInt(((param / 3) * 2) - 25)) {
            my2 = param / 2;
            tempMI = 6;
        } else if (Device.touchY > parseInt(((param / 3) * 2) + 25) && Device.touchY < parseInt(param - 25)) {
            my2 = (param / 6) * 5;
            tempMI = 9;
        }
        if (whereArr.indexOf(tempMI) == -1) {
            points.push({
                x1 : mx,
                y1 : my,
                x2 : mx2,
                y2 : my2
            });
            whereMI = tempMI;
            whereArr.push(whereMI);
            mx = mx2;
            my = my2;
        }
    }
}
function Page1_Canvas1_OnDraw(e) {
    var paint = {
        type : 0, //plain
        strokeColor : "#ff0000",
        fillColor : null,
        width : 5,
    };
    var i;
    for (i = 0; i < points.length; i++) {
        this.drawLine({
            x1 : points[i].x1,
            y1 : points[i].y1,
            x2 : points[i].x2,
            y2 : points[i].y2,
            paint : paint
        });
    }
}
function Page1_Canvas1_OnTouchEnded(e) {
    var str = "";
    var i;
    for (i = 0; i < whereArr.length; i++) {
    str += whereArr[i] + " ";
    }
    alert("Your Code is: " + str);
    points = [];
    whereArr = [];
}
function Page1_Canvas1_OnTouch(e) {
    if (Device.touchX > 25 && Device.touchX < parseInt((param / 3) - 25)) {
        mx = param / 6;
        if (Device.touchY > 25 && Device.touchY < parseInt((param / 3) - 25)) {
            my = param / 6;
            whereMI = 1;
            whereArr.push(whereMI);
        } else if (Device.touchY > parseInt((param / 3) + 25) && Device.touchY < parseInt(((param / 3) * 2) - 25)) {
            my = param / 2;
            whereMI = 4;
            whereArr.push(whereMI);
        } else if (Device.touchY > parseInt(((param / 3) * 2) + 25) && Device.touchY < parseInt(param - 25)) {
            my = (param / 6) * 5;
            whereMI = 7;
            whereArr.push(whereMI);
        }
    } else if (Device.touchX > parseInt((param / 3) + 25) && Device.touchX < parseInt(((param / 3) * 2) - 25)) {
        mx = param / 2;
        if (Device.touchY > 25 && Device.touchY < parseInt((param / 3) - 25)) {
            cymy1 = param / 6;
            whereMI = 8;
            whereArr.push(whereMI);
        } else if (Device.touchY > parseInt((param / 3) + 25) && Device.touchY < parseInt(((param / 3) * 2) - 25)) {
            my = param / 2;
            whereMI = 5;
            whereArr.push(whereMI);
        } else if (Device.touchY > parseInt(((param / 3) * 2) + 25) && Device.touchY < parseInt(param - 25)) {
            my = (param / 6) * 5;
            whereMI = 8;
            whereArr.push(whereMI);
        }
    } else if (Device.touchX > parseInt(((param / 3) * 2) + 25) && Device.touchX < parseInt(param - 25)) {
        mx = (param / 6) * 5;
        if (Device.touchY > 25 && Device.touchY < parseInt((param / 3) - 25)) {
            my = param / 6;
            whereMI = 3;
            whereArr.push(whereMI);
        } else if (Device.touchY > parseInt((param / 3) + 25) && Device.touchY < parseInt(((param / 3) * 2) - 25)) {
            my = param / 2;
            whereMI = 6;
            whereArr.push(whereMI);
        } else if (Device.touchY > parseInt(((param / 3) * 2) + 25) && Device.touchY < parseInt(param - 25)) {
            my = (param / 6) * 5;
            whereMI = 9;
            whereArr.push(whereMI);
        }
    }
}