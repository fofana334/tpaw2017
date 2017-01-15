$(function() {
  var valid,name,prenom,date,adresse,mail;
  valid = true;
  $(".validate").click(function(){
      if($("#name").val()=="" && $("#prenom").val()== " " && $("#date").val()==" " && $("#adresse").val()==" " && $("#mail").val()==""){
        $('.modal-body').html("Error");
        $('.modal').modal('show');          // calling modal
        $(this).css("border","1px solid red");
        valid=false; 
      }
      else if ($("#name").val()=="") {
        $('.modal').modal('show');
        $('.modal-body').html("Veuillez entrer un nom valide");
          valid=false;
      }else if ($("#name").val().match(/^[a-z]+$/i)) {
        valid=false;
      }
      else if ($("#prenom").val()=="") {
        $('.modal').modal('show');
        $('.modal-body').html("Veuillez entrer un prenom valide");
          valid=false;
      }
      else if ($("#date").val()=="") {
        $('.modal').modal('show');
        $('.modal-body').html("Veuillez entrer une date valide");
          valid=false;
      }
      else if ($("#adresse").val()=="") {
        $('.modal').modal('show');
        $('.modal-body').html("Veuillez entrer un adresse valide");
          valid=false;
      }
      else{
        $('.modal').modal('show');
        $('.modal-body').html('<p>Bienvenue</p>'+
         '<a <img src="http://images.google.fr/imgres?imgurl=http://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg&imgrefurl=http://www.harvard.edu/about-harvard/maps-directions&h=433&w=850&tbnid=rq9-cQJL7x48iM:&vet=1&tbnh=90&tbnw=177&docid=fRB0UjZ_ueyH0M&usg=__vLH2sIS46CuB_Hsd1_FCe50bdoo=&sa=X&sqi=2&ved=0ahUKEwiH7cT3oMXRAhVFWxoKHVVXAT8Q9QEIPTAG"/>');
        return valid;
      }
    });
}); 