import axios from 'axios';

const root_path = 'https://hfbook.herokuapp.com//api';
// const root_path = 'http://localhost:4888/api';

export function add_good(good){
    var url = root_path + '/add_good';
    return axios.post(url, good);
}

export function get_all_goods(){
    var url = root_path + '/all_goods';
    return axios.get(url);
}

export function get_good_with_id(id){
    var url = root_path + '/good/' + id;
    return axios.get(url);
}
