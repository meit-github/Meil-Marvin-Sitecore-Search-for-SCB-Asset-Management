// Jupiteram extractor function. Change the function to suit your individual needs
function extract(request, response) {
  $ = response.body;

  var url = request.url;
  var id = url.replaceAll("/", "_").replaceAll(":", "_").replaceAll(".", "_");

  var jUrl = $('meta[property="og:url"]').attr("content") || location.href;

  var jupiteramUrlArray = jUrl.split("/");

  var investorType = "Marvin Investor Type";
  if (jupiteramUrlArray[5] != null) {
    investorType = jupiteramUrlArray[5].replace(
      /(\w)(\w*)/g,
      function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      }
    );
  }

  var categoryType = "Marvin Category Type";
  if (jupiteramUrlArray[6] != null) {
    //categoryType = jupiteramUrlArray[6];
    categoryType = jupiteramUrlArray[6]
      .replaceAll("-", " ")
      .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
  }

  //asset_type
  const assetClass = [
    "Alternatives",
    "Shares",
    "Bonds",
    "Multi-asset",
    "Multi-manager",
  ];
  const assetClassRandom = Math.floor(Math.random() * assetClass.length);
  //console.log(assetClassRandom, assetClass[assetClassRandom]);

  //product_type
  const productType = ["Unit Trust", "UK OEIC", "SICAV", "Irish ICVC"];
  const productTypeRandom = Math.floor(Math.random() * productType.length);
  //console.log(productTypeRandom, productType[productTypeRandom]);

  //check image banner
  var bannerImage = $("div.elementor-cta__bg.elementor-bg");
  var imageurl = "";

  if (bannerImage.length >= 1) {
    var bg = bannerImage.css("background-image");
    if (bg != null) {
      imageurl = bg.replace("url(", "").replace(")", "").replace(/\"/gi, "");
    }
  } else {
    imageurl =
      $('meta[property="og:image"]').attr("content") ||
      "https://www.jupiteram.com/uploads/2021/01/899363021e9a2e335d9f89426eed644f/jupiter_logo_cmyk_pos.svg";
  }

  return [
    {
      id: id,
      description:
        $('meta[property="og:description"]').attr("content") || $("p").text(),
      image_url: imageurl,
      name:
        $('meta[property="og:title"]').attr("content") ||
        $("title").text() ||
        $("h1").text(),
      type: categoryType,
      url: jUrl,
      investor_type: investorType,
      body_text: "marvin body text",
      asset_class: (assetClassRandom, assetClass[assetClassRandom]),
      product_type: (productTypeRandom, productType[productTypeRandom]),
      document_type: "Webpage",
    },
  ];
}
