package com.reactnativeseven;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;

/**
 * Description:
 * <p>
 * Author: yi.zhang
 * Time: 2018/4/8 0008
 */
public class NativeActivity extends Activity {
    private Button btnGoReact;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btnGoReact = (Button) this.findViewById(R.id.btn_go_react);
        btnGoReact.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(NativeActivity.this, RnAndroidCommuActivity.class);
                intent.putExtra("result", "native go to react");
                startActivity(intent);
            }
        });
    }
}