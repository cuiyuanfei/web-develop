if (!window.UserControl) window.UserControl = {};

UserControl.ComboGrid = function () {

    UserControl.ComboGrid.superclass.constructor.call(this);
    
    this.initComponents();
    this.bindEvents();
}

mini.extend(UserControl.ComboGrid, mini.PopupEdit, {

    uiCls: 'uc-combogrid',

    url: '',
    multiSelect: false,

    initComponents: function () {
        var grid = new UserControl.GridBox();
        grid.set({
            style: 'height:100%',
            borderStyle: 'border:0',
            multiSelect: this.multiSelect
        });
        this.grid = grid;

        this.set({
            popupWidth: 450,
            popupHeight: 250,
            popup: grid
        });
    },
    bindEvents: function () {
        var that = this,
            grid = that.grid;

        grid.on('okclick', function (e) {
            var value = grid.getValue();
            var text = grid.getText();
            that.setValue(value);
            that.setText(text);
            that.hidePopup();
            that.focus();
        });

        grid.on('cancelclick', function (e) {
            that.hidePopup();
        });
    },

    setUrl: function (value) {
        this.grid.setUrl(value);
        this.grid.load();
    },
    setMultiSelect: function (value) {
        this.grid.setMultiSelect(value);
    },
    getAttrs: function (el) {
        var attrs = UserControl.ComboGrid.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            ["url"]
        );
        mini._ParseBool(el, attrs,
            ["multiSelect"]
        );

        return attrs;
    }

});

mini.regClass(UserControl.ComboGrid, "combogrid");