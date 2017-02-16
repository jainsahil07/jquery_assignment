 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myfbToken = 'EAACEdEose0cBAA70PzxfM5SME7SoVCPPDhg0R2lZBNJTV8WdYNSbWuU2HKCJUaWzvJ3ctZCvMlfIAeVtn8zhSpW4vm58rIZBkKMrpESKpAzmulYyuTl8xEkr8nZBlOTNtYUuWHyti5iK2z2Nn67l4CzpFWPyopHgZCdUIQvNZA5ZCynRXt0XmDGa9CMpSfA49mPskbK4K2eLrOJH7xzRvSZCMLAppkXdE7EZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me/posts?access_token='+myfbToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myFeed").text(response.posts);


                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookButton").on('click',getFacebookInfo)



  });