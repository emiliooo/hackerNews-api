var string = window.location.search
const newString = string.replace("?=", "");
var data = newString.split(',');
var text = "";
var i;
for (i = 0; i < data.length; i++) {
    text += data[i] + "<br>";
    var html = "";

    fetch('https://hacker-news.firebaseio.com/v0/item/' + data[i] + '.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (comments) {
            html = html + `
                        <div class='row'>
                        <div class='col-sm-3'></div>
                            <div class='well well-sm col-sm-6'>
                            <p>${comments.text}</p>
                                <span class='pull-right'><em>${comments.by}</em></span>
                            </div>
                            <div class='col-sm-3'></div>
                        </div>
                        `;
            document.getElementById('story').innerHTML = `
                                                        <center>
                                                            <button type="button" class="btn btn-warning" action="action" onclick="window.history.go(-1); return false;">Go
                                                                Back
                                                            </button>
                                                            <h5>
                                                                Total ${data.length} comments
                                                            </h5>
                                                        </center>
                                                        ` + html;
        })
}