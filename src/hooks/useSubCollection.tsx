import { useEffect, useState } from 'react'
import { collection, query, onSnapshot, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    image: string;
    email: string;
    displayName: string;
  }
}

const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const channelId = useAppSelector(state => state.channel.channelId)
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(db, collectionName, String(channelId), subCollectionName);
    const collectionRefOrder = query(collectionRef, orderBy("timestamp", "asc"));

    onSnapshot(collectionRefOrder, (snapshot) => {
      let result: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        })
      })
      setSubDocuments(result)
    })
  }, [channelId]);
  
  return { subDocuments };
}

export default useSubCollection
