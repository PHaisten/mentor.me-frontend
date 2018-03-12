import * as service from "./base";

let url = "/api/mentors";

//id = mentors userid
//data is { method: , body:{} , header: }

async function mentorsAll() {
  return await service.get(url);
}

async function mentorsOne(id) {
  return await service.get(`${url}/${id}`);
}

async function mentorsCreate(data) {
  return await service.post(`${url}/create`, data); //data.body = firstname, lastname, email, password
}

async function mentorsUpdate(id, data) {
  return await service.put(`${url}/${id}`, data); //data.body = bio, location, hourly, rate, qualifications
}

async function mentorsDestroy(id) {
  return await service.destroy(`${url}/${id}`);
}
async function mentorsSkills(id) {
  return await service.get(`${url}/${id}`);
}
export {
  mentorsAll,
  mentorsOne,
  mentorsCreate,
  mentorsUpdate,
  mentorsDestroy,
  mentorsSkills
};
