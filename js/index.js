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
var i = null;



//fonctions

function getyear(){
        var year = new Date().getFullYear();
        document.getElementById("copyright").innerHTML = "Copyright &copy; Antoine Raulin & Dimitri Mades "+year;
        document.getElementById("copyright").setAttribute("style", "font-family: Arial;");
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
        }
	$('#odometer').html(data1['items'][0]['statistics']['subscriberCount']);
    }
});
}
function httpGet2()
{
    document.getElementById("odometer").style.visibility = "hidden";
    document.getElementById("odometer2").style.visibility = "hidden";
var ID2 = document.getElementById("in1").value;
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
    }
});}
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
        }
	$('#odometer12').html(data1['items'][0]['statistics']['subscriberCount']);
    }
});
}
function httpGet22()
{
    document.getElementById("odometer12").style.visibility = "hidden";
    document.getElementById("odometer22").style.visibility = "hidden";
var ID2 = document.getElementById("in2").value;
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
setTimeout(httpGet22, 600);
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


function add(){
        if(time2 != true){
        document.getElementById('div1').style.width = "50%";
        document.getElementById('div2').style.width = "50%";
        document.getElementById('div2').style.visibility = "visible";
        document.getElementById('addButton').setAttribute( 'src', 'images/-.png' );
            time2 = true;
        }else if(time2 == true){
            document.getElementById('div1').style.width = "100%";
            document.getElementById('div2').style.width = "0px";
            document.getElementById('div2').style.visibility = "hidden";
	    try{
            document.getElementById('odometer12').remove();
            document.getElementById('odometer22').remove();
	    }
	    catch(err) {}
            document.getElementById('addButton').setAttribute( 'src', 'images/+.png' );
            time2 = false;
        }
    }
