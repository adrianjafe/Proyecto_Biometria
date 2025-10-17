package com.example.jauregui.proyecto_biometria;

import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Date;

public class PrepararDatos{

    //-----------------------------------------------------------//
    //                          jsonTransform                    //
    //      Descripción: Recibe los datos y devuelve un json     //
    //-----------------------------------------------------------//
    public JSONObject jsonTransform(int co2) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = sdf.format(new Date());
            JSONObject json = new JSONObject();
            json.put("Co2", co2);
            json.put("Fecha", date);
            return json;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    //-----------------------------------------------------------------------------//
    //                     procesarDatos                                           //
    //      Descripción: Recibe la trama, procesa la trama y devuelve el valor     //
    //-----------------------------------------------------------------------------//
    public int procesarDatos(TramaIBeacon tib){
        //Procesar trama minor
        byte[] minor = tib.getMinor();
        int co2 = ((minor[0] & 0xFF) << 8) | (minor[1] & 0xFF);
        return co2;
    }
}
