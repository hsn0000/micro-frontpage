import Reactl, {useState} from 'react'
import Link from 'next/link'

export default function Footer() {
    const [state, setstate] = useState(()=> (""))
    function submit() {
        window.open(`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`)
    }
    return (
        <footer className="container mx-auto">
            <div className="flex justify-between">
                <div className="w-1/6">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> Api Developer </a>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> Career </a>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> Our Story </a>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> New Soon </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="w-1/6">
                    <h6 className="text-white">Student</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> Get Scholarship </a>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> Our Pathskill </a>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> All Feature </a>
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#">
                                <a className="text-indigo-500 hover:text-teal-500 hover:underline"> Refund Policy </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            
                <div className="w-1/6">
                    <h6 className="text-white">Touch Us</h6>
                    <p className="mt-4 text-indigo-500 leading-loose">
                        Micro Center <br/>
                        Alleysy Block X No. 04 <br/>
                        Jakarta Selatan, Indonesia <br/>
                    </p>
                </div>

                <div className="w-2/6">
                    <h6 className="text-white">Promotions</h6>
                    <p className="mt-4 text-indigo-500">Submit your email for new updates</p>
                    <form onSubmit={submit}>
                    <input type="text" className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2 mt-6" 
                    onChange={(event) => setstate(event.target.value)} value={state} placeholder="Your Email Address"/>
                        <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"> Daftar Now </button>
                    </form>
                </div>
            </div>

            <div className="border-t pt-8 mt-8 border-gray-800 text-center copyright">
                <p className="text-indigo-500">2020 Copyright Micro by Husin with Partner. All Right Reserved</p>
            </div>
        </footer>
    )
}
