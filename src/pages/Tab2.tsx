import { IonContent, IonHeader, IonPage, IonCol, IonRow, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { BrowserRouter as Router, 
  Redirect, 
  Route, 
} from 'react-router-dom';
import data from "./../data/bible.json";
import { useParams, useLocation } from 'react-router';
import './Tab2.css';

const Tab2 = () => {

  let { livreId } : any = useParams();
  let Bible = data[livreId - 1]; 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{Bible.livre}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonContent>
      <IonRow>
        {Bible.chapitres.map((d, key) => {
        return (
          <IonCol size="3">
          <IonItem className="chapFormat" href={`/tab3/${livreId}/${livreId}-${Bible.livre}/${Bible.chapitres[key]}`} key={key}>
            <IonLabel>{key+1}</IonLabel>
          </IonItem>
          </IonCol>
        );
        })}
      </IonRow>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
