import { combineReducers } from "redux";
import layoutReducers from "./layout/reducer";
import datosClienteReducer from './datosCliente/reducer'
import emailClienteReducer from "./emailCliente/reducer";
import direccionInmuebleReducer from "./direccionInmueble/reducer";
import pisoInmuebleReducer from "./pisoInmueble/reducer";
import amenitiesReducer from "./amenitiesInmuebles/reducers";


const reducers = combineReducers({
    layoutReducers,
    datosClienteReducer,
    emailClienteReducer,
    direccionInmuebleReducer,
    pisoInmuebleReducer,
    amenitiesReducer
})

export default reducers