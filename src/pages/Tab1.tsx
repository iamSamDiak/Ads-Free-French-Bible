import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import data from "./../data/bible.json";
import { useParams } from 'react-router';
import "utf8";
import { queryAllByAltText } from '@testing-library/dom';



const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Table des matières</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {data.map((d, key) => {
          return (
            <IonItem href={`/tab2/${key+1}`} key={key}>
              <IonLabel>{d.livre}</IonLabel>
            </IonItem>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
