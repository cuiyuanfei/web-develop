mini.ux.DeskTop = function () {
    this.modules = [];
    this.windows = [];
    mini.ux.DeskTop.superclass.constructor.call(this);
}
mini.extend(mini.ux.DeskTop, mini.Control, {

    windows: [],
    active: null,

    modules: [],
    moduleHeight: 95,
    modulesOffset: 20,
    showTaskbar: true,

    addHTML: function (html) {
        jQuery(this._viewportEl).append(html);
    },

    _create: function () {
        this.el = document.createElement("div");
        this.el.className = "mini-desktop";

        this.el.innerHTML = '<div class="mini-desktop-viewport"><div class="mini-desktop-modules"></div></div><div class="mini-desktop-taskbar"></div>';
        this._viewportEl = this.el.firstChild;
        this.taskbarEl = this.el.lastChild;
        this.modulesEl = this._viewportEl.firstChild;

        this.taskbarEl.innerHTML = '<a class="mini-desktop-startbutton" href="#" onclick="return false;" hideFocus></a><div class="mini-desktop-taskbar-inner"><div class="mini-desktop-bars"></div></div><div class="mini-desktop-bars-leftarrow"></div><div class="mini-desktop-bars-rightarrow"></div>';
        this.startButtonEl = this.taskbarEl.firstChild;
        this.barsInnerEl = this.taskbarEl.childNodes[1];
        this.barsEl = this.barsInnerEl.firstChild;

        this.leftArrowEl = this.taskbarEl.childNodes[2];
        this.rightArrowEl = this.taskbarEl.childNodes[3];

    },
    _initEvents: function () {
        mini.on(window, "resize", function (e) {
            this.doLayout();
        }, this);
        mini.on(this.el, "click", this.__OnClick, this);

        mini.on(this.leftArrowEl, "click", this.__OnLeftArrowClick, this);
        mini.on(this.rightArrowEl, "click", this.__OnRightArrowClick, this);
    },
    doLayout: function () {
        this._viewportEl.style.height = this.getViewportHeight() + "px";
        this._doUpdateModules();

        mini.layout(this._viewportEl);

        this.layoutTaskBar();
    },
    layoutTaskBar: function () {
        mini.removeClass(this.taskbarEl, 'mini-desktop-taskbar-showarrow');

        var cls = '';
        var scrollWidth = this._getScrollWidth();
        var width = this.barsInnerEl.offsetWidth;
        if (scrollWidth > width || this.barsInnerEl.scrollLeft > 0) {
            cls = 'mini-desktop-taskbar-showarrow';
        }


        mini.addClass(this.taskbarEl, cls);


    },
    _getScrollWidth: function () {
        var scrollWidth = 0;
        var last = this.barsEl.lastChild;
        if (last) {
            var box = mini.getBox(last);
            var box2 = mini.getBox(this.barsEl);
            scrollWidth = box.right - box2.left;
        }
        return scrollWidth;
    },
    __OnLeftArrowClick: function (e) {
        this.barsInnerEl.scrollLeft -= 80;
        this.layoutTaskBar();
    },
    __OnRightArrowClick: function (e) {
        var scrollWidth = this._getScrollWidth();
        
        var scrollLeft = this.barsInnerEl.scrollLeft + 80;
        //this.barsInnerEl.scrollLeft = scrollLeft;
        var width = scrollLeft + this.barsInnerEl.offsetWidth;
        
        if (width > scrollWidth) {
            this.barsInnerEl.scrollLeft = scrollWidth - this.barsInnerEl.offsetWidth;
        } else {
            this.barsInnerEl.scrollLeft = scrollLeft;
        }
        this.layoutTaskBar();
    },
    /////////////////////////////////////////////////////////
    getViewportHeight: function () {
        var viewBox = mini.getViewportBox();
        var taskbarHeight = this.getTaskbarHeight();
        var h = viewBox.height - taskbarHeight;
        if (h < 220) h = 220;
        return h;
    },
    getTaskbarHeight: function () {
        return this.showTaskbar ? this.taskbarEl.offsetHeight : 0;
    },

    /////////////////////////////////////////////////////////
    //Modules
    _doUpdateModules: function () {
        var sb = [];
        var columns = this._getModuleColumns();
        for (var j = 0, k = columns.length; j < k; j++) {
            var column = columns[j];
            sb.push('<div class="mini-desktop-modules-list">');
            for (var i = 0, l = column.length; i < l; i++) {
                var m = column[i];
                var text = m.text || "";
                var icon = m.iconCls;
                var s1 = '<div class="mini-desktop-module-icon ' + icon + '"></div>';
                var s2 = '<div class="mini-desktop-module-text">' + text + '</div>';
                sb.push('<div id="' + m._id + '" title="' + m.title + '" class="mini-desktop-module">' + s1 + s2 + '</div>');
            }
            sb.push('</div>');
        }

        var s = sb.join('');
        this.modulesEl.innerHTML = s;
    },
    _getModuleColumns: function () {
        var height = this.getViewportHeight();
        height -= this.modulesOffset;
        var columns = [];

        var index = 0;
        var top = 0;
        var mh = this.moduleHeight;
        for (var i = 0, l = this.modules.length; i < l; i++) {
            var m = this.modules[i];
            if (top + mh > height) {
                index++;
                top = mh;
            } else {
                top += mh;
            }
            var column = columns[index];
            if (!column) {
                column = columns[index] = [];
            }
            column.push(m);
        }
        return columns;
    },
    setModules: function (value) {
        if (!mini.isArray(value)) value = [];
        this.modules = value;
        for (var i = 0, l = this.modules.length; i < l; i++) {
            var m = this.modules[i];
            m._id = mini.ux.DeskTop.ModuleID++;
        }
    },
    getModule: function (name) {
        if (typeof name == "object") return name;
        for (var i = 0, l = this.modules.length; i < l; i++) {
            var m = this.modules[i];
            if (m.name == name) return m;
        }
        return null;
    },
    _getModuleByID: function (id) {
        for (var i = 0, l = this.modules.length; i < l; i++) {
            var m = this.modules[i];
            if (m._id == id) return m;
        }
        return null;
    },
    /////////////////////////////////
    //Window
    findWindow: function (id) {
        return mini.get(id);
    },
    setWindow: function (win, options) {
        /*
        title, iconCls, 
        showCloseButton, showMaxButton, showMinButton
        x, y, width, height
        showModal, allowResize, allowDrag
        */
        if (!win || !options || typeof options != "object") return;

        win.set(options);
        this._doUpdateBars();
    },
    createWindow: function (type) {

        if (typeof type == "string") {
            type = mini.getClass(type);
        }
        if (!type) return null;

        //create
        var win = new type();
        win._containerEl = this._viewportEl;
        win.render(this._viewportEl);

        this.windows.push(win);

        //
        win.on("beforebuttonclick", this.__OnWindowBeforeButtonClick, this);

        var me = this;
        mini.on(win.el, "mousedown", function (e) {
            me.activeWindow(win);
        });

        return win;
    },
    destroyWindow: function (win) {
        if (!win) return;
        win.destroy();
        this.windows.remove(win);
        this._doUpdateBars();
    },
    showWindow: function (win, x, y) {
        if (!win) return;
        win._minState = false;
        win.show(x, y);

        this.activeWindow(win);

        ///////////////        
        var box = mini.getBox(win.el);
        var barBox = this.getBarBox(win);

        //win.el.style.visibility = "hidden";
        win.el.style.display = "none";
        //        win.el.style.left = "-2000px";
        //        win.el.style.top = "-2000px";

        //amin
        var el = mini.append(document.body, '<div class="mini-desktop-proxy"></div>');
        mini.setBox(el, barBox);

        jQuery(el).animate(
            { width: box.width, height: box.height, left: box.x, top: box.y },
            160,
            function () {
                jQuery(el).remove();
                win.el.style.display = "block";
                mini.layout();
                //win.el.style.visibility = "visible";
            }
        );
        //////////////////
    },
    hideWindow: function (win) {
        if (!win) return;
        win.hide();

        var active = this.getNextActiveWindow();
        this.activeWindow(active);
    },
    maxWindow: function (win) {
        if (!win) return;
        win._minState = false;
        win.max();

        this.activeWindow(win);
    },
    restoreWindow: function (win) {
        if (!win) return;
        win._minState = false;

        win.restore();
        this.activeWindow(win);


    },
    minWindow: function (win) {
        if (!win) return;
        win._minState = true;

        ///////////////
        var box = mini.getBox(win.el);
        var barBox = this.getBarBox(win);
        //amin
        var el = mini.append(document.body, '<div class="mini-desktop-proxy"></div>');
        mini.setBox(el, box);

        jQuery(el).animate(
            { width: 150, height: 100, left: barBox.x, top: this.getViewportHeight() - 100 },
            160,
            function () {
                jQuery(el).remove();
            }
        );
        //////////////////
        //win.setVisible(false);
        win.el.style.display = "none";
        var active = this.getNextActiveWindow();
        this.activeWindow(active);
    },
    getNextActiveWindow: function (win) {
        var active = null;
        var maxZindex = 0;
        for (var i = 0, l = this.windows.length; i < l; i++) {
            var win = this.windows[i];
            var zindex = win._ZIndex;
            if (win.visible == true
                    && this.getWindowState(win) != "min"
                    && win != this.active
            ) {
                if (zindex > maxZindex) {
                    maxZindex = zindex;
                    active = win;
                }
            }
        }
        return active;
    },
    activeWindow: function (win) {
        //if(win) win.setVisible(true);
        this.active = win;
        if (win) {
            //win._ZIndex = win.el.style.zIndex = mini.ux.DeskTop.maxZIndex();
            win.el.style.zIndex = mini.getMaxZIndex();
        }
        this._doUpdateBars();
    },
    getWindowState: function (win) {
        if (win._minState == true) return "min";
        return win.state;
    },
    _doUpdateBars: function () {
        var sb = [];

        for (var i = 0, l = this.windows.length; i < l; i++) {
            var win = this.windows[i];
            if (win.visible == true) {
                var text = win.title;
                var id = win.id + "$bar";
                var cls = "";
                if (this.active == win) {
                    cls = "mini-desktop-bar-active";
                }
                sb.push('<a id="' + id + '" href="javascript:;" hidefocus onclick="return false" class="mini-desktop-bar ' + cls + '"><span class="mini-desktop-bar-text">' + text + '</span></a>');
            }
        }
        var s = sb.join('');
        this.barsEl.innerHTML = s;
    },
    getBarBox: function (win) {
        var id = win.id + "$bar";
        var el = document.getElementById(id);
        return mini.getBox(el);
    },
    /////////////////////////////////
    __OnWindowBeforeButtonClick: function (e) {
        e.cancel = true;

        var win = e.sender;
        if (e.name == "close") {
            this.hideWindow(win);
        }
        if (e.name == "max") {
            var state = this.getWindowState(win);
            if (state == "max") {
                this.restoreWindow(win);
            } else {
                this.maxWindow(win);
            }
        }
        if (e.name == "min") {
            this.minWindow(win);
        }

    },
    __OnClick: function (e) {

        //module
        var t = mini.findParent(e.target, "mini-desktop-module");
        if (t) {
            var module = this._getModuleByID(t.id);
            if (module) {
                var ev = {
                    module: module,
                    name: module.name,
                    htmlEvent: e
                };
                this.fire("moduleclick", ev);
            }
        }
        //bar
        var t = mini.findParent(e.target, "mini-desktop-bar");
        if (t) {
            var id = t.id.substr(0, t.id.length - "$bar".length);
            var win = this.findWindow(id);
            var state = this.getWindowState(win);
            if (state != "min") {
                this.minWindow(win);
            } else {
                this.showWindow(win, win.x, win.y);
            }
        }
    }
});
mini.regClass(mini.ux.DeskTop, "ux.desktop");

mini.ux.DeskTop.ModuleID = 1;
mini.ux.DeskTop.WindowID = 1;

mini.ux.DeskTop.zIndex = 1000;
mini.ux.DeskTop.maxZIndex = function () {
    return mini.ux.DeskTop.zIndex++;
}