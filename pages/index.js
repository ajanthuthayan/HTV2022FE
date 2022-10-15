import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  getUserInformation,
  addPrevOrFollowed,
  removePrevOrFollowed
} from "../utils/firebase.utils"
 
export default function Home() {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    localStorage.setItem('userId', user.uid);
  }
  const signOutUser = () => {
    localStorage.removeItem('userId')
  }
  const getUserInfo = async () => {
    const data = await getUserInformation();
    console.log(data)
  }

  const addFollowedUser = async () => {
    const uid = localStorage.getItem('userId');
    if(uid){
      await addPrevOrFollowed(uid, 'followedUsers', '123122312')
    }else{
      alert('sign in')
    }
  }
  
  const removeFollowedUser = async () => {
    const uid = localStorage.getItem('userId');
    if(uid){
      await removePrevOrFollowed(uid, 'followedUsers', '123122312')
    }else{
      alert('sign in')
    }
  }

  const addPreviouslyWatched = async () => {
    const uid = localStorage.getItem('userId');
    if(uid){
      await addPrevOrFollowed(uid, 'previouslyWatched', '12312312')
    }else{
      alert('sign in')
    }
  }

  const removePreviouslyWatched = async () => {
    const uid = localStorage.getItem('userId');
    if(uid){
      await removePrevOrFollowed(uid, 'previouslyWatched', '12312312')
    }else{
      alert('sign in')
    }
  }

  return (
    <div>
      <button onClick={logInGoogleUser}>
        Log in
      </button>
      <button onClick={signOutUser}>
        Sign out
      </button>
      <button onClick={getUserInfo}>
        Get user info
      </button>
      <button onClick={addFollowedUser}>
        Add followed user
      </button>
      <button onClick={removeFollowedUser}>
        Remove followed user
      </button>
      <button onClick={addPreviouslyWatched}>
        Add previously watched
      </button>
      <button onClick={removePreviouslyWatched}>
        Remove previously watched
      </button>
    </div>
  )
}
