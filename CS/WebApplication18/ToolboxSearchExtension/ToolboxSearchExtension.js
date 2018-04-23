// Creates and implements a custom ToolboxSearchExtension class

function ToolboxSearchExtension(_dashboardControl) {
    var _this = this;
    this._dashboardContainer = _dashboardControl.dashboardContainer;
    this.name = "dx-dashboard-toolbox-search";
    this._koSubscription = undefined;
    this._onContainerInitialize = function () {
        var toolbar = $(".dx-dashboard-toolbox .dx-scrollview-content");
        var button = $("<div id='toolboxSearchButton' />").dxButton({
            icon: "search",
            onClick: _this._showFilterPopup,
            width: 80
        });
        toolbar.prepend(button);
    };

    this._showFilterPopup = function () {
        $("#popup").dxPopup({
            showTitle: true,
            title: "Search...",
            width: 400,
            height: 200,
            dragEnabled: false,
            closeOnOutsideClick: true,
            shading: false,
            onShown: function () {
                $("#toolboxSearchTextBox").dxTextBox("instance").focus();
            },
            contentTemplate: function (c) {
                return $("<div id='toolboxSearchTextBox'/>").dxTextBox({
                    placeholder: "Type an item name...",
                    mode: "search",
                    onInput: function (e) {
                        var text = e.component.option("text");
                        var itemContainer = $(".dx-dashboard-toolbox-item");
                        if (text !== '') {
                            itemContainer = $(".dx-dashboard-toolbox-item");
                            itemContainer.addClass("hiddenBySearch");
                            itemContainer = $("div[title*='" + text + "'].dx-dashboard-toolbox-item");
                            itemContainer.toggleClass("hiddenBySearch");
                        }
                        else
                            itemContainer.removeClass("hiddenBySearch");
                    },
                });
            },
            onHidden: function () {
                var itemContainer = $(".dx-dashboard-toolbox-item");
                itemContainer.removeClass("hiddenBySearch");
            }
        }).dxPopup("instance").show();
    };

    ToolboxSearchExtension.prototype.start = function () {
        this._koSubscription = this._dashboardContainer.subscribe(this._onContainerInitialize);
    };
    ToolboxSearchExtension.prototype.stop = function () {
        this._koSubscription.dispose();
    };
}