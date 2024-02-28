function extract(request, response) {
    $ = response.body;
  
    var url = request.url;
    var id = url.replaceAll("/", "_").replaceAll(":", "_").replaceAll(".", "_");
  
    var scbUrl = $('meta[property="og:url"]').attr("content") || url;

    // var scbUrl = location.href;
    var scbUrlArray = scbUrl.split("/");

    var scbType = "Others";
    if (scbUrlArray[4] != null) {
    
        scbType = scbUrlArray[4];
        if(scbType == "fund") {
            scbType = "Mutual Fund";
        } else if(scbType == "pf") {
            scbType = "Private Fund";
        } else if(scbType == "pvd") {
            scbType = "Provident Fund";
        } else if(scbType == "knowledge") {
            scbType = "Knowledge";
        } else if(scbType == "service-channel") {
            scbType = "Service Channel";
        } else if(scbType == "about") {
            scbType = "About";
        }
    }

    var scbamName = $("div[class='head-name'] h1").text() || 
        $("a[class='active']").text() || $("h1").text() || 
        $('meta[property="og:title"]').attr("content") ||
         $("title").text();     

    var scbDescription = $("div[class='col-md-7 col-xs-12 col-sm-7'] p:nth-child(2)").text() || 
        $("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4)").text() ||
        $("p").text() ||     
        $('meta[property="og:description"]').attr("content") || 
        "description";

    return [
      {
        id: id,
        description: scbDescription.replace(/\s+/g, " "),
        image_url: "https://www.scbam.com/medias/upload/home/scbam-logo-en.png",
        name:  scbamName.replace(/\s+/g, " "),
        type: scbType,
        url: scbUrl,
        investor_type: "marvin investorType",
        body_text: "marvin body_text",
        asset_class: "marvin asset_class",
        product_type: "marvin product_type",
        document_type: "marvin document_type",
      },
    ];
}
