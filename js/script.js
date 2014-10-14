$(document).ready(function(){
    
    var init = function(){
        $('textarea').autosize();
	$('#check_button').click(function(){
	    checkSpelling();
	});
    };

    var checkSpelling = function(){
	// split words by whitespace
	words = $('textarea')[0].value.split(/[ \n]+/);

	// deal with empty input
	if (words[0]=="" && words.length==1){words = [];}

	// get context for charts
	var ctx1 = $("#chart1").get(0).getContext("2d");
	var ctx2 = $("#chart2").get(0).getContext("2d");
	
	var count = 0; // num wrong words
	var errors = [];

	for (var i=0; i<words.length; i++){
	    var str = words[i];
	    // get rid of punctuation
	    str = str.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, "");
	    if (!$Spelling.BinSpellCheck(str)){
		count++;
		errors.push(str);
	    }
	}

	// calculate number of errors by Length
	var errorsByLength = [0,0,0,0,0];
	for (var i=0; i<errors.length; i++) {
	    if (errors[i].length<=4){
		errorsByLength[0] = errorsByLength[0]+1;
	    } else if (errors[i].length>10){
		errorsByLength[4] = errorsByLength[4]+1;
	    } else {
		var index = Math.floor((errors[i].length-3)/2);
		errorsByLength[index] = errorsByLength[index]+1;
	    }
	}

	// number of misspelled words
	var data1 = [
	    {
		value: errors.length,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Incorrect"
	    },
	    {
		value: words.length - errors.length,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Correct"
	    }
	]
	
	// misspelled words by word length
	var data2 = [
	    {
		value: errorsByLength[4],
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: ">11 letters"
	    },
	    {
		value:  errorsByLength[3],
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "9-10 letters"
	    },
	    {
		value: errorsByLength[2],
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "7-8 letters"
	    },
	    {
		value: errorsByLength[1],
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "5-6 letters"
	    },
	    {
		value: errorsByLength[0],
		color: "#4D5360",
		highlight: "#616774",
		label: "<5 letters"
	    }
	];

	if (errors.length == 0 && (words.length - errors.length)!=0){
	    data2 = [{
		value: 1,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "No misspellings"
	    }];
	}
	
	var myPieChart1 = new Chart(ctx1).Pie(data1);
	var myPieChart2 = new Chart(ctx2).Pie(data2);

	for (var i=0; i<errors.length; i++) {
	    $('#error_list').append('<li>'+errors[i]+'</li>');
	}
    };

    init();

});
