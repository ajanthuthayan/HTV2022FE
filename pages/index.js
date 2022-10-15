import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
} from "../utils/firebase.utils"
 
export default function Home() {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    localStorage.setItem('userId', user.uid);
  }
  

  return (
  <>
  </>
  )
}
