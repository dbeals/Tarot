var Hermes;
(function (Hermes) {
    var TemplatePlugin = (function () {
        function TemplatePlugin(element, data, options) {
            this._element = element;
            this._$element = $(element);
            this._settings = $.extend(this._settings, options);
            this._data = data;
            this.initialize();
        }
        TemplatePlugin.prototype.processElement = function (element) {
            var $element = $(element);
            var clone = $element.data("clone");
            if (clone) {
                $element = $element.clone();
                $element.remove();
                $element.removeAttr("id");
                $element.show();
                this._element = $element[0];
                this._$element = $element;
            }
            var prependTarget = $element.data("prepend-target");
            var appendTarget = $element.data("append-target");
            if (prependTarget) {
                var $prependTarget = $(prependTarget);
                if ($prependTarget)
                    $prependTarget.prepend($element);
            }
            else if (appendTarget) {
                var $appendTarget = $(appendTarget);
                if ($appendTarget)
                    $appendTarget.append($element);
            }
            var contentPrepend = $element.data("content-prepend");
            var content = $element.data("content");
            var contentAppend = $element.data("content-append");
            var text = $element.data("text");
            var link = $element.data("link");
            for (var propertyName in this._data) {
                var value = this._data[propertyName];
                if (contentPrepend == propertyName)
                    $element.prepend(value);
                else if (content == propertyName)
                    $element.html(value);
                else if (contentAppend == propertyName)
                    $element.append(value);
                else if (text == propertyName)
                    $element.text(value);
                else if (link == propertyName) {
                    var $link = $("<a/>");
                    $link.attr("href", value);
                    $link.html($element.html());
                    $element.empty();
                    $element.append($link);
                }
                else {
                    var attributes = ["id", "class", "src", "href", "title", "alt", "target", "type", "value"];
                    for (var index = 0; index < attributes.length; ++index) {
                        var attribute = attributes[index];
                        var data = $element.data(attribute);
                        if (data == propertyName)
                            $element.attr(attribute, value);
                    }
                }
            }
        };
        TemplatePlugin.prototype.initialize = function () {
            var _this = this;
            this.processElement(this._element);
            this._$element.children().each(function (index, element) {
                _this.processElement(element);
            });
        };
        TemplatePlugin.Name = "template";
        return TemplatePlugin;
    })();
    Hermes.TemplatePlugin = TemplatePlugin;
})(Hermes || (Hermes = {}));
(function ($, window, document) {
    $.fn[Hermes.TemplatePlugin.Name] = function (data, options) {
        return this.each(function () {
            new Hermes.TemplatePlugin(this, data, options);
        });
    };
})(jQuery, window, document);
//# sourceMappingURL=Template.js.map