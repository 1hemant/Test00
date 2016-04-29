/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getKettleData(userId,workboard_id) {
    var requestData ={"data":{"userId":userId,"workboard-id":workboard_id,"params":{"31":"4"}}};
return $.ajax({
    url: 'http://10.90.21.43:8081/kettle-service/kettle',
    type: 'POST',
    //beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem('accessToken'));},
    data: JSON.stringify(requestData),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    timeout:300000,
    async: true,
    success: function(object) 
    {
       kettleData=object; 
       console.log("kettleData");
	   console.log(kettleData);	
       //return kettleData;
      
    },
	error: function(error)
	{
		alert('Error in getKettleData;' + eval(error));
      
	}
});
  
}