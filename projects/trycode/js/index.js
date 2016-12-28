submitTryit();
function submitTryit(n) {
    var text = document.getElementById("textareaCode").value;
    var ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("id", "iframeResult");
    document.getElementById("iframewrapper").innerHTML = "";
    document.getElementById("iframewrapper").appendChild(ifr);
    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);
    ifrw.document.close();    if (ifrw.document.body) {
        ifrw.document.body.contentEditable = false;
    }
}
if (window.screen.availWidth <= 768 && window.innerHeight > window.innerWidth) {
    restack(true);
}
function restack(horizontal) {
    var tc, ic, t, i, c, f, sv, sh, d, height, flt, width;
    tc = document.getElementById("textareacontainer");
    ic = document.getElementById("iframecontainer");
    t = document.getElementById("textarea");
    i = document.getElementById("iframe");
    c = document.getElementById("container");
    sv = document.getElementById("stackV");
    sh = document.getElementById("stackH");
    tc.className = tc.className.replace("horizontal", "");
    ic.className = ic.className.replace("horizontal", "");
    t.className = t.className.replace("horizontal", "");
    i.className = i.className.replace("horizontal", "");
    c.className = c.className.replace("horizontal", "");
    sv.className = sv.className.replace("horizontal", "");
    sh.className = sh.className.replace("horizontal", "");
    stack = "";
    if (horizontal) {
        tc.className = tc.className + " horizontal";
        ic.className = ic.className + " horizontal";
        t.className = t.className + " horizontal";
        i.className = i.className + " horizontal";
        c.className = c.className + " horizontal";
        sv.className = sv.className + " horizontal";
        sh.className = sh.className + " horizontal";
        stack = " horizontal";
        document.getElementById("textareacontainer").style.height = "50%";
        document.getElementById("iframecontainer").style.height = "50%";
        document.getElementById("textareacontainer").style.width = "100%";
        document.getElementById("iframecontainer").style.width = "100%";
    } else {
        document.getElementById("textareacontainer").style.height = "100%";
        document.getElementById("iframecontainer").style.height = "100%";
        document.getElementById("textareacontainer").style.width = "50%";
        document.getElementById("iframecontainer").style.width = "50%";
    }
    fixDragBtn();
    showFrameSize();
}
function showFrameSize() {
    var t;
    var width, height;
    width = Number(w3_getStyleValue(document.getElementById("iframeResult"), "width").replace("px", "")).toFixed();
    height = Number(w3_getStyleValue(document.getElementById("iframeResult"), "height").replace("px", "")).toFixed();
    document.getElementById("framesize").innerHTML = "Result Size: <span>" + width + " x " + height + "</span>";
}
var dragging = false;
var stack;
function fixDragBtn() {
    var textareawidth, leftpadding, dragleft, containertop, buttonwidth
    var containertop = 45 + Number(w3_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
    if (stack != " horizontal") {
        document.getElementById("dragbar").style.width = "5px";
        textareasize = Number(w3_getStyleValue(document.getElementById("textareaCode"), "width").replace("px", ""));
        leftpadding = Number(w3_getStyleValue(document.getElementById("textarea"), "padding-left").replace("px", ""));
        buttonwidth = Number(w3_getStyleValue(document.getElementById("dragbar"), "width").replace("px", ""));
        textareaheight = w3_getStyleValue(document.getElementById("textareaCode"), "height");
        dragleft = textareasize + leftpadding + (leftpadding / 2) - (buttonwidth / 2);
        document.getElementById("dragbar").style.top = containertop + "px";
        document.getElementById("dragbar").style.left = dragleft - 1 + "px";
        document.getElementById("dragbar").style.height = textareaheight;
        document.getElementById("dragbar").style.cursor = "col-resize";    } else {
        document.getElementById("dragbar").style.height = "20px";
        if (window.getComputedStyle) {
            textareawidth = window.getComputedStyle(document.getElementById("textareaCode"), null).getPropertyValue("height");
            textareaheight = window.getComputedStyle(document.getElementById("textareaCode"), null).getPropertyValue("width");
            leftpadding = window.getComputedStyle(document.getElementById("textarea"), null).getPropertyValue("padding-top");
            buttonwidth = window.getComputedStyle(document.getElementById("dragbar"), null).getPropertyValue("height");
        } else {
            dragleft = document.getElementById("textareaCode").currentStyle["width"];
        }
        textareawidth = Number(textareawidth.replace("px", ""));
        leftpadding = Number(leftpadding.replace("px", ""));
        buttonwidth = Number(buttonwidth.replace("px", ""));
        dragleft = containertop + textareawidth + leftpadding + (leftpadding / 2);
        document.getElementById("dragbar").style.top = dragleft + "px";
        document.getElementById("dragbar").style.left = "5px";
        document.getElementById("dragbar").style.width = textareaheight;
        document.getElementById("dragbar").style.cursor = "row-resize";
    }
}
function dragstart(e) {
    e.preventDefault();
    dragging = true;
    var main = document.getElementById("iframecontainer");
}
function dragmove(e) {
    if (dragging) {
        document.getElementById("shield").style.display = "block";
        if (stack != " horizontal") {
            var percentage = (e.pageX / window.innerWidth) * 100;
            if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' ){
                var touch = e.touches[0];
                percentage = (touch.pageX / window.innerWidth) * 100;
            }
            if (percentage > 5 && percentage < 98) {
                var mainPercentage = 100 - percentage;
                document.getElementById("textareacontainer").style.width = percentage + "%";
                document.getElementById("iframecontainer").style.width = mainPercentage + "%";
                fixDragBtn();
            }
        } else {
            var containertop = 70 + Number(w3_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
            var percentage = ((e.pageY - containertop + 20) / (window.innerHeight - containertop + 20)) * 100;
            if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' ){
                var touch = e.touches[0];
                percentage = ((touch.pageY - containertop + 20) / (window.innerHeight - containertop + 20)) * 100;
            }
            if (percentage > 5 && percentage < 98) {
                var mainPercentage = 100 - percentage;
                document.getElementById("textareacontainer").style.height = percentage + "%";
                document.getElementById("iframecontainer").style.height = mainPercentage + "%";
                fixDragBtn();
            }
        }
        showFrameSize();
    }
}
function dragend() {
    document.getElementById("shield").style.display = "none";
    dragging = false;
}
if (window.addEventListener) {
    document.getElementById("dragbar").addEventListener("mousedown", function(e) {
        dragstart(e);
    });
    document.getElementById("dragbar").addEventListener("touchstart", function(e) {
        dragstart(e);
    });
    window.addEventListener("mousemove", function(e) {
        dragmove(e);
    });
    window.addEventListener("touchmove", function(e) {
        dragmove(e);
    });
    window.addEventListener("mouseup", dragend);
    window.addEventListener("touchend", dragend);
    window.addEventListener("load", fixDragBtn);
    window.addEventListener("load", showFrameSize);
}
function w3_getStyleValue(elmnt, style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt, null).getPropertyValue(style);
    } else {
        return elmnt.currentStyle[style];
    }
}
var clickarea = document.querySelector('label');
clickarea.addEventListener('click', function() {
    var btn = document.getElementsByClassName("run")[0];
    var texta = document.getElementsByClassName("code_input")[0];
    var checkv = document.getElementById("myswitch").checked;
    if (!checkv) {
        submitTryit();
        btn.innerHTML = "Live";
        btn.style.color = "#999999";
        btn.style.backgroundColor = "rgb(241, 241, 241)";
        btn.setAttribute("id", "run");
        btn.removeEventListener("click", submitTryit);
        texta.addEventListener("input", submitTryit);
    } else {
        btn.innerHTML = "Run »";
        btn.style.color = "#ffffff";
        btn.style.backgroundColor = "#34A7C1";
        btn.setAttribute("id", "");
        btn.addEventListener("click", submitTryit);
        texta.removeEventListener("input", submitTryit);
    }
});
window.onresize = function(){
    fixDragBtn();
}