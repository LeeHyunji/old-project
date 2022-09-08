package kr.ac.kookmin.exception.fileio;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.PrintWriter;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 Makes numbered.txt the same as original.txt, but with each line numbered.
*/
public class AddLineNumber {
   public static void main(String[] args) throws IOException {
      // String path = AddLineNumber.class.getResource("").getPath();
       //System.out.println(path);
      
      try{
         BufferedReader inputStream = 
               new BufferedReader(new FileReader("C:/Users/Public/original.txt"));
         PrintWriter outputStream = 
               new PrintWriter(new FileOutputStream("C:/Users/Public/numbered.txt"));
         
         int i=0;
         while(true){
        	 String str = inputStream.readLine();
        	 if(str == null)
        		 break;
        	 i++;
        	 outputStream.println( i + " " +str);
         }
         
         inputStream.close( );
         outputStream.close( );
      }
      catch(Exception e) {
          e.printStackTrace();  
       }

   }
}
