import { ReactNode } from "react"

interface PropsChildren {
    title: string,
    note: string
    children: ReactNode
};

const Card: React.FC<PropsChildren> = ({ title, note }) => {
    return (
        <section></section>
    )
}

export default Card;
