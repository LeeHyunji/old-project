package com.example.hyunji.intent_homework;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import java.io.File;

/*
    Extra -> Bundle(데이터묶음) 타입의 데이터의 한종류.
    Intent putExtra(String name, int value)
    Intent putExtra(String name, String value)
    Intent putExtra(String name, boolean value)

    // 리턴값을 돌려주는 액티비티를 호출하는 함수
    // requestCode : 어떤 액티비티에 대한 리턴인지 구분하기 위한 고유의 번호, 음수의 경우 리턴 안받음
    public void startActivityForResult(Intent intent, int requsetCode)
    // 누구에 대한 호출이 어떻게 처리되는지 알기위한 함수, 액티비티가 끝나면 호출됨
    // requestCode : 호출할 때 전달한 요청코드
    // resultCode : 액티비티의 실행결과
    proteced void onActivityResult(int requestCode, int resultCode, Intent data)

 */
public class MainActivity extends Activity {
    TextView mText;
    final static int ACT_EDIT = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mText = (TextView)findViewById(R.id.text);
        Button btnEdit = (Button)findViewById(R.id.edit);

        btnEdit.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ActEdit.class);
                intent.putExtra("TextIn", mText.getText().toString()); //인텐트에 데이터 심어 보내기
                startActivityForResult(intent, ACT_EDIT);
            }
        });

        findViewById(R.id.web).setOnClickListener(mClickListener);
        findViewById(R.id.dial).setOnClickListener(mClickListener);
        findViewById(R.id.picture).setOnClickListener(mClickListener);

    }

    Button.OnClickListener mClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent intent;
            switch(v.getId()) {
                case R.id.web :
                    intent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://google.com"));
                    startActivity(intent);
                    break;
                case R.id.dial :
                    intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:123-2345-6666"));
                    startActivity(intent);
                    break;
                case R.id.picture:
                    intent = new Intent(Intent.ACTION_VIEW);
                    Uri uri = Uri.fromFile(new File("/sdcard/test.jpg"));
                    intent.setDataAndType(uri, "image/jpeg");
                    startActivity(intent);
                    break;
            }
        }
    };
    
    public void onActivityResult (int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case ACT_EDIT:
                if(resultCode == RESULT_OK) {
                    mText.setText(data.getStringExtra("TextOut"));
                } else if(resultCode == RESULT_CANCELED) {
                    Toast.makeText(MainActivity.this.getApplicationContext(), "취소했어요", Toast.LENGTH_LONG).show();
                }
                break;
        }
    }

}