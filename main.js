let height = Number(prompt("Enter your height (cm)"));
 
if(height>0 && height<=150){
      document.write("you are a dwarf");
	 }
else if(height>150 && height<=165){
     document.write("you are a average person");
}
else if(height>165 && height<=195){
     document.write("you are the tallest person");
}
else{
     document.write("you are an abnormal person");
}