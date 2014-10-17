EditForm = function (){
    EditForm.superclass.constructor.call(this);
    this.initControls();
    this.initEvents();
}
mini.extend(EditForm, mini.Window, {
    title: "编辑用户",
    bodyUrl: mini_JSPath + "../../demo/CommonLibs/EditForm_Inner.html",

    width: 650,
    height: "auto",
    bodyStyle: "padding:0px;",
    allowResize: true,
    showModal: true,
    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //toolbar


        //footer


        /////////////////////////////////////////////////////
        //body        
        mini.update(this.bodyUrl, bodyEl);



        /////////////////////////////////////////////////////

        //组件对象
        mini.parse(this.el);

        this._Update_Button = $(".Update_Button", this.el)[0];
        this._Cancel_Button = $(".Cancel_Button", this.el)[0];        
        this._form = $(".form", this.el)[0];
    },
    initEvents: function () {
        mini.on(this._Update_Button, "click", function () {
            var ret = true;
            if (this._Callback) ret = this._Callback('ok');
            if (ret !== false) {
                this.hide();
            }
        }, this);
        mini.on(this._Cancel_Button, "click", function () {
            var ret = true;
            if (this._Callback) ret = this._Callback('cancel');
            if (ret !== false) {
                this.hide();
            }
        }, this);
        this.on("beforebuttonclick", function (e) {
            if (e.name == "close") {
                e.cancel = true;
                var ret = true;
                if (this._Callback) ret = this._Callback('close');
                if (ret !== false) {
                    this.hide();
                }
            }
        }, this);
    },
    setData: function (url, callback) {
        this._Callback = callback;

        var sf = this;
        var form = new mini.Form(this._form);
        form.loading();
        $.ajax({
            url: url,            
            success: function (text) {            
                var o = mini.decode(text);
                form.setData(o);

                form.unmask();
            },
            error: function () {
                alert("表单加载错误");
            }
        });
    },
    getData: function () {
    
        var form = new mini.Form(this._form);
        return form.getData();
    }
});
mini.regClass(EditForm, "editform");