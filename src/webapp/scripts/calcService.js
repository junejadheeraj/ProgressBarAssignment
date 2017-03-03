app.service("calcService",function()
{
	this.compute = function(barValue,addValue)
	{
		this.barValue = barValue;
		this.addValue = addValue;
		if(this.barValue + this.addValue < 0)
	  {
		  this.barValue = 0;	 
	  }else
	  {
		  this.barValue = this.barValue + this.addValue;	 
		  if(this.barValue<=100)
			{
				this.myBarClass = "progress-bar-info";		 
			} else if(this.barValue>100)
			{
				this.myBarClass = "progress-bar-danger";		
			}
			
	  }  
		
	}
});