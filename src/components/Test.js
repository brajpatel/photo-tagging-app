import { db } from "../firebase_setup/firebase";
import { addDoc, collection } from "@firebase/firestore";

const handleSubmit = (testdata) => {
    const ref = collection(db, "test_data") // Firebase creates this automatically
// PUSH TO GITHUB AND DELETE THIS BRUH
    let data = {
        testData: testdata
    }
    try {
        addDoc(ref, data)
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmit;