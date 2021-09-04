document.querySelector('#push').onclick= function () {
	var taskNo =0;
	// if (
 //    document.querySelector("#input").value.length == 0 ||
 //    document.querySelector("#date").value.length == 0
 //  )
	if(document.querySelector('#input').value.length==0){
		alert("enter task");
	} 
	
	else{
		var dateControl = document.querySelector('input[type="datetime-local"]');
		// dateControl.value = '2017-06-01';
		console.log(dateControl.value); 
		var x= Date.parse(dateControl.value);
		taskNo++;
		document.querySelector('#tasks').innerHTML+= `
		    <div class="task">
		    <div class="taskText">
		    <span id="message"></span>
		    </div>
		    <div task="taskdtl">
                <span id="taskname">
                    ${document.querySelector('#input').value}
                    ${dateControl.value}
                </span>
                <button class="done" id="btn" >Mark as done</button>
                </div>
		    </div>   
		  `;
		  var today = new Date();
		  var y = today.getMilliseconds()
		  if (x< Date.now())
		  {
		  	alert("you forgot me");
		  	document.querySelector('#tasks').innerHTML+= `You forgot me`
		  }
		  var tasks = document.querySelectorAll(".done");
		  for (var i = 0; i <tasks.length;  i++) {
		  	tasks[i].onclick= function(){
		  		if(this.parentElement.parentElement.querySelector("#btn").innerText == "Mark as done")
		  		{
		  		
		  		let message = this.parentElement.parentElement.querySelector("#message");
      			message.innerText = "Task Accomplished";
      			let btn = this.parentElement.parentElement.querySelector("#btn");

      			btn.innerHTML = "UnMark"
      		}
      		else
      		{
		  		let message = this.parentElement.parentElement.querySelector("#message");
      			message.innerText = "";
      			let btn = this.parentElement.parentElement.querySelector("#btn");

      			btn.innerHTML = "Mark as done"
      		}
		  	}
		  }


}
}
























