$(document).ready(function () {
  
  // 기본 레이아웃 설정
  // 메뉴 버튼 클릭시, nav영역과 section영역 모션 구현
  // section안의 box1, box2, box3 콘텐츠 레이아웃 잡기
  // box1, box2, box3안의 콘텐츠 모션 잡기


  // btnMenu 클릭 시 실행 될 모션
  $('a.btnMenu').click(function () {
    $(this).fadeOut();
    $('section').addClass('on');
    $('nav').addClass('on');
  });

  // nav안의 메뉴 영역 선택시 실행될 모션
  $('nav li').click(function () {
    $('a.btnMenu').fadeIn();
    $('section').removeClass('on');
    $('nav').removeClass('on');

    let i = $(this).index();
    $('section > div').removeClass('on');
    $('section > div').eq(i).addClass('on');
    console.log(i);
  });

  // 

});