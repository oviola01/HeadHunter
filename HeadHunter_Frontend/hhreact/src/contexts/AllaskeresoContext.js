import axios from "../api/axios";

//allaskereso
export const getAllaskeresoAll = ()=>
    axios.get(`/api/jobseekers/all`);
    
export const getAllaskereso = (user_id)=>
    axios.get(`/api/jobseekers/${user_id}`);
    
export const postAllaskereso = (params)=>
    axios.post(`/api/jobseekers/new`, params);
    
export const putAllaskereso = (user_id, params)=>
    axios.put(`/api/jobseekers/modification/${user_id}`, params);
    
export const deleteAllaskereso = (user_id)=>
    axios.delete(`/api/jobseekers/delete/${user_id}`);
    
//allaskereso-ismeret
export const getAllaskerIsmeretAll = ()=>
    axios.get(`/api/jobseekers/skills`);
    
export const getAllaskerIsmeret = (user_id)=>
    axios.get(`/api/jobseekers/${user_id}/skills`);
    
export const postAllaskerIsmeret = (params)=>
    axios.post(`/api/jobseekers/skills/new`, params);
    
export const putAllaskerIsmeret = (user_id, params)=>
    axios.put(`/api/jobseekers/${user_id}/skills/modification`, params);
    
export const deleteAllaskerIsmeret = (user_id)=>
    axios.delete(`/api/jobseekers/${user_id}/skills/delete`);
    
//allaskereso-nyelvtudas
export const getAllaskerNyelvtudasAll = ()=>
    axios.get(`/api/jobseekers/languages`);
    
export const getAllaskerNyelvtudas = (user_id)=>
    axios.get(`/api/jobseekers/${user_id}/languages`);
    
export const postAllaskerNyelvtudas = (params)=>
    axios.post(`/api/jobseekers/languages/new`, params);
    
export const putAllaskerNyelvtudas = (user_id, params)=>
    axios.put(`/api/jobseekers/${user_id}/languages/modification`, params);
    
export const deleteAllaskerNyelvtudas = (user_id)=>
    axios.delete(`/api/jobseekers/${user_id}/languages/delete`);
    
//allaskereso-tanulmany
export const getAllaskerTanulmanyAll = ()=>
    axios.get(`/api/jobseekers/edu-atts`);
    
export const getAllaskerTanulmany = (user_id)=>
    axios.get(`/api/jobseekers/${user_id}/edu-atts`);
    
export const postAllaskerTanulmany = (params)=>
    axios.post(`/api/jobseekers/edu-atts/new`, params);
    
export const putAllaskerTanulmany = (user_id, params)=>
    axios.put(`/api/jobseekers/${user_id}/edu-atts/modification`, params);
    
export const deleteAllaskerTanulmany = (user_id)=>
    axios.delete(`/api/jobseekers/${user_id}/edu-atts/delete`);
    
//allaskereso-tapasztalat
export const getAllaskerTapasztalatAll = ()=>
    axios.get(`/api/jobseekers/exps`);
    
export const getAllaskerTapasztalat = (user_id)=>
    axios.get(`/api/jobseekers/${user_id}/exps`);
    
export const postAllaskerTapasztalat = (params)=>
    axios.post(`/api/jobseekers/exps/new`, params);
    
export const putAllaskerTapasztalat = (user_id, params)=>
    axios.put(`/api/jobseekers/${user_id}/exps/modification`, params);
    
export const deleteAllaskerTapasztalat = (user_id)=>
    axios.delete(`/api/jobseekers/${user_id}/exps/delete`);
    
//konkrét álláskereső összes jelentkezése:
export const getAllaskerJelentkezett = (user_id)=>
    axios.get(`/jobs/applicants/${user_id}`);