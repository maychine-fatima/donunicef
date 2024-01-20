import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
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
import { heartOutline } from "ionicons/icons";
// import { useWeb3 } from "../../services/web3Context";
// import { ethers } from "ethers"; // Add this import statement

const OrganizationsPage: React.FC = () => {
//   const { active, account, provider } = useWeb3();
  const [listOrganizations, setListOrganizations] = useState([]);

  const handleFetchListOrganizations = async () => {
    const data = await fetchDataOrganizations();
    setListOrganizations(data);
  };

  const handleSendTransaction = async () => {
    // if (!active || !provider) {
    //   console.error("Web3 not active or provider not available");
    //   return;
    // }

    // try {
    //   // Example: Sending a transaction
    //   const tx = await provider.getSigner().sendTransaction({
    //     to: "0xRecipientAddress", // Replace with the recipient address
    //     value: ethers.utils.parseEther("0.1"), // Replace with the amount in Ether
    //   });

    //   console.log("Transaction sent:", tx);
    // } catch (error) {
    //   console.error("Error sending transaction:");
    // }
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
                      {item.country} {item.city ? `/ ${item.city}` : ""}
                    </IonCardSubtitle>
                    {item.description}
                  </IonCardContent>
                  <IonRow className="footer-card">
                    <IonCol>
                      <IonButton
                        onClick={handleSendTransaction}
                        // disabled={!active || !account}
                      >
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
