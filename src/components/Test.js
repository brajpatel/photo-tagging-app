import { db } from "../firebase_setup/firebase";
import { addDoc, collection } from "@firebase/firestore";

const handleSubmit = (testdata) => {
    const ref = collection(db, "test_data") // Firebase creates this automatically

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