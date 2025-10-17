import { jest } from "@jest/globals";

// --- 1️⃣ mockear módulo ANTES de importarlo ---
const db = {
    run: jest.fn(),
    get: jest.fn(),
};

jest.unstable_mockModule("../config/conexion.js", () => ({
    default: db,
}));

// --- 2️⃣ importar después del mock ---
const { insertarMediciones, mostrarMediciones } = await import("../LogicaNegocio.js");

// --- 3️⃣ definir tests ---
describe("Funciones de base de datos", () => {
    beforeEach(() => {
    jest.clearAllMocks();
    });

    test("insertarMediciones debería ejecutar un INSERT con los datos correctos", () => {
    const datos = { Co2: 500, Fecha: "2025-10-17" };
    insertarMediciones(datos);

    expect(db.run).toHaveBeenCalledWith(
        "INSERT INTO Mediciones (Co2, Fecha) VALUES (?, ?)",
        [500, "2025-10-17"],
        expect.any(Function)
    );
    });

    test("mostrarMediciones debería devolver la última medición", async () => {
    const fakeRow = { Co2: 400, Fecha: "2025-10-17" };

    db.get.mockImplementation((sql, callback) => {
        callback(null, fakeRow);
    });

    // usamos promesa en lugar de done()
    await new Promise((resolve) => {
        mostrarMediciones((err, row) => {
        expect(err).toBeNull();
        expect(row).toEqual(fakeRow);
        resolve();
        });
    });
    });
});
