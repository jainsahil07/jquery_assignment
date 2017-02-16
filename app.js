 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAKw88TcUoKSsC6oiRc3c4hbwbQuIz124eXvTF5qIpvoZBtQv2TjKZBHjrzW6ZAiE79LgytAsJRZBWUII3Ep6S7u0kePCpksBuNneH6HwQdm8MoNqsOBZBfe9RLpE6dQ2PpctI1qE4RDfWZApNUXHf1hnnQvrlEPR7MI2FRZArlRplGHRgtplewZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myBirthday").text(response.birthday);
                    $("#myLocation").text(response.location.name);
                    $("#myGender").text(response.gender);
                   
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });