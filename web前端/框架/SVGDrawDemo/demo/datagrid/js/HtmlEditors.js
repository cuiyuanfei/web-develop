

/* HtmlTextBox 
-----------------------------------------------------------------------------*/

var HtmlTextBox = function () {
    HtmlTextBox.superclass.constructor.call(this);
}
mini.extend(HtmlTextBox, mini.GridEditor, {
    el: null,
    _create: function () {
        this.el = document.createElement("input");
        this.el.type = "text";
        this.el.style.cssText = "padding:0;margin:0;"
        this.el.style.width = "96%";
    },
    getValue: function () {        
        return this.el.value;
    },
    setValue: function (value) {
        this.el.value = value;
    }
});
mini.regClass(HtmlTextBox, "htmltextbox");


/* HtmlTextArea 
-----------------------------------------------------------------------------*/

var HtmlTextArea = function () {
    HtmlTextArea.superclass.constructor.call(this);
}
mini.extend(HtmlTextArea, mini.GridEditor, {
    el: null,
    _create: function () {
        this.el = document.createElement("textarea");
        this.el.style.cssText = "padding:0;margin:0;"
        this.el.style.width = "96%";
        this.el.style.height = "50px";
    },
    getValue: function () {
        return this.el.value;
    },
    setValue: function (value) {
        this.el.value = value;
    }
});
mini.regClass(HtmlTextBox, "htmltextarea");


/* HtmlSelect 
-----------------------------------------------------------------------------*/

var HtmlSelect = function () {
    HtmlSelect.superclass.constructor.call(this);
}
mini.extend(HtmlSelect, mini.GridEditor, {
    el: null,
    _create: function () {
        this.el = document.createElement("select");
        this.el.style.width = "100%";
    },
    getValue: function () {
        return this.el.value;
    },
    setValue: function (value) {
        this.el.value = value;
    },

    valueField: "id",
    textField: "text",
    data: [],
    setData: function (value) {
        if (!(value instanceof Array)) value = [];
        this.data = value;

        var sb = [];
        for (var i = 0, l = this.data.length; i < l; i++) {
            var o = this.data[i];
            var text = o[this.textField];
            var value = o[this.valueField];
            sb.push('<option value="' + value + '">' + text + '</option>');
        }
        jQuery(this.el).html(sb.join(''));

    }
});
mini.regClass(HtmlSelect, "htmlselect");