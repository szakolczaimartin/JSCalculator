
(function (app) {

    app.makeRequest = function(number) {

        var urlToRequest = "http://numbersapi.com/" + number.toString();
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                document.getElementById('tale').innerHTML = request.responseText;
            }
        };
        request.open("GET", urlToRequest, true);
        request.send();

    };

})(window.numbersAPI = window.numbersAPI || {});