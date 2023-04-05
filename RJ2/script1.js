function prev(){
	document.getElementById('slider-container1').scrollLeft -= 270;
	document.getElementById('slider-container2').scrollLeft -= 270;

}
function next()
{
	document.getElementById('slider-container1').scrollLeft += 270;
	document.getElementById('slider-container2').scrollLeft += 270;

}
$(".slide img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})





