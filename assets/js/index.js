"use strict";$(document).ready(function(){var o=document.location.host.indexOf("localhost")>-1?"http://localhost/comercio-detallista/":"https://egade.tec.mx/sites/default/files/cd/";$("#main-header").load(o+"menu.html"),$("#header").load(o+"menu.html"),$("#footer").load(o+"footer.html"),$(".nosotros_tabs").tabs(),$(".item_tabs").tabs(),$(".nosotros_tabs a").on("click",function(){$("html, body").animate({scrollTop:$("#menu-tabs").offset().top},200)})});