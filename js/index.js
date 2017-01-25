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
    }

function httpGet1(theData)
{
 $.ajax({
    type:     "GET",
    url:      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+theData+"&key=AIzaSyAYITnYveJdE2wMxZUNnJihVmWhVSz01zg",
    dataType: "jsonp",
    success: function(data1){
        console.log(data1['items'][0]['statistics']['subscriberCount']);
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
        console.log(data1['items'][0]['statistics']['subscriberCount']);
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
	time = true;
	}else if(time == true){
		document.getElementById('navbar').style.visibility = "visible";
	document.getElementById("in1").style.visibility = "visible";
		time = false;
	}
	
}


function add(){
        if(time2 != true){
        document.getElementById('div1').style.width = "50%";
        document.getElementById('div2').style.width = "50%";
        document.getElementById('div2').style.visibility = "visible";
        document.getElementById('addButton').setAttribute( 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAACdUlEQVR4Xu2ZwU0DQRAEZyIAMoEMyAAywmQEGTgDyAQ7gkWH7uMP0vaKpgXl97V7XHVzkve6+EQT6OjpGK4QFH4TIAhB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NghB4QTCx2ODEBROIHw8NugvChpj3FbVU1XdV9V1+G/87fFOVXWsqufufp8dZnqDdjlvs0Vc/0XgblaSIuilqh4ALhF47e7HmaQi6IPH2gzii2tP3X0zk1YEjZkCrr0k0N1TzKcu3qrGGAhauOsQtADPEUWQg/JCB4IW4DmiCHJQXuhA0AI8RxRBDsoLHQ5B29nS1cKM/zl67u6ps0vlfxBHPfotZjnq2U6yOSzVJP38Yel+mrBJOuyvG3jcfS/rvL9uOMyeZG9fO/2I024cUioBBKnkTDkEmUCrNQhSyZlyCDKBVmsQpJIz5RBkAq3WIEglZ8ohyARarUGQSs6UQ5AJtFqDIJWcKYcgE2i1BkEqOVMOQSbQag2CVHKmHIJMoNUaBKnkTDkEmUCrNQhSyZlyCDKBVmsQpJIz5RBkAq3WIEglZ8ohyARarUGQSs6UQ5AJtFqDIJWcKYcgE2i1BkEqOVMOQSbQag2CVHKmHIJMoNUaBKnkTDkEmUCrNQhSyZlyCDKBVmsQpJIz5RBkAq3WIEglZ8ohyARarUGQSs6UQ5AJtFqDIJWcKfcJ9OtMaVd2ZVcAAAAASUVORK5CYII=' );
            time2 = true;
        }else if(time2 == true){
            document.getElementById('div1').style.width = "100%";
            document.getElementById('div2').style.width = "0px";
            document.getElementById('div2').style.visibility = "hidden";
            document.getElementById('odometer12').remove();
            document.getElementById('odometer22').remove();
            document.getElementById('addButton').setAttribute( 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAC/klEQVR4Xu2c0XEUQQwFpQiATCADMoCMMBlBBmQAmWBHMNRS90NRcKvR05xmq/09eqvp3jmX16d146c1AW/dHc0ZgprfBAhCUHMCzdvjBCGoOYHm7XGCENScQPP2OEEIak6geXucIATpCYwx3prZJzN7b2av71zh2cy+mdlnd/+h76Y2cbsTdJPzfRLLu90k7Sjoi5l9mBT01d0/TtY+pGxHQT9PfKz9C+azu795COnJi+4oaEzu9XeZu2+1562aPQCPMRCUuUOraxFUTTiZj6AkwOpyBFUTTuYjKAmwuhxB1YST+QhKAqwuR1A14WQ+gpIAq8sRVE04mY+gJMDqcgRVE07mIygJsLocQdWEk/kISgKsLkdQNeFkPoKSAKvLEVRNOJmPoCTA6nIEVRNO5iMoCbC6HEHVhJP5CEoCrC5HUDXhZD6CkgCryxFUTTiZj6ATAIPzOScSL70kNZ8U/m52cj7n0iZObC48nzQjKDOfc2IPl14Snk+aEZSZz7k0/RObC88nzQhKjX+c2MSll0TnkxC0+HZA0GLg0cshKEps8XoELQYevRyCosQWr0fQYuDRyyEoSmzx+hWCjmdLrxbv6yqXe3H3e+8W+mOvM38H8ahn/nZZ8qjneNPU7MuM5rd2jcr6h6UHp9sT7afb68D4uPv/zfNyex3a08ybtsIfcY++kfmH3aMN3Lk+ghDUigAfca10/N0MghCkJcDvIC1PeRqC5Ei1gQjS8pSnIUiOVBuIIC1PeRqC5Ei1gQjS8pSnIUiOVBuIIC1PeRqC5Ei1gQjS8pSnIUiOVBuIIC1PeRqC5Ei1gQjS8pSnIUiOVBuIIC1PeRqC5Ei1gQjS8pSnIUiOVBuIIC1PeRqC5Ei1gQjS8pSnjTEy80nh+Rz5BoKBO35xMTOfFJ7PCfKUL99RUGY+KTyfIyceDNxO0LG/4HxSaj4nyFO+fEtBcgqNAxHUWM7RGoIQ1JxA8/Y4QQhqTqB5e5wgBDUn0Lw9ThCCmhNo3h4nCEHNCTRv7xfJhVh4j4N+TQAAAABJRU5ErkJggg==' );
            time2 = false;
        }
    }
