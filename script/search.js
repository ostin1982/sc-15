const { default: axios } = require("axios");

$(function(){
    axios.post('/get/data/').then(response=>{
        let data = response.data;

        $('.js-search').change(function(){
            let result = [];
            let query  = $(this).val().toString().toLocaleLowerCase();
            $('.js-result').remove();

            data.types.forEach(el => {
                if(el.name.toLocaleLowerCase().includes(query)){
                    result.push(el);
                }

                el.services.forEach(elem => {
                    if(elem.name.toLocaleLowerCase().includes(query)){
                        result.push(elem);
                    }
                });

                el.defects.forEach(e => {
                    if(e.name.toLocaleLowerCase().includes(query)){
                        result.push(e);
                    }
                });
            });

            data.models.forEach(el => {
                if(el.name.toLocaleLowerCase().includes(query)){
                    result.push(el);
                }
            });

            result = result.sort((a, b) => 0.5 - Math.random());

            result.slice(0,7).forEach(e => {
                if(e.type_code){
                    $(this).after('<p class = "js-result"><a href = "/'+e.type_code+'/">'+e.type_name+'-'+e.name+'</a></p>');
                }else{
                    $(this).after('<p class = "js-result"><a href = "/'+e.code+'/">'+e.name+'</a></p>');
                }
            });
        });
    });
});