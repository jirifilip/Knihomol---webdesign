var videa = new Array();
var pocitadlo = 0;

function VideoUdaje(jmeno, odkaz, datumPridani, popisek) {
    this.jmeno = jmeno;
    this.odkaz = odkaz;
    this.datumPridani = datumPridani;
    this.popisek = popisek;
}

videa[0] = new VideoUdaje("Autogramiáda Brandona Sandersona", "https://www.youtube.com/embed/dPo5lnIIpGk", "1.11.2016", "Na tomto videu můžete vidět autogramiádu Brandona Sandersona.");
videa[1] = new VideoUdaje("Trailer na knihu Black Prism", "https://www.youtube.com/embed/k06jBvBQwKQ", "26.10.2016", "Podívejte se již nyní na nový trailer ke knize Black Prism.");
videa[2] = new VideoUdaje("Rozhovor s Brentem Weeksem", "https://www.youtube.com/embed/e0Dvk6MSGDo", "20.10.2016", "Brent Weeks prozrazuje několik informací o jeho nové knize.");
videa[3] = new VideoUdaje("Rozhovor s NK Jemisin", "https://www.youtube.com/embed/HCXWoIwdwMM", "13.10.2016", "O knize Sto tisíc království a mnohém dalším.");
videa[4] = new VideoUdaje("Alastair Reynolds v TedX", "https://www.youtube.com/embed/X4M2IrRR1AU", "25.10.2016", "Video vystoupení britského autora science fiction Alastaira Reynoldse v TedX.");


function posun(cislo) {
    pocitadlo += cislo;
    if (pocitadlo > videa.length - 1)
        pocitadlo = 0;
    if (pocitadlo < 0)
        pocitadlo = videa.length - 1;

    document.getElementById("jmeno").innerText = videa[pocitadlo].jmeno;
    document.getElementById("videoIframe").src = videa[pocitadlo].odkaz;
    document.getElementById("datumPridani").innerText = videa[pocitadlo].datumPridani;
    document.getElementById("popisek").innerText = videa[pocitadlo].popisek;


}

