package com.example.hyunji.intent_homework;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

/*
    저장된 Extra값을 꺼내는 함수
    name은 중복되지 않는한에서 자유롭게 붙일 수 있음
    int getIntExtra(String name, int defaultValue)
    String getStringExtra(String name)
    boolean getBooleanExtra(String name, booelan defaultValue)

    // 결과를 리턴하기위한 함수
    public final void setResult(int resultCode, Intent data)
 */

public class ActEdit extends Activity {
    EditText mEdit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_act_edit);

        mEdit = (EditText)findViewById(R.id.stredit);

        Intent intent = getIntent(); //전달된 인텐트
        mEdit.setText(intent.getStringExtra("TextIn")); //인텐트 내용물 get

        Button btnOK = (Button)findViewById(R.id.ok);
        btnOK.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.putExtra("TextOut", mEdit.getText().toString());
                setResult(RESULT_OK, intent);
                finish();
            }
        });

        Button btnCancel = (Button)findViewById(R.id.cancel);
        btnCancel.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                setResult(RESULT_CANCELED);
                finish();
            }
        });
    }

}
