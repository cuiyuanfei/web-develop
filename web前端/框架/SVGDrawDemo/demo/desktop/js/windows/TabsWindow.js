mini.ux.TabsWindow = function () {
    mini.ux.TabsWindow.superclass.constructor.call(this);
    this.initControls();
}
mini.extend(mini.ux.TabsWindow, mini.ux.Window, {
    title: "Tabs Window",

    width: 550,
    height: 300,
    minWidth: 450,
    minHeight: 200,

    tabsUrl: "../tabs/tabs.txt",

    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //body
        this.tabs = new mini.Tabs();
        this.tabs.set({          
            style: "width: 100%;height: 100%;",
            bodyStyle: ""//"border:0",
            
        });

        this.tabs.render(bodyEl);

        this.tabs.setUrl(this.tabsUrl);
    }
});
mini.regClass(mini.ux.TabsWindow, "ux.tabswindow");