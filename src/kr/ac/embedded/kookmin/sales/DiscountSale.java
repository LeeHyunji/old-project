package kr.ac.embedded.kookmin.sales;

/**
 * Class for a sale of one item with discount expressed as a percent of the
 * price, but no other adjustments. Class invariant: The price is always
 * nonnegative; the name is a nonempty string; the discount is always
 * nonnegative.
 */

public class DiscountSale extends Sale {
	private double	discount;	// A percent of the price. Cannot be negative.
								
	public DiscountSale() {
		discount = 0;
		
	}
	
	/**
	 * Precondition: theName is a nonempty string; thePrice is nonnegative;
	 * theDiscount is expressed as a percent of the price and is nonnegative.
	 */
	public DiscountSale(String theName, double thePrice, double theDiscount) {
		/** 援ы쁽 �븯�떆�삤 **/ 
		setName(theName);
		setPrice(thePrice);
		setDiscount(theDiscount);
	}
	
	public DiscountSale(DiscountSale originalObject) {
		/** 援ы쁽 �븯�떆�삤 **/ 
		if (originalObject == null) {
			System.out.println("Error: null Sale object.");
			System.exit(0);
		}
	}
	
	public static void announcement() {
		System.out.println("This is the DiscountSale class.");
	}
	
	public double bill() {
		/** 援ы쁽 �븯�떆�삤 **/
		return getPrice()*(100-discount)*0.01;
		
	}
	
	public double getDiscount() {
		/** 援ы쁽 �븯�떆�삤 **/ 
		return discount;
	}
	
	/**
	 * Precondition: Discount is nonnegative.
	 */
	public void setDiscount(double newDiscount) {
		/** 援ы쁽 �븯�떆�삤 **/ 
		if (newDiscount >= 0)
			discount = newDiscount;
		else {
			System.out.println("Error: Negative price.");
			System.exit(0);
		}
	}
	
	public String toString() {
		return (getName() + " Price = $" + getPrice() + " Discount = " + discount + "%\n" + "   Total cost = $" + bill());
	}
	
	public boolean equals(Object otherObject) {
		/** 援ы쁽 �븯�떆�삤 **/ 
		if (otherObject == null)
			return false;
		else if (getClass() != otherObject.getClass())
			return false;
		else {
			DiscountSale otherSale = (DiscountSale) otherObject;
		return (bill() == otherSale.getPrice());
			
		}
	}
	
	
	public DiscountSale clone() {
		/** 援ы쁽 �븯�떆�삤....  �엫�떆�깮�꽦�옄 �궗�슜 **/ 
		return new DiscountSale(this);
	
	}
}
