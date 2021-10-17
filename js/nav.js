$(".fa-bars").click(function(){
    console.log("Bar clicked");
    $("nav ul").css("display", "flex");
    $("nav #nav-div-2").css("display", "flex");
    $(".fa-bars").css("display", "none");
    $(".fa-times").css("display", "block");
});

$(".fa-times").click(function(){
    console.log("Times clicked");
    $("nav ul").css("display", "none");
    $("nav #nav-div-2").css("display", "none");
    $(".fa-bars").css("display", "block");
    $(".fa-times").css("display", "none");
});