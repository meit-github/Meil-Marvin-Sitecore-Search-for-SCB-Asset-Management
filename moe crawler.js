function extract(request, response) {
    $ = response.body;
  
    var url = request.url;
    var id = url.replaceAll("/", "_").replaceAll(":", "_").replaceAll(".", "_");
  
    var moeUrl = $('meta[property="og:url"]').attr("content") || url;

    var moeImageUrl = "";

    var moeUrlArray = moeUrl.split("/");
    var moeType = "";


    if (moeUrlArray[3] != null) {
    
        moeType = moeUrlArray[3];
        if(moeType == "preschool") {
            moeType = "Preschool";
            moeImageUrl = "https://www.moe.gov.sg/-/media/moe/mk/media-card/distinctive-singapore-flavour-400-x-267.png";
            
        } else if(moeType == "primary") {
            moeType = "Primary";
            moeImageUrl = "https://live.staticflickr.com/65535/49102922521_1ea1d1eabe_z.jpg";

        } else if(moeType == "secondary") {
            moeType = "Secondary";
            moeImageUrl = "https://s3-ap-southeast-1.amazonaws.com/pap-dr-wp/2019/11/Education-01.jpg";

        } else if(moeType == "post-secondary") {
            moeType = "Post Secondary";
            moeImageUrl = "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2020/11/20/dw-ite-yfc-201120.jpg";

        } else if(moeType == "financial-matters") {
            moeType = "Financial Matters";
            moeImageUrl = "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2020/11/20/dw-ite-yfc-201120.jpg";

        } else if(moeType == "education-in-sg") {
            moeType = "Education in SG";
            moeImageUrl = "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2020/11/20/dw-ite-yfc-201120.jpg";
            
        } 
         else {
            moeType = "Others";
        }
    }

    //image
    if (moeImageUrl == ""){
        moeImageUrl = "https://onecms-res.cloudinary.com/image/upload/s--LcNOFRN---/c_fill,g_auto,h_468,w_830/f_auto,q_auto/ministry-of-education-singapore.png?itok=ONFHGhHr";
    } 
    
    var moeName =  $("h1").text() || 
        $('meta[property="og:title"]').attr("content") ||
         $("title").text() || $("div[class='head-name'] h1").text() || 
         $("a[class='active']").text();     

    var moeDescription = 
        $("p").text() ||     
        $('meta[property="og:description"]').attr("content") || 
        "description";  

    //asset_type
    const assetClass = [
        "EdTalks",
        "Forum Letter Replies",
        "Parliamentary Replies",
        "Press Releases",
        "Speeches",
    ];
    const assetClassRandom = Math.floor(Math.random() * assetClass.length);

    return [
      {
        id: id,
        description: moeDescription.replace(/\s+/g, " "),
        image_url: moeImageUrl,
        name:  moeName.replace(/\s+/g, " "),
        type: moeType,
        url: moeUrl,
        investor_type: "marvin investorType",
        body_text: "marvin body_text",
        asset_class: (assetClassRandom, assetClass[assetClassRandom]),
        product_type: "marvin product_type",
        document_type: "marvin document_type",
      },
    ];
}
