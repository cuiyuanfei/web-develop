mini.ux.Window = function () {
    mini.ux.Window.superclass.constructor.call(this);    
}
mini.extend(mini.ux.Window, mini.Window, {
    title: "New Window",
    width: 500,
    height: 280,
    minWidth: 250,
    minHeight: 100,

    showMaxButton: true,
    showMinButton: true,
    showModal: false,
    allowResize: true,

    uiCls: "mini-ux-window"
});
mini.regClass(mini.ux.Window, "ux.window");