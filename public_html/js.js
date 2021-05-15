

$(function () {

    $("#OK").click(ment);
    $("#torol").click(torles);

});

var szovegJSON = '[{"tnev": "Bicikli","db": "2","suly": "12000", "nem": "Férfi","vido": "1969-07-20"}, {"tnev": "Kancsó","db": "10","suly": "400","nem": "Nő","vido": "1999-12-01"}, {"tnev": "Lufi","db": "30","suly": "10","nem": "Nő","vido": "2001-02-02"}]';
var szovegObjectum = JSON.parse(szovegJSON);

function ment() {

    var ujszemely = {};
    ujszemely.tnev = $("#tnev").val();
    ujszemely.db = $("#db").val();
    ujszemely.suly = $("#suly").val();
    if ($("input:radio[name=nem]:checked".val() === "f")) {
        ujszemely.nem = "Férfi";
    } else {
        ujszemely.nem = "Nő";
    }
    ujszemely.vido = $("#vido").val();
    szovegObjectum.push(ujszemely);

    kiir();
}

function kiir() {
    $("article").append("<table>");

    $("article").append("<table>");
//    $("article table").append("<tr><th id="+tnev+">Termék neve:</th><th id="+db+">DB:</th><th id="+suly+">Súly:</th><th id="+nem+">Neme:</th><th id="+vido+">Vásárlás ideje:</th></tr>");

    $("article table").append("<tr>");
    for (var item in szovegObjectum[0]) {
        $("article table tr").append("<th id=" + item + ">" + item + "</th>")
    }

    for (var i = 0; i < szovegObjectum.length; i++) {
        $("article table").append("<tr>");
        for (var item in szovegObjectum[i]) {
            $("article table tr").eq(i + 1).append("<td>" + szovegObjectum[i][item] + "</td>");
        }
        $("article table").append("<input type="+"button"+" id="+"modosit"+" name="+"modosit"+" value="+"Módosít"+">");
    }

    $("th").click(rendez);
    $("#modosit").click(modositas);

}

var irany = false;

function rendez() {
    var id = $(this).attr("id");
    console.log(id);
    if (irany) {
        szovegObjectum.sort(function (a, b) {
            return Number(a[id] > b[id]) - 0.5;
        });
    } else {
        szovegObjectum.sort(function (a, b) {
            return Number(a[id] < b[id]) - 0.5;
        });
    }
    irany = !irany;
    console.log(szovegObjectum);
    kiir();
}

function torles() {
    var id = $(this).attr("id");
    szovegObjectum.splice(this[id], this);  //pozitin, remove
    kiir();
}

function modositas() {
    
}