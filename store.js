import { proxy } from "valtio";

const state = proxy({ results: [],input:'',data:[],disabled:false,timer:10 });

export default state;
