

$(window).on('load', function()
{
    
    // GLOBAL
    items = [];
    
    
    require(["js/catalogo"]);
    
    require.config
    ({
        urlArgs: "bust=" + (new Date()).getTime()
    });
    
    
    
    var lengthSeconds = 0;
    var lengthThird = 0; 

    $("#first-options li").hover
    (
        function(element)
        {
            $("#third-options").css("border-left", 0 + "px");
           
            let myItems = $("#first-options li") , selected = this.outerText , found;
            
            $("#first-options").find("a")[0].id = "catItem";

            for (let i = 0; i < myItems.length; i++)
            {
                if (myItems[i].innerText === selected)
                {
                    myItems[i].id = "item-selected";
                    
                    found = false
                }
                else
                {
                    myItems[i].id = "item-list"
                }
            }
            $("#image_cat").css("display", "none");
            
            $("#image_categ").css("display", "none");
           
            $("#second-options").css("display", "");
            
            $("#third-options").css("display", "");
            
            $("#second-options").find("li").remove();
            
            $("#third-options").find("li").remove();
            
            for (var j = 0; j < items.length; j++)
            {
                if (this.outerText == items[j]["name"])
                {
                    lengthSeconds = items[j].items.length;
                    
                    containerHeightSecond(lengthSeconds);
                   
                    for (var i = 0; i < items[j].items.length; i++)
                    {
                        $("#second-options").append('<li class="list-group-item padding-item width-item bolders borderless" tabindex="-1">' + items[j].items[i]['name'] + '</li>');
                    }
                }
            }
        },
        
        function()
        {
            $(this).find("li").hide();
        }
    );


    $(document).on("mouseenter", "#second-options li", function(element)
    {
        let myItems = $("#second-options li") , selected = element.currentTarget.innerText;

        for (let i = 0; i < myItems.length; i++)
        {
            if (myItems[i].innerText === selected)
            {
                myItems[i].id = "item-selected";
            }
            else
            {
                myItems[i].id = ""
            }
        }

        for (var j = 0; j < items.length; j++)
        {
            for (var i = 0; i < items[j].items.length; i++)
            {
                if (element.currentTarget.innerHTML == items[j].items[i]['name'])
                {
                    $("#third-options").find("li").remove();
                    
                    $("#third-options").css('border-left', 0 + 'px');
                    
                    for (var x = 0; x < items[j].items[i].items.length; x++)
                    {
                        $("#third-options").append('<li id="itemthird" class="list-group-item padding-item borderless bolders" >'+items[j].items[i].items[x]+'</li>');
                    }
                    
                    lengthSeconds = items[j].items.length;
                    
                    lengthThird = $("#third-options").find("li").length;
                    
                    containerHeightThird(Math.max(lengthSeconds, lengthThird));
                }
            }
        }
    });

  
    $("#catItem").hover
    (
        function(element)
        {
            let myItems = $("#catItem") , selected = this.outerText , liItems = $("#first-options li");

            for (let i = 0; i < liItems.length; i++)
            {
                liItems[i].id = "item-list"
            }

            for (let i = 0; i < myItems.length; i++)
            {
                if (myItems[i].innerText === selected)
                {
                    myItems[i].id = "item-selected";
                }
                else
                {
                    myItems[i].id = ""
                }
            }
            $("#image_cat").css("display", "block");
            
            $("#image_categ").css("display", "block");
            
            $("#second-options").css("display", "none");
            
            $("#third-options").css("display", "none");
        }
    );

    $("#catItem").click(
        function()
        {
            $("#dropdown-menu").css('min-height', 720 + 'px');
        }
    );

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

function lowPriceBar () {
    var minValue =Math.min(document.getElementById('minInput').value, $('#maxInput').attr('value')-1);
    var max = document.getElementById('minInput').getAttribute("max");
    var min = document.getElementById('minInput').getAttribute("min");

    document.getElementById('min').value = minValue; 
    styleLeft(min, max, minValue);
}

function highPriceBar () {
    var maxValue =Math.max(document.getElementById('maxInput').value, $('#minInput').attr('value')-(-1));

    var max = document.getElementById('maxInput').getAttribute("max");
    var min = document.getElementById('maxInput').getAttribute("min");

    document.getElementById('max').value = maxValue;

    styleRigth(min, max, maxValue);
}

function lowPriceInput() {

    var minValue =Math.min(document.getElementById('min').value, $('#maxInput').attr('value')-1);
    var max = document.getElementById('min').getAttribute("max");
    var min = document.getElementById('min').getAttribute("min");
    styleLeft(min, max, minValue);

}

function highPriceInput () {
    var maxValue =Math.max(document.getElementById('max').value, $('#minInput').attr('value')-(-1));

    var max = document.getElementById('max').getAttribute("max");
    var min = document.getElementById('max').getAttribute("min");

    styleRigth(min, max, maxValue);
}

function styleLeft (min, max, minValue) {
    var value=(100/(parseInt(max)-parseInt(min)))*parseInt(minValue)-(100/(parseInt(max)-parseInt(min)))*parseInt(min);
    document.getElementById("inverse-left").style["width"] = value + "%";
    document.getElementById("range").style["left"] = value + "%";
    document.getElementById("thumb-left").style["left"] = value + "%";
}

function styleRigth(min, max, maxValue) {
    var value=(100/(parseInt(max)-parseInt(min)))*parseInt(maxValue)-(100/(parseInt(max)-parseInt(min)))*parseInt(min);
    document.getElementById("inverse-right").style["width"] = (100-value) + "%";
    document.getElementById("range").style["right"] = (100-value) + "%";
    document.getElementById("thumb-rigth").style["left"] = value + "%";
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
