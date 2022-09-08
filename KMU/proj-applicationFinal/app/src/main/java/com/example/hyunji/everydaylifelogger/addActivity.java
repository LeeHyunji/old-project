package com.example.hyunji.everydaylifelogger;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.Context;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class addActivity extends Activity {

    TextView logView;
    
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add);

        Button bt_cancle = (Button) findViewById(R.id.bt_cancle);
        Button bt_store = (Button)findViewById(R.id.bt_store);
        final EditText et_title = (EditText)findViewById(R.id.et_title);

        final EditText et_context = (EditText)findViewById(R.id.et_context);
        
       // final TextView et_lat = (EditText)findViewById(R.id.et_lat);

        Button bt_gps = (Button)findViewById(R.id.bt_gps);
        Button bt_date = (Button)findViewById(R.id.bt_date);
        final TextView tv_date = (TextView)findViewById(R.id.tv_date);


        Button bt_tlrtk = (Button)findViewById(R.id.bt_tlrtk);
        Button bt_rydbr = (Button)findViewById(R.id.bt_rydbr);
        Button bt_ansghk = (Button)findViewById(R.id.bt_ansghk);
        Button bt_epdlxm = (Button)findViewById(R.id.bt_epdlxm);
        Button bt_dugod = (Button)findViewById(R.id.bt_dugod);
        Button bt_rlxk = (Button)findViewById(R.id.bt_rlxk);

        final String date[] = new String[6];
        final String[] menu = new String[1];
        final String[] gps = new String[0];

        bt_tlrtk.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                Toast.makeText(getApplicationContext(), "데이트를 선택하셨습니다.", Toast.LENGTH_SHORT).show();
                menu[0] = "식사";

            }});
        bt_rydbr.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                menu[0]="교육";

            }});
        bt_ansghk.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                menu[0]="문화";

            }});
        bt_epdlxm.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                menu[0]="데이트";
            }});
        bt_dugod.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                menu[0]="여행";

            }});
        bt_rlxk.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                menu[0]="기타";
            }});


        bt_store.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                Intent intent = new Intent();
                intent.putExtra("Tilte",et_title.getText().toString());
                intent.putExtra("Context",et_context.getText().toString());
                intent.putExtra("Year",date[0]);
                intent.putExtra("Month", date[1]);
                intent.putExtra("Day",date[2]);
                intent.putExtra("Menu",menu[0]);
                intent.putExtra("GPS",gps[0]);
                setResult(RESULT_OK, intent);
                finish();
            }
        });

        bt_date.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v) {
                DatePickerDialog dialog = new DatePickerDialog(addActivity.this, new DatePickerDialog.OnDateSetListener() {

                    public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                        tv_date.setText(year + "년 " + (monthOfYear + 1) + "월 " + dayOfMonth + "일");
                        date[0] = Integer.toString(year);
                        date[1] = Integer.toString(monthOfYear + 1);
                        date[2] = Integer.toString(dayOfMonth);

                    }
                }, 2015, 11, 19);
                dialog.show();
            }
        });



        bt_cancle.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                setResult(RESULT_CANCELED);
                finish();
            }
        });

        bt_gps.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                Log.d("Main", "onCreate");

                logView = (TextView)findViewById(R.id.tv_gps);
                logView.setText("GPS 가 잡혀야 좌표가 구해짐");

                // Acquire a reference to the system Location Manager
                LocationManager locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

                // GPS 프로바이더 사용가능여부
                boolean isGPSEnabled = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER);
                // 네트워크 프로바이더 사용가능여부
                boolean isNetworkEnabled = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER);

                Log.d("Main", "isGPSEnabled=" + isGPSEnabled);
                Log.d("Main", "isNetworkEnabled=" + isNetworkEnabled);

                LocationListener locationListener = new LocationListener() {
                    public void onLocationChanged(Location location) {
                        double lat = location.getLatitude();
                        double lng = location.getLongitude();

                        logView.setText("latitude: " + lat + ", longitude: " + lng);
                    }

                    public void onStatusChanged(String provider, int status, Bundle extras) {
                        logView.setText("onStatusChanged");
                    }

                    public void onProviderEnabled(String provider) {
                        logView.setText("onProviderEnabled");
                    }

                    public void onProviderDisabled(String provider) {
                        logView.setText("onProviderDisabled");
                    }
                };

                // Register the listener with the Location Manager to receive location updates
                locationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 0, 0, locationListener);
                locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, locationListener);

                // 수동으로 위치 구하기
                String locationProvider = LocationManager.GPS_PROVIDER;
                Location lastKnownLocation = locationManager.getLastKnownLocation(locationProvider);
                if (lastKnownLocation != null) {
                    double lng = lastKnownLocation.getLatitude();
                    double lat = lastKnownLocation.getLatitude();
                    Log.d("Main", "longtitude=" + lng + ", latitude=" + lat);
                    logView.setText("longtitude=" + lng + ", latitude=" + lat);
                    gps[0]=lng+","+lat;
                }
            }
        });
    }
}