// build time:Tue May 25 2021 16:58:38 GMT+0800 (GMT+08:00)
const musicPlayer=new APlayer({container:document.getElementById("aplayer"),fixed:true,mini:true,autoplay:false,theme:"#b7daff",loop:"all",order:"list",preload:"auto",volume:.7,mutex:true,listFolded:true,listMaxHeight:"700px",lrcType:1,audio:[]});musicPlayer.lrc.hide();const url="https://www.fastmock.site/mock/f7011e69c41aec211287ae592f2b2029/music/list";if(fetch){fetch(url).then(function(result){return result.json()}).then(function(audio){musicPlayer.list.add(audio);if(localStorage.getItem("musicPlayer")){const audio=JSON.parse(localStorage.getItem("musicPlayer"));musicPlayer.list.audios.forEach(function(a,i){if(a.url===audio.url){musicPlayer.list.switch(i);setTimeout(function(){musicPlayer.seek(audio.currentTime);setTimeout(function(){musicPlayer.play()},1e3)},2e3)}})}})}window.addEventListener("beforeunload",function(){if(!musicPlayer.audio.paused){localStorage.setItem("musicPlayer",JSON.stringify({url:musicPlayer.audio.src,currentTime:musicPlayer.audio.currentTime}))}else{localStorage.setItem("musicPlayer","")}});
//rebuild by neat 