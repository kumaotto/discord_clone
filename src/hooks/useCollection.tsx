import { useEffect, useState } from 'react'
import { collection, query, onSnapshot, DocumentData, Query } from 'firebase/firestore';
import { db } from '../firebase';

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (queryShapshot) => {
      const collectionsResult: Channels[] = [];
      queryShapshot.docs.forEach((doc) => {
        collectionsResult.push({
          id: doc.id,
          channel: doc.data(),
        })
      });
      setDocuments(collectionsResult)
    });
  }, []);
  
  return { documents };
}

export default useCollection