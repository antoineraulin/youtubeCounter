//extension du DOM
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

//déclaration des variables
var initialCount;
var initialName;
var resetCount;
var initialCount2;
var initialName2;
var resetCount2;
var time = false;
var time2 = false;
var time3 = false;
var i = null;
var myVar;
var section2inuse = false;



//fonctions

function getyear(){
        var year = new Date().getFullYear();
        document.getElementById("copyright").innerHTML = "Copyright &copy; Antoine Raulin & Dimitri Mades "+year;
        document.getElementById("copyright").setAttribute("style", "font-family: Arial;");
    }

function displayStopWatch(){
    if(time != true){
	document.getElementById('stopWatchDiv').style.visibility = "visible";
	time = true;
	}else if(time == true){
	document.getElementById('stopWatchDiv').style.visibility = "hidden";
		time = false;
	}
}

function httpGet1(theData)
{
 $.ajax({
    type:     "GET",
    url:      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+theData+"&key=AIzaSyAYITnYveJdE2wMxZUNnJihVmWhVSz01zg",
    dataType: "jsonp",
    success: function(data1){
        if(resetCount != true){
            var count = parseInt(data1['items'][0]['statistics']['subscriberCount']) - initialCount;
            if (count > 0) {
                $('#odometer2').html(Math.abs(count));
                $('#odometer2').css('color', 'green');
            }else{
                $('#odometer2').html(-Math.abs(count));
                $('#odometer2').css('color', 'red');
            }
            
        }else if(resetCount == true){
            resetCount = false;
            initialCount = parseInt(data1['items'][0]['statistics']['subscriberCount']);
            stop();
            reset();
            start();
            
        }
	$('#odometer').html(data1['items'][0]['statistics']['subscriberCount']);
    }
});
}
function httpGet2()
{
    var ID2;
    if(gup('q') != null){ID2 = gup('q');document.getElementById('in1').setAttribute('value', gup('q'));}else{ID2 = document.getElementById("in1").value;}
    document.getElementById("odometer").style.visibility = "hidden";
    document.getElementById("odometer2").style.visibility = "hidden";
    var ID11 = document.getElementById("in1").value;
    if(ID2 != ID11){ID2 = ID11}else{}
    if(ID2 != ""){
        if(ID2 != initialName){initialName = ID2;resetCount = true;}
        document.getElementById("odometer").style.visibility = "visible";
        document.getElementById("odometer2").style.visibility = "visible";
 $.ajax({
    type:     "GET",
    url:      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBU_oWEIULi3-n96vWKETYCMsldYDAlz2M&part=snippet&q="+ID2+"&type=channel",
    dataType: "jsonp",
    success: function(data1){
	var thedata = data1['items'][0]['id']['channelId'];
        httpGet1(thedata);
        document.getElementById('dataSave').setAttribute('value', 'https://antoineraulin.github.io/youtubeCounter/index.html?q='+ID2);
    }
});
    if(section2inuse == true){
        var urlbegin = document.getElementById('dataSave').getAttribute('value');
        var urlplus = urlbegin + "&q2="+document.getElementById("in2").value;
        document.getElementById('shareInput').setAttribute('value', urlplus);
    }else{
        var urlbegin = document.getElementById('dataSave').getAttribute('value');
        document.getElementById('shareInput').setAttribute('value', urlbegin);
    }
    }
setTimeout(httpGet2, 600);
}
function httpGet12(theData)
{
 $.ajax({
    type:     "GET",
    url:      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+theData+"&key=AIzaSyAYITnYveJdE2wMxZUNnJihVmWhVSz01zg",
    dataType: "jsonp",
    success: function(data1){
        if(resetCount2 != true){
            var count = parseInt(data1['items'][0]['statistics']['subscriberCount']) - initialCount2;
            if (count > 0) {
                $('#odometer22').html(Math.abs(count));
                $('#odometer22').css('color', 'green');
            }else{
                $('#odometer22').html(-Math.abs(count));
                $('#odometer22').css('color', 'red');
            }
            
        }else if(resetCount2 == true){
            resetCount2 = false;
            initialCount2 = parseInt(data1['items'][0]['statistics']['subscriberCount']);
            stop();
            reset();
            start();
        }
	$('#odometer12').html(data1['items'][0]['statistics']['subscriberCount']);
    }
});
}
function httpGet22()
{
    var ID2;
    if(gup('q2') != null){ID2 = gup('q2');document.getElementById('in2').setAttribute('value', gup('q2'));}else{ID2 = document.getElementById("in2").value;}
    document.getElementById("odometer12").style.visibility = "hidden";
    document.getElementById("odometer22").style.visibility = "hidden";
    var ID11 = document.getElementById("in2").value;
    if(ID2 != ID11){ID2 = ID11}else{}
    if(ID2 != ""){
        if(ID2 != initialName2){initialName2 = ID2;resetCount2 = true;}
        document.getElementById("odometer12").style.visibility = "visible";
        document.getElementById("odometer22").style.visibility = "visible";
 $.ajax({
    type:     "GET",
    url:      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBU_oWEIULi3-n96vWKETYCMsldYDAlz2M&part=snippet&q="+ID2+"&type=channel",
    dataType: "jsonp",
    success: function(data1){
	var thedata = data1['items'][0]['id']['channelId'];
        httpGet12(thedata);
    }
});}
myVar = setTimeout(httpGet22, 600);
}

function fullScreen(){
	if(time != true){
	document.getElementById('navbar').style.visibility = "hidden";
	document.getElementById("in1").style.visibility = "hidden";
    document.getElementById("in2").style.visibility = "hidden";
    document.getElementById("copyright").style.visibility = "hidden";
	time = true;
	}else if(time == true){
		document.getElementById('navbar').style.visibility = "visible";
	document.getElementById("in1").style.visibility = "visible";
    document.getElementById("in2").style.visibility = "visible";
    document.getElementById("copyright").style.visibility = "visible";
		time = false;
	}
	
}

function begin(){
    document.getElementById("section2").style.height = "0px";
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS){
        var element = document.getElementById("dialogPopUp");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById('shareButton').setAttribute("onclick", "share();");
    }
    if(gup('q2') != null){
        document.getElementById('section2').style.visibility = "visible";
            document.getElementById("section2").style.height = "";
            document.getElementById('odometer12').style.visibility = "visible";
            document.getElementById('odometer22').style.visibility = "visible";
            document.getElementById('in2').style.visibility = "visible";
            document.getElementById('label2').style.visibility = "visible";
            document.getElementById("add").innerHTML = "-";
            section2inuse = true;
            httpGet22();
        }
}

function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function showStopWatch(){
    document.getElementById('time').style.visibility = "visible";
}
function hideStopWatch(){
    document.getElementById('time').style.visibility = "hidden";
}

function add(){
        if(time2 != true){
        document.getElementById('section2').style.visibility = "visible";
            document.getElementById("section2").style.height = "";
            document.getElementById('odometer12').style.visibility = "visible";
            document.getElementById('odometer22').style.visibility = "visible";
            document.getElementById('in2').style.visibility = "visible";
            document.getElementById('label2').style.visibility = "visible";
            document.getElementById("add").innerHTML = "-";
            httpGet22();
            section2inuse = true;
            time2 = true;
        }else if(time2 == true){
            
            clearTimeout(myVar);
            document.getElementById('section2').style.visibility = "hidden";
            document.getElementById("section2").style.height = "0px";
            document.getElementById('odometer12').style.visibility = "hidden";
            document.getElementById('odometer22').style.visibility = "hidden";
            document.getElementById('in2').style.visibility = "hidden";
            document.getElementById('label2').style.visibility = "hidden";
            document.getElementById("add").innerHTML = '<i class="material-icons" role="presentation">add</i><span class="visuallyhidden">Add</span>';
            section2inuse = false;
            time2 = false;
        }
    }

function showSnackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

share(){
    if(section2inuse == true){
        var urlbegin = document.getElementById('dataSave').getAttribute('value');
        var urlplus = urlbegin + "&q2="+document.getElementById("in2").value;
        prompt('lien à partager:', urlplus);
    }else{
        var urlbegin = document.getElementById('dataSave').getAttribute('value');
        prompt('lien à partager:', urlbegin);
    }
}