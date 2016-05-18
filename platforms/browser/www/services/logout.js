function getWorkboardData(userId,workboard_id) {
var requestData = {"data":{"userId":userId,"workboard_id":workboard_id}};
return $.ajax({
     url: "http://10.90.21.22:8081/logout-service/logout",               
     type: "POST",
     data: JSON.stringify(requestData),
     contentType: 'application/json; charset=utf-8',
     dataType: 'json',
     
		//beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem("accessToken"));},
     success: function(object)
     { 
               workboardData=object;
               console.log("workboardData");
				console.log(workboardData);
        //return workboardData;
     },
	error: function(error)
	{
		alert('Error in getWorkboardData;' + eval(error));
	}
  });
  
}
