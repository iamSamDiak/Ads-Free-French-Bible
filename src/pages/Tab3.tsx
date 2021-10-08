import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExploreContainer from '../components/ExploreContainer';
import { useParams, useLocation } from 'react-router';
import data from "./../data/bible.json";
import './Tab3.css';

const Tab3  = () => {
  let { livreId, livreDir, livreChap } : any = useParams();
  let Bible = data[livreId - 1]; 
  const [state, setState] = useState("");

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
          <IonTitle>{Bible.livre} - Chapitre { livreChap.replace( /^\D+/gm, '').replace(".txt", "") }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText>{state}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
