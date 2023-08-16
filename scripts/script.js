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

})