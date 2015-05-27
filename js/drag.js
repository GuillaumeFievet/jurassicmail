$(function() {
    // je rend draggable le menu 
    $( "#sortable1 .deletediv" ).sortable({
        connectWith: ".connectedSortable",
        forcePlaceholderSize: true,
        helper: function(e,li) {
            copyHelper= li.clone().insertAfter(li);
            return li.clone();
        },
        stop: function() {
            copyHelper && copyHelper.remove();
        }
    });

    $(".connectedSortable").sortable({
        receive: function(e,ui) {
            copyHelper= null;
        }
    });
    // je rend graggable le contenu
    $("#sortable2").sortable({
    connectWith: ".connectedSortable2",
    forcePlaceholderSize: true,
        start : function(event, ui) {
            $('#sortable3').css({"opacity":"1","transition":"all 0.4s"});
        },
        stop : function(event, ui) {
            $('#sortable3').css({"opacity":"0","transition":"all 0.4s"});
        }
    });

    // fonctions pour la poubelle
    $(".connectedSortable2").sortable({
        receive: function(e,ui) {
            copyHelper= null;
            $(this).contents().remove();
            $('#sortable3').css({"background":"#34495e","transition":"all 0.4s"});
        },
        over : function(event, ui) {
            $('#sortable3').css({"background":"#e74c3c","transition":"all 0.4s"});
        },
        out : function(event, ui) {
            $('#sortable3').css({"background":"#34495e","transition":"all 0.4s"});
        }

    });
});



