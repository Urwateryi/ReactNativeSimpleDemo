package com.reactnativeseven;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Description:
 * <p>
 * Author: yi.zhang
 * Time: 2018/4/8 0008
 */
public class Test {
    public static ReactContext mContext;
    public  void fun(){
        //在该方法中开启线程，并且延迟3秒，然后向JavaScript端发送事件。
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                //发送事件,事件名为EventName
                WritableMap et= Arguments.createMap();
                sendEvent(mContext,"EventName",et);
            }
        }).start();
    }
    //定义发送事件的函数
    public  void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params){
        System.out.println("reactContext="+reactContext);
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName,params);//原生调Rn
    }
}
