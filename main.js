
var problems = [], OJ, pb;

var URLS = {
  "CF": "https://codeforces.com/api/"
};

var patterns = {
	"CF": /^([0-9]+)([A-Z]{1}[0-9]?)$/
}


$("#oj_sel").change(function(){
	//console.log("Changed to " + $("#oj_sel").val() + "!");
	OJ = $("#oj_sel").val();
	if(OJ == "Select your OJ!"){
		$("#addpbbutton").attr("class", "form-control btn btn-info disabled");
		return;
	} 
	console.log("Valid");
	$("#addpbbutton").attr("class", "form-control btn btn-info");
	if(OJ == "CF"){
		$("#pb_sel").attr("placeholder", "Problem ID (ex. 123A)");
	} else if(OJ == "TIOJ"){
		$("#pb_sel").attr("placeholder", "Problem ID (ex. 1840)");
	}
});

$("#addpbbutton").on("click", function(){
	pb = $("#pb_sel").val();
	console.log(pb);
	var matches = pb.split(patterns[OJ]);
	if(matches == null) return;
	console.log(matches);
	if(OJ == "CF"){
		if(matches.length != 4) return;
		var round = matches[1], id = matches[2];
		var url = "https://codeforces.com/problemset/problem/" + round + "/" + id;
		console.log("url");
	} else {

	}
});




