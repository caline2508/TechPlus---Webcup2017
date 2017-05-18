AWS.config.apiVersions = {
  lexruntime: '2016-11-28',
  // other service API versions
};

var lexruntime = new AWS.LexRuntime({endpoint:'runtime.lex.us-east-1.amazonaws.com', accessKeyId:'AKIAJVU2S7OZEPOJL5ZA', secretAccessKey:'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', region:"us-east-1"});

function process() {
	
	var inputtext = document.getElementById("inputrequest").value;
	console.log(inputtext);

	var params = {
		botAlias: '$LATEST', /* required */
		botName: 'VopakBot', /* required */
		inputText: inputtext , /* required */
		userId:'tx'  /* required */
	};

	lexruntime.postText(params, function(err, data) {
		if (err){
				console.log(err, err.stack); // an error occurred
                document.getElementById("response").innerHTML = err;
				
		} 
		else{
				console.log(data); // successful response
                 document.getElementById("response").innerHTML = data.message;				
		}
				
	});
}	
