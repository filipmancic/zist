var distanca;

$(document).scroll(function () {
    var $nav = $("#myNavbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if ($(this).scrollTop() > (distanca - window.innerWidth))
        $nav.toggleClass('scrolled');
});

var scrollcount = 0;


var finished0 = false;
var finished1 = false;
var finished2 = false;
var navcolor = false;
var menuopened = false;

var currentPage = 0; /* 0 ili 1 vrednost uvek - 0 je bela, 1 je crna strana*/

var midh;
var menu;

const interval = setInterval(function () {
    $("#stc").animate({
        opacity: 1
    }, 500);
    $("#stc").delay(2000).animate({
        opacity: 0
    }, 500);
}, 1200);
var yvalue;

function fja(event) {
    yvalue = event.deltaY;
}

//RESPONSIVE

menu = document.querySelector("#menu");

function closeMenu(){
    if (menuopened == true) {
        document.getElementById('m-item').style.display = "list-item";

        document.querySelector('.navbar-nav').style.flexDirection = "row";
        document.getElementById('i5').style.display = "none";
        document.getElementById('i6').style.display = "none";

        document.querySelector('.i4').style.display = "none";
        document.querySelector('.i3').style.display = "none";
        $("#myNavbar").animate({
            backgroundColor: "rgba(0,0,0,0.4)",

        }, 600);
        $("#m-item").animate({
            width: "50%",
            opacity: 1,
            marginRight: "25vw"
        });
        $("#svglogonoanim").animate({
            width: "50%",
            opacity: 1,
        }, 600, function () {


            menuopened = false;
            $(".nav-item").animate({
                opacity: 0
            }, 600);



        });

        $(".logo").animate({
            width: "50%",
            opacity: 1,
            marginLeft: "30vw"
        }, 600);
    }
}

function touch2(loc) {
        document.querySelector(".about-mobile").removeAttribute("style");
        document.querySelector(".track").style.zIndex = "1"
        document.querySelector(".track2").style.zIndex = "1"
        
        currentPage = 1;
        document.querySelector('.about-mobile').style.display = "flex";
    
        $(".about-mobile").animate({
            width: "100vw"
        }, 600);
        $(".about-mobile").delay(100).animate({
            top: 0,
            height: "100vh"
        }, 200, function () {
            $(".st32").css({ "stroke": "#FFFFFF" });
    
            document.querySelector(".about-mobile").style.height = "unset";
            $(".imglogo").attr("src", "img/logow.png");
    
            $(".webdev").delay(300).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".webdev").style.transform = "translateX(0)";
            }, 300);
            $(".webdesign").delay(600).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".webdesign").style.transform = "translateX(0)";
            }, 600);
            $(".android").delay(900).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".android").style.transform = "translateX(0)";
            }, 300);
            $(".webpen").delay(1200).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".webpen").style.transform = "translateX(0)";
            }, 300);
            $(".projects-mob").delay(1500).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".projects-mob").style.transform = "translateX(0)";
            }, 300);
    
            $(".whiteline").animate({
                color: "#FFFFFF",
            }, 500);
            $(".nav-a").animate({
                color: "rgb(255,255,255)"
    
            }, 600);
            $('.nav-a').toggleClass('wnav');
    
            document.querySelector(".track").style.marginTop = "-28px";
            document.querySelector(".track2").style.bottom = "-28px";
            
            
            $('html,body').animate({
                scrollTop: $(loc).offset().top},
                'slow');
        });
    
};
function touch3() {
        document.querySelector(".about-mobile").removeAttribute("style");
        document.querySelector(".track").style.zIndex = "1"
        document.querySelector(".track2").style.zIndex = "1"
        
        currentPage = 1;
        document.querySelector('.about-mobile').style.display = "flex";
    
        $(".about-mobile").animate({
            width: "100vw"
        }, 600);
        $(".about-mobile").delay(100).animate({
            top: 0,
            height: "100vh"
        }, 200, function () {
            $(".st32").css({ "stroke": "#FFFFFF" });
    
            document.querySelector(".about-mobile").style.height = "unset";
            $(".imglogo").attr("src", "img/logow.png");
    
            $(".webdev").delay(300).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".webdev").style.transform = "translateX(0)";
            }, 300);
            $(".webdesign").delay(600).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".webdesign").style.transform = "translateX(0)";
            }, 600);
            $(".android").delay(900).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".android").style.transform = "translateX(0)";
            }, 300);
            $(".webpen").delay(1200).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".webpen").style.transform = "translateX(0)";
            }, 300);
            $(".projects-mob").delay(1500).animate({
                opacity: 1,
            }, 300);
            setTimeout(() => {
                document.querySelector(".projects-mob").style.transform = "translateX(0)";
            }, 300);
    
            $(".whiteline").animate({
                color: "#FFFFFF",
            }, 500);
            $(".nav-a").animate({
                color: "rgb(255,255,255)"
    
            }, 600);
            $('.nav-a').toggleClass('wnav');
    
            document.querySelector(".track").style.marginTop = "-28px";
            document.querySelector(".track2").style.bottom = "-28px";
            
        });

};


if (window.outerWidth < 768) {

    document.getElementById("menu").addEventListener("touchstart", closeMenu);
    document.getElementById("home").onclick = () => {
        if(currentPage==0){
            closeMenu();
        }else{
            document.querySelector(".track").style.zIndex = "3"
            document.querySelector(".track").style.position = "fixed"
            document.querySelector(".track2").style.position = "fixed"
            document.querySelector(".track2").style.zIndex = "3"
            document.querySelector("#mid-track").style.opacity = "0"
            document.querySelector("#mid-track").style.height = "0"
            $(".webdev, .android, .webpen, .webdesign, .projects-mob, .contacts-mob").css("opacity", "1")
            $(".webdev, .android, .webpen, .webdesign, .projects-mob, .contacts-mob").animate({
                opacity: 0
            }, 600, function(){            
                document.querySelector(".about-mobile").style.height = "100vh"
                $(".about-mobile").animate({
                    top: "48vh",
                    height: "0"
                }, 800)
            })
            closeMenu();
            $(".track").delay(600).animate({
                marginTop: "48vh",
            }, 800)
            $(".track2").delay(600).animate({
                bottom: "48vh",
            }, 800, function(){
                $(".track").animate({
                    marginTop: "8.8vh",
                }, 800)
                $(".track2").animate({
                    bottom: "8.8vh",
                }, 800, function(){

                    document.querySelector("#mid-track").style.height = "71vh";
                    $("#mid-track").animate({
                        opacity: "1",
                        marginTop: "8.8vh"
                    }, 500)
                   /*  */
                    currentPage=0;
                    document.querySelector(".about-mobile").removeAttribute("style");
                    //document.getElementById("mid-track").addEventListener("touchstart", touch2('.about-mobile'), { once: true });
                })
            })
        }
    }
    document.getElementById("services").onclick = () => {
        if(currentPage==0){
            touch2(".about-mobile");
            closeMenu();
        }else{
            $('html,body').animate({
                scrollTop: $(".about-mobile").offset().top},
                'slow');
                closeMenu();
        }
    }
    document.getElementById("aproj").onclick = () => {
        if(currentPage==0){
            touch2(".projects-mob");
                closeMenu();
        }else{
            $('html,body').animate({
                scrollTop: $(".projects-mob").offset().top},
                'slow');
                closeMenu();
        }
    }
    document.getElementById("contactus").onclick = () => {
        if(currentPage==0){
            touch2(".contact-mob");
            closeMenu();
        }else{
            $('html,body').animate({
                scrollTop: $(".contact-mob").offset().top},
                'slow');
                closeMenu();
        }
    }

    let hori = document.querySelector(".horizontal");
    document.getElementById('particles-js').remove();
    document.querySelector('.about').remove();
    document.addEventListener("touchstart", touch, { once: true });

    function touch() {

        /*INICIJALNI SCROLL POSLE ANIMACIJE*/

        if (scrollcount == 0) {
            clearInterval(interval);

            let navHeight = document.querySelector('#myNavbar');
            let nheight = navHeight.offsetHeight;

            let navHeight1 = document.querySelector('#fullnav');
            let nheight1 = navHeight1.offsetHeight;

            $(".loader-hdr").animate({
                letterSpacing: '-0.43em',
                color: "rgb( 0,0,0)",
                fontsize: "8rem",
                marginRight: "0.34em",
                marginBottom: "0px"
            }, 1500);
            $(".loader-sub").animate({
                letterSpacing: '0.5em',
                opacity: 0
            }, 200);
            $(".loader1").animate({
                height: nheight1,
                textalign: "center",
                marginTop: "0.2vh",
                marginBottom: "0px"
            }, 1500);
            $(".loader").animate({
                backgroundColor: "rgba( 255,255,255, 0)",
                textalign: "center"
            }, 1500);
            $(".logo").animate({
                opacity: 0
            }, 1400, function () {



                $(".loader-hdr").animate({
                    opacity: 0
                }, 100);
                $(".logo").animate({
                    opacity: 1
                }, 100);
                $(".track, .track2").delay(300).animate({
                    opacity: 1
                }, 500);
                $("#hdr1").delay(600).animate({
                    opacity: 1
                }, 800);
                $("#hdr3").delay(900).animate({
                    opacity: 1
                }, 800, function () {

                    var kriva = document.querySelector(".st3");
                    kriva.style.animation = "dash 0.5s ease-out forwards";

                    document.getElementById('srednjaver').style.animation = 'ysmanjivanje 0.5s ease-out';
                    document.getElementById('srednjaver').style.animationFillMode = "forwards";
                    document.getElementById('srednjaug').style.animation = 'rotacija 0.5s ease-out, 0.5s suzi 0.6s ease-out';
                    document.getElementById('srednjaug').style.animationFillMode = "forwards";
                    document.getElementById('gornjacrt').style.animation = '0.8s levo 0.6s ease-out';
                    document.getElementById('gornjacrt').style.animationFillMode = "forwards";
                    document.getElementById('donjacrt').style.animation = '0.8s desno 0.6s ease-out';
                    document.getElementById('donjacrt').style.animationFillMode = "forwards";

                    $(".about-mobile").clearQueue();
                    $(".about-mobile").stop();


                    $("#swiperight").delay(700).animate({
                        opacity: 1
                    }, 800, function () {
                        document.getElementById('m-item').style.display = "list-item";
                        $("#m-item").animate({
                            opacity: 1,
                            width: "50%",
                            marginRight: "25vw",
                            marginLeft: "15px"
                        }, 400);
                        $(".logo").animate({
                            width: "50%",
                            marginLeft: "40vw"
                        }, 400);
                    });
                    document.querySelector('.loader').remove();
                    scrollcount++;    

                });
            })
            
            document.getElementById("stc").remove();
        }
    };

    //PREBACIVANJE NA ABOUT
    document.getElementById("mid-track").addEventListener("touchstart", touch3);
    

    /*MENI*/
    $(function () {
        $('#menu').click(function () {
            if (menuopened == false) {
                $("#myNavbar").animate({
                    backgroundColor: "rgba(0,0,0,0.6)"
                }, 600);
                $("#m-item").animate({
                    width: "0%",
                    opacity: 0,
                    marginRight: 0,
                });
                $("#svglogonoanim").animate({
                    width: "0%",
                    opacity: 0,
                    marginRight: 0
                }, 600, function () {
                    document.getElementById('m-item').style.display = "none";

                    document.querySelector('.navbar-nav').style.flexDirection = "column";
                    document.getElementById('i5').style.display = "list-item";
                    document.getElementById('i6').style.display = "list-item";

                    document.querySelector('.i4').style.display = "list-item";
                    document.querySelector('.i3').style.display = "list-item";

                    menuopened = true;
                    $(".nav-item").animate({
                        opacity: 1

                    }, 600);
                });
                $(".logo").animate({
                    width: "100%",
                    opacity: 1,
                    marginLeft: 0
                }, 600);
            }
        });
    });

    var about = document.querySelector(".about-mobile");
    $(function () {
        $('.about-mobile').click(function () {
            closeMenu();
        });
    });


}
else {
    ////////////////////////////////////////////////////////////////////////////////// VERZIJA ZA MONITOR

    let hori = document.querySelector(".horizontal");
    let horiWidth = hori.offsetWidth;
    let hdrRect = document.getElementById('hdr1').getBoundingClientRect();
    let hdr2Rect = document.getElementById('hor').getBoundingClientRect().top + window.scrollY;
    let horiRect = document.querySelector(".horizontal").getBoundingClientRect();
    let particles = document.getElementById('particles-js');
    let trackHeight = document.querySelector('.track');
    let tHeight = trackHeight.offsetHeight;
    var horiBottom = hori.getBoundingClientRect().bottom;
    //currentPage = 1;
    var prosao = 0;
    prosao += 1;

    function scrollTo2nd(){
            $("#mid-track").animate({
                height: "0"
            }, 500);
            $("#particles-js").animate({
                height: "0"
            }, 500);
            $("#asc").animate({
                opacity: "0"
            }, 350);
            $(".track").animate({
                marginTop: "25vw",
                marginBottom: tHeight * (-1),
                zIndex: 3
            }, 500, function () {
                $(".track").animate({
                    marginTop: tHeight * (-1),
                    marginBottom: "0",
                    zIndex: 3
                }, 1000);

                $('.nav-a').toggleClass('wnav');


                document.querySelector('.about').style.opacity = '1';
                document.getElementById('hdr1').style.marginTop = hdrRect.top + "px";
                particles.style.backgroundColor = "#222222";
                document.getElementById("contact").style.display = "flex";
                document.getElementById("asc").style.display = "none";

                document.querySelector(".horizontal").style.position = 'fixed';
                let hori = document.querySelector(".horizontal");
                let horiWidth = hori.offsetWidth;
                let horiLeft = hori.getBoundingClientRect().left;
                document.querySelector(".horizontal").style.position = 'unset';

                $("#mid-track, #particles-js").animate({
                    height: window.innerHeight,
                    zIndex: 0
                }, 1000, function () {
                    document.querySelector('.track2').style.display = "none";

                    horiBottom = hori.getBoundingClientRect().bottom;

                    distanca = horiBottom + horiWidth + horiLeft - window.innerWidth * 1.05 /*- window.innerHeight*/;
                    sirina = horiWidth + horiLeft;

                    document.getElementById("mid-track").style.height = distanca + "px";
                    document.getElementById("contact").style.top = (horiBottom + horiWidth + horiLeft - window.innerWidth) + "px";
                    document.getElementById("contact").style.display = "flex";

                    //VISINA KOJA TREBA DA SE IZRACUNA
                    /*document.getElementById("mid-track").style.height = (horiWidth + 7500) + "px";*/
                });


                $(".nav-a").delay(500).animate({
                    color: "rgb( 255,255,255)"
                }, 100, function () {
                    $(".imglogo").attr("src", "img/logow.png");
                    $(".st3").css({ "stroke": "#FFFFFF" });
                    $(".whiteline").animate({
                        color: "#FFFFFF",
                    }, 100);
                });
                $("#hdr1").animate({
                    color: "rgb( 255,255,255)",
                    marginLeft: "12vw"
                }, 1000);

                $("#hdr3").animate({
                    color: "rgb( 255,255,255)",
                    marginLeft: "14vw"
                }, 1100);
                document.body.style.overflowY = "scroll";


                let i = 0;
                let current = 0;
                let distHori;
                window.onscroll = () => {

                    let vr = (document.querySelector(".horizontal").getBoundingClientRect().top + document.querySelector(".horizontal").getBoundingClientRect().bottom) / 2;
                    if (vr <= (window.innerHeight / 2)) {

                        distHori = document.querySelector(".horizontal").getBoundingClientRect().top;
                        if (i == 0) {
                            current = document.documentElement.scrollTop;
                            i++
                        };

                        document.querySelector('.horizontal').style.position = "fixed";
                        document.querySelector('.horizontal').style.top = window.innerHeight / 2 - document.querySelector('.horizontal').offsetHeight / 2 - 2 + "px";
                        document.querySelector('.horizontal').style.transform = "translateX(-" + (document.documentElement.scrollTop - current) + "px)";

                        if (document.documentElement.scrollTop <= current) {
                            document.querySelector('.horizontal').style.position = "unset";
                        }
                    }
                }
            }
            );
            currentPage=1;
            finished0 = false;
            finished1 = true;
            // return;
    }
    //MENI
    document.getElementById("home1").addEventListener("click", () => {
        if(currentPage = 1){
            document.querySelector('.track2').style.display = "flex";
            document.getElementById("mid-track").style.height = window.innerHeight + "px";
            $('.nav-a').toggleClass('wnav');
            $("#asc").animate({
                opacity: "0"
            }, 200);
            $("#mid-track, #particles-js").animate({
                height: "0",
            }, 650);
            $(".nav-a").delay(100).animate({
                color: "rgb(  0,0,0)"
            }, 100, function () {
                $(".imglogo").attr("src", "img/logo.png");
                $(".st3").css({ "stroke": "#000000" });
                $(".whiteline").animate({
                    color: "#000000",
                }, 100);
            });

            $(".track").animate({
                marginTop: tHeight * 10,
                marginBottom: tHeight * (-1),
                zIndex: 3
            }, 650, function () {


                $(".track").animate({
                    marginTop: "18.6vh",
                    marginBottom: "0",
                    zIndex: 3
                }, 1000)

                document.querySelector('.about').style.opacity = '0';
                document.getElementById("asc").style.display = "unset";
                document.getElementById("asc").style.top = "unset";
                document.querySelector('.acc').style.alignContent = "center";
                document.getElementById('hdr1').style.marginTop = "0px";
                document.getElementById('hdr1').style.transform = "translateX(0px)";
                document.getElementById('hdr3').style.transform = "translateX(0px)";
                document.getElementById('asc').style.alignSelf = "center";
                particles.style.backgroundColor = "#ededed";

                $("#mid-track").animate({
                    height: midh,
                    zIndex: 0
                }, 1000);
                $("#particles-js").animate({
                    height: midh,
                }, 1000);
                $("#asc").animate({
                    opacity: "1"
                }, 200);
                $("#hdr1").animate({
                    color: "rgb( 0,0,0)",
                    letterSpacing: "3px",
                    fontSize: "5.5rem",
                    marginLeft: "40px"
                }, 1000);
                $("#hdr3").animate({
                    color: "rgb( 0,0,0)",
                    fontSize: "1.8rem",
                    marginLeft: "40px"
                }, 1100);

            });
            document.body.style.overflowY = "hidden";
            finished1 = false;
            finished0 = true;
            currentPage = 0;
            return;
        }       
    })
    document.getElementById("services1").addEventListener("click", () => {
        
        if(currentPage==0){
            scrollTo2nd();
        }
    })
    document.getElementById("aproj").addEventListener("click", () => {
        if(currentPage == 0){
            scrollTo2nd();
            setTimeout(function(){
                window.scrollTo(0,(horiBottom-window.innerHeight))
            },1800)
        }       
        else window.scrollTo(0,(horiBottom-window.innerHeight));
    })
    document.getElementById("contactus").addEventListener("click", () => {
        if(currentPage == 0){
            scrollTo2nd();
            setTimeout(function(){              
                window.scrollTo(0,(horiBottom-window.innerHeight));
                document.querySelector(".horizontal").style.transform = "translateX(-" + document.querySelector(".horizontal").offsetWidth - window.innerWidth + ")"
            },1800)
        }       
        else window.scrollTo(0,(horiBottom-window.innerHeight));
    })

    window.addEventListener('wheel', () => {

        clearInterval(interval);
        document.getElementById('stc').style.display = 'none';
        scrollcount++;

        /*INICIJALNI SCROLL POSLE ANIMACIJE*/

        if (scrollcount == 1) {
            clearInterval(interval);

            let navHeight = document.querySelector('#myNavbar');
            let nheight = navHeight.offsetHeight;
            nheight += nheight / 2.6;


            $(document).ready(function () {
                $(".loader-hdr").animate({
                    letterSpacing: '-0.43em',
                    color: "rgb( 0,0,0)",
                    fontsize: "8rem",
                    marginRight: "0.34em"
                }, 1500);
                $(".loader-sub").animate({
                    letterSpacing: '0.5em',
                    opacity: 0
                }, 200);
                $(".loader1").animate({
                    height: nheight,
                    textalign: "center"
                }, 1500);
                $(".loader").animate({
                    backgroundColor: "rgba( 255,255,255, 0)",
                    textalign: "center"
                }, 1500);
                $(".logo").animate({
                    opacity: 0
                }, 1400);
            });

            var midhe = document.querySelector('#mid-track');
            midh = midhe.offsetHeight;

            $(document).ready(function () {
                particles.style.height = midh + "px";
                particles.style.marginTop = document.querySelector('.track2').offsetHeight + "px";
                $(".loader-hdr").animate({
                    opacity: 0
                }, 100);

                $(".logo").animate({
                    opacity: 1
                }, 100, function () {

                    document.querySelector(".loader").style.display = "none";

                    if (window.innerWidth < 1440) {
                        valMr = "0";
                    } else valMr = "5em";



                    $(".i1").delay(400).animate({
                        marginRight: valMr,
                        opacity: 1
                    }, 600);
                    $(".i2").delay(200).animate({
                        marginRight: valMr,
                        opacity: 1
                    }, 600);
                    $(".i3").delay(200).animate({
                        marginLeft: valMr,
                        opacity: 1
                    }, 600);
                    $(".i4").delay(400).animate({
                        marginLeft: valMr,
                        opacity: 1
                    }, 600, function () {
                        $(".track, .track2").delay(300).animate({
                            opacity: 1
                        }, 500);
                        $("#hdr1").delay(800).animate({
                            opacity: 1
                        }, 800);
                        $("#particles-js").delay(500).animate({
                            opacity: 1
                        }, 400);
                        $("#hdr3").delay(1200).animate({
                            opacity: 1
                        }, 1000, function () {
                            finished0 = true;
                            return;
                        });
                    });
                });
            });
        }
    

        /*SCROLL NA DRUGI SA PRVOG*/

        if (finished0 == true && yvalue > 0) {
            scrollTo2nd();
        }

        if (finished1 == true && yvalue < 0 && window.pageYOffset == 0 && scrollcount > 0) {

            /* VRACANJE NA PRVI SCROLL SA DRUGOG*/
            currentPage = 0;
            document.querySelector('.track2').style.display = "flex";
            document.getElementById("mid-track").style.height = window.innerHeight + "px";
            $('.nav-a').toggleClass('wnav');
            $("#asc").animate({
                opacity: "0"
            }, 200);
            $("#mid-track, #particles-js").animate({
                height: "0",
            }, 650);
            $(".nav-a").delay(100).animate({
                color: "rgb(  0,0,0)"
            }, 100, function () {
                $(".imglogo").attr("src", "img/logo.png");
                $(".st3").css({ "stroke": "#000000" });
                $(".whiteline").animate({
                    color: "#000000",
                }, 100);
            });

            $(".track").animate({
                marginTop: tHeight * 10,
                marginBottom: tHeight * (-1),
                zIndex: 3
            }, 650, function () {


                $(".track").animate({
                    marginTop: "18.6vh",
                    marginBottom: "0",
                    zIndex: 3
                }, 1000)

                document.querySelector('.about').style.opacity = '0';
                document.getElementById("asc").style.display = "unset";
                document.getElementById("asc").style.top = "unset";
                document.querySelector('.acc').style.alignContent = "center";
                document.getElementById('hdr1').style.marginTop = "0px";
                document.getElementById('hdr1').style.transform = "translateX(0px)";
                document.getElementById('hdr3').style.transform = "translateX(0px)";
                document.getElementById('asc').style.alignSelf = "center";
                particles.style.backgroundColor = "#ededed";

                $("#mid-track").animate({
                    height: midh,
                    zIndex: 0
                }, 1000);
                $("#particles-js").animate({
                    height: midh,
                }, 1000);
                $("#asc").animate({
                    opacity: "1"
                }, 200);
                $("#hdr1").animate({
                    color: "rgb( 0,0,0)",
                    letterSpacing: "3px",
                    fontSize: "5.5rem",
                    marginLeft: "40px"
                }, 1000);
                $("#hdr3").animate({
                    color: "rgb( 0,0,0)",
                    fontSize: "1.8rem",
                    marginLeft: "40px"
                }, 1100);

            });
            document.body.style.overflowY = "hidden";
            finished1 = false;
            finished0 = true;
            return;
        }
    })

}


