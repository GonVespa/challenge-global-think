"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const weatherService_1 = require("../services/weatherService");
function getWeather(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const cityName = req.params.cityName;
        try {
            const weatherData = yield (0, weatherService_1.getWeatherData)(cityName);
            res.json(weatherData);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener los datos del clima.' });
        }
    });
}
exports.getWeather = getWeather;
