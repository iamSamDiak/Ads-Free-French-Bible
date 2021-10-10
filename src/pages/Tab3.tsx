import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams, useLocation, useHistory } from 'react-router';
import data from "./../data/bible.json";
import './Tab3.css';
import Tabs from "./Tabs"

let slideOpts = {};

const Tab3  = () => {
  let { livreId, livreDir, key } : any = useParams();
  let Bible = data[livreId - 1]; 
  const [state, setState] = useState("");
  const [len, setLen] = useState(0);
  let history = useHistory();
  let location = useLocation();
  const goToPreviousPath = () => {
    history.push(`/tab2/${livreId}/`)
  }

  useEffect(() => {
    localStorage.setItem("path", location.pathname);
    const url = `/livres/${livreDir}/${Bible.chapitres[key-1]}`;
    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const text = await response.text();
          console.log(response);
          setState(text);
          setLen(Bible.chapitres.length);
      } catch (error) {
          console.log("error", error);
      }
    };

    fetchData();

    if (key > 1){
      slideOpts = {
        initialSlide: 1
      };
    }

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonRow>
          <IonCol onClick={goToPreviousPath} style={{ paddingLeft : "15px", fontWeight : "800" }} size="0">
            &#8678;
          </IonCol>
          <IonCol>
            <IonTitle>{Bible.livre} - Chapitre { key }</IonTitle>
          </IonCol>
        </IonRow>    
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides
          onIonSlidePrevStart={()=>{if (key != 1) window.location.href = `/tab3/${livreId}/${livreDir}/${key-1}`}}
          onIonSlideReachEnd={()=>{if (key != len) window.location.href = `/tab3/${livreId}/${livreDir}/${key-(-1)}`}}
          options={slideOpts}
        >
          {key != 1 ? (
            <IonSlide></IonSlide>
          ) : (
            null
          )}
          
          <IonSlide className="textFormat">
            {state}
          </IonSlide>

          {key != len ? (
            <IonSlide></IonSlide>
          ) : (
            null
          )}
          
        </IonSlides>
      </IonContent>
      <Tabs/>
    </IonPage>
  );
};

export default Tab3; 
