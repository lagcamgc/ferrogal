$(window).on('load', function() {

    var items = [];
    //elemento 1
    var itemsSecond = [
        {
            "name": "Herramienta Manual Jardín",
            "items": [
                "Articulos varios (101)"
            ]
        },
        {
            "name": "Piscinas",
            "items": [
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Filtración De Piscina Y Complementos (47)",
                "Piscinas Inflables (7)",
                "Piscinas De Encastar (13)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13;",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Item (205)",
                "Item (2066)",
                "Item (20993)",
                "Item (20434)",
                "Item (20343453)",
                "Item (204233)",
                "Item (205443)",
                "Item (20343453)",
                "Item (fff)",
                "Item (205ff443)"
            ]
        },
        {
            "name": "Riego",
            "items": [
                "Item (200)",
                "Item (201)",
                "Item (203)"
            ]
        },
        {
            "name": 'Maquinaria Jardín y Agrícola',
            "items": [
                "Item (2002)",
                "Item (203)",
                "Item (2099)",
                "Item (20)",
                "Item (203)",
                "Item (2042)",
                "Item (2053)",
            ]
        },
        {
            "name": 'Cobertizos y Casetas',
            "items": [
                "Item (205)",
                "Item (2066)",
                "Item (20993)",
                "Item (20434)",
                "Item (20343453)",
                "Item (204233)",
                "Item (205443)",
                "Item (20343453)",
                "Item (fff)",
                "Item (205ff443)"
            ]
        },
        {
            "name": 'Decoración Jardín',
            "items": [
                "Item (243453)",
                "Item (2043)",
                "Item (5443)",
                "Item (203453)",
                "Item (ff)",
                "Item (25ff43)"
            ]
        },
        {
            "name": 'Vallas y Cercados',
            "items": [
                "Item (20df5)",
                "Item (206dfg6)",
                "Item (209dff93)",
                "Item (20434)",
                "Item (2034f3453)",
                "Item (204f233)",
                "Item (205f443)",
                "Item (2f0343453)",
                "Item (ffff)",
                "Item (205fff443)",
                "Item (20434)",
                "Item (203dfdg43453)",
                "Item (204ff233)",
                "Item (205f443)",
                "Item (2034f3453)"
            ]
        },
        {
            "name": 'Mobiliario Jardín',
            "items": [
                "Item (20d6f5)",
                "Item (20666dfg6)",
                "Item (209dff93)",
                "Item (204634)",
                "Item (20364f3453)",
                "Item (2046f233)",
                "Item (20f4643)",
                "Item (2f06343453)",
                "Item (fff6f)",
                "Item (2056fff443)",
                "Item (204634)",
                "Item (23453)",
                "Item (20f4f6f233)",
                "Item (205ff443)",
                "Item (2034dsf3453)"
            ]
        },
        {
            "name": 'Barbacoa y Accesorios',
            "items": [
                "Item (11)",
                "Item (1)",
                "Item (111)",
                "Item (2041134)",
                "Item (534)",
                "Item (44)",
                "Item (445)",
                "Item (666)"
            ]
        },
        {
            "name": 'Camping/Playa',
            "items": [
                "Item (433)",
                "Item (206dftg6)",
                "Item (209tdff93)",
                "Item (2043gg4)",
                "Item (2034fg3453)",
                "Item (g)",
                "Item (205f4gfhhg43)",
                "Item (gfgh)",
                "Item (ffff)",
                "Item (0)",
                "Item (20434)",
                "Item (00)",
                "Item (3)",
                "Item (205rrwf443)",
                "Item (www)"
            ]
        },
        {
            "name": 'Sustratos y Fito Sanitarios',
            "items": [
                "Option (433)",
                "Option (206dftg6)",
                "Option (209tdff93)",
                "Option (2043gg4)",
                "Option (2034fg3453)",
                "Option (g)",
                "Option (205f4gfhhg43)",
                "Option (gfgh)",
                "Option (ffff)",
                "Option (0)",
                "Option (20434)",
                "Option (00)",
                "Option (3)",
                "Option (205rrwf443)",
                "Option (www)"
            ]
        },
        {
            "name": 'Planta natural/Semillas y Bulbos',
            "items": [
                "Option (g)",
                "Option (gg)",
                "Option (ggg)",
                "Option (gggg)",
                "Option (ggggg)",
                "Option (44)",
                "Option (4444)",
                "Option (666)"
            ]
        },
        {
            "name": 'Accesorios de Cultivo',
            "items": [
                "Option (1)",
                "Option (gg1)",
                "Option (ggg)1",
                "Option (gggg)",
                "Option (ggggg)",
                "Option (144)",
                "Option (111111)",
                "Option (1111111)",
                "Option (11111122)",
                "Option (1111111222)"
            ]
        },
        {
            "name": 'Accesorios de Cultivo y Jardín',
            "items": [
                "Option (g)",
                "Option (gg)",
                "Option (ggg)",
                "Option (gggg)",
                "Option (ggggg)",
                "Option (44)",
                "Option (4444)",
                "Option (666)",
                "TEST (ggggg)",
                "TEST (44)",
                "TEST (4444)",
                "TEST (666)"
            ]
        }
    ]



    var itemsFirst = {
        "name": "Jardín y Piscina",
        "items": itemsSecond
    }
    items.push(itemsFirst);

    //elemento 2
    itemsSecond = [
        {
            "name": "Herramienta Manual Jardín 2",
            "items": [
                "Articulos varios (101)"
            ]
        },
        {
            "name": "Piscinas 2",
            "items": [
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Filtración De Piscina Y Complementos (47)",
                "Piscinas Inflables (7)",
                "Piscinas De Encastar (13)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13;",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)"
            ]
        },
        {
            "name": "Riego 2",
            "items": [
                "Item (200)",
                "Item (201)",
                "Item (203)"
            ]
        },
        {
            "name": 'Maquinaria Jardín y Agrícola 2',
            "items": [
                "Item (2002)",
                "Item (203)",
                "Item (2099)",
                "Item (20)",
                "Item (203)",
                "Item (2042)",
                "Item (2053)",
            ]
        },
        {
            "name": 'Cobertizos y Casetas 2',
            "items": [
                "Item (205)",
                "Item (2066)",
                "Item (20993)",
                "Item (20434)",
                "Item (20343453)",
                "Item (204233)",
                "Item (205443)",
                "Item (20343453)",
                "Item (fff)",
                "Item (205ff443)"
            ]
        },
        {
            "name": 'Decoración Jardín 2',
            "items": [
                "Item (243453)",
                "Item (2043)",
                "Item (5443)",
                "Item (203453)",
                "Item (ff)",
                "Item (25ff43)"
            ]
        },
        {
            "name": 'Vallas y Cercados 2',
            "items": [
                "Item (20df5)",
                "Item (206dfg6)",
                "Item (209dff93)",
                "Item (20434)",
                "Item (2034f3453)",
                "Item (204f233)",
                "Item (205f443)",
                "Item (2f0343453)",
                "Item (ffff)",
                "Item (205fff443)",
                "Item (20434)",
                "Item (203dfdg43453)",
                "Item (204ff233)",
                "Item (205f443)",
                "Item (2034f3453)"
            ]
        }
    ]

    itemsFirst = {
        "name": "Bricolaje",
        "items": itemsSecond
    }
    items.push(itemsFirst);

    //elemento 3

    itemsSecond = [
        {
            "name": "Herramienta Manual Jardín 3",
            "items": [
                "Articulos varios (101)"
            ]
        },
        {
            "name": "Piscinas 3",
            "items": [
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13)",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Filtración De Piscina Y Complementos (47)",
                "Piscinas Inflables (7)",
                "Piscinas De Encastar (13)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)",
                "Piscinas Superficie y Spas (22)",
                "Piscinas De Encastar (13;",
                "Piscinas Inflables (7)",
                "Filtración De Piscina Y Complementos (47)",
                "Productos Químicos Y Consumible (37)",
                "Juegos, Hinchables Y Relax (101)"
            ]
        },
        {
            "name": "Riego 3",
            "items": [
                "Item (200)",
                "Item (201)",
                "Item (203)"
            ]
        },
        {
            "name": 'Maquinaria Jardín y Agrícola 3',
            "items": [
                "Item (2002)",
                "Item (203)",
                "Item (2099)",
                "Item (20)",
                "Item (203)",
                "Item (2042)",
                "Item (2053)",
            ]
        },
        {
            "name": 'Cobertizos y Casetas 3',
            "items": [
                "Item (205)",
                "Item (2066)",
                "Item (20993)",
                "Item (20434)",
                "Item (20343453)",
                "Item (204233)",
                "Item (205443)",
                "Item (20343453)",
                "Item (fff)",
                "Item (205ff443)"
            ]
        },
        {
            "name": 'Decoración Jardín 3',
            "items": [
                "Item (243453)",
                "Item (2043)",
                "Item (5443)",
                "Item (203453)",
                "Item (ff)",
                "Item (25ff43)"
            ]
        },
        {
            "name": 'Vallas y Cercados 3',
            "items": [
                "Item (20df5)",
                "Item (206dfg6)",
                "Item (209dff93)",
                "Item (20434)",
                "Item (2034f3453)",
                "Item (204f233)",
                "Item (205f443)",
                "Item (2f0343453)",
                "Item (ffff)",
                "Item (205fff443)",
                "Item (20434)",
                "Item (203dfdg43453)",
                "Item (204ff233)",
                "Item (205f443)",
                "Item (2034f3453)"
            ]
        },
        {
            "name": 'Mobiliario Jardín 3',
            "items": [
                "Item (20d6f5)",
                "Item (20666dfg6)",
                "Item (209dff93)",
                "Item (204634)",
                "Item (20364f3453)",
                "Item (2046f233)",
                "Item (20f4643)",
                "Item (2f06343453)",
                "Item (fff6f)",
                "Item (2056fff443)",
                "Item (204634)",
                "Item (23453)",
                "Item (20f4f6f233)",
                "Item (205ff443)",
                "Item (2034dsf3453)"
            ]
        },
        {
            "name": 'Barbacoa y Accesorios 3',
            "items": [
                "Item (11)",
                "Item (1)",
                "Item (111)",
                "Item (2041134)",
                "Item (534)",
                "Item (44)",
                "Item (445)",
                "Item (666)"
            ]
        },
        {
            "name": 'Camping/Playa 3',
            "items": [
                "Item (433)",
                "Item (206dftg6)",
                "Item (209tdff93)",
                "Item (2043gg4)",
                "Item (2034fg3453)",
                "Item (g)",
                "Item (205f4gfhhg43)",
                "Item (gfgh)",
                "Item (ffff)",
                "Item (0)",
                "Item (20434)",
                "Item (00)",
                "Item (3)",
                "Item (205rrwf443)",
                "Item (www)"
            ]
        }
    ]



    var itemsFirst = {
        "name": "Hogar",
        "items": itemsSecond
    }
    items.push(itemsFirst);

    var lengthSeconds = 0;
    var lengthThird = 0; 

    $("#first-options li").hover(
        function(element) {
            $("#third-options").css('border-left', 0 + 'px');
            let myItems = $("#first-options li"),
                selected = this.outerText,
                found;
            $("#first-options").find("a")[0].id = "catItem";

            for (let i = 0; i < myItems.length; i++) {
                if (myItems[i].innerText === selected) {
                    myItems[i].id = "item-selected";
                    found = false
                } else {
                    myItems[i].id = "item-list"
                }
            }
            $("#image_cat").css("display", "none");
            $("#image_categ").css("display", "none");
            $("#second-options").css("display", "");
            $("#third-options").css("display", "");
            $("#second-options").find("li").remove();
            $("#third-options").find("li").remove();
            for (var j = 0; j < items.length; j++) {
                if (this.outerText == items[j]["name"]) {
                    lengthSeconds = items[j].items.length;
                    containerHeightSecond(lengthSeconds);
                    for (var i = 0; i < items[j].items.length; i++) {

                        $("#second-options").append('<li class="list-group-item padding-item width-item bolders borderless" tabindex="-1">' + items[j].items[i]['name'] + '</li>');
                    }
                }
            }
        },
        function() {
            $(this).find("li").hide();
        }
    );


    $(document).on("mouseenter", "#second-options li", function(element) {
        let myItems = $("#second-options li"),
            selected = element.currentTarget.innerText;

        for (let i = 0; i < myItems.length; i++) {
            if (myItems[i].innerText === selected) {
                myItems[i].id = "item-selected";
            } else {
                myItems[i].id = ""
            }
        }

        for (var j = 0; j < items.length; j++) {
            for (var i = 0; i < items[j].items.length; i++) {
                if (element.currentTarget.innerText == items[j].items[i]['name']) {

                    $("#third-options").find("li").remove();
                    $("#third-options").css('border-left', 0 + 'px');
                    for (var x = 0; x < items[j].items[i].items.length; x++) {
                        $("#third-options").append('<li id="itemthird" class="list-group-item padding-item borderless bolders" >'+items[j].items[i].items[x]+'</li>');
                    }
                    lengthSeconds = items[j].items.length;
                    lengthThird = $("#third-options").find("li").length;
                    containerHeightThird(Math.max(lengthSeconds, lengthThird));

                }
            }
        }
    });

  
  $("#catItem").hover(
    function(element) {
        let myItems = $("#catItem"),
            selected = this.outerText,
            liItems = $("#first-options li");

        for (let i = 0; i < liItems.length; i++) {
            liItems[i].id = "item-list"
        }

        for (let i = 0; i < myItems.length; i++) {
            if (myItems[i].innerText === selected) {
                myItems[i].id = "item-selected";
            } else {
                myItems[i].id = ""
            }
        }
        $("#image_cat").css("display", "block");
        $("#image_categ").css("display", "block");
        $("#second-options").css("display", "none");
        $("#third-options").css("display", "none");
    }
  );

  $("#catItem").click(function() {
    $("#dropdown-menu").css('min-height', 720 + 'px');
  });

  $("#item-list").hover(function(element) {
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items[i].items.length; j++) {
            if (element.outerText != items[i].items[j]['name']) {
                $("#third-options").css('border-left', 0 + 'px');
            }
        }
    }
  });

  $(document).click(function(event) {
    if ($('.overlay')[0].style.display === "inline" || event.target.className === "overlay") {
        $('.overlay')[0].style.display = "none";
    }
  });

  $('#menuLink').on('click', function (e) {
    if ($('.overlay')[0].style.display === "none" || $('.overlay')[0].style.display === "" || document.getElementById('menuLink').getAttribute('aria-expanded') == true) {
      $('.overlay')[0].style.display = "inline";  //show overlay when menu hovered
    } else {
      $('.overlay')[0].style.display = "none";
    }

  });
});

function containerHeightThird(size) {
    if (size <= 10) {
        $("#dropdown-menu").css('min-height', 360 + 'px');
        $("#third-options").css('min-height', 300 + 'px');
        $("#third-options").css('border-left', 1 + 'px solid gray');
    } else {
        size = size - 10;
        var dimensionThirdOptions = 300 + 30 * size;
        var dimensionMenu = 360 + 27 * size + 18;
        $("#dropdown-menu").css('min-height', dimensionMenu + 'px');
        $("#third-options").css('min-height', dimensionThirdOptions + 'px');
        $("#third-options").css('border-left', 1 + 'px solid gray');
    }
}

function containerHeightSecond(size) {
    if (size <= 10) {
        $("#dropdown-menu").css('min-height', 360 + 'px');
        $("#second-options").css('max-height', 300 + 'px');
    } else {
        size = size - 10;
        var dimensionMenu = 360 + 27 * size + 18;
        var dimensionSecondOptions = 300 + 30 * size;
        $("#dropdown-menu").css('min-height', dimensionMenu + 'px');
        $("#second-options").css('max-height', dimensionSecondOptions + 'px');
    }
}

document.getElementById('myDropdown').addEventListener('click', function(event) {
    event.stopPropagation();
});

(function($) {
    "use strict";  
    
    //* Form js
    function verificationForm(){
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left
                    });
                    previous_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".submit").click(function () {
            return false;
        })
    }; 
    
    //* Add Phone no select
    function phoneNoselect(){
        if ( $('#msform').length ){   
            $("#phone").intlTelInput(); 
            $("#phone").intlTelInput("setNumber", "+880"); 
        };
    }; 
    //* Select js
    function nice_Select(){
        if ( $('.product_select').length ){ 
            $('select').niceSelect();
        };
    }; 
    /*Function Calls*/  
    verificationForm ();
    phoneNoselect ();
    nice_Select ();
})(jQuery); 