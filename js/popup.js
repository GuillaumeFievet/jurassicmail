jQuery(document).ready(function($){

	// on change la source de l'iframe si on veut l'habillage
	var changeHabillage = function () {
		$("#export").attr('src',"frame.html");
		if ($("#habillage").prop("checked")) 
			{
				$("#export").attr('src',"frameHabillage.html");
			}
			else 
			{
				$("#export").attr('src',"frame.html");
			}
	}

	// on applique le changement de l'attribut en cas d'évenement sur le bouton habillage
	var statehabillage = function() {
		$("#habillage").change(function() {
			changeHabillage();
		})
	};

	statehabillage();
    
	//lors du click sur export
	$('#sharebtn').click(function(){

		// on vérifie que le template n'est pa vide
		if($("#sortable2").html() != "")
		{	

			// on met la demande d'habillage par défaut (non)
			document.getElementById("habillage").checked = false;
			var source = $('#export').attr('src');
			source = "frame.html";
			changeHabillage();

			// on ouvre la popup
			$('.popup').addClass('is-visible');

			// lors du click sur continuer
			$('.bottombarprev').children('.nextpop').click(function(){

				// si les tables on le parent 'deletediv' on le supprime
		        var conteneur = $('#sortable2');
		        var Alltables = $("#sortable2 table");

		        if (conteneur.parent().is(".deletediv"))
		        {
		        conteneur.unwrap(".deletediv");
		        }

	        	// on supprime les classe qui permettent le responsive sur l'outil
	            Alltables.removeClass("resizemiddle resizethird resizehide resizeimg CP");

		        // on copie/colle le html du container vers l'iframe
		        var myExport = $('#export').contents().find('#content');
		        myExport.append($("#sortable2").html());

		        //on ouvre la popup preview
				$('.bottombarprev').fadeOut(600);
				$('.pophabillage').hide();
				$('.bottombarexp').fadeIn(600);
				$('.previewpop').fadeIn(800);
				$('.popup-container').css({"width":"60%","transition":"0.5s ease"});
				$('.popup-container').css({'height':'95%',"transition":"0.5s ease"});
				$('.popup-container').css('max-width','900px');

			})

			$(".bottombarexp").children('.nextpop').click(function(){
		        
		        //on prend le contenu de l'iframe
		        var htmlcontent = ($('#export').contents().find('html').html());
		        
		        // on lui ajoute les balises HTML
		        htmlcontent = '<!DOCTYPE HTML><html xmlns="http://www.w3.org/1999/xhtml">' + htmlcontent + '</html>' ;

		        // téléchargement
		        var a = document.getElementById("downloadbtn");
		        a.download = "export.html";
				a.href = "data:text/html," + encodeURIComponent(htmlcontent);
			})
		
			//close popup when clicking the esc keyboard button
			$(document).keyup(function(event){
		    	if(event.which=='27'){
		    		$('.popup').removeClass('is-visible');
			    }
		    })		
		    $('.exitpop').click(function(){
				$('.popup').removeClass('is-visible');

			})
		}
	})
});