package kr.ac.kookmin.shape;

public class Rectangle extends Shape{
	//Implement here
	private int h;
	private int w;
	public Rectangle(Point center, int w, int h){
		this.center=center;
		this.w=w;
		this.h=h;
	}
	public int getHeight(){
		return this.h;
	}
	public int getWidth(){
		return this.w;
	}
	public Rectangle getBounds() {
		return this;
	}
	@Override
	public void draw(Graphics g) {
		g.draw(this);
	}
	@Override
	public String toString() {
		return "Rectangle";
	}
}
