$(document).ready(function(){
  
    $ideabtn = $('.theideabtn');
    $meetingsbtn = $('.meetingsbtn');
    $sprintsbtn = $('.sprintsbtn');
    $repeatbtn = $('.repeatbtn');
    $testbtn = $('.testbtn');
    $launchbtn = $('.launchbtn');
    $maintenancebtn = $('.maintenancebtn');
    $thecontent = $('.thecontent');
    $dropcontent = $('.dropcontent');
    
    function ideafunction(){
        $dropcontent.toggleClass('hidden');
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    }

    function sprintfunction(){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    }

    function meetingsfunction(){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    }

    function repeatfunction(){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    }

    
    function testfunction(){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    }

    

    function launchfunction(){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    }


    function maintenancefunction() {
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
    }
    

    $ideabtn.mouseenter(ideafunction);   
    $ideabtn.mouseleave(ideafunction);
    $sprintsbtn.mouseenter(sprintfunction);   
    $sprintsbtn.mouseleave(sprintfunction);
    $meetingsbtn.mouseenter(meetingsfunction);   
    $meetingsbtn.mouseleave(meetingsfunction);
    $repeatbtn.mouseenter(repeatfunction);   
    $repeatbtn.mouseleave(repeatfunction);
    $testbtn.mouseenter(testfunction);   
    $testbtn.mouseleave(testfunction);
    $launchbtn.mouseenter(launchfunction);   
    $launchbtn.mouseleave(launchfunction);
    $maintenancebtn.mouseover(maintenancefunction);
    $maintenancebtn.mouseleave(maintenancefunction);
    
    var scrollPoint1 = 840;
    var scrollPoint2 = 1740;
    var scrollPoint3 = 2863;
    var scrollPoint33 = 4661;
    var scrollPoint4 = 5561;
    var logoimage = document.getElementById('logoimage');
    var navicon = document.getElementById('navicon');

    $(window).scroll(function () {
        var currentScrollPosition = $(this).scrollTop();
        if (currentScrollPosition > scrollPoint1){
            logoimage.src = 'images/elitechnecoloured.svg';
            navicon.src = 'images/colourednavicon.svg';  
        } else {
            logoimage.src = 'images/elitetechnewhite.svg';
            navicon.src = 'images/menubtn.svg';        }

        if (currentScrollPosition > scrollPoint1 && scrollPoint2 > currentScrollPosition){
            logoimage.src = 'images/elitechnecoloured.svg';
            navicon.src = 'images/colourednavicon.svg';  
            }

        if (currentScrollPosition > scrollPoint2 && scrollPoint3 > currentScrollPosition){
            logoimage.src = 'images/elitetechnewhite.svg';
            navicon.src = 'images/menubtn.svg';   
            }
        
        if (currentScrollPosition > scrollPoint33 && scrollPoint4 > currentScrollPosition){
            logoimage.src = 'images/elitetechnewhite.svg';
            navicon.src = 'images/menubtn.svg';   
            }
    })

})

document.querySelector('#navicon').addEventListener('click', navscreen);

function navscreen() {
    let screen = document.querySelector('.navscreen');
    screen.classList.toggle('off');
}

document.querySelector('.closescreen').addEventListener('click', navscreen);
document.querySelector('.linka').addEventListener('click', navscreen);
document.querySelector('.linkb').addEventListener('click', navscreen);
document.querySelector('.linkc').addEventListener('click', navscreen);
document.querySelector('.linkd').addEventListener('click', navscreen);
document.querySelector('.linke').addEventListener('click', navscreen);
document.querySelector('.linkf').addEventListener('click', navscreen);


        var lastScrollTop = 0;
       navbar = document.getElementById("navbar");
        window.addEventListener("scroll", function(){
        var scrollTop = window.pageYoffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
            navbar.style.display="off";
            navbar.style.visibility="hidden";
        } else {
        navbar.style.paddingTop="40px";
        navbar.style.display="flex";
        navbar.style.visibility="visible";
        }
        lastScrollTop = scrollTop
        })