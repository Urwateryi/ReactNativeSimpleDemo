package com.reactnativeseven;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Description:
 * <p>
 * Author: yi.zhang
 * Time: 2018/4/8 0008
 */
public class MyModule extends ReactContextBaseJavaModule {
    private final String TAG = MyModule.class.getName();

    public MyModule(ReactApplicationContext reactContext) {
        super(reactContext);

        //给上下文对象赋值
        Test.mContext = reactContext;
    }

    //不一定是类名，要和NativeModules.RNTest对应
    @Override
    public String getName() {
        return "MyModule";
    }

    //发送事件的方式
    //通过注解  表示可以被RN侧调用
    @ReactMethod
    public void callNativeBySend(){
        //调用Test类中的原生方法。
        Log.e("wangfang","called send");
        new Test().fun();
    }

    //callback方式
    @ReactMethod
    public void callNativeByCallBack(String msg, Callback successCallback){
        Log.e("wfunny","called by callback");
        String result = "callback 处理结果：" +msg;
        successCallback.invoke(result);
    }

    //Promise方式
    @ReactMethod
    public void callNativeByPromise(String msg, Promise promise){
        Log.e("wfunny","called by promise");

        // 1.处理业务逻辑...
        String result = "处理结果：" + msg;
        // 2.回调RN,即将处理结果返回给RN
        promise.resolve(result);
    }
}