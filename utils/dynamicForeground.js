const Me = imports.misc.extensionUtils.getCurrentExtension();

/* exported DynamicForeground */
var DynamicForeground = class DynamicForeground {
    constructor() {}

    computeLuminance(r, g, b) {
        let luminanceTable = [
            0,
            .0003035269835488375,
            .000607053967097675,
            .0009105809506465125,
            .00121410793419535,
            .0015176349177441874,
            .001821161901293025,
            .0021246888848418626,
            .0024282158683907,
            .0027317428519395373,
            .003035269835488375,
            .003346535763899161,
            .003676507324047436,
            .004024717018496307,
            .004391442037410293,
            .004776953480693729,
            .005181516702338386,
            .005605391624202723,
            .006048833022857054,
            .006512090792594475,
            .006995410187265387,
            .007499032043226175,
            .008023192985384994,
            .008568125618069307,
            .009134058702220787,
            .00972121732023785,
            .010329823029626936,
            .010960094006488246,
            .011612245179743885,
            .012286488356915872,
            .012983032342173012,
            .013702083047289686,
            .014443843596092545,
            .01520851442291271,
            .01599629336550963,
            .016807375752887384,
            .017641954488384078,
            .018500220128379697,
            .019382360956935723,
            .0202885630566524,
            .021219010376003555,
            .022173884793387385,
            .02315336617811041,
            .024157632448504756,
            .02518685962736163,
            .026241221894849898,
            .027320891639074894,
            .028426039504420793,
            .0295568344378088,
            .030713443732993635,
            .03189603307301153,
            .033104766570885055,
            .03433980680868217,
            .03560131487502034,
            .03688945040110004,
            .0382043715953465,
            .03954623527673284,
            .04091519690685319,
            .042311410620809675,
            .043735029256973465,
            .04518620438567554,
            .046665086336880095,
            .04817182422688942,
            .04970656598412723,
            .05126945837404324,
            .052860647023180246,
            .05448027644244237,
            .05612849004960009,
            .05780543019106723,
            .0595112381629812,
            .06124605423161761,
            .06301001765316767,
            .06480326669290577,
            .06662593864377289,
            .06847816984440017,
            .07036009569659588,
            .07227185068231748,
            .07421356838014963,
            .07618538148130785,
            .07818742180518633,
            .08021982031446832,
            .0822827071298148,
            .08437621154414882,
            .08650046203654976,
            .08865558628577294,
            .09084171118340768,
            .09305896284668745,
            .0953074666309647,
            .09758734714186246,
            .09989872824711389,
            .10224173308810132,
            .10461648409110419,
            .10702310297826761,
            .10946171077829933,
            .1119324278369056,
            .11443537382697373,
            .11697066775851084,
            .11953842798834562,
            .12213877222960187,
            .12477181756095049,
            .12743768043564743,
            .1301364766903643,
            .13286832155381798,
            .13563332965520566,
            .13843161503245183,
            .14126329114027164,
            .14412847085805777,
            .14702726649759498,
            .14995978981060856,
            .15292615199615017,
            .1559264637078274,
            .1589608350608804,
            .162029375639111,
            .1651321945016676,
            .16826940018969075,
            .1714411007328226,
            .17464740365558504,
            .17788841598362912,
            .18116424424986022,
            .184474994500441,
            .18782077230067787,
            .19120168274079138,
            .1946178304415758,
            .19806931955994886,
            .20155625379439707,
            .20507873639031693,
            .20863687014525575,
            .21223075741405523,
            .21586050011389926,
            .2195261997292692,
            .2232279573168085,
            .22696587351009836,
            .23074004852434915,
            .23455058216100522,
            .238397573812271,
            .24228112246555486,
            .24620132670783548,
            .25015828472995344,
            .25415209433082675,
            .2581828529215958,
            .26225065752969623,
            .26635560480286247,
            .2704977910130658,
            .27467731206038465,
            .2788942634768104,
            .2831487404299921,
            .2874408377269175,
            .29177064981753587,
            .2961382707983211,
            .3005437944157765,
            .3049873140698863,
            .30946892281750854,
            .31398871337571754,
            .31854677812509186,
            .32314320911295075,
            .3277780980565422,
            .33245153634617935,
            .33716361504833037,
            .3419144249086609,
            .3467040563550296,
            .35153259950043936,
            .3564001441459435,
            .3613067797835095,
            .3662525955988395,
            .3712376804741491,
            .3762621229909065,
            .38132601143253014,
            .386429433787049,
            .39157247774972326,
            .39675523072562685,
            .4019777798321958,
            .4072402119017367,
            .41254261348390375,
            .4178850708481375,
            .4232676699860717,
            .4286904966139066,
            .43415363617474895,
            .4396571738409188,
            .44520119451622786,
            .45078578283822346,
            .45641102318040466,
            .4620769996544071,
            .467783796112159,
            .47353149614800955,
            .4793201831008268,
            .4851499400560704,
            .4910208498478356,
            .4969329950608704,
            .5028864580325687,
            .5088813208549338,
            .5149176653765214,
            .5209955732043543,
            .5271151257058131,
            .5332764040105052,
            .5394794890121072,
            .5457244613701866,
            .5520114015120001,
            .5583403896342679,
            .5647115057049292,
            .5711248294648731,
            .5775804404296506,
            .5840784178911641,
            .5906188409193369,
            .5972017883637634,
            .6038273388553378,
            .6104955708078648,
            .6172065624196511,
            .6239603916750761,
            .6307571363461468,
            .6375968739940326,
            .6444796819705821,
            .6514056374198242,
            .6583748172794485,
            .665387298282272,
            .6724431569576875,
            .6795424696330938,
            .6866853124353135,
            .6938717612919899,
            .7011018919329731,
            .7083757798916868,
            .7156935005064807,
            .7230551289219693,
            .7304607400903537,
            .7379104087727308,
            .7454042095403874,
            .7529422167760779,
            .7605245046752924,
            .768151147247507,
            .7758222183174236,
            .7835377915261935,
            .7912979403326302,
            .799102738014409,
            .8069522576692516,
            .8148465722161012,
            .8227857543962835,
            .8307698767746546,
            .83879901174074,
            .846873231509858,
            .8549926081242338,
            .8631572134541023,
            .8713671191987972,
            .8796223968878317,
            .8879231178819663,
            .8962693533742664,
            .9046611743911496,
            .9130986517934192,
            .9215818562772946,
            .9301108583754237,
            .938685728457888,
            .9473065367331999,
            .9559733532492861,
            .9646862478944651,
            .9734452903984125,
            .9822505503331171,
            .9911020971138298,
            1
        ];
        let redLuminance = 0.2126 * luminanceTable[r];
        let greenLuminance = 0.7152 * luminanceTable[g];
        let blueLuminance = 0.0722 * luminanceTable[b];
        luminanceTable = null; // Unload to ensure garbage collection since the table is relatively large
        return redLuminance + greenLuminance + blueLuminance + .05;
    }

    computeContrast(fgColor, bgColor) {
        let bgLuminance = this.computeLuminance(bgColor.r, bgColor.g, bgColor.b);
        let fgLuminance = this.computeLuminance(fgColor.r, fgColor.g, fgColor.b);

        return Math.max(bgLuminance, fgLuminance) / Math.min(bgLuminance, fgLuminance);
    }

    chooseContrastColor(color, darkColor, lightColor) {
        let darkContrast = this.computeContrast(color, darkColor);
        let lightContrast = this.computeContrast(color, lightColor);
        return (darkContrast >= lightContrast ? darkColor : lightColor);
    }

    parseHexColor(color) {
        color = color.replace("#","");
        let r = parseInt(color.substring(0,2),16);
        let g = parseInt(color.substring(2,4),16);
        let b = parseInt(color.substring(4,6),16);
        return {r,g,b};
    }

    generateCSSFromColor(color) {
        return `rgb(${color.r},${color.g},${color.b})`;
    }
}