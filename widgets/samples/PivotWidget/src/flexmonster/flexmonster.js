/*	Based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	under the MIT License:<http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+encodeURI(O.location).toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var flexmonster = new FlexMonster();
function FlexMonster() {
	this.validateCall=function(){
		flexmonster.active=true;
		try{
			if (!this.exists) if (this.componentObject.PercentLoaded()>0)this.exists=true;
			if (!this.trusted) if (this.componentObject.isTrusted()){this.trusted=true;flexmonsterSecurityDiv.parentNode.removeChild(flexmonsterSecurityDiv);}
		}catch(e){}
		if (!this.exists){alert("Can't find Flexmonster Pivot Table component. Please check whether the path is correct.");return false;}
		if (!this.trusted)alert("Communication between JavaScript and Flash was blocked by your browser. PLEASE TURN ON TRUSTED MODE.");return this.trusted;
	}
this.openFieldsList=function(callbackHandler){if(this.validateCall())this.componentObject.openFieldsList(callbackHandler);};
this.closeFieldsList=function(callbackHandler){if(this.validateCall())this.componentObject.closeFieldsList(callbackHandler);};
this.fullScreen=function(callbackHandler){if(this.validateCall())this.componentObject.fullScreen(callbackHandler);};
this.setStyle=function(url){if(this.validateCall())this.componentObject.setStyle(url);};
this.print=function(){if(this.validateCall())this.componentObject.print();};
this.percentZoom=function(num){if(this.validateCall())this.componentObject.percentZoom(num);};
this.zoomTo=function(num){if(this.validateCall())this.componentObject.zoomTo(num);};
this.saveReport=function(url,title,callbackHandler,destinationType,str){if(this.validateCall())this.componentObject.saveReport(url,title,callbackHandler,destinationType,str);};
this.save=function(filename,destination,callbackHandler,url){if(this.validateCall())return this.componentObject.save(filename,destination,callbackHandler,url);};
this.load=function(url){if(this.validateCall())this.componentObject.load(url);};
this.getReport=function(){if(this.validateCall())return this.componentObject.getReport();};
this.setReport=function(object){if(this.validateCall())this.componentObject.setReport(object);};
this.exportTo=function(type,params){if(this.validateCall())this.componentObject.exportTo(type,params);};
this.setRowHeight=function(idx,height){if(this.validateCall())this.componentObject.setRowHeight(idx,height);};
this.setColumnWidth=function(idx,width){if(this.validateCall())this.componentObject.setColumnWidth(idx,width);};
this.getRowHeight=function(idx){if(this.validateCall())return this.componentObject.getRowHeight(idx);};
this.getColumnWidth=function(idx){if(this.validateCall())return this.componentObject.getColumnWidth(idx);};
this.showCharts=function(type){if(this.validateCall())this.componentObject.showCharts(type);};
this.showGrid=function(){if(this.validateCall())this.componentObject.showGrid();};
this.showGridAndChart=function(type){if(this.validateCall())this.componentObject.showGridAndChart(type);};
this.expandAllData=function(){if(this.validateCall())this.componentObject.expandAllData();};
this.collapseAllData=function(){if(this.validateCall())this.componentObject.collapseAllData();};
this.connectTo=function(params){if(this.validateCall())this.componentObject.connectTo(params);};
this.getXMLAProviderName=function(proxyURL,callbackHandler){if(this.validateCall())return this.componentObject.getXMLAProviderName(proxyURL,callbackHandler);};
this.getXMLADataSources=function(proxyURL,callbackHandler){if(this.validateCall())this.componentObject.getXMLADataSources(proxyURL,callbackHandler);};
this.getXMLACatalogs=function(proxyURL,dataSourceInfo,callbackHandler){if(this.validateCall())this.componentObject.getXMLACatalogs(proxyURL,dataSourceInfo,callbackHandler);};
this.getXMLACubes=function(proxyURL,dataSourceInfo,catalog,callbackHandler){if(this.validateCall())this.componentObject.getXMLACubes(proxyURL,dataSourceInfo,catalog,callbackHandler);};
this.getCell=function(rowIdx,colIdx){if(this.validateCall())return this.componentObject.getCell(rowIdx,colIdx);};
this.getSelectedCell=function(){if(this.validateCall())return this.componentObject.getSelectedCell();};
this.removeSelection=function(){if(this.validateCall())return this.componentObject.removeSelection();};
this.gridRowCount=function(){if(this.validateCall())return this.componentObject.gridRowCount();};
this.gridColumnCount=function(){if(this.validateCall())return this.componentObject.gridColumnCount();};
this.drawCell=function(value){if(this.validateCall())return this.componentObject.drawCell(value);};
this.addMeasure=function(object){if(this.validateCall())return this.componentObject.addMeasure(object);};
this.removeMeasure=function(measureName){if(this.validateCall())return this.componentObject.removeMeasure(measureName);};
this.getAllMeasures=function(){if(this.validateCall())return this.componentObject.getAllMeasures();};
this.getAllHierarchies=function(){if(this.validateCall())return this.componentObject.getAllHierarchies();};
this.getConditions=function(){if(this.validateCall())return this.componentObject.getConditions();};
this.addCondition=function(object){if(this.validateCall())return this.componentObject.addCondition(object);};
this.removeCondition=function(id){if(this.validateCall())return this.componentObject.removeCondition(id);};
this.removeAllConditions=function(){if(this.validateCall())this.componentObject.removeAllConditions();};
this.getMeasures=function(){if(this.validateCall())return this.componentObject.getMeasures();};
this.getPages=function(){if(this.validateCall())return this.componentObject.getPages();};
this.getColumns=function(){if(this.validateCall())return this.componentObject.getColumns();};
this.getRows=function(){if(this.validateCall())return this.componentObject.getRows();};
this.getMembers=function(hierarchyName,callbackHandler){if(this.validateCall())return this.componentObject.getMembers(hierarchyName,callbackHandler);};
this.getFilter=function(hierarchyName){if(this.validateCall())return this.componentObject.getFilter(hierarchyName);};
this.setFilter=function(hierarchyName,items){if(this.validateCall())return this.componentObject.setFilter(hierarchyName,items);};
this.clearFilter=function(hierarchyName){if(this.validateCall())return this.componentObject.clearFilter(hierarchyName);};
this.getSort=function(hierarchyName){if(this.validateCall())return this.componentObject.getSort(hierarchyName);};
this.setSort=function(hierarchyName,sortType){if(this.validateCall())return this.componentObject.setSort(hierarchyName,sortType);};
this.setTopX=function(hierarchyName,num,measureName){if(this.validateCall())return this.componentObject.setTopX(hierarchyName,num,measureName);};
this.setBottomX=function(hierarchyName,num,measureName){if(this.validateCall())return this.componentObject.setBottomX(hierarchyName,num,measureName);};
this.sortValues=function(axisName,type,tuple,measureName){if(this.validateCall())return this.componentObject.sortValues(axisName,type,tuple,measureName);};
this.runQuery=function(rows,columns,pages,measures){if(this.validateCall())this.componentObject.runQuery(rows,columns,pages,measures);};
this.setFormat=function(format,measureName){if(this.validateCall())this.componentObject.setFormat(format,measureName);};
this.getFormat=function(measureName){if(this.validateCall())return this.componentObject.getFormat(measureName);};
this.getOptions=function(){if(this.validateCall())return this.componentObject.getOptions();};
this.setOptions=function(params){if(this.validateCall())return this.componentObject.setOptions(params);};
this.getLocalizedLabels=function(){if(this.validateCall())return this.componentObject.getLocalizedLabels();};
this.setLocalizedLabels=function(object){if(this.validateCall())this.componentObject.setLocalizedLabels(object);};
this.setHandler=function(eventName,functionName){if(this.validateCall())this.componentObject.setHandler(eventName,functionName);};
this.addUrlToMember=function(hierarchyName,memberName,url){if(this.validateCall())this.componentObject.addUrlToMember(hierarchyName,memberName,url);};
this.handle=function(delta){if(this.componentObject) {if(this.componentObject.mousewheelHandler){this.componentObject.mousewheelHandler(delta);}}};
this.wheel=function(event,obj){var delta=0;if(!event){event = window.event;}if(event.wheelDelta){delta=event.wheelDelta/120;}else if(event.detail){delta=-event.detail/3;}if(delta)obj.handle(delta);if (event.preventDefault){event.preventDefault();}event.returnValue=false;};
}
flexmonster.instances=0;
flexmonster.flashVarsArray=[];
flexmonster.getFlashVars=function(id){return flexmonster.flashVarsArray[id]};
flexmonster.embedPivotComponent=function(path,container,w,h,flashVars){
	if(!document.getElementById){return;}
	var attributes={id:"__flexmonsterPivotComponent__"+flexmonster.instances,name:"__flexmonsterPivotComponent__"+flexmonster.instances};
	var params={allowScriptAccess:"always",menu:"false",allowFullScreen:"true", wmode:"opaque"};
	if(flashVars)flashVars.swfFilePath=path; 
	else flashVars={swfFilePath:path};
	flashVars.id=attributes.id;
	flexmonster.flashVarsArray[attributes.id]=flashVars;
	var obj = new FlexMonster();
	obj.id=attributes.id;
	obj.containerId=container;
	obj.instanceNum=flexmonster.instances++;
	if (flexmonster.instances==1){flexmonster.id=attributes.id;flexmonster.containerId=container;}
	swfobject.embedSWF(path+"PivotTable.swf?"+(new Date()).valueOf(),container,w,h,"10.1.0",path+"expressInstall.swf",flashVars,params,attributes,function(e){
		if(e.success){
			if(obj.instanceNum==0)flexmonster.componentObject=e.ref;
			obj.componentObject=e.ref;
			obj.counter=0;
			if (navigator.userAgent.indexOf("Mobile") > -1) {
				obj.exists=true;
				obj.trusted=true;
				if(obj.instanceNum==0){
				flexmonster.trusted=true;
				flexmonster.exists=true;
				}
				flexmonster.initScrollListening(obj);
			} else {
				setTimeout(function(){flexmonster.checkIfExists(obj)}, 500);
			}
		}
	});
	return obj;
}
flexmonster.checkIfExists=function(obj){
	try {
		if(obj.componentObject.PercentLoaded()>0){
			obj.exists=true;
			if(obj.instanceNum==0)flexmonster.exists=true;
			flexmonster.checkIfLoaded(obj);
		}
	} catch (e) {}
	if(!obj.exists){
		if (obj.counter>100||location.host==""||(location.host=="localhost"&&window.opera&&obj.counter>1)){
			if (!window.opera) alert("Can't find Flexmonster Pivot Table component. Please check whether the path is correct.");
		} else {
			obj.counter++;
			setTimeout(function(){flexmonster.checkIfExists(obj)}, 50);
		}
	}
}
flexmonster.checkIfLoaded=function(obj) {
	if(obj.componentObject.PercentLoaded()<100) {
		setTimeout(function(){flexmonster.checkIfLoaded(obj)},100);
	} else {
		setTimeout(function(){flexmonster.checkJSSecurity(obj)},500);
	}
}
var flexmonsterSecurityDiv;
flexmonster.checkJSSecurity=function(obj) {
	try {
		if(obj.componentObject.isTrusted()){
			obj.trusted=true;
			if(obj.instanceNum==0)flexmonster.trusted=true;
			flexmonster.initScrollListening(obj);
		}
	} catch (e) {}
	if(!obj.trusted) {
		flexmonsterSecurityDiv = document.createElement('div');
		flexmonsterSecurityDiv.innerHTML = '<p style="line-height: 15px;"><font color="#DD0000"><b>Warning!</b></font></br>To enable communication between JavaScript and Flash component you should setup <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04a.html" target="_blank">Flash Player Security Settings</a>. Please visit website to find detailed step by step <a href="http://www.flexmonster.com/flash/help/index.html?file=Contents/security.html" target="_blank">instructions</a>.</p>';
		flexmonsterSecurityDiv.style.display="";
		flexmonsterSecurityDiv.style.border="solid 2px #D00"; 
		flexmonsterSecurityDiv.style.padding="10px"; 
		flexmonsterSecurityDiv.style.margin="3px"; 
		flexmonsterSecurityDiv.style["border-radius"]="5px";
		flexmonsterSecurityDiv.style.background="#F9F3D6"; 
		try {flexmonster.componentObject.parentNode.insertBefore(flexmonsterSecurityDiv, obj.componentObject);} catch (e) {}
		flexmonster.checkActivity(obj);
	}
}
flexmonster.active=false;
flexmonster.checkActivity=function(obj){
	try {
		if (!obj.trusted) if (obj.componentObject.isTrusted()){obj.trusted=true;flexmonsterSecurityDiv.parentNode.removeChild(flexmonsterSecurityDiv);}
	} catch (e) {}	
	if(!flexmonster.active&&!obj.trusted)setTimeout(function(){flexmonster.checkActivity(obj)},20);
}
flexmonster.initScrollListening=function(obj) {
	if(navigator.appName.indexOf("Microsoft")==-1) {
		if(obj.componentObject.addEventListener) {
			/** DOMMouseScroll is for mozilla. */
			obj.componentObject.addEventListener('DOMMouseScroll',function(event){obj.wheel(event,obj)},false);
			/** Chrome */
			obj.componentObject.addEventListener('mousewheel', function(event){obj.wheel(event,obj)}, false);
		} else if(window.opera) {/** Opera*/
			obj.componentObject.onmousewheel = function(event){obj.wheel(event,obj)};
		}
	} else {
		/** IE */obj.componentObject.onmousewheel = function(event){obj.wheel(event,obj)};
	}
};