 var i = 0;
    var j = 0;
    var k =6;
    var a =0;
    var b =0;
    var c =0;
    var d =0;

$(function(){

      var newsectioncount=0;
    var idsection;
    var nomsection;
  // TOGLE MENU
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").show();
      $("#wrapper").toggleClass("toggled");
     
    });

    // TOGLE MENU


    // ON CLICK TAB MENU
    
    $("body").on('click', '#liste_sections > a',function(e){
      $("a").removeClass("active");
      $(this).addClass("active");
      $(this).attr('style', '#fff');

    });

    // ON CLICK MENU TAB


    // JEUX POUR CHANGER DE SECTION
$("#exppro").click(function(event){
$(".sectioncv").hide();
$(".sectioncv2").fadeIn();

});

$("#infobasique").click(function(event){
$(".sectioncv").hide();
$(".sectioncv1").fadeIn();

});

$("#formation").click(function(event){
$(".sectioncv").hide();
$(".sectioncv3").fadeIn();

});

$("#OutilsInfo").click(function(event){
$(".sectioncv").hide();
$(".sectioncv4").fadeIn();

});

$("#Langue").click(function(event){
$(".sectioncv").hide();
$(".sectioncv5").fadeIn();

});

$("#Interests").click(function(event){
$(".sectioncv").hide();
$(".sectioncv6").fadeIn();

});

$("#Ref").click(function(event){
$(".sectioncv").hide();
$(".sectioncv7").fadeIn();

}); 



// FIN DE JEUX POUR CHANGER DE SECTION

// DRAGGABLE section info CV

$("#liste_sections").sortable({
  revert: true,
});


$("#select2langue").select2({
  theme: "classic",
  width: "160px",
  padding:"12px"
});

$("#select2informatique").select2({
  theme: "classic",
  width: "160px",
 
});

$("#select2informatique1").select2({
  theme: "classic",
  width: "160px",
 
});
 $("#select2ville").select2({
  theme: "classic",
  width: "170px",
  
 
});

$("#select2pays").select2({
  theme: "classic",
  width: "170px",
 
});


// JEUX POUR FAIRE APPARAITRE LES INFO LANGUE

$("#select2langue").change(function(){
  var value = $(this).val();
  if(value==1){
    $(".infolangue").hide();
    $("#A1").fadeIn();
  }
  if(value==2){
    $(".infolangue").hide();
    $("#A2").fadeIn();
  }
  if(value==3){
    $(".infolangue").hide();
    $("#B2").fadeIn();
  }

  if(value==4){
    $(".infolangue").hide();
    $("#C1").fadeIn();
  }
  if(value==5){
    $(".infolangue").hide();
    $("#C2").fadeIn();
  }

  if(value==-1){
    $(".infolangue").hide();
 
  }

});

// FIN JEUX POUR FAIRE APPARAITRE LES INFO LANGUE

//   Ajout de Sections
$("body").on('click', '#add_section' ,function(){
  idsection = "newsection";
  nomsection = $("#newsectioninput").val();
  newsectioncount++;
 if(nomsection==''){
  nomsection='Nouvelle section';
 }

 $("#liste_sections").append('<a class="newsection" id="'+idsection+newsectioncount+'" style="color:#666;"  href="#"><i class="icon-file-plus"></i>'+' '+nomsection+'<input type="hidden" id="idinputnewsection" value="'+newsectioncount+'"></a>');

k++;
$("#formcv").append('<div class="sectioncv newsection'+newsectioncount+' cacher" ><div class="form-row"><div class="col-sm-11"><h5 class="title" style="text-align: center;"><i class="icon-file-plus"></i> '+ nomsection +' :'+'</h5><textarea name="editor_newsection'+newsectioncount+'" id="editor_newsection'+newsectioncount+'" rows="10" cols=""></textarea><script></script><hr></div></div></div>');
 CKEDITOR.replace( 'editor_newsection'+newsectioncount);

 $('#addsectionModal').modal('hide');
 //new section's color changement
$("newsection").onMouseOut(function(){
  $(this).css("color","#666");
} );

$("newsection").onMouseOver(function(){
  $(this).css("color","#04b2cc");
} );
//******************

$("newsection").mousedown(function(){
  $(this).css("color","white");
} );


 $("#newsectioninput").val("");

});
//   Fin Ajout de Sections

// Bouton Ajouter Form

$("body").on('click', '#ajoutformexpProf' ,function(){
a++;
k++;
 $("#addformexpprof").append('<div class="col-sm-12 formexppro'+a+'"><div id="textzoneSections"><div class="form-row "><div class="form-group col-sm-6"><label for="inputTitle">Titre <font color="red">*</font></label><input type="text"  class="form-control inputformcustom" id="inputTitle"></div><div class="form-group col-sm-6"><label for="inputCompName">Nom de l\'entreprise<font color="red">*</font></label><input type="text" class="form-control inputformcustom" id="inputCompName4" ></div></div><div class="form-row"><div class="form-group col-sm-6"><label for="inputStartDate">Date du début<font color="red">*</font></label><input type="text" class="form-control inputformcustom" id="inputStartDate" placeholder="mm/aaaa"></div><div class="form-group col-sm-6"><label for="inputEndDate">Date de la fin<font color="red">*</font></label><input type="text" class="form-control inputformcustom" id="inputEndDate" placeholder="mm/aaaa"></div></div> </div><div class="col-sm-11"><label>Autres Informations :</label><textarea name="editor'+k+'" id="editor'+k+'" rows="10" cols=""></textarea></div><hr><div class="row"><div class="col-lg-8"></div></div></div>');
  CKEDITOR.replace( 'editor'+k);

});


$("body").on('click', '#ajoutformformation' ,function(){
b++;
k++;
 $("#addformformation").append('<div class="col-sm-12 formformation'+b+'"><div id="textzoneSections"><div class="form-row"><div class="form-group col-sm-6"><label for="inputFormation">Formation<font color="red">*</font></label><input type="text" required class="form-control inputformcustom" id="inputFormation"></div><div class="form-group col-sm-6"><label for="inputInstName">Nom de l\'institution<font color="red">*</font></label><input type="text" class="form-control inputformcustom" id="inputInstName" ></div></div><div class="form-row"><div class="form-group col-sm-6"><label for="inputStartDate">Date du début<font color="red">*</font></label><input type="text" class="form-control inputformcustom" id="inputStartDate" placeholder="mm/aaaa"></div><div class="form-group col-sm-6"><label for="inputEndDate">Date de la fin<font color="red">*</font></label><input type="text" name="datefin" class="form-control inputformcustom" id="inputEndDate" placeholder="mm/aaaa"></div></div></div><div class="col-sm-11"><label>Autres Informations (petite description) :</label><textarea name="editor'+k+'" id="editor'+k+'" rows="10" cols=""></textarea><hr><div class="row"><div class="col-lg-8"></div></div></div>');
CKEDITOR.replace( 'editor'+k);

});

$("body").on('click', '#ajoutformoutilinfo' ,function(){
  c++;
j++;
$("#addformoutilinfo").append('<div class="col-sm-12 formoutilinfo'+c+'"><hr><div id="textzoneSections"><div class="form-row"><div class="form-group col-sm-8"><label for="inputTool">L\'outil informatique</label><input type="text"  class="form-control inputformcustom" id="inputTool"></div><div class="form-group  col-sm-3"><label for="inputLevel">Niveau</label><select class="custom-select custom-select2" id="select2informatique'+j+'" name="outilinformatique"><option selected>Liste des niveaux</option><option value="1">Débutant</option><option value="2">Intermédiaire</option></option><option value="3">Expert</option></select></div><hr></div></div></div>');

$(".custom-select2").select2({
  theme: "classic",
  width: "160px",
 
});
});

$("body").on('click', '#ajoutformlang' ,function(){
  d++;
j++;
$("#addformlang").append('<div id="textzoneSections" class="formlang'+d+'"><div class="form-row"><div class="form-group col-sm-8"><label for="inputLanguage">Langue</label><input type="text"  required class="form-control inputformcustom" id="inputLanguage"></div><div class="form-group  col-sm-3"><label for="inputLevel">Niveau</label><select class="custom-select  custom-select2" id="select2langue'+j+'" name="outilinformatique"><option value="-1">Liste des niveaux</option><option value="1">Scolaire (A1)</option><option value="2">Notions (A2)</option><option value="3">Moyen (B2)</option><option value="4">Courant (C1)</option><option value="5">Bilingue/trilingue (C2)</option></select></div></div><hr></div>');
$(".custom-select2").select2({
  theme: "classic",
  width: "160px",
 
});
//$(".close"+d).css({"position": "absolute", "top": "15px","right": "35px","color":  "#000000","font-size": "40px","font-weight": "bold","margin-top": "85px","margin-left": "400px"})
});
// Fin : Bouton Ajouter Form

$("body").on('click', '#suppformexpProf' ,function(){
$(".formexppro"+a).remove();
a--;

});

$("body").on('click', '#suppformformation' ,function(){
$(".formformation"+b).remove();
b--;

});

$("body").on('click', '#suppformoutilinfo' ,function(){
$(".formoutilinfo"+c).remove();
c--;

});

$("body").on('click', '#suppformlang' ,function(){
$(".formlang"+d).remove();
d--;

});




// SEE NEW SECTION
$("body").on("click", ".newsection", function(event){


var value = $(this).children("#idinputnewsection").val();
var classSection = 'newsection'+value;
/*console.log(classSection);*/
$(".sectioncv").hide();
$('.'+classSection).fadeIn();


});



});