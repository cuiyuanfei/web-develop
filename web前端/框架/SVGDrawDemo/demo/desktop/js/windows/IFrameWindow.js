mini.ux.IFrameWindow = function () {
    mini.ux.IFrameWindow.superclass.constructor.call(this);    
}
mini.extend(mini.ux.IFrameWindow, mini.ux.Window, {
    title: "IFrame Window",
    url: ""
});
mini.regClass(mini.ux.IFrameWindow, "ux.iframewindow");