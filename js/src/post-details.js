// build time:Mon May 24 2021 15:55:57 GMT+0800 (GMT+08:00)
$(document).ready(function(){initScrollSpy();function initScrollSpy(){var tocSelector=".post-toc";var $tocElement=$(tocSelector);var activeCurrentSelector=".active-current";$tocElement.on("activate.bs.scrollspy",function(){var $currentActiveElement=$(tocSelector+" .active").last();removeCurrentActiveClass();$currentActiveElement.addClass("active-current");$tocElement.scrollTop($currentActiveElement.offset().top-$tocElement.offset().top+$tocElement.scrollTop()-$tocElement.height()/2)}).on("clear.bs.scrollspy",removeCurrentActiveClass);$("body").scrollspy({target:tocSelector});function removeCurrentActiveClass(){$(tocSelector+" "+activeCurrentSelector).removeClass(activeCurrentSelector.substring(1))}}});$(document).ready(function(){var html=$("html");var TAB_ANIMATE_DURATION=200;var hasVelocity=$.isFunction(html.velocity);$(".sidebar-nav li").on("click",function(){var item=$(this);var activeTabClassName="sidebar-nav-active";var activePanelClassName="sidebar-panel-active";if(item.hasClass(activeTabClassName)){return}var currentTarget=$("."+activePanelClassName);var target=$("."+item.data("target"));hasVelocity?currentTarget.velocity("transition.slideUpOut",TAB_ANIMATE_DURATION,function(){target.velocity("stop").velocity("transition.slideDownIn",TAB_ANIMATE_DURATION).addClass(activePanelClassName)}):currentTarget.animate({opacity:0},TAB_ANIMATE_DURATION,function(){currentTarget.hide();target.stop().css({opacity:0,display:"block"}).animate({opacity:1},TAB_ANIMATE_DURATION,function(){currentTarget.removeClass(activePanelClassName);target.addClass(activePanelClassName)})});item.siblings().removeClass(activeTabClassName);item.addClass(activeTabClassName)});$(".post-toc a").on("click",function(e){e.preventDefault();var targetSelector=NexT.utils.escapeSelector(this.getAttribute("href"));var offset=$(targetSelector).offset().top;hasVelocity?html.velocity("stop").velocity("scroll",{offset:offset+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:offset},500)});var $tocContent=$(".post-toc-content");var isSidebarCouldDisplay=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var hasTOC=$tocContent.length>0&&$tocContent.html().trim().length>0;if(isSidebarCouldDisplay&&hasTOC){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 