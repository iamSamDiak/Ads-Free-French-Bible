import { IonContent, IonRow, IonCol, IonText, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tabs.css';
import React, { useState, useEffect } from 'react'
import data from "./../data/bible.json";
import { useParams } from 'react-router';
import "utf8";
import { queryAllByAltText } from '@testing-library/dom';

const Tabs: React.FC = () => {
	const [state, setState] = useState(localStorage.getItem("path"));
	useEffect(() => {
		setState(localStorage.getItem("path"));
	})
  return (
      <IonRow className="navigation-bottom">
        <IonCol onClick={()=>{window.location.href = '/tab1'}} >Accueil</IonCol>
        {
        	!state ? (
        		<IonCol style={{color:"#ccc"}} onClick={()=>{console.log("lecture")}} >Lecture en cours</IonCol>
        	) : (
        		<IonCol onClick={()=>{window.location.href = state}} >Lecture en cours</IonCol>
        	)
        }
        
      </IonRow>
  );
};

export default Tabs;