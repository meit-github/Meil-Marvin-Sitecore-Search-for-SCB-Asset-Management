function extract(request, response) {
    $ = response.body;
 
    var url = request.url;
    var id = url.replaceAll("/", "_").replaceAll(":", "_").replaceAll(".", "_");
 
    var scbUrl = $('meta[property="og:url"]').attr("content") || url;
 
    var scbImageUrl = $('meta[property="og:image"]').attr("content") ||
    $(".gridAsset__image")[0].currentSrc ||
    //"https://www.sentosa.gov.sg/images/who-we-are/our-brands/sentosa_logonew.png";
    "https://corp.nhg.com.sg/Style%20Library/Images/logo.jpg";
 
    var scbType = $(".category-pill__title").text() || "Others";
 
    var scbamName =
        $("h1").text() ||
        $('meta[property="og:title"]').attr("content") ||
        $("title").text();    
 
    var scbDescription =
        $("p").text() ||    
        $('meta[property="og:description"]').attr("content");
 
    return [
      {
        id: id,
        description: scbDescription.replace(/\s+/g, " "),
        image_url: scbImageUrl,
        name:  scbamName.replace(/\s+/g, " "),
        type: scbType,
        url: scbUrl,
      },
    ];
}