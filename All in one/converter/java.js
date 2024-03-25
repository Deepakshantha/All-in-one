function convert()
{
   let cmval = Number(document.getElementById("input").value)
   let inchval = cmval/2.54
   let result = document.getElementById("result")
   result.innerHTML = inchval
}