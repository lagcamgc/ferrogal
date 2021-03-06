

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
                if (element.currentTarget.innerText == items[j]["name"])
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
  document.getElementById('valuations').onclick = function() {
    $('#nav-profile-tab').tab('show');
  };
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

    var minInput = document.getElementById('minInput').value;
    var maxInput = $('#maxInput').attr('value');

    console.log(minInput);
    console.log(maxInput);
    if (minInput <= maxInput) {
        var minValue =Math.min(minInput, maxInput-1);
        var max = document.getElementById('minInput').getAttribute("max");
        var min = document.getElementById('minInput').getAttribute("min");

        document.getElementById('min').value = minValue; 
        styleLeft(min, max, minValue);
    }
}

function highPriceBar () {

    var maxInput = document.getElementById('maxInput').value
    var minInput = document.getElementById('minInput').value;

    if (maxInput >= minInput) {
        var maxValue =Math.max(maxInput, minInput-(-1));

        var max = document.getElementById('maxInput').getAttribute("max");
        var min = document.getElementById('maxInput').getAttribute("min");

        document.getElementById('max').value = maxValue;

        styleRigth(min, max, maxValue);
    }
}

function lowPriceInput() {

    var minInput = document.getElementById('min').value;
    var maxInput = $('#maxInput').attr('value');
    console.log(minInput);
    console.log(maxInput);
    if (minInput <= maxInput) {

        var minValue =Math.min(minInput, maxInput);
        var max = document.getElementById('min').getAttribute("max");
        var min = document.getElementById('min').getAttribute("min");

        styleLeft(min, max, minValue);
    }

}

function highPriceInput () {

    var maxInput = document.getElementById('max').value;
    var minInput = document.getElementById('minInput').value;
    console.log(minInput);
    console.log(maxInput);
    if (maxInput >= minInput) {
        var maxValue =Math.max(maxInput, minInput-(-1));

        var max = document.getElementById('max').getAttribute("max");
        var min = document.getElementById('max').getAttribute("min");

        styleRigth(min, max, maxValue);
    }
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

