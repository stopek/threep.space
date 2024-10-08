import { thunkWithReject } from "./helpers";
import servicesApi from "../../services/api";

export const fetchWorks = thunkWithReject("api/fetchWorks", servicesApi.getWorks);
