$(`#btnsubmit`).click(function(){

    console.log(`to funcionando`)

    $(`#data`).val()

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=4Fv2LupBSUBdERhsn4Y4vQVjKUH2U5g7mcLuEAus&date=` +  $(`#data`).val(),
        

        success : function(results){
            console.log(results)

            $(`#tituloFoto`).html(`${results.title}`)
            
            $(`#descricao`).html(`${results.explanation}`)
            $(`#copy`).html(`${results.copyrigth}`)

            if(results.media_type === `image`){
                $(`#imgDia`).html(`<img width = '480' heigth = '480'
                
                src = ${results.url}>`)
            }
            else if(results.media_type ===`video`){
                $(`#imgDia`).html(`<iframe src = ${results.url}>`)
            }
        }
    })
})
