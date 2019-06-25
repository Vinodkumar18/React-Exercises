export default class WebServices {
    _getHeaders(headersList) {
        let headers = new Headers();
        for(let header in headersList){
            headers.append(header["key"], header["value"]);
        }
        return headersList;
    }
    
    _getRequest(requestObj){
        let defaultConfig = {
            method : "GET",
            headers : {},
            mode : "cors",
            cache : "default"
        };
        defaultConfig["method"] = requestObj.method;
        defaultConfig["headers"] = this._getHeaders(requestObj.headers);
        let request = new Request(requestObj.url, defaultConfig);
        return request;
    }

    get(requestObj){
        return fetch(this._getRequest(requestObj)).then(function(response){
            return response.json();
        });
    }
}