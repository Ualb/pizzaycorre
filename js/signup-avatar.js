
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#photo-form').onchange = evt => {
        console.log('onevent');
        readURL(evt.target);
    }
});
/*
  $("#imgInp").change(function() {
    readURL(this);
  });*/

function readURL(input) {
    console.log(input);
    if (input.files && input.files[0]) {
        
        var reader = new FileReader();

        reader.onload = function (e) {
            //$('#avatar').attr('src', e.target.result);
            document.getElementById('avatar').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}
