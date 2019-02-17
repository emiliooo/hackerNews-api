fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    var text = "";
    var i;
    for (i = 0; i < 40; i++) {
      text += data[i] + "<br>";
      var html = "";
      fetch('https://hacker-news.firebaseio.com/v0/item/' + data[i] + '.json')
        .then(function (response) {
          return response.json();
        })

        .then(function (items) {
          html = html + `
                          <div class='row'>
                            <div class='col-md-3'></div>
                              <div class='col-md-6'>
                                <div class='panel panel-danger'>
                                  <a class="urlLink" value="Open new window" onclick="window.open('${items.url}','popUpWindow','height=700, width=700, left=100, top=100, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no, status=yes');">  
                                    <div class='panel-heading'>
                                      <h3 class='panel-heading'>${items.title}</h3>
                                    </div>
                                  </a>
                                  <div class='panel-footer'>

                                    <div class='row'>
                                    <div class='col-md-6'><a href='comments.html?=${items.kids}'>Read Comments</a> </div>
                                    <div class='col-md-6 pull-right'>Provided by: ${items.by}</div>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class='col-md-3'></div>
                          </div>
                          `;                       
          document.getElementById('story').innerHTML = html;
        })
    }
  })
  .catch(function (error) {
    console.log('Requestfailed', error)
  });


