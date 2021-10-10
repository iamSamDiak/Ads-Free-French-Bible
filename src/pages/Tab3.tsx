import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonRow, IonCol } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams, useLocation, useHistory } from 'react-router';
import data from "./../data/bible.json";
import './Tab3.css';

export let LastChap = "";

const Tab3  = () => {
  let { livreId, livreDir, livreChap } : any = useParams();
  let Bible = data[livreId - 1]; 
  const [state, setState] = useState("");
  let history = useHistory();
  LastChap = useLocation().pathname;
  const goToPreviousPath = () => {
    history.goBack()
  }

  useEffect(() => {
    
    const url = `/livres/${livreDir}/${livreChap}`;
    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const text = await response.text();
          console.log(response);
          setState(text);
      } catch (error) {
          console.log("error", error);
      }
    };

    fetchData();

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
            <IonTitle>{Bible.livre} - Chapitre { livreChap.replace( /^\D+/gm, '').replace(".txt", "") }</IonTitle>
          </IonCol>
        </IonRow>    
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText className="textFormat">{state}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab3; 
