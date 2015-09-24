package kr.ac.kookmin.shape;

public abstract class Shape {
	protected Point center;
	public Point getCenter(){
		return center;
	}
	abstract Rectangle getBounds();
	public void draw(Graphics g){
		g.draw(this);
	}

}
