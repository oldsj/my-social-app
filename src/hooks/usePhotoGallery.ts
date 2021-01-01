import { useState, useEffect } from "react";
import { useCamera } from '@capacitor-community/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@capacitor-community/react-hooks/filesystem';
import { useStorage } from '@capacitor-community/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";


export function usePhotoGallery() {

    const { getPhoto } = useCamera();
  
    const takePhoto = async () => {
      const cameraPhoto = await getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
    };
  
    return {
      takePhoto
    };
  }
