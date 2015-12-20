package com.example.hyunji.everydaylifelogger;

import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    Button bt_add;
    final static int ACT_ADD = 0;

    SQLiteDatabase db;
    String dbName = "dataList.db"; // name of Database;
    String tableName = "dataListTable"; // name of Table;
    int dbMode = Context.MODE_PRIVATE;

    ArrayAdapter<String> musicAdapter;
    ArrayList<String> nameList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);



        db = openOrCreateDatabase(dbName, dbMode, null);

        createTable();

        bt_add = (Button)findViewById(R.id.bt_add);
        bt_add.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, addActivity.class); //intent 선언
               // intent.putExtra("TextIn", mText.getText().toString()); //인텐트에 데이터 심어 보내기
                startActivityForResult(intent, ACT_ADD);
            }
        });
    }
    public void onActivityResult (int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case ACT_ADD:
                if(resultCode == RESULT_OK) {
                    insertData("Year","Month","Day","Tilte","Menu","GPS","Context");
                    selectAll();
                } else if(resultCode == RESULT_CANCELED) {
                    Toast.makeText(MainActivity.this.getApplicationContext(), "취소했어요", Toast.LENGTH_LONG).show();
                }
                break;
        }
    }
    public void createTable() {
        try {
            String sql = "create table " + tableName + "(id integer primary key autoincrement, " +
                    "year text," + " month text," + " day text," + " title text," + "menu text," + "gps text" +
                    " context text);";
            db.execSQL(sql);

        } catch (android.database.sqlite.SQLiteException e) {
            Log.d("box", "error: " + e);
        }
    }
    public void insertData(String year, String month, String day, String title, String menu, String gps, String context) {
        String sql = "insert into " + tableName + " values(NULL, '" +
                year + "', '" + month + "', '" + day + "', '" +title+","+ menu + "', '" + gps +","+context+ "');";

        db.execSQL(sql);
    }
    public void selectAll() {
        String sql = "select * from " + tableName + ";";
        Cursor results = db.rawQuery(sql, null);

        results.moveToFirst();

        while (!results.isAfterLast()) {
            int id = results.getInt(0);
            String year = results.getString(1);
            String month = results.getString(2);
            String day = results.getString(3);
            String title = results.getString(4);
            String menu = results.getString(5);
            String gps = results.getString(6);
            String context = results.getString(7);
            //Toast.makeText(this, "index= " + id + " name=" + name, Toast.LENGTH_LONG).show();
            Log.d("lab_sqlite", "index= " + id + " name=" + title);

            nameList.add(year + "년 " + month + "월 " +day + "일");
            nameList.add(title);
            nameList.add(menu);
            nameList.add(gps);
            nameList.add(context);

            results.moveToNext();
        }
        results.close();
    }
}
