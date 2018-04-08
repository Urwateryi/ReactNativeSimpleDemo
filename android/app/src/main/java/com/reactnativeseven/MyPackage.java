package com.reactnativeseven;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Description:
 * <p> 包管理器继承ReactPackage
 * Author: yi.zhang
 * Time: 2018/4/8 0008
 * 该类的基本作用就是把继承ReactContextBaseJavaModule类的方法注册到JS里
 */
public class MyPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

        List<NativeModule> modules = new ArrayList<>();
        //把MyModule对象modules这个list上
        modules.add(new MyModule(reactContext));

        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}