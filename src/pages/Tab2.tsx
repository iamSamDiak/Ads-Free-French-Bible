import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
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
  console.log(livreId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{Bible.livre}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonContent>
        {Bible.chapitres.map((d, key) => {
        return (
          <IonItem href={`/tab3/${livreId}/${livreId}-${Bible.livre}/${Bible.chapitres[key]}`} key={key}>
            <IonLabel>{key+1}</IonLabel>
          </IonItem>
        );
        })}
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
