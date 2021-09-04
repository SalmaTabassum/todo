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
		    <span id="message"></span>
                <span id="taskname">
                    ${document.querySelector('#input').value}
                    ${dateControl.value}
                </span>
                <button class="done" >mark as done</button>
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
		  		document.querySelector('#tasks').innerHTML+= `<div id="message$i"> task accomplished </div>`
		  		this.classList.toggle('completed');
		  		// this.ParentNode;
		  		// var x = document.getElementById("message");
		  		// x.hidden = false;

		  		let message = this.parentElement.parentElement.querySelector("#message");
      message.innerText = "Task Accomplished";
		  	}
		  }


}
}
























