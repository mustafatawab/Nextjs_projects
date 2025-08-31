import { getFirebaseAuth } from "./firebase/admin";

export async function makeUserAdmin(uid : string){
    const auth = await getFirebaseAuth()
    await auth.setCustomUserClaims(uid, { isAdmin: true });
     console.log(`User ${uid} is now an admin.`);

}


// const UID = "eite6T2TJVQdNJCuplrJED2tzcC3"
// makeUserAdmin(UID)