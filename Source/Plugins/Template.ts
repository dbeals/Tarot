module Hermes {
	export class TemplatePlugin {
		public static Name: string = "template";

		private _element: Element;
		private _$element: JQuery;
		private _data: any;
		private _settings: any;

		constructor(element: Element, data: any, options: any) {
			this._element = element;
			this._$element = $(element);
			this._settings = $.extend(this._settings, options);
			this._data = data;
			this.initialize();
		}

		private processElement(element: Element) {
			let $element = $(element);

			const clone = $element.data("clone");
			if (clone) {
				$element = $element.clone();
				$element.remove();
				$element.removeAttr("id");
				$element.show();

				this._element = $element[0];
				this._$element = $element;
			}

			const prependTarget = $element.data("prepend-target");
			const appendTarget = $element.data("append-target");
			if (prependTarget) {
				const $prependTarget = $(prependTarget);
				if ($prependTarget)
					$prependTarget.prepend($element);
			}
			else if (appendTarget) {
				const $appendTarget = $(appendTarget);
				if ($appendTarget)
					$appendTarget.append($element);
			}

			const contentPrepend = $element.data("content-prepend");
			const content = $element.data("content");
			const contentAppend = $element.data("content-append");
			const text = $element.data("text");
			const link = $element.data("link");
			for (let propertyName in this._data) {
				const value = this._data[propertyName];

				if (contentPrepend == propertyName)
					$element.prepend(value);
				else if (content == propertyName)
					$element.html(value);
				else if (contentAppend == propertyName)
					$element.append(value);
				else if (text == propertyName)
					$element.text(value);
				else if (link == propertyName) {
					const $link = $("<a/>");
					$link.attr("href", value);
					$link.html($element.html());
					$element.empty();
					$element.append($link);
				}
				else {
					const attributes = ["id", "class", "src", "href", "title", "alt", "target", "type", "value"];
					for (let index = 0; index < attributes.length; ++index) {
						const attribute = attributes[index];
						const data = $element.data(attribute);
						if (data == propertyName)
							$element.attr(attribute, value);
					}
				}
			}
		}

		public initialize(): void {
			this.processElement(this._element);
			this._$element.children().each((index, element) => {
				this.processElement(element);
			});
		}
	}
}

(function ($: any, window: any, document: any) {
	$.fn[Hermes.TemplatePlugin.Name] = function (data: any, options: any) {
		return this.each(function () {
			new Hermes.TemplatePlugin(this, data, options);
		});
	};
})(jQuery, window, document);