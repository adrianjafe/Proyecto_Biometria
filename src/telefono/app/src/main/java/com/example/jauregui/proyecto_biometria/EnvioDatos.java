package com.example.jauregui.proyecto_biometria;

import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import org.json.JSONObject;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;

import okhttp3.*;

public class EnvioDatos{

    private static final String URL_Server = "http://192.168.1.79:3000/mediciones"; //Cambiar ip del portatil


    public static void enviarDatos(int co2){
        /*OkHttpClient client = new OkHttpClient();

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
        });*/
        try{
            URL url = new URL(URL_Server);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            conn.setDoOutput(true);
            Log.d(null,"Se ha enviado");
            try (OutputStream os = conn.getOutputStream()){
                JSONObject datos = new PrepararDatos().jsonTransform(co2);
                Log.d(null,"Json: "+datos);
                byte[] input = datos.toString().getBytes(StandardCharsets.UTF_8);
                Log.d(null,"El input: " + input);
                os.write(input, 0, input.length);
                os.flush();
            }

            //Recibimos la respuesta y desconectamos
            int code = conn.getResponseCode();
            System.out.println("Respuesta del servidor: " + code);
            conn.disconnect();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
