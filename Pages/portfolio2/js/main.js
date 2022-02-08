$('.click1').on('click',function(){
    $('.vid1').fadeIn(500);
})

$('.click2').on('click',function(){
    $('.vid2').fadeIn(500);
})

$('.vid1').on('mouseover',function(){
    let vid = $(this).find('video').get(0);
    vid.play();
});

$('.vid2').on('mouseover',function(){
    let vid = $(this).find('video').get(0);
    vid.play();
});

$('.slide').slick({
    'slidesToShow' : 3,
    'slidesToScroll' : 1,
    'centerMode' : true,
    'arrows' : false,
    'variableWidth': true,
    'autoplay': true,
    'dots': true,
    'autoplaySpeed': 3000
});
