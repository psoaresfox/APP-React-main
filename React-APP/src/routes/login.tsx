import { InputText } from 'primereact/inputtext';

export default function Login() {
    return (
            <div className="bg-[#f7f7f8] h-screen w-screen flex justify-center items-center">
                <div id="login" className="bg-white w-[40%] h-[60%] rounded-lg shadow-lg flex flex-col justify-around items-center">
                    <div className=' h-[50%] space-y-4 flex flex-col justify-center items-center'>
                        <span className='p-float-label flex flex-row mb-3'>
                            <InputText className='border-[2px] border-black rounded-md' type='email' id="email"/>
                            <label htmlFor="email" className='transition-all ml-1 duration-200'>Email</label>
                        </span>
                        <span className='p-float-label flex flex-row'>
                            <InputText className='border-[2px] border-black rounded-md' type='password' id="senha"/>
                            <label htmlFor="senha" className='transition-all ml-1 duration-200'>senha</label>
                        </span>
                        <span className='space-x-2 self-start'>
                            <input type="checkbox" name="lembrar" id="lembrar"/>
                            <label htmlFor="lembrar" className='text-sm'>lembrar-me</label>                        
                        </span>
                    </div>
                    <button className='bg-red-200 w-[34%] mb-[50%]'>
                        Login
                    </button>
                </div>
            </div>
    )
}