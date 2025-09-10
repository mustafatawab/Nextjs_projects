import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Dictionary, Locale } from "@/types/types";
import { getUsers } from "@/actions/adminActions";
import { redirect } from "next/navigation";

interface AuthButtonProps {
  dictionary: Dictionary;
  locale : Locale
}

export const AuthButton = ({ dictionary, locale }: AuthButtonProps) => {
  const { isAuthenticated, isAdmin, signOutUser } = useAuth();
  console.log(isAuthenticated);
  const handleSignOut = async () => {
    await signOutUser();
  };

  // if(!isAuthenticated){
  //   redirect('/en/login')
  // }
  return (
    <>
      {isAuthenticated ? (
        <>
          <Link href={`/${locale}/dashboard`}>
            <Button>{dictionary.common.dashboard}</Button>
          </Link>
          <Button variant={"ghost"} onClick={handleSignOut}>
            {dictionary.common.logout}
          </Button>
        </>
      ) : (
        <>
          <Link href={`/${locale}/login`}>
            <Button variant="ghost">{dictionary.common.login}</Button>
          </Link>
          <Link href={`/${locale}/signup`}>
            <Button>{dictionary.common.signup}</Button>
          </Link>
        </>
      )}
    </>
  );
};
