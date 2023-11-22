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
    
    $ideabtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    })

    $meetingsbtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    })

    $sprintsbtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    })

    $repeatbtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    })

    $testbtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    })

    $launchbtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("maintenancecontent").setAttribute("class", "dropcontent hidden");
    })

    $maintenancebtn.click(function (){
        $dropcontent.toggleClass('hidden');
        document.getElementById("theideacontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("meetingscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("sprintscontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("repeatcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("testcontent").setAttribute("class", "dropcontent hidden");
        document.getElementById("launchcontent").setAttribute("class", "dropcontent hidden");
    })

    var scrollPoint1 = 300;
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