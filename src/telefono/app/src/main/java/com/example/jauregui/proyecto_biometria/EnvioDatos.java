package com.example.jauregui.proyecto_biometria;

import android.database.sqlite.SQLiteOpenHelper;

import org.json.JSONObject;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import okhttp3.*;

public class EnvioDatos{

    private static final String URL_Server = "localhost:3000/mediciones";

    public static void enviarDatos(int co2){
        OkHttpClient client = new OkHttpClient();

        JSONObject json = new PrepararDatos().jsonTransform(co2);

        RequestBody body = RequestBody.create(json.toString(), MediaType.get("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(URL_Server)
                .post(body)
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                e.printStackTrace();
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    System.out.println("Respuesta del servidor: " + response.body().string());
                }
            }
        });
    }
}
