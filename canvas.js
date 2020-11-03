window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	canvas.height=(9/10)*window.innerHeight;
	canvas.width=(9/10)*window.innerWidth;

	let painting = false;

	function startPosition()
	{
		painting = true;
		draw(e);
	}
	function endPosition()
	{
		painting = false;
		ctx.beginPath();
	}

	function draw(e)
	{
		if(!painting) return;
		ctx.lineWidth= 10;
		ctx.lineCap = "round";
		ctx.lineTo(e.clientX,e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX,e.clientY);
	}


	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", endPosition);
	canvas.addEventListener("mousemove", draw);
	// canvas.addEventListener("")
	document.getElementById('b1').onclick = function () {
    var img = canvas.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');
}
});