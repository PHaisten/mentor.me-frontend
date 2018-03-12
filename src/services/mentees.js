import * as service from "./base";

let url = "/api/mentees";

//id = mentees userid
//data is { method: , body:{} , header: }

async function menteesAll() {
  return await service.get(url);
}

async function menteesOne(id) {
  return await service.get(`${url}/${id}`);
}

async function menteesCreate(data) {
  return await service.post(`${url} /create`, data); //data.body = firstname, lastname, email, password
}

async function menteesUpdate(id, data) {
  return await service.put(`${url} /${id}`, data); // data.body = bio, location
}

async function menteesDestroy(id) {
  return await service.destroy(`${url} /${id}`);
}
async function menteesSkills(id) {
  return await service.get(`${url} /${id}`);
}
export {
  menteesAll,
  menteesOne,
  menteesInsert,
  menteesCreate,
  menteesDestroy,
  menteesSkills
};
