
$(document).ready(function () {

    //Função responsavel pelo NAV BAR
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });


    (() => {
        let select = $('#select-marcas');
        $.get('http://fipeapi.appspot.com/api/1/carros/marcas.json', {}, (data) => {
            $.each(data, (i, e) => {
                console.log(e);
                let option = $('<option>',{ value: e.fipe_name, text: e.fipe_name });
                select.append(option);
            });
        });
    })();
});
