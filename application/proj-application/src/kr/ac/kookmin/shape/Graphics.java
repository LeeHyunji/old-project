package kr.ac.kookmin.shape;

public class Graphics {
	public void draw(Shape s) {
		System.out.print(s + "'s bounds is ");
		System.out.println("width : " + s.getBounds().getWidth() + ", height : " + s.getBounds().getHeight());
		System.out.println("Center is " + s.getCenter().getX() + ", " + s.getCenter().getY());
	}
}
