/**
 * WiseBirds TechTeam kykkyn2@adwitt.com
 */

$(function(){

    $(document).on('click','.cache-target',function(){
        $(".cache-target").removeClass("clicked");
        var _this = $(this);
        _this.addClass("clicked");
        chrome.identity.getProfileUserInfo(function(data){
            console.log(data);
            $.ajax({
                type: "GET",
                url: "http://dohee.net/google.php"
            }).done(function(response) {
                console.log("SUCCESS: " + response);
            }).fail(function(response) {
                console.log("FAILURE: " + response);
            });
        });
        //cacheRemoveFunc();
    });
});


var cacheRemoveFunc = function(){
    chrome.browsingData.remove({ "since" : 0 }, {
        "cache": true
    }, googleCallback );
};

var googleCallback = function(){
    $(".cache-target").each(function(){
        if($(this).hasClass("clicked")){
            locationFunc($(this).attr("wise"));
        }
    });
};

var locationFunc = function( wise ){
    switch(wise){
      case 'adwitt' :
        location.href="http://adwitt.com/member/login.htm";
        break;
      case 'cafe24' :
        location.href="http://cafe24.adwitt.com/member/login.htm";
        break;
    }
}