import { Navbar } from '../../components/Navbar';

export const NotFound = () => {
    return (
        <>
        <Navbar user={{ 'cd_foto_usuario': '1', 'nm_usuario': 'Usuário 1' }} />
        <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{fontSize: 70}}>Page Not Found</h1>
        </main>
        </>
    );
}