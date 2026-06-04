import { deleteObject, ref } from "firebase/storage";
import { storage } from ".";

// Firebase storage usl'inden dosya referansını alır ve siler
const deleteFromStorage = async (imageUrl) => {
  // 1) URL yoksa durdur
  if (!imageUrl) return null;

  try {
    // Firebase Dosya Url Formatı
    // https://firebasestorage.googleapis.com/v0/b/twitter-clone-d40c1.firebasestorage.app/o/[DOSYA_YOLU]?alt=media&token=6b02c73c-528c-45c4-9770-73bc376bc566

    // 2) URL'deki karakter kodlarını normale çevir
    const normalUrl = decodeURIComponent(imageUrl);

    // 3) url'den dosya yolunu çıkar
    const startIndex = normalUrl.indexOf("/o/") + 3;
    const endIndex = normalUrl.indexOf("?");
    const imagePath = normalUrl.substring(startIndex, endIndex);

    // 4) Silinecek dosyanın referansını al
    const fileRef = ref(storage, imagePath);

    // 5) dosyayı sil
    await deleteObject(fileRef);

    return true;
  } catch (error) {
    return false;
  }
};

export default deleteFromStorage;
