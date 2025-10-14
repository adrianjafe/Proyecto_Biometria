package com.example.jauregui.proyecto_biometria;

import android.database.sqlite.SQLiteOpenHelper;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import okhttp3.*;

public class EnvioDatos{

    private static final String URL_Server = "C:/3_GTI/CuatriA/Proyecto_Biometria/src/servidor/LogicaNegocio";

    public static void enviarDatos(String Datos , int co2){

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(new Date());
        OkHttpClient client = new OkHttpClient();

        // Crear el cuerpo JSON
        String json = "{"
                + "\"Co2\":\"" + co2 + "\","
                + "\"Fecha\":" + date
                + "}";

        RequestBody body = RequestBody.create(json, MediaType.get("application/json; charset=utf-8"));

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
