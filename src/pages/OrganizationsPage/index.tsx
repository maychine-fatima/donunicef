import React, { useEffect, useState } from "react";
import {
    IonButton,
    IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { fetchDataOrganizations } from "../../services/dataService";
import { Page } from "./styles";
import { heart, heartOutline } from "ionicons/icons";

const OrganizationsPage: React.FC = () => {
  const [listOrganizations, setListOrganizations] = useState([]);

  const handleFetchListOrganizations = async () => {
    const data = await fetchDataOrganizations();
    setListOrganizations(data);
  };
  useEffect(() => {
    handleFetchListOrganizations();
  }, []);

  return (
    <Page>
      <IonHeader>
        <IonToolbar className="header">
          <IonTitle>Unicef Organizations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar className="header">
            <IonTitle size="large">Organizations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {listOrganizations.map((item: any, index) => (
              <IonCol key={index} size="4" sizeLg="4" sizeMd="6" sizeSm="12">
                <IonCard>
                  <IonCardHeader>
                    <IonImg src={item.defaultImage}></IonImg>
                    <IonCardTitle>{item.name}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardSubtitle>
                      {item.country}  {item.city ? `/ ${item.city}` : ''}
                    </IonCardSubtitle>
                    {item.description}
                  </IonCardContent>
                  <IonRow className="footer-card">
                        <IonCol>
                        <IonButton>
                        <IonIcon aria-hidden="true" icon={heartOutline} />
                            donate
                        </IonButton>
                        </IonCol>
                    </IonRow>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </Page>
  );
};

export default OrganizationsPage;
