package kr.ac.embedded.kookmin.callback;

public class Sum  {

	private int number = 0;
	private int maxNumber = 0;
	private OnMaxNumberCb MyCallaback;

	
	public void setOnMaxNumberCb(OnMaxNumberCb callback) {
		MyCallaback = callback;
	}
	public void setMaxNumber (int max) {
		maxNumber = max;
	}
	
	public int addNumber (int adder) {
		number = number + adder;
		
		if ( MyCallaback != null ) {
			if ( number >= maxNumber ){
				MyCallaback.onMaxNumber(number, number-maxNumber);
			}
		}
		return number;
	}
	
	public int getTotal() {
		return number;
	}
	
}
