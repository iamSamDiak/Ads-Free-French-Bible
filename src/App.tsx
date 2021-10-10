import { Redirect, Route, Link, useParams, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonPage,
  IonText,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import React, { useState, useEffect } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  const [state, setState] = useState(localStorage.getItem("path"));
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    setState(localStorage.getItem("path"));
  }, []);
  return(
  <IonApp>
    {
      !isLoaded ? (
        <IonPage>
          <IonContent>
            <IonText>Loading...</IonText>
          </IonContent>
        </IonPage>
      ) : (
          <IonReactRouter>
              <IonRouterOutlet>
                <Route exact path={["/", "/tab1"]}>
                  <Tab1 />
                </Route>
                <Route exact path="/tab2/:livreId" component = {Tab2} />
                <Route exact path="/tab3/:livreId/:livreDir/:key" component = {Tab3} />
              </IonRouterOutlet>
          </IonReactRouter>
      )
    }
    </IonApp>
  )
};

export default App;
