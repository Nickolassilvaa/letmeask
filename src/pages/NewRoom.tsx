import { Link } from 'react-router-dom';

import ilustartionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../style/auth.scss';
import { Button } from '../components/Button';
// import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
    // const { user } = useAuth();

    return (
        <div id='page-auth'>
            <aside>
                <img src={ilustartionImg} alt="ilustracao simbolizando perguntas e respostas " />
                <strong>Crie slas de q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sia audiência em tempo real</p>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input 
                            type="text" 
                            placeholder='Nome da sala'
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}