import * as baseService from "./base";

let url = "/api/mentees";

//id = mentees userid
//data is { method: , body:{} , header: }

async function menteesAll() {
  return await baseService.get(url);
}

async function menteesOne(id) {
  return await baseService.get(`${url}/${id}`);
}

async function menteesCreate(data) {
  return await baseService.post(`${url} /create`, data); //data.body = firstname, lastname, email, password
}

async function menteesUpdate(id, data) {
  return await baseService.put(`${url} /${id}`, data); // data.body = bio, location
}

async function menteesDestroy(id) {
  return await baseService.destroy(`${url} /${id}`);
}
async function menteesSkills(id) {
  return await baseService.get(`${url} /${id}`);
}
export {
  menteesAll,
  menteesOne,
  menteesInsert,
  menteesCreate,
  menteesDestroy,
  menteesSkills
};
