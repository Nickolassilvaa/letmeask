import { useNavigate } from 'react-router-dom';

import ilustartionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../style/auth.scss';

export function Home() {
    const { user ,singInWithGoogle } = useAuth();

    const navigate = useNavigate();
    

    async function handleClick() {
        if(!user){
            await singInWithGoogle();
        }

        navigate("/rooms/new");
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={ilustartionImg} alt="ilustracao simbolizando perguntas e respostas " />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>

                <div className='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleClick} className='create-room'>
                        <img src={googleIconImg} alt="google icon" />
                        Crie sua sala com o Google
                    </button>

                    <div className='separator'>ou entre em uma sala</div>

                    <form>
                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}