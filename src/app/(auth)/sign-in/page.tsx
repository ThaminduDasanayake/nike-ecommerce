import { signIn } from '@/lib/auth/actions';
import { AuthForm } from '@/components';

export default function Page() {
  return <AuthForm mode="sign-in" onSubmitAction={signIn} />;
}
