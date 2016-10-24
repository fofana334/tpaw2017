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
                            '<a <img src=""/>');
        return valid;
      }
    });
}); 