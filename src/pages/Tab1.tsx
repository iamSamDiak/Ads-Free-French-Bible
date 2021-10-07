import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import data from "./../data/bible.json";
import "utf8";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Table de matières</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {data.map((d, key) => {
          return (
            <IonItem key={key}>
              <IonLabel>{d.livre}</IonLabel>
            </IonItem>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
