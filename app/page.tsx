import Image from 'next/image'
import Link from 'next/link'
import { LINKS } from '../constants/links'

export default function Home() {
  return (
    <main className='flex flex-col justify-center w-screen '>
        <figure className='relative w-40 h-40 mx-auto mt-8 overflow-hidden border-4 rounded-full border-amber-600'>
            <Image src={"https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/319505052_467497698877351_2997400700333308_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=nGaVpWB9Pm8AX-rkZ7m&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCNyoJkkfVb7WmdoZp9HuE6o8xNanz4Akb4itIzQhcmiQ&oe=647F8598&_nc_sid=640168"} fill alt="me"/> 
        </figure>
        <h1 className='my-8 text-3xl font-bold text-center'><Link href="http://jkbro.dev">jkbro.dev</Link></h1>
        <section id="links" className="flex flex-col justify-center w-full gap-3 mx-auto md:w-1/2">
            {LINKS.map((link) => <Link href={link.url} key={link.name} className='p-4 font-bold text-center no-underline transition-all rounded-2xl bg-amber-600 hover:bg-amber-500 hover:scale-[101%]'>{link.name}</Link>)}
        </section>
    </main>
  )
}
