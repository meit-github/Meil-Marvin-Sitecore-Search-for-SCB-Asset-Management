function extract(request, response) {
    $ = response.body;
  
    var url = request.url;
    var id = url.replaceAll("/", "_").replaceAll(":", "_").replaceAll(".", "_");
  
    var scbUrl = $('meta[property="og:url"]').attr("content") || url;

    var scbImageUrl = $('meta[property="og:image"]').attr("content");

    var scbUrlArray = scbUrl.split("/");
    var scbType = "";
    if (scbUrlArray[4] != null) {
    
        scbType = scbUrlArray[4];
        if(scbType == "fund") {
            scbType = "Mutual Fund";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/7401/7401341.png";
                scbImageUrl = "https://www.scbam.com/medias/fund/SCBRM1.jpg";
            }
        } else if(scbType == "pf") {
            scbType = "Private Fund";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/2329/2329260.png";
                scbImageUrl = "https://www.scbam.com/medias/fund/SCBGSIFR.jpg";
            }
        } else if(scbType == "pvd") {
            scbType = "Provident Fund";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/950/950579.png";
                scbImageUrl = "https://www.scbam.com/medias/fund/SCBBLNA.jpg";
                
            }
        } else if(scbType == "knowledge") {
            scbType = "Knowledge";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/2510/2510702.png";
                scbImageUrl = "https://www.scbam.com/medias/fund/SCBRMS50.jpg";
                
            }
        } else if(scbType == "service-channel") {
            scbType = "Service Channel";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/4901/4901662.png";
                scbImageUrl = "https://www.scb.co.th/content/dam/scb/personal-banking/stories-tips/mutual-funds/mutual-funds1.jpg";
            }
        } else if(scbType == "about") {
            scbType = "About";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://static-00.iconduck.com/assets.00/info-icon-2048x2048-tcgtx810.png";
                scbImageUrl = "https://www.scbam.com/medias/fund/SCBCLEANA.jpg";
            }
        } else if(scbType == "knowledge-gloassary") {
            scbType = "Knowledge Glossary";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/4371/4371185.png";
                scbImageUrl = "https://www.scbam.com/medias/fund/SCBGPROPP.jpg";
            }
        } else if(scbType == "news-update") {
            scbType = "News Update";

            if (typeof scbImageUrl === "undefined"){
                //scbImageUrl = "https://cdn-icons-png.flaticon.com/512/2965/2965879.png";
                scbImageUrl = "https://www.scb.co.th/content/dam/scb/personal-banking/stories-tips/esg-investment-6-important-factors/esg-investment-6-important-factors-03.jpg";
            }
        } else {
            scbType = "Others";
        }
    }

    //image
    if (typeof scbImageUrl === "undefined"){
        scbImageUrl = "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1499196985/xf7pgv3lkwuqxiu03lks.png";
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

    //asset_type
    const assetClass = [
        "Alternatives",
        "Shares",
        "Bonds",
        "Multi-asset",
        "Multi-manager",
    ];
    const assetClassRandom = Math.floor(Math.random() * assetClass.length);

    return [
      {
        id: id,
        description: scbDescription.replace(/\s+/g, " "),
        image_url: scbImageUrl,
        name:  scbamName.replace(/\s+/g, " "),
        type: scbType,
        url: scbUrl,
        investor_type: "marvin investorType",
        body_text: "marvin body_text",
        asset_class: (assetClassRandom, assetClass[assetClassRandom]),
        product_type: "marvin product_type",
        document_type: "marvin document_type",
      },
    ];
}
