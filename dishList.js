const dishImgList = [["taco al pastor", "thumbnail/taco_al_pastor.jpg", "taco_al_pastor"], ["koreaanse bibimbap", "thumbnail/bibimbap.jpg", "bibimbap"], ["snelle bami met bladselderij", "thumbnail/snelle_bami.jpg", "snelle_bami"], ["couscousbowl", "thumbnail/couscousbowl.jpg", "couscousbowl"], ["vega schots ontbijt", "thumbnail/schots_ontbijt.jpg", "schots_ontbijt"], ["dahl makhni met pilavrijst", "thumbnail/dahl_makhni.jpg", "dahl_makhni"], ["salade met gegrilde ananas", "thumbnail/salade_met_gegrilde_ananas.jpg", "gegrilde_ananassalade"], ["gado gado", "thumbnail/gado_gado.jpg", "gado_gado"], ["paddenstoelenrisotto", "thumbnail/paddenstoelenrisotto.jpg", "paddenstoelenrisotto"], ["panzanella", "thumbnail/panzanella.jpg", "panzanella"], ["macedonische shopska salade", "thumbnail/shopska_salade.jpg", "shopska_salade"], ["avocado salade", "thumbnail/avocado_salade.png", "avocado_salade"], ["amerikaanse caesar salade", "thumbnail/caesar_salade.jpg", "caesar_salade"], ["chili sin carne met guacamole", "thumbnail/chili_sin_carne.jpg", "chili_sin_carne"], ["zomerse linzensalade", "thumbnail/zomerse_linzensalade.jpg", "zomerse_linzensalade"], ["chocoladefondue", "thumbnail/chocoladefondue.jpg", "chocoladefondue"], ["kokossoep", "thumbnail/kokossoep.jpg", "kokossoep"], ["spaghetti carbonara", "thumbnail/spaghetti_carbonara.png", "spaghetti_carbonara"], ["engelse trifle", "thumbnail/trifle.jpg", "trifle"], ["thaise massamancurry", "thumbnail/massaman_curry.jpg", "massamancurry"], ["thaise noedels (pad thai)", "thumbnail/pad_thai.jpg", "pad_thai"], ["pasta pesto", "thumbnail/pasta_pesto.jpg", "pasta_pesto"], ["pizza", "thumbnail/pizza.jpg", "pizza"], ["mexicaanse tortilla wrap", "thumbnail/wrap.jpg", "tortilla_wrap"], ["franse uiensoep", "thumbnail/uiensoep.jpg", "franse_uiensoep"], ["bami met spinazie", "thumbnail/bami_met_spinazie.jpg", "bami_met_spinazie"], ["kapsalon", "thumbnail/kapsalon.png", "kapsalon"], ["biefstuk chimichurri &#38 gegrilde groenten", "thumbnail/argentijns.jpg", "argentijnse_biefstuk_met_chimichurri_en_gegrilde_groenten"], ["griekse vega gyros wraps", "thumbnail/gyros_wrap.jpg", "griekse_vega_gyros_wraps"], ["nachos", "thumbnail/nachos.jpg", "nachos"], ["zomerse salade", "thumbnail/zomerse_salade.png", "zomerse_salade"], ["roze ontbijtbowl", "thumbnail/ontbijtbowl.jpg", "ontbijtbowl"], ["chocolade cheesecake", "thumbnail/cheesecake.png", "cheesecake"], ["plaattaart met spinazie en peer", "thumbnail/plaattaart.jpg", "plaattaart"], ["surinaamse roti", "thumbnail/roti.png", "roti"], ["oranje slamdunk", "thumbnail/slamdunk.png", "slamdunk"], ["ananas beignets", "thumbnail/beignets.png", "beignets"], ["cr&#234pe met fruit", "thumbnail/crepe.png", "crepe"], ["zwitserse kaasfondue", "thumbnail/kaasfondue.png", "kaasfondue"], ["kip in de hoed", "thumbnail/kip_in_de_hoed.png", "kip_in_de_hoed"], ["zalm met pastasalade", "thumbnail/zalm.png", "zalm"], ["biet wellington", "thumbnail/bietwellington.jpg", "biet_wellington"], ["champignonragout", "thumbnail/champignonragout.jpg", "champignonragout"], ["enchiladas", "thumbnail/enchiladas.png", "enchiladas"], ["falafelwrap", "thumbnail/falafel.png", "falafel"], ["marokkaanse tajine", "thumbnail/tajine.png", "tajine"], ["tonijncocktail", "thumbnail/tonijncocktail.jpg", "tonijncocktail"], ["veganburger", "thumbnail/veganburger.jpg", "veganburger"], ["bieten carpaccio", "thumbnail/bietencarpaccio.png", "bieten_carpaccio"], ["indonesische rendang van jackfruit", "thumbnail/rendang.png", "rendang"], ["hawaiiaanse pok&#233 bowl", "thumbnail/pokebowl.png", "pokebowl"], ["maki sushi", "thumbnail/sushi.png", "maki_sushi"], ["appelroosjes", "thumbnail/appelroosjes.png", "appelroosjes"], ["indonesische vegetarische balletjes", "thumbnail/indonesische_balletjes.png", "indonesische_balletjes"], ["blauwe taart", "thumbnail/blauwe_taart.png", "blauwe_taart"], ["schotse cranachan", "thumbnail/cranachan.png", "cranachan"], ["zuurvlega", "thumbnail/zuurvlega.png", "zuurvlega"], ["varkenshaas in kriek", "thumbnail/varkenshaas.png", "varkenshaas_in_kriek"], ["geroosterde aubergine", "thumbnail/geroosterde_aubergine.png", "geroosterde_aubergine"], ["hachvega", "thumbnail/hachvega.jpg", "hachvega"], ["tropische pepernoten", "thumbnail/tropische_pepernoten.png", "tropische_pepernoten"], ["enge aardappels", "thumbnail/enge_aardappels.png", "enge_aardappels"], ["spaanse paella", "thumbnail/paella.png", "paella"], ["italiaanse caponata", "thumbnail/caponata.png", "caponata"], ["coq au vin", "thumbnail/coq_au_vin.png", "coq_au_vin"], ["hongaarse goulash", "thumbnail/goulash.png", "goulash"], ["groene smoothie", "thumbnail/groene_smoothie.png", "groene_smoothie"], ["albanese byrek met spinazie", "thumbnail/byrek.png", "byrek"], ["citroen muntthee", "thumbnail/citroen_muntthee.png", "citroen_muntthee"], ["indiase dahl linzencurry", "thumbnail/dahl.jpg", "dahl"], ["indiase kofta curry", "thumbnail/kofta_curry.jpg", "kofta_curry"], ["sri lankaanse kottu", "thumbnail/kottu.png", "kottu"], ["ijslandse lamssoep", "thumbnail/lamssoep.png", "lamssoep"], ["paksoi noedels met garnalen", "thumbnail/paksoi_noedels.png", "paksoi_noedels"], ["sri lankaanse pompoen curry", "thumbnail/pompoencurry.png", "pompoencurry"], ["indiase tikka masala", "thumbnail/tikka_masala.png", "tikka_masala"], ["limburgs friet zoervleis", "thumbnail/zoervleis.png", "zoervleis"], ["dadels met spek en kaas", "thumbnail/dadels.png", "dadels"], ["mexicaanse huevos rancheros", "thumbnail/huevos_rancheros.png", "huevos_rancheros"], ["thaise mango sticky rice", "thumbnail/mango_sticky_rice.png", "mango_sticky_rice"], ["quesadilla", "thumbnail/quesadillas.png", "quesadilla"], ["indonesische kippensoep (soto ajam)", "thumbnail/soto_ajam.png", "indonesische_kippensoep"], ["spinaziesoep", "thumbnail/spinaziesoep.png", "spinaziesoep"], ["pompoensoep", "thumbnail/pompoensoep.jpg", "pompoensoep"], ["vietnamese summer rolls", "thumbnail/vietnamese_summer_rolls.png", "summer_rolls"], ["japanse beef teriyaki", "thumbnail/beef_teriyaki.png", "beef_teriyaki"], ["bloody mary cocktail", "thumbnail/bloody_mary.png", "bloody_mary"], ["franse bouillabaisse", "thumbnail/franse_bouillabaisse.png", "bouillabaisse"], ["gnocchi", "thumbnail/gnocchi.png", "gnocchi"], ["vega ku lo yuk", "thumbnail/ku_lo_yuk.jpg", "ku_lo_yuk"], ["thaise zoetzure curry", "thumbnail/zoetzure_curry.jpg", "zoetzure_curry"], ["black cherry kiss cocktail", "thumbnail/black_cherry_kiss_cocktail.png", "black_cherry_kiss_cocktail"], ["cottage pie", "thumbnail/cottage_pie.png", "cottage_pie"], ["cubanos", "thumbnail/cubanos.png", "cubanos"], ["vietnamese filodeegloempia uit de airfryer", "thumbnail/filodeegloempia.png", "filodeegloempia"], ["finse witte kool rolletjes", "thumbnail/kaalikaaryle.png", "finse_witte_kool_rolletjes"], ["strawberry daiquiri cocktail", "thumbnail/strawberry_daiquiri.png", "strawberry_daiquiri"], ["vietnamese pannenkoeken (banh xeo)", "thumbnail/vietnamese_pannenkoeken.png", "vietnamese_pannenkoeken"], ["appeltosti", "thumbnail/appeltosti.png", "appeltosti"], ["chorizosoep", "thumbnail/chorizo_soep.png", "chorizosoep"], ["koreaanse kip", "thumbnail/koreaanse_kip.png", "koreaanse_kip"], ["pannenkoek", "thumbnail/pannenkoek.png", "pannenkoek"], ["hutspot uit eigen land", "thumbnail/hutspot.png", "hutspot"], ["kersthuisje", "thumbnail/kersthuisje.jpg", "kersthuisje"], ["pompoenrollade", "thumbnail/pompoenrollade.jpg", "pompoenrollade"], ["spitskoolsoep", "thumbnail/spitskoolsoep.jpg", "spitskoolsoep"], ["shakshuka", "thumbnail/shakshuka.jpg", "shakshuka"], ["spaanse tortilla de patata", "thumbnail/tortilla_de_patata.png", "tortilla_de_patata"]];
