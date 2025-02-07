/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var x=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var X=Object.prototype.hasOwnProperty;var Y=(l,e)=>{for(var t in e)x(l,t,{get:e[t],enumerable:!0})},Z=(l,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Q(e))!X.call(l,n)&&n!==t&&x(l,n,{get:()=>e[n],enumerable:!(i=J(e,n))||i.enumerable});return l};var ee=l=>Z(x({},"__esModule",{value:!0}),l);var te={};Y(te,{BUTTON_CLASS:()=>O,LUCID_ICON_NAME:()=>A,WINDOW_ID:()=>p,default:()=>V});module.exports=ee(te);var w=require("obsidian");var N=require("obsidian");var q=require("obsidian");var W=require("obsidian"),v=class{constructor(e,t){this._plugin=e,this._view=t}get headings(){return this._getHeadingsForView(this._view)}updateView(e){this._view=e}_getHeadingsForView(e){var a;let t=e==null?void 0:e.file;if(!t)return[];let n=(a=(this._plugin.app.metadataCache.getFileCache(t)||{}).headings)!=null?a:[];return this._cleanupHeadings(n)}_cleanupHeadings(e){let t=s=>(0,W.htmlToMarkdown)(s).replaceAll("*","").replaceAll("_","").replaceAll("`","").replaceAll("==","").replaceAll("~~",""),i=s=>s.replace(/\[([^\]]+)\]\(.*?\)/g,"$1").replace(/\[\[([^\]]+)\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]]+)\]\]/g,"$1"),n=e;return n.forEach(s=>{let a=s.heading;a=t(a),a=i(a),s.heading=a}),n}};var d=class{constructor(e,t){this._plugin=e,t?(this.element=t,this.inputField=this.element.querySelector("input"),this.clearButton=this.element.querySelector(".dynamic-outline-search-clear-button")):(this.element=createEl("div",{cls:"dynamic-outline-search-container"}),this.inputField=createEl("input",{attr:{placeholder:"Search headings\u2026",type:"search"}}),this.element.appendChild(this.inputField),this.clearButton=createEl("div",{cls:"search-input-clear-button dynamic-outline-search-clear-button",attr:{"aria-label":"Clear search"}}),this.element.appendChild(this.clearButton),this.setupEventListeners())}setupEventListeners(){this._plugin.registerDomEvent(this.inputField,"input",()=>{this.handleInput()}),this._plugin.registerDomEvent(this.clearButton,"click",()=>{this.clearInput()})}clearInput(){this.inputField.value="";let e=new Event("input",{bubbles:!0,cancelable:!0});this.inputField.dispatchEvent(e),this.inputField.focus()}handleInput(){this.inputField.value.length>0?(this.clearButton.classList.add("visible"),this.inputField.classList.add("has-content")):(this.clearButton.classList.remove("visible"),this.inputField.classList.remove("has-content"))}};var f=class{constructor(e,t){this._plugin=e,this._view=t,this._stateManager=o.getInstance()}createLiElement(e){let t=createEl("li",{attr:{"data-heading-line":e.position.start.line}}),i=createEl("a",{cls:`heading-level-${e.level}`,text:e.heading});return t.append(i),this._setupEventListener(t,e),t}updateLiElementLine(e,t){e.setAttribute("data-heading-line",t.position.start.line.toString()),this._setupEventListener(e,t)}_setupEventListener(e,t){e.onclick=()=>{if(this._view.file&&(this._view.leaf.openFile(this._view.file,{eState:{line:t.position.start.line}}),setTimeout(()=>{this._view.currentMode.applyScroll(t.position.start.line)},0),this._plugin.settings.resetSearchFieldOnHeadingClick)){let i=this._stateManager.getWindowInView(this._view),n=i.getContainerElement().querySelector(".dynamic-outline-search-container");if(!n)return;new d(this._plugin,n).clearInput(),i.removeHovered()}},e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")})}};var m=class{constructor(e,t){this._latestHeadings=[];this._pinned=!1;this._plugin=e,this._view=t,this._stateManager=o.getInstance(),this._containerEl=this.createElement(),this._dynamicHeadings=new v(this._plugin,this._view),this.setupEventListeners()}get visible(){return!!this._view.containerEl.querySelector(`#${p}`)}get pinned(){return this._pinned}set pinned(e){this._pinned=e,this._plugin.settings.toggleOnHover&&!e&&this.hide()}setupEventListeners(){this._plugin.registerDomEvent(this._containerEl.querySelector("input"),"input",()=>{this.filterItems()}),this._plugin.registerDomEvent(this._containerEl.querySelector("input"),"keydown",e=>{this.handleKeyDown(e)}),this._plugin.settings.toggleOnHover&&(this._plugin.registerDomEvent(this._containerEl,"mouseenter",()=>this.handleMouseEnter()),this._plugin.registerDomEvent(this._containerEl,"mouseleave",()=>this.handleMouseLeave()))}getVisibleLiItems(){return Array.from(this._containerEl.querySelectorAll("li:not(.outline-item-hidden"))}setHovered(e,t){e.forEach((i,n)=>{i.classList.toggle("hovered",n===t)})}handleKeyDown(e){let t=()=>{let c=i.findIndex(u=>u.classList.contains("hovered"));return c!==-1?c:i.findIndex(u=>u.classList.contains("highlight"))||0},i=this.getVisibleLiItems(),n=i.length,s=t(),a=s;switch(e.key){case"ArrowDown":case"Tab":e.preventDefault(),a=e.shiftKey?(s+n-1)%n:(s+1)%n;break;case"ArrowUp":e.preventDefault(),a=(s+n-1)%n;break;case"Enter":e.preventDefault(),s>=0&&i[s].click();break;case"Escape":e.preventDefault(),this.hide();break}a!==s&&(this.setHovered(i,a),i[a].scrollIntoView({block:"nearest"}))}filterItems(){let t=this._containerEl.querySelector("input").value.toLowerCase(),i=this._containerEl.querySelectorAll("li");i==null||i.forEach(s=>{var c;let a=!!((c=s.textContent)!=null&&c.toLowerCase().includes(t));s.classList.toggle("outline-item-hidden",!a)});let n=this.getVisibleLiItems();this.setHovered(n,0)}handleMouseEnter(){this.clearHideTimeout(),this.getVisibleLiItems().forEach(t=>{t.classList.remove("hovered")})}handleMouseLeave(){this._plugin.settings.toggleOnHover&&!this.pinned&&(m.hideTimeout=setTimeout(()=>{this.hide()},100))}getContainerElement(){return this._containerEl}clearHideTimeout(){m.hideTimeout&&(clearTimeout(m.hideTimeout),m.hideTimeout=null)}createElement(){let e=createEl("div",{attr:{id:"dynamic-outline"}}),t=new d(this._plugin);e.appendChild(t.element);let i=createEl("div",{cls:"dynamic-outline-content-container"});return i.createEl("ul",{}),e.appendChild(i),e}checkForObstructions(){let e=document.getElementById("cMenuToolbarModalBar"),t=e!==null&&e.classList.contains("top");this._containerEl.classList.toggle("obstruction-top",t)}checkForLocation(){this._containerEl.classList.toggle("location-left",this._plugin.settings.windowLocation==="left")}removeHovered(){this.getVisibleLiItems().forEach(t=>{t.classList.remove("hovered")})}updateView(e){this._view=e,this._dynamicHeadings.updateView(e)}highlightCurrentHeading(e="nearest"){let t=(u,k)=>{let F=0,I=0,B=u.length-1;for(;I<=B;){let D=Math.floor((I+B)/2);u[D].position.start.line<=k?(F=D,I=D+1):B=D-1}return F},i=this._view.currentMode.getScroll(),n=this.getHeadings();if(n.length==0)return;let s=t(n,i+1);this._containerEl.querySelectorAll("li").forEach((u,k)=>u.classList.toggle("highlight",k===s));let c=this._containerEl.querySelector("li.highlight");c==null||c.scrollIntoView({behavior:"instant",block:e})}getHeadings(){return this._dynamicHeadings.headings}update(){let e=(s,a)=>s.length===a.length&&s.every((c,u)=>c.heading===a[u].heading&&c.level===a[u].level),t=this._containerEl.querySelector("ul");if(!t)return;let i=new f(this._plugin,this._view),n=this.getHeadings();if(n.length>0&&e(n,this._latestHeadings)){t.querySelectorAll("li").forEach((a,c)=>{i.updateLiElementLine(a,n[c])});return}this._latestHeadings=n,t.empty(),n==null||n.forEach(s=>{let a=i.createLiElement(s);t.append(a)}),this._plugin.settings.highlightCurrentHeading&&this.highlightCurrentHeading()}show(e){if(this.visible)return;this.checkForObstructions(),this.checkForLocation(),this.update(),this._view.contentEl.append(this._containerEl);let t=this._stateManager.getButtonInView(this._view);if(t.active=!0,this._plugin.settings.autofocusSearchOnOpen){let i=this._containerEl.querySelector("input");i==null||i.focus()}this._plugin.settings.highlightCurrentHeading&&this.highlightCurrentHeading(e==null?void 0:e.scrollBlock)}hide(){if(!this.visible)return;this._containerEl.remove(),this.removeHovered();let e=this._stateManager.getButtonInView(this._view);e.active=!1,this._plugin.settings.toggleOnHover&&(this.pinned=!1)}toggle(){this.visible?this.hide():this.show()}},h=m;h.hideTimeout=null;var E=class{constructor(e){this._plugin=e,this._stateManager=o.getInstance(),this._containerEl=this.createElement(),this.setupEventListeners()}get visible(){return!!this._view.containerEl.querySelector(`button.${O}`)}get active(){return this._containerEl.classList.contains("button-active")}set active(e){this._containerEl.classList.toggle("button-active",e)}setupEventListeners(){this._plugin.registerDomEvent(this._containerEl,"click",()=>this.handleClick()),this._plugin.settings.toggleOnHover&&(this._plugin.registerDomEvent(this._containerEl,"mouseenter",()=>this.handleMouseEnter()),this._plugin.registerDomEvent(this._containerEl,"mouseleave",()=>this.handleMouseLeave()))}createElement(){let e=createEl("button",{cls:`clickable-icon view-action ${O}`,attr:{"aria-label":"Toggle Dynamic Outline"}});return(0,q.setIcon)(e,A),e}handleMouseEnter(){let e=this._stateManager.getWindowInView(this._view);e.visible||e.show({scrollBlock:"start"}),this._plugin.settings.toggleOnHover&&e.clearHideTimeout()}handleMouseLeave(){let e=this._stateManager.getWindowInView(this._view);e.visible&&!e.pinned&&(h.hideTimeout=setTimeout(()=>{e.hide()},100))}getViewActionButtons(){return this._view.containerEl.querySelector(".view-actions")}getViewHeaderLeft(){return this._view.containerEl.querySelector(".view-header-left .view-header-nav-buttons")}updateView(e){this._view=e}handleClick(){let e=this._stateManager.getWindowInView(this._view);if(e.visible){if(this._plugin.settings.toggleOnHover)if(e.pinned)e.pinned=!1,e.clearHideTimeout();else{e.pinned=!0;return}e.hide()}else e.show({scrollBlock:"start"}),e.pinned=!0}show(){if(this.active=this.visible,this._plugin.settings.windowLocation==="right"){let e=this.getViewActionButtons();e&&e.insertBefore(this._containerEl,e==null?void 0:e.firstChild)}else if(this._plugin.settings.windowLocation==="left"){let e=this.getViewHeaderLeft();e&&e.appendChild(this._containerEl)}else console.error("Invalid window location")}hide(){this.visible&&this._containerEl.remove()}};var o=class{constructor(e){this._windows=new Map;this._buttons=new Map;this._plugin=e}static initialize(e){return o.instance||(o.instance=new o(e)),o.instance}static getInstance(){if(!o.instance)throw new Error("OutlineStateManager not initialized");return o.instance}getKey(e){return e.leaf.id}getActiveMDView(){return this._plugin.app.workspace.getActiveViewOfType(N.MarkdownView)}getOpenMDViews(){return this._plugin.app.workspace.getLeavesOfType("markdown").map(t=>t.view)}getButtonInView(e){let t=this.getKey(e);this._buttons.has(t)||this._buttons.set(t,new E(this._plugin));let i=this._buttons.get(t);return i.updateView(e),i}getWindowInView(e){let t=this.getKey(e);this._windows.has(t)||this._windows.set(t,new h(this._plugin,e));let i=this._windows.get(t);return i.updateView(e),i}handleFileOpen(){let e=this.getActiveMDView();if(!e)return;let t=this.getWindowInView(e),i=t.getHeadings(),n=i&&i.length>=this._plugin.settings.minimumHeadings;t.visible&&!n?(this._plugin.settings.toggleOnHover&&(t.pinned=!1),t.hide()):!t.visible&&n&&(setTimeout(()=>t.show(),50),this._plugin.settings.toggleOnHover&&(t.pinned=!0))}handleMetadataChanged(){let e=this.getActiveMDView();if(!e)return;this.getWindowInView(e).update()}createButtonsInOpenViews(){this.getOpenMDViews().forEach(e=>{if(e.leaf.width===0)return;let t=this.getButtonInView(e);t.visible||t.show()})}removeAll(){this._windows.forEach(e=>e.hide()),this._buttons.forEach(e=>e.hide()),this._windows.clear(),this._buttons.clear()}};var S=require("obsidian");var R=require("obsidian");var r=class{constructor(e,t){this.plugin=e,this.containerEl=t}};var L=class extends r{display(){new R.Setting(this.containerEl).setName("Autofocus search field on open").setDesc("Focus the search field on window open. Useful for immediate keyboard control.").addToggle(e=>{e.setValue(this.plugin.settings.autofocusSearchOnOpen).onChange(async t=>{this.plugin.settings.autofocusSearchOnOpen=t,await this.plugin.saveSettings()})})}};var U=require("obsidian");var y=class extends r{display(){let e,t=this.plugin.settings.highlightCurrentHeading;new U.Setting(this.containerEl).setName("Highlight active heading").setDesc(g("Highlight current outline heading while scrolling down the file.")).addButton(i=>{e=i,i.setButtonText("Reload plugin"),i.setTooltip("Requires a plugin reload to take effect."),i.setDisabled(!0),i.setClass("dynamic-outline-reload"),i.setCta(),i.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(i=>{i.setValue(this.plugin.settings.highlightCurrentHeading).onChange(async n=>{this.plugin.settings.highlightCurrentHeading=n,await this.plugin.saveSettings(),e.setDisabled(n===t)})})}};var K=require("obsidian");var H=class extends r{display(){new K.Setting(this.containerEl).setName("Style customization").setDesc(g('Please use the <a href="https://obsidian.md/plugins?id=obsidian-style-settings">Style Settings</a> plugin to customize the appearance of the Dynamic Outline.'))}};var $=require("obsidian");var _=class extends r{display(){new $.Setting(this.containerEl).setName("Reset search field on jump").setDesc("Erase the search field contents after clicking a heading.").addToggle(e=>{e.setValue(this.plugin.settings.resetSearchFieldOnHeadingClick).onChange(async t=>{this.plugin.settings.resetSearchFieldOnHeadingClick=t,await this.plugin.saveSettings()})})}};var P=require("obsidian");var M=class extends r{display(){let e,t=this.plugin.settings.toggleAutomatically;new P.Setting(this.containerEl).setName("Toggle automatically").setDesc(g("Show and hide automatically based on the number of headings in the file.")).addButton(n=>{e=n,n.setButtonText("Reload plugin"),n.setTooltip("Requires a plugin reload to take effect."),n.setDisabled(!0),n.setClass("dynamic-outline-reload"),n.setCta(),n.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(n=>{n.setValue(this.plugin.settings.toggleAutomatically).onChange(async s=>{this.plugin.settings.toggleAutomatically=s,await this.plugin.saveSettings(),e.setDisabled(s===t),i.setDisabled(!s)})});let i=new P.Setting(this.containerEl).setName("Minimum headings").setDesc(g("The minimum number of headings in the file to trigger the outline.")).addSlider(n=>{n.setLimits(1,10,1).setDynamicTooltip().setValue(this.plugin.settings.minimumHeadings).onChange(async s=>{this.plugin.settings.minimumHeadings=s,await this.plugin.saveSettings()})}).setDisabled(!this.plugin.settings.toggleAutomatically)}};var z=require("obsidian");var b=class extends r{display(){let e,t=this.plugin.settings.toggleOnHover;new z.Setting(this.containerEl).setName("Toggle on hover").setDesc(g("Show and hide when hovering over the button, pin on click.")).addButton(i=>{e=i,i.setButtonText("Reload plugin"),i.setTooltip("Requires a plugin reload to take effect."),i.setDisabled(!0),i.setClass("dynamic-outline-reload"),i.setCta(),i.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(i=>{i.setValue(this.plugin.settings.toggleOnHover).onChange(async n=>{this.plugin.settings.toggleOnHover=n,await this.plugin.saveSettings(),e.setDisabled(n===t)})})}};var j=require("obsidian");var T=class extends r{display(){let e,t=this.plugin.settings.windowLocation;new j.Setting(this.containerEl).setName("Window location").setDesc(g("Set the location both for window and button (right by default).")).addButton(i=>{e=i,i.setButtonText("Reload plugin"),i.setTooltip("Requires a plugin reload to take effect."),i.setDisabled(!0),i.setClass("dynamic-outline-reload"),i.setCta(),i.onClick(()=>{this.plugin.reloadPlugin()})}).addDropdown(i=>i.addOption("right","Right").addOption("left","Left").setValue(this.plugin.settings.windowLocation).onChange(async n=>{this.plugin.settings.windowLocation=n,await this.plugin.saveSettings(),e.setDisabled(n===t)}))}};var G={autofocusSearchOnOpen:!0,highlightCurrentHeading:!0,minimumHeadings:1,resetSearchFieldOnHeadingClick:!0,toggleAutomatically:!1,toggleOnHover:!1,windowLocation:"right"};function g(l){return(0,S.sanitizeHTMLToDom)(l)}var C=class extends S.PluginSettingTab{constructor(t,i){super(t,i);this.plugin=i}display(){let{containerEl:t}=this;t.empty(),new y(this.plugin,t).display(),new b(this.plugin,t).display(),new M(this.plugin,t).display(),new L(this.plugin,t).display(),new _(this.plugin,t).display(),new T(this.plugin,t).display(),new H(this.plugin,t).display()}};var p="dynamic-outline",O="dynamic-outline-button",A="list",V=class extends w.Plugin{constructor(){super(...arguments);this.debounceHandler=(0,w.debounce)(t=>{let i=t.target;if(!(i!=null&&i.classList.contains("dynamic-outline-content-container"))){let n=this.stateManager.getActiveMDView();n&&this.stateManager.getWindowInView(n).highlightCurrentHeading()}},0)}async onload(){await this.loadSettings(),this.addSettingTab(new C(this.app,this)),this.app.workspace.trigger("parse-style-settings"),this.stateManager=o.initialize(this),this.stateManager.createButtonsInOpenViews(),this.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.stateManager.createButtonsInOpenViews()})),this.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.stateManager.handleMetadataChanged()})),this.registerEvent(this.app.metadataCache.on("changed",()=>{this.stateManager.handleMetadataChanged()})),this.settings.toggleAutomatically&&this.registerEvent(this.app.workspace.on("file-open",()=>{this.stateManager.handleFileOpen()})),this.settings.highlightCurrentHeading&&(activeWindow.document.addEventListener("scroll",this.debounceHandler,!0),this.registerEvent(this.app.metadataCache.on("changed",()=>{let t=this.stateManager.getActiveMDView();t&&this.stateManager.getWindowInView(t).highlightCurrentHeading()}))),this.addCommand({id:"toggle-dynamic-outline",name:"Toggle for current file",checkCallback:t=>{let i=this.stateManager.getActiveMDView();return i?(t||this.stateManager.getButtonInView(i).handleClick(),!0):!1}})}onunload(){this.stateManager.removeAll(),activeWindow.document.removeEventListener("scroll",this.debounceHandler,!0)}async loadSettings(){this.settings=Object.assign({},G,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async reloadPlugin(){let t=this.app.plugins,i=this.app.setting;t.enabledPlugins.has(p)&&(await t.disablePlugin(p),await t.enablePlugin(p),await i.openTabById(p),new w.Notice("Dynamic Outline has been reloaded"))}};

/* nosourcemap */