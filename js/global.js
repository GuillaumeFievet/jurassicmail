$(function() {

    $('#sortable1 a').click(function(e) {
        e.preventDefault();
    });

    $('#sortable2 a').click(function(e) {
        e.preventDefault();
    });

    $('#btnheader').click(function(){
        $('body').addClass('show-menu-header');
        $('body').removeClass('show-menu');
    })

    $('#open-header .icon-chevron-left').click(function(){
        $('body').removeClass('show-menu-header');
        $('body').addClass('show-menu');
    })

    $('#btncontent').click(function(){
        $('body').addClass('show-menu-content');
        $('body').removeClass('show-menu');
    })

    $('#open-content .icon-chevron-left').click(function(){
        $('body').removeClass('show-menu-content');
        $('body').addClass('show-menu');
    })

    $('#btnQS').click(function(){
        $('body').addClass('show-menu-QS');
        $('body').removeClass('show-menu');
    })

    $('#open-QS .icon-chevron-left').click(function(){
        $('body').removeClass('show-menu-QS');
        $('body').addClass('show-menu');
    })

    $('#btnCP').click(function(){
        $('body').addClass('show-menu-CP');
        $('body').removeClass('show-menu');
    })

    $('#open-CP .icon-chevron-left').click(function(){
        $('body').removeClass('show-menu-CP');
        $('body').addClass('show-menu');
    })

    $('#btnPub').click(function(){
        $('body').addClass('show-menu-Pub');
        $('body').removeClass('show-menu');
    })

    $('#open-Pub .icon-chevron-left').click(function(){
        $('body').removeClass('show-menu-Pub');
        $('body').addClass('show-menu');
    })

    $('.mobile').click(function(){
        $('#sortable2').css("width","380px");
        $('#sortable2 table').css("width","100%");
        $('.contenttotal').css("width","420px");
        $("#sortable2 .CP table").css("width","");
        $("#sortable2 .CP table.lmContainer").css("width","100%");
        $("#sortable2 .CP table.lmMobile").css("width","100%");
    })

    $('.desktop').click(function(){
        $('#sortable2').css("width","600px");
        $('#sortable2 table').css("width","");
        $('.contenttotal').css("width","");
        $("#sortable2 .CP table.lmContainer").css("width","");
        $("#sortable2 .CP table.lmMobile").css("width","");
    })
 
});
