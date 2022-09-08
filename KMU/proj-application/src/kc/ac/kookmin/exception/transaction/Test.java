package kc.ac.kookmin.exception.transaction;
class Bank {
   private int balance = 1000;
   public void oneqTrade() {
	   try{
		   tradeWithA();
		   try{
			   tradeWithB();
			   try{
				   tradeWithC();
			   }
			   catch(Exception e){
				   System.out.println("거래중 에러 발생, 전체 취소"); 
				   cancelA();
				   cancelB();
				   cancelC();
			   }
		   } catch(Exception e){
			   System.out.println("거래중 에러 발생, 전체 취소"); 
		       cancelA();
			   cancelB();
		   }
	   }catch(Exception e){
		   System.out.println("거래중 에러 발생, 전체 취소"); 
	       cancelA();
	   }
      System.out.println("잔여 금액 : " + balance); // 에러 발생시 잔여금액은 처음 금액과 같게 하고 싶다.
   }
   
   public void tradeWithA () throws Exception {
      int m = 100; // A계좌에서 출금할 금액
         System.out.println("A 계좌에서 출금 - " + m);
         balance -= m;
   }
   public void tradeWithB() throws Exception {
      int m = 200;
         System.out.println("B 계좌에서 출금 - " + m);
         balance -= m; 
   }
   public void tradeWithC() throws Exception{
      int m = 300;
      System.out.println("C 계좌에서 출금 - " + m);
      balance -= m;
      Exception ex = new Exception(); 
      throw ex;
   }
        public void cancelA() {
      System.out.println("A 계좌 거래 취소  ");
      balance += 100;
   }
   public void cancelB() {
      System.out.println("B 계좌 거래 취소  ");
      balance += 200;
   }
   public void cancelC() {
      System.out.println("C 계좌 거래 취소  ");
      balance += 300;
   }
}

public class Test {
    public static void main(String args[]) {
       Bank b = new Bank();
       b.oneqTrade();
    }
} 