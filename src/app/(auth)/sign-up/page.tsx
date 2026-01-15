import { AuthForm } from '@/components';
import { signUp } from '@/lib/auth/actions';

export default function Page() {
  return <AuthForm mode="sign-up" onSubmitAction={signUp} />;
}
