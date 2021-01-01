import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import "./Camera.css";
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Camera: React.FC = () => {
  const { takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Camera</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonButton color='primary' onClick={takePhoto}>Take Photo</IonButton>
        {/* <IonButtons slot="end">
         </IonButtons> */}

      </IonContent>
    </IonPage>
  );
};

export default Camera;
