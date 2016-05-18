/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getRepositoryData(userId) {
    var repositoryDat={};
    console.log("getRepositoryData called");
    var requestData ={"data":{"userId":userId}};
    $.ajax({
        url: "http://10.90.21.22:8081/repository-service/getRepository",
        type: "POST",
        data: JSON.stringify(requestData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        
		//beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem("accessToken"));},
        success: function(object)
        { 
           repositoryDat=object;
             
        },
		error: function(error)
		{
			alert('Error in getRepositoryData;' + eval(error));

		}
    });
    console.log("good")
  console.log(repositoryDat)
return repositoryDat;
}
 