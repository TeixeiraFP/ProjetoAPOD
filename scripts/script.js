reqApi();

$(`#btnsubmit`).click(function (e) {
  e.preventDefault();
  console.log(`to funcionando`);
  reqApi();
});

async function reqApi(data) {
  const request = await $.ajax({
    url:
      `https://api.nasa.gov/planetary/apod?api_key=4Fv2LupBSUBdERhsn4Y4vQVjKUH2U5g7mcLuEAus&date=` +
      $(`#data`).val(),

    success: function (results) {
      console.log(results);

      $(`#tituloFoto`).html(`${results.title}`);

      $(`#descricao`).html(`${results.explanation}`);
      $(`#copy`).html(`${results.copyrigth}`);

      if (results.media_type === `image`) {
        $(`#imgDia`).html(`<img width = '380' heigth = '380'
                  
                  src = ${results.url}>`);
      } else if (results.media_type === `video`) {
        $(`#imgDia`).html(
          `<iframe width = '480' heigth = '580' src = ${results.url}>`
        );
      }
    },
  });
}
