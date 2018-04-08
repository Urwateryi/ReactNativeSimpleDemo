package com.reactnativeseven;

import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Description:
 * <p>
 * Author: yi.zhang
 * Time: 2018/4/8 0008
 * E-mail: yi.zhang@rato360.com
 */
public class RNTest extends ReactContextBaseJavaModule {

    private Context reactContext;

    public RNTest(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext= reactContext;
    }

    @Override
    public String getName() {
        return "RNTest";    // 不一定是类名，要和NativeModules.RNTest对应
    }

    // 自定义一个方法 处理消息
    // 通过注解  表示可以被RN侧调用
    @ReactMethod
    public void handleMsg(String msg){
        Toast.makeText(reactContext,msg,Toast.LENGTH_SHORT).show();
        // 自己创建一个普通的Activity
        Intent intent = new Intent(reactContext,NativeActivity.class);
        // 一定要加  否则报错
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }
}