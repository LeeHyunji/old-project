package com.example.hyunji.application_listener;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.example.hyunji.application_listener.R;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button bt = (Button)this.findViewById(R.id.button2);
        //   ButtonClickListener btnListener = new ButtonClickListener();

        //anonymous class 익명클래스
        /*
        View.OnClickListener btnListener = new View.OnClickListener(){
            public void onClick(View v) {
                Toast.makeText(MainActivity.this.getApplicationContext(), "aaaa", Toast.LENGTH_LONG).show();
            }
        };

        bt.setOnClickListener(btnListener);
*/
        //anonymous inner class
        // Button bt = (Button)this.findViewById(R.id.button2);
        bt. setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Toast.makeText(MainActivity.this.getApplicationContext(), "aaaa", Toast.LENGTH_LONG).show();
            }
        });
    }
    public void onButtonClick(View v){
        Toast.makeText(getApplicationContext(),"aaaa",Toast.LENGTH_LONG).show();
        Button btn = (Button)findViewById(R.id.button2);
        btn.setText("bbbb"); // 버튼의 text button2dptj bbbb로 바꾸겠다.
    }

/*
    class ButtonClickListener implements View.OnClickListener{
        public void onClick(View v){
            Toast.makeText(MainActivity.this.getApplicationContext(),"aaaa",Toast.LENGTH_LONG).show();

        }
    }
*/
}
