package com.example.jauregui.proyecto_biometria;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.ArrayList;




public class API extends SQLiteOpenHelper {

    private static final String DATABASE_NAME = "database.db";
    private static final int DATABASE_VERSION = 1;

    public static final String TABLE_NAME = "Mediciones";
    public static final String COLUMN_CO2 = "Co2";
    public static final String COLUMN_DATE = "Fecha";

    public API(Context context){
        super(context,DATABASE_NAME,null,DATABASE_VERSION);
    }

    public ArrayList<String> obtenerMediciones(){
        ArrayList<String> lista = new ArrayList<>();
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery("SELECT " + COLUMN_CO2 +
                ", " + COLUMN_DATE + " FROM " + TABLE_NAME,
                null );

        if (cursor.moveToFirst()){
            do{
                String co2 = cursor.getString(0);
                String date = cursor.getString(1);
                lista.add("Co2: " + co2 + "\nFecha: " + date);
            }while (cursor.moveToNext());
        }

        cursor.close();
        db.close();
        return lista;
    }

    public long insertarMediciones(int co2, String date){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues values = new ContentValues();
        values.put(COLUMN_CO2, co2);
        values.put(COLUMN_DATE, date);
        long id = db.insert(TABLE_NAME,null, values);
        db.close();
        return id;
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {}

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {}
}
