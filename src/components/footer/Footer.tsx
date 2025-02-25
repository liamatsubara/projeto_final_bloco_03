import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
            <div className="w-full flex justify-center bg-slate-900 text-white">
                <div className="container flex flex-col items-center py-4 gap-0.5">
                    <p className='text-lg'>
                            Farmácia Generation | Copyright: {data}
                    </p>
                    <p className='text-base'>Acesse nossas redes sociais</p>
                    <div className='flex gap-3'>
                        <a href="https://www.linkedin.com/school/generationbrasil/posts/?feedView=all" target='_blank'>
                            <LinkedinLogo size={36} weight='thin' />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target='_blank'>
                            <InstagramLogo size={36} weight='thin' />
                        </a>
                        <a href="https://www.facebook.com/generationbrasil/" target='_blank'>
                            <FacebookLogo size={36} weight='thin' />
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Footer