import { MagnifyingGlass, Medal, SoccerBall } from "phosphor-react"

export const Header = () => {
    return (
        <header className="max-w-[1124px] mx-auto">
            <nav className="">
                <ul className="flex justify-evenly text-white font-semibold text-2xl">
                    <li className="py-5 flex items-center justify-center gap-2">
                        <SoccerBall />
                        <a href="">
                            Meus bolões
                        </a>
                    </li>

                    <li className="py-5 flex items-center justify-center gap-2">
                        <Medal />
                        <a href="">
                            Ranking
                        </a>
                    </li>

                    <li className="py-5 flex items-center justify-center gap-2">
                        <MagnifyingGlass />
                        <a href="" className="">
                            Buscar bolão
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}