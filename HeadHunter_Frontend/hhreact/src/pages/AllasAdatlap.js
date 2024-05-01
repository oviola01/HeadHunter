import React, { useEffect, useState } from "react";
import AllasAlap from "../components/allas/AllasAlap";
import VisszaLink from "../components/menu/VisszaLink";
import useAuthContext from "../contexts/AuthContext";
import AllasElvaras from "../components/allas/AllasElvaras";
import {
  postAllasJelentkezo,
  postAllaskerJelentkezes,
} from "../contexts/AllasContext";
import { useParams } from "react-router-dom";
import "../styles/AllasAdatlap.css";
import axios from "../api/axios";

export default function AllasAdatlap() {
  const { user, isAdmin, isHeadhunter, isJobseeker } = useAuthContext();
  const { allas_id } = useParams();
  const [config, setConfig] = useState("");

  
  useEffect(()=>{
    const fetchData = async () => {
    let token = "";

    await axios.get("/api/token").then((response) => {
      console.log(response);
      token = response.data;
    });

    console.log('------------TOKEN--------------')
    console.log(token);
  
    const config = {
      headers: {
        "X-CSRF-TOKEN": token,
      },
    };
    setConfig(config);    
  };

  fetchData();
}, []);

  

  const handleSeekerSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("config: ");
      console.log(config);
      await postAllaskerJelentkezes(allas_id, config);
      alert("Sikeres jelentkezés!");
    } catch (error) {
      console.error(error);
      alert("Hiba történt a jelentkezés során");
    }
  };

  const chooseSeeker = {};
  /*
  const handleOtherSubmit = async(e) => {
    e.preventDefault();
    try {
      await postAllasJelentkezo(allasId, seekerId);
      alert('Sikeres jelentkezés!');
    } catch (error) {
      console.error(error);
      alert('Hiba történt a jelentkezés során');
    }
  };
  
*/

  return (
    <>
      <div className="job-info">
        {console.log(allas_id)}
        <AllasAlap jobId={allas_id} />
        <AllasElvaras jobId={allas_id} />
        <div className="apply-buttons">
          {console.log(user)}
          {/*console.log(user.jogosultsag)*/}
          {/*console.log(isJobseeker())*/}
          {/*console.log(isAdmin())*/}
          {/*console.log(isHeadhunter())*/}
          {user && isJobseeker ? (
            <button type="submit" onClick={handleSeekerSubmit}>
              Jelentkezés
            </button>
          ) : user && (isAdmin() || isHeadhunter()) ? (
            <>
              {/**ide kell a legörülő */}
              <button type="submit" /*onSubmit={handleOtherSubmit}*/>
                Jelentkeztetés
              </button>
            </>
          ) : (
            <div className="login-or-reg">
              Tetszik ez az állás? Belépést követően tudsz jelentkezni rá!
            </div>
          )}
        </div>
        <div className="handling-buttons">
          {user && (isAdmin() || isHeadhunter()) && (
            <button>Szerkeszt</button>
          )}
          {user && isAdmin() && (<button>Töröl</button>)}
        </div>
        <VisszaLink />
      </div>
    </>
  );
}
