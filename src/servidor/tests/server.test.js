// Importamos la función a probar
import { insertarMediciones, mostrarMediciones } from "../src/server.js";

// Creamos un mock del módulo de base de datos
jest.mock("../config/conexion.js", () => ({
    __esModule: true,
    default: {
        run: jest.fn(),
        get: jest.fn(),
    },
}));

import db from "../config/conexion.js";

describe("Funciones de base de datos", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

  // --- Test insertarMediciones ---
    test("insertarMediciones debería ejecutar un INSERT con los datos correctos", () => {
    const datos = { Co2: 500, Fecha: "2025-10-17" };
    insertarMediciones(datos);

    expect(db.run).toHaveBeenCalledTimes(1);
    expect(db.run).toHaveBeenCalledWith(
        "INSERT INTO Mediciones (Co2, Fecha) VALUES (?, ?)",
        [500, "2025-10-17"],
        expect.any(Function)
        );
    });

  // --- Test mostrarMediciones (sin error) ---
    test("mostrarMediciones debería devolver la última medición", (done) => {
    const fakeRow = { Co2: 400, Fecha: "2025-10-17" };

    db.get.mockImplementation((sql, callback) => {
        callback(null, fakeRow);
    });

    mostrarMediciones((err, row) => {
        expect(err).toBeNull();
        expect(row).toEqual(fakeRow);
        done();
        });
    });

  // --- Test mostrarMediciones (con error) ---
    test("mostrarMediciones debería manejar errores de la base de datos", (done) => {
    db.get.mockImplementation((sql, callback) => {
        callback(new Error("DB error"), null);
    });

    mostrarMediciones((err, row) => {
        expect(err).toBeInstanceOf(Error);
        expect(row).toBeNull();
        done();
        });
    });
});
