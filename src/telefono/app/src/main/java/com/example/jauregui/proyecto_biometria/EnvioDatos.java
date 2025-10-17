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
    //------------------------------------------------------------------------------//
    //                          EnviarDatos                                         //
    //      Descripción: Recibe los datos, los vuelve json y los envía a la API     //
    //------------------------------------------------------------------------------//
    private static final String URL_Server = "http://10.236.13.133:3000/mediciones"; //Cambiar ip del portatil

    public static void enviarDatos(int co2){
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
