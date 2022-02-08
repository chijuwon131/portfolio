

function mobile(){
    let navWidth = $('nav').width();
    $('nav').css({'left' : -navWidth-30});


    $('.navBtn').on('click',function(){
  
        $('nav').stop().animate({'left':0})
    }); //Nav open
    
    $('.close').on('click',function(){
        let navWidth2 = $('nav').width();
        $('nav').stop().animate({'left' : -navWidth2-30});
    }); //Nav close


}

function pc(){
    $('nav').css({left:0});

}

function common(){

/**************gallary*************/

$('.gallItems').on('click',function(e){

    e.preventDefault();

    let img = $(this).find('figure').html();
    let titTxt = $(this).find('h4').text();
    let conTxt = $(this).find('p').text();

    $('.view').stop().fadeIn();
    $('.viewPic').html(img);
    $('.view h4').text(titTxt);
    $('.view p').text(conTxt);
});

$('.viewX, .bgClose').on('click',function(){
    $('.view').fadeOut();
}); //view Close

$('.videoCard').click(function(){

    $('.show').stop().fadeIn();

    let vidSrc = $(this).children('.vidThumb').children('video').html();
    let vidTit = $(this).find('.vidTit').children('h4').text();
    let vidTxt = $(this).find('.vidTit').children('p').text();

    let inputTxt = `<video muted autoplay>${vidSrc}</video>`

    $('.videoBox').html(inputTxt);
    $('.videoBox').children('video').css({'width':'100%'});

    $('.videoTxt').children('h4').text(vidTit);
    $('.videoTxt').children('p').text(vidTxt);
    $('.videtTxt').css({'textAlign':'center'});

}); //vidCard 클릭하면 일어날 일!!!!

$('.showCloseWrap , .videoClose').click(function(){
    $('.videoBox').html('');
    $('.show').stop().fadeOut();
});//닫기


$('.vidCard2').click(function(){

    let key = $(this).find('.vidkey').text();

    let youtubeSrc = '<iframe width="1280" height="720" src="https://www.youtube.com/embed/'+key+'?list=RD13jhFFYCWVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


    $('.show2').fadeIn();
    $('.vidBox2').html(youtubeSrc);

    let tit2 = $(this).find('.vidTit2').children('h4').text();
    let txt2 = $(this).find('.vidTit2').children('p').text();
    
    $('.show2').find('.vidTxt2').children('h4').text(tit2);
    $('.show2').find('.vidTxt2').children('p').text(txt2);

});//vidCard2

$('.vidClose2,.vidWrapClose2').click(function(){
    $('.show2').fadeOut();
});

//vidkey css에서 안보이게 처리해주세요 display


$('.videoCard').on('mouseover',function(){

    let thisVid = $(this).find('video').get(0);
    thisVid.play();
}).on('mouseout',function(){
    let thisVid = $(this).find('video').get(0);
    thisVid.pause();
    thisVid.currentTime = 0
})

}//common


function responsive(){
    
let winWidth = $(window).width();
if(winWidth <= 760){
    mobile()
}else{
    pc()
}
}//responsive

responsive();
common();

$(window).on('resize',responsive);



