# Tabulence

**Tabulence** is a Firefox extension that lists the Title and URL for all browser tabs in the current window. The text in the extension's popup window is available for selecting, copying, and pasting into some other document.

There are buttons, in the popup window, to choose from the following formats:
- **Text** to paste into a plain text or wiki document.
- **Markdown** to paste into a `README.md` file, for example.
- **List Item** (`<a>` inside `<li>`) for pasting into a list in an HTML document.

**Note:** This Firefox extension is currently a learning project and personal utility. It is not published at `addons.mozilla.org`.

## Reference

### Firefox Extensions

[Firefox Extension Workshop](https://extensionworkshop.com/)
- [Temporary installation in Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Package your extension](https://extensionworkshop.com/documentation/publish/package-your-extension/)
- [Distribute pre-release versions](https://extensionworkshop.com/documentation/publish/distribute-pre-release-versions/)
- [Submitting an add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/#self-distribution)
- [Getting started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)


[Your first extension (MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [icons](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons#svg)

[Example extensions (MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples) at GitHub:
- [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs)
- [quicknote](https://github.com/mdn/webextensions-examples/tree/master/quicknote)

[Working with the Tabs API (MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)

- [tabs API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs)


### (Self) Publishing

I installed [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) (and all the *NodeJS stuff* required to run it) and ran `web-ext build` to package a `.zip` file. Turns out that, because *tabulence* is such a basic extension, it would have been simpler to just use the (already available) `zip` command to make the file. Nonetheless, `web-ext` would be very handy when developing more complex add-ons. It can do a lot more than build a zip file.

**Links related to publishing an add-on:**
- [Signing and distribution overview](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
- [Distributing an add-on yourself](https://extensionworkshop.com/documentation/publish/self-distribution/)
- [Submitting an add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [Firefox Add-on Distribution Agreement](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)
- [Add-on Policies](https://extensionworkshop.com/documentation/publish/add-on-policies/)


### JavaScript

[JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Promise - JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
