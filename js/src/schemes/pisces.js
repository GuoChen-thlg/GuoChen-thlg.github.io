// build time:Sun Apr 11 2021 11:20:34 GMT+0800 (GMT+08:00)
$(document).ready(function(){var sidebarInner=$(".sidebar-inner");initAffix();resizeListener();function initAffix(){var headerOffset=getHeaderOffset(),footerOffset=getFooterOffset(),sidebarHeight=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight(),contentHeight=$("#content").height();if(headerOffset+sidebarHeight<contentHeight){sidebarInner.affix({offset:{top:headerOffset-CONFIG.sidebar.offset,bottom:footerOffset}})}setSidebarMarginTop(headerOffset).css({"margin-left":"initial"})}function resizeListener(){var mql=window.matchMedia("(min-width: 991px)");mql.addListener(function(e){if(e.matches){recalculateAffixPosition()}})}function getHeaderOffset(){return $(".header-inner").height()+CONFIG.sidebar.offset}function getFooterOffset(){var footerInner=$(".footer-inner"),footerMargin=footerInner.outerHeight(true)-footerInner.outerHeight(),footerOffset=footerInner.outerHeight(true)+footerMargin;return footerOffset}function setSidebarMarginTop(headerOffset){return $("#sidebar").css({"margin-top":headerOffset})}function recalculateAffixPosition(){$(window).off(".affix");sidebarInner.removeData("bs.affix").removeClass("affix affix-top affix-bottom");initAffix()}});
//rebuild by neat 