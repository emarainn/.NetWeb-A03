var bdayAct = [
    "animate__animated animate__heartbeat",
    "animate__animated animate__bounce", 
    "animate__animated animate__flash", 
    "animate__animated animate__pulse", 
    "animate__animated animate__rubberBand", 
    "animate__animated animate__shakeX", 
    "animate__animated animate__shakeY", 
    "animate__animated animate__headShake"];

var idx = Math.floor(Math.random() * bdayAct.length);

document.getElementById("birthdayAction").className = bdayAct[idx];

$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});

var red = document.getElementById("redB");
var orange = document.getElementById("orangeB");
var black = document.getElementById("blackB");
var yellow = document.getElementById("yellowB");
let bday = document.getElementById('birthdayAction');

red.addEventListener('mouseover', function handleMouseOver() {
    bday.style.color = 'red';
});

red.addEventListener('mouseout', function handleMouseOut() {
    bday.style.color = 'black';
});

orange.addEventListener('mouseover', function handleMouseOver() {
    bday.style.color = 'orange';
});

orange.addEventListener('mouseout', function handleMouseOut() {
    bday.style.color = 'black';
});

black.addEventListener('mouseover', function handleMouseOver() {
    bday.style.color = 'purple';
});

black.addEventListener('mouseout', function handleMouseOut() {
    bday.style.color = 'black';
});


yellow.addEventListener('mouseover', function handleMouseOver() {
    bday.style.color = 'yellow';
});

yellow.addEventListener('mouseout', function handleMouseOut() {
    bday.style.color = 'black';
});

var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");

if (red.checked == false && 
    green.checked == false &&
    blue.checked == false &&
    yellow.checked == false){
    $('#toastbtn').on('click', function() {   
        var toast = document.getElementById("toastbtn").onclick;
        var toastElList = [].slice.call(document.querySelectorAll('.toast'));
        var toastList = toastElList.map(function(toastEl) {
          return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show());
    });
}

function myFunction() {
    if (red.checked == true || 
        green.checked == true ||
        blue.checked == true ||
        yellow.checked == true){
            alert("Order submitted");
            location.reload();

    }
  }

  function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}