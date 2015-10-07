package kr.ac.embedded.kookmin.callback;

public class CallbackTest implements OnMaxNumberCb {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CallbackTest callTest = new CallbackTest();
		Sum total = new Sum();
			
		total.setMaxNumber(50);
		total.setOnMaxNumberCb(callTest);
		
		for ( int i=1; i<=11; i++) {
			total.addNumber(i);
		}
		
		System.out.println("Total is" + total.getTotal());
	}

	@Override
	public void onMaxNumber(int number, int exceed) {
		// TODO Auto-generated method stub
		// 援ы쁽�븯�떆�삤 //
		System.out.println("Currnet sum is " + number + " and exceeds "+exceed);
	}
	

}
