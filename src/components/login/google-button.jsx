import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase"; // firebase componentında export ettiğimiz auth ve provider ı import ettik.
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/feed");
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="bg-white text-black flex flex-items-center justify-center py-2 px-10 rounded-full hover:bg-gray-200 whitespace-nowrap gap-x-3 transition cursor-pointer"
    >
      <img src="/google-logo.png" alt="google-logo" className="h-[20px]" />
      <span>Google ile Griş Yap</span>
    </button>
  );
};

export default GoogleButton;
